/* =====================================================================
   MON SUPER QUIZ CM1 — Moteur du jeu
   Fonctionne sans serveur : ouvrir index.html suffit.
   Les données sont sauvegardées dans le LocalStorage du navigateur.
   ===================================================================== */
(function () {
  'use strict';

  /* ------------------------------------------------------------------
     1. OUTILS
     ------------------------------------------------------------------ */
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const rand = Math.random;
  function shuffle(arr, rng = rand) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rng() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  }
  function seededRng(seedStr) { // mulberry32
    let h = 1779033703 ^ seedStr.length;
    for (let i = 0; i < seedStr.length; i++) { h = Math.imul(h ^ seedStr.charCodeAt(i), 3432918353); h = (h << 13) | (h >>> 19); }
    let t = h >>> 0;
    return function () { t += 0x6D2B79F5; let r = Math.imul(t ^ (t >>> 15), 1 | t); r ^= r + Math.imul(r ^ (r >>> 7), 61 | r); return ((r ^ (r >>> 14)) >>> 0) / 4294967296; };
  }
  const pick = (arr) => arr[Math.floor(rand() * arr.length)];
  const todayKey = () => { const d = new Date(); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); };
  const fmtDate = (ts) => new Date(ts).toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' }) + ' ' + new Date(ts).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
  const fmtTime = (s) => Math.floor(s / 60) + ':' + String(Math.max(0, Math.floor(s % 60))).padStart(2, '0');
  const pct = (a, b) => (b ? Math.round((a / b) * 100) : 0);
  function normalize(s) {
    return String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
      .replace(/[’`]/g, "'").replace(/[.!?;:«»"]/g, '').replace(/\s+/g, ' ').trim()
      .replace(/^(le |la |les |l'|un |une |des |du |de la |au |aux |a |en )/, '').trim();
  }
  function parseNum(s) { const t = String(s).replace(/\s| /g, '').replace(',', '.'); if (!/^-?\d+(\.\d+)?$/.test(t)) return NaN; return parseFloat(t); }
  const fmtNum = (n) => (Number.isInteger(n) ? n.toLocaleString('fr-FR') : String(n).replace('.', ','));

  /* ------------------------------------------------------------------
     2. DONNÉES DU LIVRE (index des questions)
     ------------------------------------------------------------------ */
  // Un « livre » = une classe × un domaine (ex. CI × Mathématiques).
  const CLASSES = window.QUIZ_CLASSES;
  const DOMAINS = window.QUIZ_DOMAINS;
  const CLASS = (id) => CLASSES.find((c) => c.id === id);
  const DOMAIN = (id) => DOMAINS.find((d) => d.id === id);
  const SUBJECTS = [];            // tous les livres
  const ALL_Q = [];               // toutes les questions avec leur contexte
  const Q_BY_ID = {};
  const LESSON_BY_ID = {};
  const CHAPTER_BY_ID = {};
  const ORDER = (b) => CLASSES.findIndex((c) => c.id === b.classId) * 10 + DOMAINS.findIndex((d) => d.id === b.domainId);
  window.QB.books.slice().sort((a, b) => ORDER(a) - ORDER(b)).forEach((def) => {
    const d = DOMAIN(def.domainId); const k = CLASS(def.classId);
    const s = Object.assign({}, def, { id: def.classId + '-' + def.domainId, name: d.name, icon: d.ico, color: d.color, className: k.name });
    const pre = def.legacyIds ? '' : s.id + ':';
    SUBJECTS.push(s);
    s.chapters.forEach((c, ci) => {
      c.id = def.legacyIds ? c.id : pre + (c.id || 'c' + ci);
      CHAPTER_BY_ID[c.id] = { chapter: c, subject: s };
      c.lessons.forEach((l, li) => {
        l.id = def.legacyIds ? l.id : pre + (l.id || 'c' + ci + 'l' + li);
        LESSON_BY_ID[l.id] = { lesson: l, chapter: c, subject: s, index: li };
        l.questions.forEach((q, qi) => {
          q.id = l.id + '-' + qi;
          q.subjectId = s.id; q.classId = s.classId; q.domainId = s.domainId; q.chapterId = c.id; q.lessonId = l.id;
          q.lessonTitle = l.title; q.pages = l.pages;
          ALL_Q.push(q); Q_BY_ID[q.id] = q;
        });
      });
    });
  });
  const SUBJ = (id) => SUBJECTS.find((s) => s.id === id);
  const subjectQuestions = (sid) => ALL_Q.filter((q) => q.subjectId === sid);
  const classBooks = (cid) => SUBJECTS.filter((s) => s.classId === cid);
  const classQ = (cid) => ALL_Q.filter((q) => q.classId === cid);
  const bookOf = (cid, did) => SUBJECTS.find((s) => s.classId === cid && s.domainId === did);

  const TYPE_INFO = {
    qcm: { label: 'QCM', ico: '🔤', name: 'QCM' },
    vf: { label: 'Vrai ou faux', ico: '⚖️', name: 'Vrai ou faux' },
    multi: { label: 'Trouve les bonnes réponses', ico: '✅', name: 'Trouve la bonne réponse' },
    comp: { label: 'Complète la phrase', ico: '🧩', name: 'Complète la phrase' },
    trou: { label: 'Question à trous', ico: '✍️', name: 'Questions à trous' },
    rel: { label: 'Relie les éléments', ico: '🔗', name: 'Relie les éléments' },
    ord: { label: "Remets dans l'ordre", ico: '🔢', name: "Remets dans l'ordre" },
    calc: { label: 'Calcul rapide', ico: '🧮', name: 'Calcul rapide' }
  };
  const LEVELS = { 1: 'Débutant', 2: 'Intermédiaire', 3: 'Expert' };
  const MATCH_COLORS = ['#6d4aff', '#ff8a1f', '#12b5a5', '#ff5fa2', '#2f6fde', '#1fb45a', '#b45309'];

  /* ------------------------------------------------------------------
     3. SAUVEGARDE (LocalStorage)
     ------------------------------------------------------------------ */
  const STORE_KEY = 'superQuizCM1.v1';
  function defaultState() {
    return {
      name: '', points: 0, games: [], answered: 0, correct: 0,
      subj: {},            // subjectId -> {answered, correct}
      lessons: {},         // lessonId -> {plays, best, answered, correct}
      mastered: {},        // questionId -> true (déjà réussie au moins une fois)
      errors: {},          // questionId -> {count, last}
      badges: {},          // badgeId -> timestamp
      fiches: {},          // lessonId -> true (fiche lue)
      daily: {},           // date -> {quiz, chrono, calc}
      bestStreak: 0, bestChrono: 0, bestCalc: 0, errorsFixed: 0, bestExam: null,
      cls: null,           // classe choisie (ci, cp, ce1, ce2, cm1, cm2)
      settings: { sound: true, voice: true }
    };
  }
  let memoryFallback = null;
  function loadState() {
    try {
      const raw = localStorage.getItem(STORE_KEY);
      if (!raw) return defaultState();
      const st = Object.assign(defaultState(), JSON.parse(raw));
      st.settings = Object.assign({ sound: true, voice: true }, st.settings);
      // Ancienne version (CM1 seul) : Histoire/Géographie/Sciences → CM1 Découverte du monde
      ['histoire', 'geographie', 'ist'].forEach((k) => {
        const o = st.subj[k]; if (!o) return;
        const t = st.subj['cm1-dm'] || (st.subj['cm1-dm'] = { answered: 0, correct: 0 });
        t.answered += o.answered; t.correct += o.correct; delete st.subj[k];
        if (!st.cls) st.cls = 'cm1';
      });
      st.games.forEach((g) => { if (['histoire', 'geographie', 'ist'].includes(g.subjectId)) g.subjectId = 'cm1-dm'; });
      return st;
    } catch (e) { return memoryFallback || defaultState(); }
  }
  let S = loadState();
  function save() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(S)); } catch (e) { memoryFallback = S; }
  }

  /* ------------------------------------------------------------------
     4. NIVEAUX, ÉTOILES, BADGES
     ------------------------------------------------------------------ */
  const RANKS = [
    { min: 0, name: 'Apprenti', ico: '🐣' },
    { min: 200, name: 'Explorateur', ico: '🧭' },
    { min: 600, name: 'Savant', ico: '📚' },
    { min: 1200, name: 'Expert', ico: '🎓' },
    { min: 2500, name: 'Maître', ico: '🦉' },
    { min: 4000, name: 'Grand Champion', ico: '👑' }
  ];
  function rankOf(points) {
    let r = RANKS[0], next = null;
    for (let i = 0; i < RANKS.length; i++) { if (points >= RANKS[i].min) { r = RANKS[i]; next = RANKS[i + 1] || null; } }
    return { rank: r, next };
  }
  const starsFor = (p) => (p >= 90 ? 3 : p >= 70 ? 2 : p >= 50 ? 1 : 0);
  function starsHtml(n) { let h = ''; for (let i = 0; i < 3; i++) h += `<span class="${i < n ? '' : 'dim'}">⭐</span>`; return h; }

  function subjectRate(sid) { const st = S.subj[sid]; return st && st.answered ? pct(st.correct, st.answered) : null; }
  function subjectProgress(sid) {
    const qs = subjectQuestions(sid); const m = qs.filter((q) => S.mastered[q.id]).length;
    return pct(m, qs.length);
  }
  const BADGES = [
    { id: 'premier', ico: '🌱', name: 'Premier pas', desc: 'Terminer ta première partie', test: () => S.games.length >= 1 },
    { id: 'genie', ico: '🧠', name: 'Petit génie', desc: 'Faire un sans-faute (au moins 5 questions)', test: (g) => g && g.total >= 5 && g.correct === g.total },
    { id: 'maths', ico: '🔢', name: 'Champion des mathématiques', desc: '40 bonnes réponses en Mathématiques', test: () => domainCorrect('maths') >= 40 },
    { id: 'langue', ico: '👑', name: 'Roi de la grammaire', desc: '40 bonnes réponses en Langue et Communication', test: () => domainCorrect('lc') >= 40 },
    { id: 'planete', ico: '🌿', name: 'Ami de la planète', desc: '40 bonnes réponses en Éducation au Développement Durable', test: () => domainCorrect('edd') >= 40 },
    { id: 'monde', ico: '🌍', name: 'Explorateur du monde', desc: '40 bonnes réponses en Découverte du Monde', test: () => domainCorrect('dm') >= 40 },
    { id: 'calcul', ico: '🧮', name: 'As du calcul', desc: 'Au moins 8/10 en calcul rapide', test: (g) => g && g.mode === 'calc' && g.total >= 10 && g.correct >= 8 },
    { id: 'lecteur', ico: '📖', name: 'Super lecteur', desc: 'Lire 10 fiches « Je retiens »', test: () => Object.keys(S.fiches).length >= 10 },
    { id: 'serie', ico: '🔥', name: 'Série de feu', desc: '10 bonnes réponses de suite', test: () => S.bestStreak >= 10 },
    { id: 'eclair', ico: '⚡', name: 'Éclair', desc: '12 bonnes réponses en défi chrono', test: () => S.bestChrono >= 12 },
    { id: 'examen', ico: '📝', name: 'Reçu avec mention', desc: 'Obtenir au moins 16/20 à un examen', test: (g) => g && g.mode === 'exam' && g.note >= 16 },
    { id: 'perseverant', ico: '💪', name: 'Persévérant', desc: 'Jouer 20 parties', test: () => S.games.length >= 20 },
    { id: 'correcteur', ico: '🔁', name: 'Chasseur d\'erreurs', desc: 'Corriger 10 erreurs en révision', test: () => S.errorsFixed >= 10 },
    { id: 'quotidien', ico: '🎯', name: 'Défis relevés', desc: 'Réussir les 3 défis d\'un même jour', test: () => Object.values(S.daily).some((d) => d.quiz != null && d.chrono != null && d.calc != null) },
    { id: 'mille', ico: '💎', name: 'Mille points', desc: 'Atteindre 1 000 points', test: () => S.points >= 1000 },
    { id: 'champion', ico: '🏆', name: 'Champion de ma classe', desc: 'Réussir au moins une fois 70 % des questions de ta classe', test: () => S.cls && classQ(S.cls).length > 0 && pct(classQ(S.cls).filter((q) => S.mastered[q.id]).length, classQ(S.cls).length) >= 70 }
  ];
  function domainCorrect(did) { return Object.keys(S.subj).filter((k) => k.endsWith('-' + did)).reduce((a, k) => a + (S.subj[k].correct || 0), 0); }
  function checkBadges(game) {
    const fresh = [];
    BADGES.forEach((b) => {
      if (!S.badges[b.id] && b.test(game)) { S.badges[b.id] = Date.now(); fresh.push(b); }
    });
    if (fresh.length) { save(); fresh.forEach((b, i) => setTimeout(() => { toast(`${b.ico} Nouveau badge : <b>${esc(b.name)}</b> !`, 'badge-toast'); sfx('badge'); }, 400 + i * 900)); }
    return fresh;
  }

  /* ------------------------------------------------------------------
     5. SONS (WebAudio, aucun fichier externe)
     ------------------------------------------------------------------ */
  let audioCtx = null;
  function tone(freq, start, dur, type = 'sine', vol = 0.18) {
    const ctx = audioCtx; const o = ctx.createOscillator(); const g = ctx.createGain();
    o.type = type; o.frequency.value = freq; o.connect(g); g.connect(ctx.destination);
    const t = ctx.currentTime + start;
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.start(t); o.stop(t + dur + 0.05);
  }
  function sfx(kind) {
    if (!S.settings.sound) return;
    try {
      if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      if (audioCtx.state === 'suspended') audioCtx.resume();
      if (kind === 'good') { tone(660, 0, 0.12); tone(880, 0.1, 0.18); }
      else if (kind === 'bad') { tone(220, 0, 0.18, 'square', 0.08); tone(170, 0.15, 0.25, 'square', 0.08); }
      else if (kind === 'click') { tone(520, 0, 0.05, 'triangle', 0.08); }
      else if (kind === 'win') { [523, 659, 784, 1046].forEach((f, i) => tone(f, i * 0.12, 0.22)); }
      else if (kind === 'badge') { [784, 988, 1175, 1568].forEach((f, i) => tone(f, i * 0.09, 0.2, 'triangle')); }
      else if (kind === 'tick') { tone(1200, 0, 0.03, 'square', 0.04); }
    } catch (e) { /* son indisponible */ }
  }

  /* ------------------------------------------------------------------
     6. INTERFACE GÉNÉRALE
     ------------------------------------------------------------------ */
  let currentScreen = 'home';
  const dkey = () => todayKey() + '-' + (S.cls || '');
  const CLASS_SCREENS = ['subjects', 'exam-setup', 'random', 'calc-setup', 'chrono-setup', 'daily'];
  function show(id) {
    stopTimers();
    if (CLASS_SCREENS.includes(id) && !S.cls) { toast('Choisis d\'abord ta classe 👇'); id = 'home'; }
    if (CLASS_SCREENS.includes(id) && id !== 'subjects' && !classQ(S.cls).length) { toast(`Les quiz du ${CLASS(S.cls).name} sont en préparation. Choisis une autre classe.`); id = 'home'; }
    $$('.screen').forEach((s) => s.classList.remove('active'));
    const el = $('#scr-' + id); if (el) el.classList.add('active');
    currentScreen = id;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const renderers = { home: renderHome, subjects: renderSubjects, dashboard: renderDashboard, trophies: renderTrophies, 'exam-setup': renderExamSetup, random: renderRandom, 'calc-setup': renderCalcSetup, 'chrono-setup': renderChronoSetup, errors: renderErrors, daily: renderDaily };
    if (renderers[id]) renderers[id]();
  }
  function updateHeader() {
    $('#hdr-points').textContent = S.points.toLocaleString('fr-FR');
    const { rank } = rankOf(S.points);
    $('#hdr-level').textContent = rank.ico + ' ' + rank.name;
    const hc = $('#hdr-class'); if (hc) { hc.hidden = !S.cls; if (S.cls) { hc.textContent = '🎒 ' + CLASS(S.cls).name; } }
    $('#btn-sound').textContent = S.settings.sound ? '🔊' : '🔇';
    $('#btn-sound').classList.toggle('off', !S.settings.sound);
  }
  function toast(html, cls = '') {
    const t = document.createElement('div'); t.className = 'toast ' + cls; t.innerHTML = html;
    $('#toasts').appendChild(t); setTimeout(() => t.remove(), 3200);
  }
  function confetti(n = 80) {
    const box = $('#confetti'); const colors = ['#ffc83d', '#6d4aff', '#ff5fa2', '#12b5a5', '#ff8a1f', '#1fb45a'];
    for (let i = 0; i < n; i++) {
      const c = document.createElement('i');
      c.style.left = rand() * 100 + 'vw'; c.style.background = pick(colors);
      c.style.animationDuration = 1.8 + rand() * 1.8 + 's'; c.style.animationDelay = rand() * 0.6 + 's';
      c.style.transform = `rotate(${rand() * 360}deg)`;
      box.appendChild(c); setTimeout(() => c.remove(), 4500);
    }
  }
  function openModal(html) { $('#modal-body').innerHTML = html; $('#modal').hidden = false; const f = $('#modal .modal-close'); if (f) f.focus(); }
  function closeModal() { $('#modal').hidden = true; $('#modal-body').innerHTML = ''; }
  function confirmBox(title, text, okLabel, onOk) {
    openModal(`<h3 id="modal-title">${esc(title)}</h3><p>${text}</p>
      <div class="btn-row"><button class="btn red" id="cf-ok">${esc(okLabel)}</button><button class="btn ghost" id="cf-cancel">Annuler</button></div>`);
    $('#cf-ok').onclick = () => { closeModal(); onOk(); };
    $('#cf-cancel').onclick = closeModal;
  }
  function chipGroup(name, options, value) {
    return `<div class="chips" data-group="${name}">` + options.map((o) =>
      `<button type="button" class="chip ${String(o.value) === String(value) ? 'on' : ''}" data-value="${esc(o.value)}" ${o.disabled ? 'disabled' : ''}>${o.label}</button>`).join('') + '</div>';
  }
  function bindChips(root) {
    $$('.chips', root).forEach((g) => {
      g.addEventListener('click', (e) => {
        const b = e.target.closest('.chip'); if (!b || b.disabled) return;
        if (g.dataset.multi) { b.classList.toggle('on'); } else { $$('.chip', g).forEach((c) => c.classList.remove('on')); b.classList.add('on'); }
        sfx('click'); g.dispatchEvent(new CustomEvent('change'));
      });
    });
  }
  const chipVal = (root, name) => { const c = $(`.chips[data-group="${name}"] .chip.on`, root); return c ? c.dataset.value : null; };
  const chipVals = (root, name) => $$(`.chips[data-group="${name}"] .chip.on`, root).map((c) => c.dataset.value);

  /* ------------------------------------------------------------------
     7. ACCUEIL & MATIÈRES
     ------------------------------------------------------------------ */
  function renderHome() {
    $('#home-hello').textContent = S.name ? `Bonjour ${S.name} !` : 'Bonjour champion !';
    $('#class-grid').innerHTML = CLASSES.map((c) => {
      const books = classBooks(c.id); const nq = classQ(c.id).length;
      const prog = nq ? pct(classQ(c.id).filter((q) => S.mastered[q.id]).length, nq) : 0;
      return `<button class="class-card ${S.cls === c.id ? 'current' : ''}" data-class="${c.id}" style="--cc:${c.color}">
        <span class="class-ico">${c.ico}</span><span class="class-name">${c.name}</span><small>${esc(c.full)}</small>
        <span class="class-meta">${books.length ? `${books.length} / 4 domaines · ${nq} questions` : 'En préparation'}</span>
        ${nq ? `<span class="meter"><i style="width:${prog}%"></i></span>` : ''}
      </button>`;
    }).join('');
    $$('#class-grid [data-class]').forEach((b) => (b.onclick = () => { sfx('click'); openClass(b.dataset.class); }));
    updateHeader();
  }
  function openClass(cid) { S.cls = cid; save(); updateHeader(); show('subjects'); }
  function needClass(next) { // choisir une classe avant certains modes
    if (S.cls) return true;
    toast('Choisis d\'abord ta classe 👇'); show('home'); return false;
  }
  function renderSubjects() {
    if (!S.cls) { show('home'); return; }
    const k = CLASS(S.cls);
    $('#class-title').innerHTML = `${k.ico} Classe de ${k.name} <small>— choisis ton domaine</small>`;
    $('#subject-grid').innerHTML = DOMAINS.map((d) => {
      const s = bookOf(S.cls, d.id);
      if (!s) return `<article class="subject-card soon">
        <div class="subject-banner" style="background:linear-gradient(135deg, #b8b2c4, #8d86a0)"><span class="ico">${d.ico}</span><h3>${esc(d.name)}</h3></div>
        <div class="subject-info"><p style="font-weight:800;color:var(--ink-soft)">🛠️ Quiz en préparation : bientôt disponible !</p></div></article>`;
      const nq = subjectQuestions(s.id).length; const prog = subjectProgress(s.id); const rate = subjectRate(s.id);
      const nLessons = s.chapters.reduce((a, c) => a + c.lessons.length, 0);
      return `<article class="subject-card">
        <div class="subject-banner" style="background:linear-gradient(135deg, ${s.color}, ${shade(s.color)})">
          <span class="ico">${s.icon}</span><h3>${esc(s.name)}</h3>
        </div>
        <div class="subject-info">
          <div class="subject-stats">
            <span class="stat-chip">📚 ${s.chapters.length} chapitres</span>
            <span class="stat-chip">📄 ${nLessons} leçons</span>
            <span class="stat-chip">❓ ${nq} questions</span>
          </div>
          <div><div class="meter-label"><span>Ma progression</span><span>${prog} %</span></div><div class="meter"><i style="width:${prog}%"></i></div></div>
          <small style="color:var(--ink-soft);font-weight:700">${rate == null ? 'Pas encore joué' : 'Taux de réussite : ' + rate + ' %'}</small>
          <button class="btn" data-subject="${s.id}">▶ JOUER</button>
        </div></article>`;
    }).join('');
    $$('#subject-grid [data-subject]').forEach((b) => (b.onclick = () => openSubject(b.dataset.subject)));
  }
  function shade(hex) { // couleur plus sombre pour les dégradés
    const n = parseInt(hex.slice(1), 16); const f = (v) => Math.max(0, Math.floor(v * 0.72));
    return '#' + [f(n >> 16), f((n >> 8) & 255), f(n & 255)].map((v) => v.toString(16).padStart(2, '0')).join('');
  }
  let currentSubject = null;
  function openSubject(sid) {
    currentSubject = sid; const s = SUBJ(sid);
    $('#subject-title').innerHTML = `${s.icon} ${esc(s.name)} <small>· ${esc(s.className)}</small>`;
    let n = 0; let lastGroup = null;
    $('#subject-body').innerHTML = `<p class="book-src">📘 ${esc(s.source || s.title || '')}</p>` + s.chapters.map((c) => {
      const cq = ALL_Q.filter((q) => q.chapterId === c.id).length;
      const groupHead = c.group && c.group !== lastGroup ? `<h2 class="group-title">${esc(c.group)}</h2>` : '';
      lastGroup = c.group;
      return `${groupHead}<div class="chapter">
        <div class="chapter-head">
          <h3>${c.palier ? `<span class="palier">${esc(String(c.palier).match(/^\d+$/) ? 'Palier ' + c.palier : c.palier)}</span>` : ''}${esc(c.title)}</h3>
          <div class="chapter-actions">
            <button class="btn ghost" data-revise="${c.id}">📖 Réviser le chapitre</button>
            <button class="btn yellow" data-chapquiz="${c.id}">🎮 Quiz du chapitre (${cq})</button>
          </div>
        </div>
        <div class="lesson-list">${c.lessons.map((l) => {
          n++; const st = S.lessons[l.id];
          const stars = st ? starsFor(st.best) : 0;
          return `<button class="lesson-row" data-lesson="${l.id}">
            <span class="lesson-num" style="background:${s.color}">${n}</span>
            <span class="lesson-main"><b>${esc(l.title)}</b><small>Manuel p. ${esc(l.pages)} · ${l.questions.length} questions${st ? ' · Meilleur score ' + st.best + ' %' : ''}</small></span>
            <span class="lesson-stars">${starsHtml(stars)}</span>
          </button>`;
        }).join('')}</div></div>`;
    }).join('') + (s.missing && s.missing.length ? `<div class="info-box">ℹ️ ${s.missing.map(esc).join('<br>ℹ️ ')}</div>` : '');
    $$('#subject-body [data-lesson]').forEach((b) => (b.onclick = () => openLesson(b.dataset.lesson)));
    $$('#subject-body [data-revise]').forEach((b) => (b.onclick = () => openRevision(b.dataset.revise)));
    $$('#subject-body [data-chapquiz]').forEach((b) => (b.onclick = () => openChapterQuiz(b.dataset.chapquiz)));
    show('subject');
  }

  function retiensHtml(lesson) {
    if (!lesson.summary || !lesson.summary.length) return '';
    return `<div class="retiens"><h4>📌 Je retiens — manuel p. ${esc(lesson.pages)}</h4>${lesson.img ? `<img class="retiens-img" src="${esc(lesson.img)}" alt="">` : ''}<ul>${lesson.summary.map((t) => `<li>${esc(t)}</li>`).join('')}</ul></div>`;
  }
  function formatOptions(questions) {
    const counts = {}; questions.forEach((q) => (counts[q.type] = (counts[q.type] || 0) + 1));
    return [{ value: 'mix', label: '🎲 Mélange <small>(' + questions.length + ')</small>' }].concat(
      Object.keys(TYPE_INFO).map((t) => ({ value: t, label: `${TYPE_INFO[t].ico} ${TYPE_INFO[t].name} <small>(${counts[t] || 0})</small>`, disabled: !counts[t] })));
  }
  function filterQs(qs, level, format) {
    return qs.filter((q) => (level === 'all' || String(q.lv) === String(level)) && (format === 'mix' || q.type === format));
  }
  function startPanel(questions, title, onStart, extraTop = '') {
    return { html: `${extraTop}
      <span class="opt-label">Niveau</span>
      ${chipGroup('level', [{ value: 'all', label: '🌈 Tous (du facile au difficile)' }, { value: 1, label: '🐣 Débutant' }, { value: 2, label: '🦊 Intermédiaire' }, { value: 3, label: '🦁 Expert' }], 'all')}
      <span class="opt-label">Type de jeu</span>
      ${chipGroup('format', formatOptions(questions), 'mix')}
      <p id="sp-count" style="font-weight:800;color:var(--ink-soft)"></p>
      <div class="btn-row"><button class="btn green" id="sp-go">▶ Commencer</button></div>`,
      bind(root) {
        bindChips(root);
        const upd = () => {
          const qs = filterQs(questions, chipVal(root, 'level'), chipVal(root, 'format'));
          $('#sp-count', root).textContent = qs.length ? `${Math.min(qs.length, 15)} question(s) t'attendent.` : 'Aucune question pour ce choix : change le niveau ou le type de jeu.';
          $('#sp-go', root).disabled = !qs.length;
        };
        $$('.chips', root).forEach((g) => g.addEventListener('change', upd)); upd();
        $('#sp-go', root).onclick = () => {
          const level = chipVal(root, 'level'); const format = chipVal(root, 'format');
          let qs = filterQs(questions, level, format);
          qs = level === 'all' ? progressive(qs, 15) : shuffle(qs).slice(0, 15);
          closeModal(); onStart(qs, level, format);
        };
      } };
  }
  // Progression du facile vers le difficile
  function progressive(qs, max) {
    const chosen = shuffle(qs).slice(0, max);
    return chosen.sort((a, b) => a.lv - b.lv);
  }

  function openLesson(lid) {
    const { lesson, subject } = LESSON_BY_ID[lid];
    S.fiches[lid] = true; save(); checkBadges(null);
    const panel = startPanel(lesson.questions, lesson.title, (qs, level, format) => {
      startGame({ mode: 'lesson', title: lesson.title, subjectId: subject.id, lessonId: lid, questions: qs, replay: () => openLesson(lid) });
    }, retiensHtml(lesson));
    openModal(`<h3 id="modal-title">${subject.icon} ${esc(lesson.title)}</h3>${panel.html}`);
    panel.bind($('#modal-body'));
  }
  function openChapterQuiz(cid) {
    const { chapter, subject } = CHAPTER_BY_ID[cid];
    const qs = ALL_Q.filter((q) => q.chapterId === cid);
    const panel = startPanel(qs, chapter.title, (list) => {
      startGame({ mode: 'chapter', title: chapter.title, subjectId: subject.id, questions: list, replay: () => openChapterQuiz(cid) });
    }, `<p>Un quiz qui mélange toutes les leçons du chapitre.</p>`);
    openModal(`<h3 id="modal-title">🎮 ${esc(chapter.title)}</h3>${panel.html}`);
    panel.bind($('#modal-body'));
  }
  function openRevision(cid) {
    const { chapter, subject } = CHAPTER_BY_ID[cid];
    chapter.lessons.forEach((l) => (S.fiches[l.id] = true)); save(); checkBadges(null);
    $('#revision-title').innerHTML = `📖 Révision : ${esc(chapter.title)}`;
    $('#revision-back').onclick = () => openSubject(subject.id);
    $('#revision-body').innerHTML = chapter.lessons.map((l, i) => `<div class="panel"><h3>${i + 1}. ${esc(l.title)}</h3>${retiensHtml(l)}</div>`).join('') +
      `<div class="btn-row center"><button class="btn green" id="rev-go">🎮 Je m'entraîne sur ce chapitre</button><button class="btn ghost" id="rev-print">🖨️ Imprimer les fiches</button></div>`;
    $('#rev-go').onclick = () => openChapterQuiz(cid);
    $('#rev-print').onclick = () => window.print();
    show('revision');
  }

  /* ------------------------------------------------------------------
     8. MOTEUR DE PARTIE
     ------------------------------------------------------------------ */
  let G = null;                 // partie en cours
  let timers = { global: null, question: null, auto: null };
  function stopTimers() { clearInterval(timers.global); clearInterval(timers.question); clearTimeout(timers.auto); timers = { global: null, question: null, auto: null }; }

  // Prépare une question pour l'affichage (mélange des propositions)
  function prepare(q) {
    const p = Object.assign({}, q);
    if (q.type === 'qcm' || q.type === 'comp') p.options = shuffle([q.good].concat(q.bad));
    if (q.type === 'multi') p.options = shuffle(q.good.concat(q.bad));
    if (q.type === 'rel') {
      const rights = q.pairs.map((x) => x[1]);
      p.categoryMode = new Set(rights).size < rights.length;
      p.lefts = shuffle(q.pairs.map((x) => x[0]));
      p.rights = p.categoryMode ? Array.from(new Set(rights)) : shuffle(rights);
    }
    if (q.type === 'ord') { let s = shuffle(q.items); let k = 0; while (s.join('|') === q.items.join('|') && k++ < 10) s = shuffle(q.items); p.pool = s; }
    return p;
  }

  // Questions de calcul générées (entraînement, hors manuel)
  function genOperation(level) {
    const r = (a, b) => a + Math.floor(rand() * (b - a + 1));
    let a, b, op, ans;
    const small = S.cls === 'ci' || S.cls === 'cp';
    if (small || (S.cls === 'ce1' && level == 1)) { // petites classes : additions et soustractions simples
      const max = S.cls === 'ci' ? 10 : S.cls === 'cp' ? (level == 1 ? 20 : 50) : 100;
      if (rand() < 0.55) { a = r(0, Math.floor(max / 2)); b = r(0, max - a); ans = a + b; op = '+'; } else { a = r(1, max); b = r(0, a); ans = a - b; op = '-'; }
      return { type: 'calc', lv: Number(level) || 1, q: `${a} ${op} ${b} = ?`, ans, ex: `${a} ${op} ${b} = ${ans}.`, id: 'gen-' + Date.now() + '-' + Math.floor(rand() * 1e6), generated: true, subjectId: 'calcul', lessonTitle: 'Entraînement au calcul (hors manuel)' };
    }
    const kind = level == 1 ? pick(['+', '-']) : level == 2 ? pick(['+', '-', '×']) : pick(['×', '÷', '+', '-']);
    if (kind === '+') { a = level == 1 ? r(10, 99) : r(100, 999); b = level == 1 ? r(10, 99) : r(100, 999); ans = a + b; }
    if (kind === '-') { a = level == 1 ? r(20, 99) : r(200, 999); b = r(10, a - 1); ans = a - b; }
    if (kind === '×') { a = level == 3 ? r(12, 99) : r(2, 10); b = r(2, 10); ans = a * b; }
    if (kind === '÷') { b = r(2, 10); ans = r(2, 12); a = ans * b; }
    op = kind;
    return { type: 'calc', lv: Number(level) || 1, q: `${a} ${op} ${b} = ?`, ans, ex: `${a} ${op} ${b} = ${ans}.`, id: 'gen-' + Date.now() + '-' + Math.floor(rand() * 1e6), generated: true, subjectId: 'calcul', lessonTitle: 'Entraînement au calcul (hors manuel)' };
  }

  /*  config : { mode, title, subjectId?, lessonId?, questions[], timeLimit? (s, global),
                 perQuestion? (s), endless? (chrono), exam?, daily?, replay() }  */
  function startGame(cfg) {
    stopTimers();
    G = Object.assign({ idx: 0, score: 0, points: 0, streak: 0, bestStreak: 0, log: [], start: Date.now(), answered: false }, cfg, { cfg });
    G.queue = cfg.questions.map(prepare);
    if (!G.queue.length) { toast('Aucune question disponible pour ce choix.'); return; }
    $('#game-title').textContent = cfg.title;
    $('#game-points').textContent = '0';
    $('#game-streak').hidden = true;
    $('#game-timer').hidden = !cfg.timeLimit;
    $$('.screen').forEach((s) => s.classList.remove('active'));
    $('#scr-game').classList.add('active'); currentScreen = 'game';
    window.scrollTo({ top: 0 });
    if (cfg.timeLimit) {
      G.endAt = Date.now() + cfg.timeLimit * 1000;
      const tick = () => {
        const left = Math.max(0, (G.endAt - Date.now()) / 1000);
        $('#game-timer b').textContent = fmtTime(Math.ceil(left));
        $('#game-timer').style.background = left < 15 ? '#ffe0e0' : '';
        if (left <= 0) { stopTimers(); finishGame(true); }
      };
      tick(); timers.global = setInterval(tick, 250);
    }
    renderQuestion();
  }

  function progressUpdate() {
    if (G.endless) {
      $('#game-progress').style.width = Math.min(100, (1 - (G.endAt - Date.now()) / (G.timeLimit * 1000)) * 100) + '%';
      $('#game-progress-label').textContent = `Bonnes réponses : ${G.score}`;
    } else {
      $('#game-progress').style.width = pct(G.idx, G.queue.length) + '%';
      $('#game-progress-label').textContent = `Question ${G.idx + 1} / ${G.queue.length}`;
    }
  }

  // Une proposition peut être un texte ou une image : 'img:chemin|texte lu'
  function lbl(o) {
    const s = String(o);
    if (!s.startsWith('img:')) return esc(s);
    const [src, alt] = s.slice(4).split('|');
    return `<img class="opt-img" src="${esc(src)}" alt="${esc(alt || '')}">${alt ? `<span class="opt-cap">${esc(alt)}</span>` : ''}`;
  }
  const plain = (o) => { const s = String(o); return s.startsWith('img:') ? (s.split('|')[1] || 'image') : s; };
  // Lecture à voix haute (synthèse vocale du navigateur, hors ligne si disponible)
  const canSpeak = 'speechSynthesis' in window;
  function speak(text) {
    if (!canSpeak) return;
    try {
      speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text); u.lang = 'fr-FR'; u.rate = 0.9;
      const v = speechSynthesis.getVoices().find((x) => /^fr/i.test(x.lang)); if (v) u.voice = v;
      speechSynthesis.speak(u);
    } catch (e) { /* pas de voix */ }
  }
  function speakQuestion(q) {
    let t = q.type === 'comp' ? q.q.replace('___', '…') : q.q;
    if (q.type === 'qcm') t += '. ' + q.options.map(plain).join(' ; ');
    if (q.type === 'vf') t += '. Vrai ou faux ?';
    speak(t);
  }

  function renderQuestion() {
    G.answered = false;
    const q = G.queue[G.idx];
    const card = $('#question-card'); const fb = $('#feedback');
    fb.hidden = true; fb.innerHTML = '';
    progressUpdate();
    const ti = TYPE_INFO[q.type];
    let html = `<span class="q-type">${ti.ico} ${ti.label}</span><span class="q-level">${LEVELS[q.lv] || ''}</span>` +
      (canSpeak ? `<button class="speak-btn" id="btn-speak" title="Écouter la question" aria-label="Écouter la question">🔈 Écouter</button>` : '');
    if (q.type === 'comp') {
      html += `<p class="q-text">Complète la phrase avec le bon mot.</p>
        <div class="sentence">${esc(q.q).replace('___', '<span class="blank" id="blank">?</span>')}</div>
        <div class="word-bank">${q.options.map((o, i) => `<button class="word" data-i="${i}">${lbl(o)}</button>`).join('')}</div>`;
    } else {
      html += `<p class="q-text">${esc(q.q)}</p>`;
    }
    if (q.img) html += `<div class="q-img"><img src="${esc(q.img)}" alt="Image de l'exercice"></div>`;
    if (q.type === 'qcm') {
      html += `<div class="choices">${q.options.map((o, i) => `<button class="choice" data-i="${i}"><span class="key">${'ABCD'[i] || i + 1}</span><span class="opt">${lbl(o)}</span></button>`).join('')}</div>`;
    } else if (q.type === 'vf') {
      html += `<div class="vf-buttons"><button class="choice vf-btn vrai" data-v="true"><span class="key">✔</span>VRAI</button><button class="choice vf-btn faux" data-v="false"><span class="key">✘</span>FAUX</button></div>`;
    } else if (q.type === 'multi') {
      html += `<p class="q-hint">Plusieurs réponses sont possibles : sélectionne toutes les bonnes, puis valide.</p>
        <div class="choices">${q.options.map((o, i) => `<button class="choice" data-i="${i}" aria-pressed="false"><span class="key">☐</span><span class="opt">${lbl(o)}</span></button>`).join('')}</div>
        <div class="validate-row"><button class="btn" id="btn-validate" disabled>Valider ✔</button></div>`;
    } else if (q.type === 'trou' || q.type === 'calc') {
      if (G.perQuestion) html += `<div class="timer-bar"><i id="q-timer"></i></div>`;
      html += `<div class="input-row"><input class="answer-input" id="answer-input" autocomplete="off" autocapitalize="off" spellcheck="false" ${q.type === 'calc' ? 'inputmode="decimal" placeholder="Ta réponse (nombre)"' : 'placeholder="Écris ta réponse ici"'}>
        <button class="btn" id="btn-validate">Valider ✔</button></div>`;
    } else if (q.type === 'rel') {
      if (q.categoryMode) {
        html += `<p class="q-hint">Pour chaque élément, choisis la bonne case.</p><div class="cat-list">${q.lefts.map((l, i) =>
          `<div class="cat-row" data-i="${i}"><b>${lbl(l)}</b><div class="chips cat-options" data-group="cat${i}">${q.rights.map((r) => `<button class="chip" data-value="${esc(r)}">${lbl(r)}</button>`).join('')}</div></div>`).join('')}</div>`;
      } else {
        html += `<p class="q-hint">Touche un élément à gauche, puis l'élément qui va avec à droite.</p>
          <div class="match-grid"><div class="match-col" id="match-left">${q.lefts.map((l, i) => `<button class="match-item" data-side="L" data-i="${i}">${lbl(l)}</button>`).join('')}</div>
          <div class="match-col" id="match-right">${q.rights.map((r, i) => `<button class="match-item" data-side="R" data-i="${i}">${lbl(r)}</button>`).join('')}</div></div>`;
      }
      html += `<div class="validate-row"><button class="btn ghost" id="btn-reset">↺ Recommencer</button><button class="btn" id="btn-validate" disabled>Valider ✔</button></div>`;
    } else if (q.type === 'ord') {
      html += `<p class="q-hint">Touche les éléments dans le bon ordre. Touche un élément placé pour le retirer.</p>
        <div class="order-zone" id="order-zone"></div><div class="order-pool" id="order-pool">${q.pool.map((t, i) => `<button class="order-item" data-i="${i}">${lbl(t)}</button>`).join('')}</div>
        <div class="validate-row"><button class="btn" id="btn-validate" disabled>Valider ✔</button></div>`;
    }
    html += `<div class="q-origin">${q.generated ? '🧮 Opération d\'entraînement (hors manuel)' : `📘 ${esc(SUBJ(q.subjectId).className)} · ${esc(SUBJ(q.subjectId).name)} · ${esc(q.lessonTitle)} · manuel p. ${esc(q.pages)}`}</div>`;
    card.innerHTML = html;
    const sp = $('#btn-speak', card); if (sp) sp.onclick = () => speakQuestion(q);
    // Petites classes : la question est lue automatiquement
    if (S.settings.voice && (q.classId === 'ci' || q.classId === 'cp') && !G.exam && !G.endless) setTimeout(() => speakQuestion(q), 250);
    bindQuestion(q, card);
    card.classList.remove('pop'); void card.offsetWidth;
  }

  function bindQuestion(q, card) {
    const validate = $('#btn-validate', card);
    if (q.type === 'qcm') {
      $$('.choice', card).forEach((b) => (b.onclick = () => answer(q.options[+b.dataset.i], b)));
    } else if (q.type === 'vf') {
      $$('.choice', card).forEach((b) => (b.onclick = () => answer(b.dataset.v === 'true', b)));
    } else if (q.type === 'comp') {
      $$('.word', card).forEach((b) => (b.onclick = () => answer(q.options[+b.dataset.i], b)));
    } else if (q.type === 'multi') {
      $$('.choice', card).forEach((b) => (b.onclick = () => {
        if (G.answered) return; b.classList.toggle('selected'); const on = b.classList.contains('selected');
        b.setAttribute('aria-pressed', on); $('.key', b).textContent = on ? '☑' : '☐'; sfx('click');
        validate.disabled = !$$('.choice.selected', card).length;
      }));
      validate.onclick = () => answer($$('.choice.selected', card).map((b) => q.options[+b.dataset.i]));
    } else if (q.type === 'trou' || q.type === 'calc') {
      const inp = $('#answer-input', card);
      setTimeout(() => inp.focus(), 50);
      const go = () => { if (!inp.value.trim()) { inp.focus(); return; } answer(inp.value); };
      validate.onclick = go;
      inp.onkeydown = (e) => { if (e.key === 'Enter') { e.preventDefault(); go(); } };
      if (G.perQuestion) {
        const total = G.perQuestion * 1000; const start = Date.now(); const bar = $('#q-timer', card);
        timers.question = setInterval(() => {
          const left = total - (Date.now() - start);
          bar.style.width = Math.max(0, (left / total) * 100) + '%';
          if (left <= 0) { clearInterval(timers.question); if (!G.answered) answer(inp.value || '', null, true); }
        }, 100);
      }
    } else if (q.type === 'rel') {
      if (q.categoryMode) {
        bindChips(card);
        const upd = () => { validate.disabled = q.lefts.some((_, i) => !chipVal(card, 'cat' + i)); };
        $$('.chips', card).forEach((g) => g.addEventListener('change', upd));
        validate.onclick = () => answer(q.lefts.map((l, i) => [l, chipVal(card, 'cat' + i)]));
        $('#btn-reset', card).onclick = () => { $$('.chip', card).forEach((c) => c.classList.remove('on')); upd(); };
      } else {
        const links = {}; let active = null; // links: leftIndex -> rightIndex
        const paint = () => {
          $$('.match-item', card).forEach((b) => { b.classList.remove('active'); b.style.borderColor = ''; b.style.background = ''; const t = $('.tag', b); if (t) t.remove(); });
          Object.keys(links).forEach((li, k) => {
            const color = MATCH_COLORS[k % MATCH_COLORS.length];
            [$(`[data-side="L"][data-i="${li}"]`, card), $(`[data-side="R"][data-i="${links[li]}"]`, card)].forEach((b) => {
              b.style.borderColor = color; b.style.background = color + '18';
              const t = document.createElement('span'); t.className = 'tag'; t.style.background = color; t.textContent = k + 1; b.appendChild(t);
            });
          });
          if (active) $(`[data-side="${active.side}"][data-i="${active.i}"]`, card).classList.add('active');
          validate.disabled = Object.keys(links).length !== q.lefts.length;
        };
        $$('.match-item', card).forEach((b) => (b.onclick = () => {
          if (G.answered) return; sfx('click');
          const side = b.dataset.side; const i = b.dataset.i;
          // retirer un lien existant
          if (side === 'L' && links[i] != null && !active) { delete links[i]; paint(); return; }
          if (side === 'R') { const li = Object.keys(links).find((k) => links[k] === i); if (li != null && !active) { delete links[li]; paint(); return; } }
          if (!active || active.side === side) { active = { side, i }; paint(); return; }
          const li = side === 'L' ? i : active.i; const ri = side === 'R' ? i : active.i;
          Object.keys(links).forEach((k) => { if (links[k] === ri) delete links[k]; });
          links[li] = ri; active = null; paint();
        }));
        $('#btn-reset', card).onclick = () => { Object.keys(links).forEach((k) => delete links[k]); active = null; paint(); };
        validate.onclick = () => answer(q.lefts.map((l, i) => [l, q.rights[links[i]]]));
      }
    } else if (q.type === 'ord') {
      const zone = $('#order-zone', card); const pool = $('#order-pool', card);
      const upd = () => { validate.disabled = pool.children.length !== 0; };
      const move = (e) => {
        const b = e.target.closest('.order-item'); if (!b || G.answered) return; sfx('click');
        if (b.parentElement === pool) zone.appendChild(b); else pool.appendChild(b);
        upd();
      };
      zone.onclick = move; pool.onclick = move;
      validate.onclick = () => answer($$('.order-item', zone).map((b) => q.pool[+b.dataset.i]));
    }
  }

  function isCorrect(q, a) {
    switch (q.type) {
      case 'qcm': case 'comp': return a === q.good;
      case 'vf': return a === q.ans;
      case 'multi': return a.length === q.good.length && a.every((x) => q.good.includes(x));
      case 'trou': { const n = normalize(a); return q.ans.some((x) => normalize(x) === n); }
      case 'calc': { const v = parseNum(a); return !isNaN(v) && Math.abs(v - q.ans) < 1e-9; }
      case 'rel': return a.every(([l, r]) => q.pairs.some((p) => p[0] === l && p[1] === r));
      case 'ord': return a.join('|') === q.items.join('|');
    }
    return false;
  }
  function correctText(q) {
    switch (q.type) {
      case 'qcm': case 'comp': return plain(q.good);
      case 'vf': return q.ans ? 'VRAI' : 'FAUX';
      case 'multi': return q.good.map(plain).join(' · ');
      case 'trou': return q.ans[0];
      case 'calc': return fmtNum(q.ans);
      case 'rel': return q.pairs.map((p) => plain(p[0]) + ' → ' + plain(p[1])).join(' ; ');
      case 'ord': return q.items.map((t, i) => (i + 1) + '. ' + plain(t)).join('  ');
    }
    return '';
  }
  function answerText(q, a) {
    if (a == null || a === '' || (Array.isArray(a) && !a.length)) return '— (pas de réponse)';
    switch (q.type) {
      case 'vf': return a ? 'VRAI' : 'FAUX';
      case 'multi': return a.map(plain).join(' · ');
      case 'rel': return a.map((p) => plain(p[0]) + ' → ' + (p[1] ? plain(p[1]) : '?')).join(' ; ');
      case 'ord': return a.map((t, i) => (i + 1) + '. ' + plain(t)).join('  ');
      default: return plain(a);
    }
  }

  const GOOD_MSG = ['Bravo champion !', 'Excellent travail !', 'Super, continue !', 'Génial !', 'Tu progresses !', 'Quelle mémoire !', 'Parfait !'];
  const BAD_MSG = ['Encore un petit effort !', 'Ne baisse pas les bras !', 'Tu vas y arriver !', 'Courage, la prochaine sera la bonne !', 'On apprend de ses erreurs !'];

  function recordAnswer(q, ok) {
    if (q.generated) return;
    S.answered++; if (ok) S.correct++;
    const st = S.subj[q.subjectId] || (S.subj[q.subjectId] = { answered: 0, correct: 0 });
    st.answered++; if (ok) st.correct++;
    const ls = S.lessons[q.lessonId] || (S.lessons[q.lessonId] = { plays: 0, best: 0, answered: 0, correct: 0 });
    ls.answered++; if (ok) ls.correct++;
    if (ok) {
      S.mastered[q.id] = true;
      if (S.errors[q.id]) { if (G.mode === 'errors') { delete S.errors[q.id]; S.errorsFixed++; } }
    } else {
      const e = S.errors[q.id] || (S.errors[q.id] = { count: 0, last: 0 }); e.count++; e.last = Date.now();
    }
  }

  function answer(a, btn, timeout) {
    if (G.answered) return;
    G.answered = true; clearInterval(timers.question);
    const q = G.queue[G.idx]; const ok = isCorrect(q, a);
    G.log.push({ q, a, ok });
    recordAnswer(q, ok);
    let gained = 0, bonus = 0;
    if (ok) {
      G.score++; G.streak++; G.bestStreak = Math.max(G.bestStreak, G.streak);
      gained = 10; if (G.streak >= 5) bonus = 10; else if (G.streak >= 3) bonus = 5;
      G.points += gained + bonus;
    } else { G.streak = 0; }
    S.bestStreak = Math.max(S.bestStreak, G.bestStreak);
    save();

    // Mode examen : aucune correction avant la fin
    if (G.exam) { sfx('click'); nextQuestion(); return; }

    $('#game-points').textContent = G.points;
    $('#game-streak').hidden = G.streak < 2; $('#game-streak b').textContent = G.streak;
    sfx(ok ? 'good' : 'bad');
    paintCorrection(q, a, ok, btn);

    // Défi chrono : correction éclair puis question suivante
    if (G.endless) {
      timers.auto = setTimeout(nextQuestion, ok ? 450 : 1100);
      return;
    }
    const fb = $('#feedback');
    fb.className = 'feedback ' + (ok ? 'good' : 'bad');
    fb.innerHTML = `<div class="fb-ico">${ok ? '🎉' : '💡'}</div><div>
      <h4>${ok ? 'Bonne réponse !' : timeout ? 'Temps écoulé !' : 'Oups, ce n\'est pas ça.'}${ok ? `<span class="bonus">+${gained}${bonus ? ' +' + bonus + ' série 🔥' : ''}</span>` : ''}</h4>
      ${ok ? '' : `<p><b>La bonne réponse :</b> ${esc(correctText(q))}</p>`}
      <p>${esc(q.ex || '')}</p>
      <p class="encourage">${pick(ok ? GOOD_MSG : BAD_MSG)}</p>
      <button class="btn ${ok ? 'green' : ''}" id="btn-next">${G.idx + 1 < G.queue.length ? 'Question suivante ➜' : 'Voir mon score 🏁'}</button></div>`;
    fb.hidden = false;
    $('#btn-next').onclick = nextQuestion;
    setTimeout(() => { $('#btn-next') && $('#btn-next').focus({ preventScroll: true }); fb.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); }, 80);
  }

  function paintCorrection(q, a, ok, btn) {
    const card = $('#question-card');
    $$('button', card).forEach((b) => (b.disabled = true));
    if (q.type === 'qcm' || q.type === 'comp') {
      $$(q.type === 'qcm' ? '.choice' : '.word', card).forEach((b) => { if (q.options[+b.dataset.i] === q.good) b.classList.add('correct'); });
      if (!ok && btn) btn.classList.add('wrong');
      if (q.type === 'comp') { const bl = $('#blank'); bl.textContent = ok ? q.good : a; bl.classList.add(ok ? 'correct' : 'wrong'); }
    } else if (q.type === 'vf') {
      $$('.choice', card).forEach((b) => { if ((b.dataset.v === 'true') === q.ans) b.classList.add('correct'); });
      if (!ok && btn) btn.classList.add('wrong');
    } else if (q.type === 'multi') {
      $$('.choice', card).forEach((b) => {
        const o = q.options[+b.dataset.i]; const good = q.good.includes(o); const sel = b.classList.contains('selected');
        if (good) b.classList.add('correct'); else if (sel) b.classList.add('wrong');
      });
    } else if (q.type === 'trou' || q.type === 'calc') {
      const inp = $('#answer-input', card); inp.disabled = true; inp.classList.add(ok ? 'correct' : 'wrong');
    } else if (q.type === 'rel') {
      if (q.categoryMode) {
        $$('.cat-row', card).forEach((row) => {
          const l = q.lefts[+row.dataset.i]; const chosen = chipVal(row, 'cat' + row.dataset.i);
          const good = q.pairs.find((p) => p[0] === l)[1]; row.classList.add(chosen === good ? 'correct' : 'wrong');
          if (chosen !== good) { const s = document.createElement('small'); s.style.gridColumn = '1/-1'; s.innerHTML = `✔ <b>${esc(good)}</b>`; row.appendChild(s); }
        });
      } else {
        a.forEach(([l, r], i) => {
          const good = q.pairs.find((p) => p[0] === l)[1];
          const lb = $(`[data-side="L"][data-i="${q.lefts.indexOf(l)}"]`, card); lb.classList.add(good === r ? 'correct' : 'wrong');
        });
      }
    } else if (q.type === 'ord') {
      $$('#order-zone .order-item', card).forEach((b, i) => b.classList.add(q.pool[+b.dataset.i] === q.items[i] ? 'correct' : 'wrong'));
    }
  }

  function nextQuestion() {
    clearTimeout(timers.auto);
    if (!G) return;
    if (G.endless) {
      if (Date.now() >= G.endAt) return finishGame(true);
      G.idx++;
      if (G.idx >= G.queue.length) { G.queue = G.queue.concat(G.source().map(prepare)); }
      return renderQuestion();
    }
    G.idx++;
    if (G.idx >= G.queue.length) return finishGame(false);
    renderQuestion();
  }

  function quitGame() {
    if (!G) return show('home');
    confirmBox('Quitter la partie ?', 'Ta partie en cours ne sera pas enregistrée.', 'Oui, quitter', () => { stopTimers(); G = null; show('home'); });
  }

  /* ------------------------------------------------------------------
     9. FIN DE PARTIE & RÉSULTATS
     ------------------------------------------------------------------ */
  function finishGame(timeUp) {
    stopTimers();
    if (!G) return;
    const g = G;
    // En examen, les questions non traitées comptent comme fausses
    if (g.exam) { for (let i = g.log.length; i < g.queue.length; i++) { g.log.push({ q: g.queue[i], a: null, ok: false }); recordAnswer(g.queue[i], false); } }
    const total = g.endless ? g.log.length : g.queue.length;
    const correct = g.log.filter((x) => x.ok).length;
    const p = pct(correct, total);
    const stars = starsFor(p);
    let bonusDaily = 0;
    const entry = { ts: Date.now(), mode: g.mode, title: g.title, subjectId: g.subjectId || null, correct, total, points: g.points, stars, pct: p };
    if (g.exam) { entry.note = Math.round((correct / total) * 40) / 2; entry.duration = Math.round((Date.now() - g.start) / 1000); }
    if (g.lessonId && S.lessons[g.lessonId]) { const ls = S.lessons[g.lessonId]; ls.plays++; ls.best = Math.max(ls.best, p); }
    if (g.mode === 'chrono') S.bestChrono = Math.max(S.bestChrono, correct);
    if (g.mode === 'calc') S.bestCalc = Math.max(S.bestCalc, correct);
    if (g.exam && (S.bestExam == null || entry.note > S.bestExam)) S.bestExam = entry.note;
    if (g.daily) {
      const d = S.daily[dkey()] || (S.daily[dkey()] = {});
      if (d[g.daily] == null) { bonusDaily = 30; g.points += bonusDaily; entry.points = g.points; }
      d[g.daily] = Math.max(d[g.daily] || 0, correct);
    }
    S.points += g.points;
    S.games.unshift(entry); if (S.games.length > 300) S.games.length = 300;
    save();
    const fresh = checkBadges(entry);
    updateHeader();
    G = null;
    if (g.exam) return showExamResult(g, entry, fresh);
    showResult(g, entry, fresh, timeUp, bonusDaily);
  }

  function showResult(g, e, fresh, timeUp, bonusDaily) {
    const title = e.stars === 3 ? 'Extraordinaire !' : e.stars === 2 ? 'Très bien joué !' : e.stars === 1 ? 'Pas mal du tout !' : 'Continue tes efforts !';
    if (e.stars >= 2) { confetti(e.stars === 3 ? 120 : 60); sfx('win'); }
    const wrong = g.log.filter((x) => !x.ok);
    $('#result-body').innerHTML = `
      <div class="print-only"><h2>Mon Super Quiz CM1 — Résultat</h2><p>${esc(S.name || 'Élève')} · ${fmtDate(e.ts)}</p></div>
      <p style="font-weight:800;color:var(--ink-soft);margin:0">${esc(g.title)}${timeUp ? ' · ⏱️ Temps écoulé' : ''}</p>
      <h2>${title}</h2>
      <div class="stars">${starsHtml(e.stars)}</div>
      <div class="score-big">${e.correct} / ${e.total}</div>
      <div class="result-stats">
        <div class="rstat"><b>${e.pct} %</b><small>Réussite</small></div>
        <div class="rstat"><b>+${e.points}</b><small>Points gagnés</small></div>
        <div class="rstat"><b>🔥 ${g.bestStreak}</b><small>Meilleure série</small></div>
        <div class="rstat"><b>${fmtTime((Date.now() - g.start) / 1000)}</b><small>Durée</small></div>
      </div>
      ${bonusDaily ? `<p class="mini-badge">🎯 Défi du jour réussi : +${bonusDaily} points bonus !</p>` : ''}
      ${fresh.length ? `<h3>Nouveaux badges débloqués</h3><div class="new-badges">${fresh.map((b) => `<span class="mini-badge">${b.ico} ${esc(b.name)}</span>`).join('')}</div>` : ''}
      <div class="btn-row center">
        <button class="btn green" id="r-replay">🔄 Rejouer</button>
        ${wrong.length ? `<button class="btn yellow" id="r-wrong">💡 Revoir mes erreurs (${wrong.length})</button>` : ''}
        <button class="btn ghost" id="r-print">🖨️ Imprimer</button>
        <button class="btn ghost" id="r-home">🏠 Accueil</button>
      </div>
      <div id="r-corr"></div>`;
    $('#r-replay').onclick = () => replayGame(g.cfg);
    $('#r-home').onclick = () => show('home');
    $('#r-print').onclick = () => { $('#r-corr').innerHTML = correctionHtml(g.log); window.print(); };
    if (wrong.length) $('#r-wrong').onclick = () => { $('#r-corr').innerHTML = correctionHtml(wrong); $('#r-corr').scrollIntoView({ behavior: 'smooth' }); };
    $$('.screen').forEach((s) => s.classList.remove('active')); $('#scr-result').classList.add('active'); currentScreen = 'result';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Rejouer : même partie, questions remélangées (ordre facile → difficile conservé)
  function replayGame(cfg) {
    let qs;
    if (cfg.source) qs = cfg.source();
    else if (cfg.mode === 'calc') qs = cfg.questions.map((q) => (q.generated ? genOperation(q.lv) : q));
    else { qs = shuffle(cfg.questions); if (cfg.questions.every((q, i, a) => !i || a[i - 1].lv <= q.lv)) qs.sort((a, b) => a.lv - b.lv); }
    startGame(Object.assign({}, cfg, { questions: qs }));
  }

  function correctionHtml(log) {
    return `<div class="correction-list">${log.map((x, i) => `<div class="corr-item ${x.ok ? '' : 'bad'}">
      <div class="cq">${i + 1}. ${x.ok ? '✅' : '❌'} ${esc(x.q.type === 'comp' ? x.q.q.replace('___', '……') : x.q.q)}</div>
      <p><span class="lbl">Ta réponse :</span> ${esc(answerText(x.q, x.a))}</p>
      ${x.ok ? '' : `<p><span class="lbl">Bonne réponse :</span> <b>${esc(correctText(x.q))}</b></p>`}
      <p><span class="lbl">Explication :</span> ${esc(x.q.ex || '')}</p></div>`).join('')}</div>`;
  }

  /* ------------------------------------------------------------------
     10. MODE EXAMEN
     ------------------------------------------------------------------ */
  function appreciation(note) {
    if (note >= 18) return { text: 'Excellent !', color: '#1fb45a' };
    if (note >= 16) return { text: 'Très bien !', color: '#12b5a5' };
    if (note >= 14) return { text: 'Bien !', color: '#2f6fde' };
    if (note >= 10) return { text: 'Assez bien.', color: '#ff8a1f' };
    return { text: 'Continue tes efforts !', color: '#ef4444' };
  }
  function renderExamSetup() {
    const body = $('#exam-setup-body');
    body.innerHTML = `<p class="lead">Comme une vraie évaluation : questions mélangées, temps limité, et la correction n'apparaît qu'à la fin. Ta note est calculée sur 20.</p>
      <span class="opt-label">Domaine</span>${chipGroup('subject', [{ value: 'all', label: '📚 Tous les domaines' }].concat(classBooks(S.cls).map((s) => ({ value: s.id, label: s.icon + ' ' + s.name }))), 'all')}
      <span class="opt-label">Nombre de questions</span>${chipGroup('count', [10, 20, 30, 40].map((n) => ({ value: n, label: n + ' questions' })), 20)}
      <span class="opt-label">Durée</span>${chipGroup('time', [5, 10, 15, 20, 30].map((n) => ({ value: n, label: n + ' min' })), 15)}
      <span class="opt-label">Niveau</span>${chipGroup('level', [{ value: 'all', label: 'Tous niveaux' }, { value: 1, label: 'Débutant' }, { value: 2, label: 'Intermédiaire' }, { value: 3, label: 'Expert' }], 'all')}
      <div class="info-box">📏 Barème : chaque bonne réponse rapporte la même part de la note. Une question sans réponse compte comme fausse.</div>
      <div class="btn-row"><button class="btn green" id="exam-go">📝 Commencer l'examen</button></div>
      ${S.bestExam != null ? `<p style="font-weight:800">🏅 Ta meilleure note : ${fmtNum(S.bestExam)} / 20</p>` : ''}`;
    bindChips(body);
    $('#exam-go').onclick = () => {
      const sid = chipVal(body, 'subject'); const n = +chipVal(body, 'count'); const min = +chipVal(body, 'time'); const lv = chipVal(body, 'level');
      let pool = (sid === 'all' ? classQ(S.cls) : subjectQuestions(sid)).filter((q) => lv === 'all' || String(q.lv) === lv);
      if (pool.length < n) toast(`Seulement ${pool.length} questions disponibles pour ce choix.`);
      const qs = shuffle(pool).slice(0, n);
      startGame({ mode: 'exam', exam: true, title: '📝 Examen — ' + (sid === 'all' ? 'Toutes les matières' : SUBJ(sid).name), subjectId: sid === 'all' ? null : sid, questions: qs, timeLimit: min * 60, examMinutes: min, replay: () => show('exam-setup') });
    };
  }
  function showExamResult(g, e, fresh) {
    const ap = appreciation(e.note);
    if (e.note >= 14) { confetti(100); sfx('win'); }
    $('#exam-result-body').innerHTML = `
      <div class="print-only"><h2>Mon Super Quiz CM1 — Bulletin d'examen</h2><p>Élève : ${esc(S.name || '……………………')} · ${fmtDate(e.ts)}</p></div>
      <p style="font-weight:800;color:var(--ink-soft);margin:0">${esc(g.title)}</p>
      <h2>Résultat de l'examen</h2>
      <div class="note20">${fmtNum(e.note)}<small> / 20</small></div>
      <div class="appreciation" style="background:${ap.color}">${ap.text}</div>
      <div class="result-stats">
        <div class="rstat"><b>${e.correct} / ${e.total}</b><small>Bonnes réponses</small></div>
        <div class="rstat"><b>${e.pct} %</b><small>Réussite</small></div>
        <div class="rstat"><b>${fmtTime(e.duration)}</b><small>Temps utilisé (sur ${g.examMinutes} min)</small></div>
        <div class="rstat"><b>+${e.points}</b><small>Points gagnés</small></div>
      </div>
      ${fresh.length ? `<div class="new-badges">${fresh.map((b) => `<span class="mini-badge">${b.ico} ${esc(b.name)}</span>`).join('')}</div>` : ''}
      <div class="btn-row center">
        <button class="btn green" id="x-again">🔄 Nouvel examen</button>
        <button class="btn ghost" id="x-print">🖨️ Imprimer le bulletin</button>
        <button class="btn ghost" id="x-home">🏠 Accueil</button>
      </div>
      <h3 style="text-align:left;margin-top:24px">📋 Correction détaillée</h3>
      ${correctionHtml(g.log)}`;
    $('#x-again').onclick = () => show('exam-setup');
    $('#x-print').onclick = () => window.print();
    $('#x-home').onclick = () => show('home');
    $$('.screen').forEach((s) => s.classList.remove('active')); $('#scr-exam-result').classList.add('active'); currentScreen = 'exam-result';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /* ------------------------------------------------------------------
     11. QUIZ ALÉATOIRE, CALCUL RAPIDE, DÉFI CHRONO, ERREURS
     ------------------------------------------------------------------ */
  function renderRandom() {
    const body = $('#random-body');
    body.innerHTML = `<p class="lead">Le générateur pioche des questions au hasard dans les matières que tu choisis.</p>
      <span class="opt-label">Domaines (choix multiple)</span>
      <div class="chips" data-group="subj" data-multi="1">${classBooks(S.cls).map((s) => `<button class="chip on" data-value="${s.id}">${s.icon} ${esc(s.name)}</button>`).join('')}</div>
      <span class="opt-label">Nombre de questions</span>${chipGroup('count', [5, 10, 15, 20].map((n) => ({ value: n, label: n })), 10)}
      <span class="opt-label">Niveau</span>${chipGroup('level', [{ value: 'all', label: 'Tous' }, { value: 1, label: 'Débutant' }, { value: 2, label: 'Intermédiaire' }, { value: 3, label: 'Expert' }], 'all')}
      <span class="opt-label">Type de jeu</span>${chipGroup('format', formatOptions(classQ(S.cls)), 'mix')}
      <div class="btn-row"><button class="btn green" id="rnd-go">🎲 Générer mon quiz</button></div>`;
    bindChips(body);
    $('#rnd-go').onclick = () => {
      const subs = chipVals(body, 'subj'); if (!subs.length) return toast('Choisis au moins une matière.');
      const pool = filterQs(classQ(S.cls).filter((q) => subs.includes(q.subjectId)), chipVal(body, 'level'), chipVal(body, 'format'));
      if (!pool.length) return toast('Aucune question pour ce choix.');
      const n = +chipVal(body, 'count');
      startGame({ mode: 'random', title: '🎲 Quiz aléatoire', questions: shuffle(pool).slice(0, n), replay: () => show('random') });
    };
  }

  function calcPool(scope) { return classQ(S.cls).filter((q) => q.type === 'calc' && (scope === 'all' || q.subjectId === scope)); }
  function buildCalcQuestions(scope, level, n, rng) {
    let book = calcPool(scope); if (level !== 'all') book = book.filter((q) => String(q.lv) === String(level));
    const chosen = shuffle(book, rng).slice(0, Math.min(book.length, Math.ceil(n * 0.6)));
    while (chosen.length < n) chosen.push(genOperation(level === 'all' ? 1 + Math.floor(rand() * 3) : level));
    return shuffle(chosen, rng);
  }
  function renderCalcSetup() {
    const body = $('#calc-body');
    body.innerHTML = `<p class="lead">Réponds le plus vite possible ! Tu as un temps limité pour chaque calcul.</p>
      <div class="info-box">📘 Les calculs utilisent les nombres du manuel (dates, distances, populations…). Ils sont complétés par des opérations d'entraînement signalées « hors manuel ».</div>
      <span class="opt-label">Thème</span>${chipGroup('scope', [{ value: 'all', label: '📚 Tous les domaines' }].concat(classBooks(S.cls).map((s) => ({ value: s.id, label: `${s.icon} ${s.name} (${calcPool(s.id).length})` }))), 'all')}
      <span class="opt-label">Niveau</span>${chipGroup('level', [{ value: 'all', label: 'Tous' }, { value: 1, label: 'Débutant' }, { value: 2, label: 'Intermédiaire' }, { value: 3, label: 'Expert' }], 'all')}
      <span class="opt-label">Temps par calcul</span>${chipGroup('time', [15, 20, 30, 45].map((n) => ({ value: n, label: n + ' s' })), 30)}
      <div class="btn-row"><button class="btn green" id="calc-go">🧮 C'est parti (10 calculs)</button></div>
      ${S.bestCalc ? `<p style="font-weight:800">🏅 Ton record : ${S.bestCalc} / 10</p>` : ''}`;
    bindChips(body);
    $('#calc-go').onclick = () => startCalc(chipVal(body, 'scope'), chipVal(body, 'level'), +chipVal(body, 'time'));
  }
  function startCalc(scope, level, perQ, daily) {
    const rng = daily ? seededRng('calc' + S.cls + todayKey()) : rand;
    startGame({ mode: 'calc', title: daily ? '🎯 Calcul du jour' : '🧮 Calcul rapide', questions: buildCalcQuestions(scope, level, 10, rng), perQuestion: perQ, daily, replay: () => (daily ? show('daily') : show('calc-setup')) });
  }

  function chronoPool(scope) { return classQ(S.cls).filter((q) => ['qcm', 'vf', 'comp'].includes(q.type) && (scope === 'all' || q.subjectId === scope)); }
  function renderChronoSetup() {
    const body = $('#chrono-body');
    body.innerHTML = `<p class="lead">Réponds au maximum de questions avant la fin du chrono. Chaque bonne réponse compte !</p>
      <span class="opt-label">Domaine</span>${chipGroup('scope', [{ value: 'all', label: '📚 Toutes' }].concat(classBooks(S.cls).map((s) => ({ value: s.id, label: s.icon + ' ' + s.name }))), 'all')}
      <span class="opt-label">Durée</span>${chipGroup('time', [60, 90, 120].map((n) => ({ value: n, label: n + ' secondes' })), 90)}
      <div class="btn-row"><button class="btn green" id="chrono-go">⏱️ Lancer le chrono</button></div>
      ${S.bestChrono ? `<p style="font-weight:800">🏅 Ton record : ${S.bestChrono} bonnes réponses</p>` : ''}`;
    bindChips(body);
    $('#chrono-go').onclick = () => startChrono(chipVal(body, 'scope'), +chipVal(body, 'time'));
  }
  function startChrono(scope, seconds, daily) {
    const rng = daily ? seededRng('chrono' + S.cls + todayKey()) : rand;
    const source = () => shuffle(chronoPool(scope), rng);
    startGame({ mode: 'chrono', endless: true, title: daily ? '🎯 Chrono du jour' : '⏱️ Défi chrono', questions: source(), source, timeLimit: seconds, daily, replay: () => (daily ? show('daily') : show('chrono-setup')) });
  }

  function renderErrors() {
    const ids = Object.keys(S.errors).filter((id) => Q_BY_ID[id]);
    const body = $('#errors-body');
    if (!ids.length) {
      body.innerHTML = `<div class="card empty"><span class="e-ico">🌟</span>Aucune erreur à réviser pour le moment.<br>Joue des quiz : les questions ratées apparaîtront ici.</div>`; return;
    }
    const bySubj = {}; ids.forEach((id) => { const q = Q_BY_ID[id]; (bySubj[q.subjectId] = bySubj[q.subjectId] || []).push(q); });
    body.innerHTML = `<div class="card setup-card"><p class="lead">Tu as <b>${ids.length}</b> question(s) à retravailler. Quand tu réussis une question ici, elle disparaît de la liste !</p>
      ${Object.keys(bySubj).map((sid) => `<p><b>${SUBJ(sid).icon} ${esc(SUBJ(sid).name)}</b> : ${bySubj[sid].length} question(s)</p>`).join('')}
      <div class="btn-row"><button class="btn green" id="err-go">🔁 Réviser mes erreurs</button><button class="btn ghost" id="err-list">📋 Voir la liste</button></div>
      <div id="err-detail"></div></div>`;
    $('#err-go').onclick = () => {
      const qs = shuffle(ids.map((id) => Q_BY_ID[id])).sort((a, b) => (S.errors[b.id].count - S.errors[a.id].count)).slice(0, 15);
      startGame({ mode: 'errors', title: '🔁 Révision de mes erreurs', questions: qs, replay: () => show('errors') });
    };
    $('#err-list').onclick = () => {
      $('#err-detail').innerHTML = `<div class="correction-list">${ids.map((id) => { const q = Q_BY_ID[id]; return `<div class="corr-item bad"><div class="cq">${esc(q.type === 'comp' ? q.q.replace('___', '……') : q.q)}</div><p><span class="lbl">Bonne réponse :</span> <b>${esc(correctText(q))}</b></p><p><span class="lbl">Raté ${S.errors[id].count} fois · ${esc(q.lessonTitle)}</span></p></div>`; }).join('')}</div>`;
    };
  }

  /* ------------------------------------------------------------------
     12. DÉFIS DU JOUR
     ------------------------------------------------------------------ */
  function renderDaily() {
    const d = S.daily[dkey()] || {};
    const card = (key, ico, title, desc, btn) => `<div class="daily-card ${d[key] != null ? 'done' : ''}">
      <span class="d-ico">${ico}</span><h3>${title}</h3><p>${desc}</p>
      <p style="font-weight:900">${d[key] != null ? '✅ Réussi — meilleur score : ' + d[key] : '🎁 +30 points bonus'}</p>
      <button class="btn ${d[key] != null ? 'ghost' : 'green'}" data-daily="${key}">${d[key] != null ? 'Rejouer' : btn}</button></div>`;
    const doneCount = ['quiz', 'chrono', 'calc'].filter((k) => d[k] != null).length;
    $('#daily-body').innerHTML = `<p style="font-weight:800">📅 ${new Date().toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })} — ${doneCount} / 3 défis relevés. Les défis changent chaque jour !</p>
      <div class="daily-grid">
        ${card('quiz', '🧠', 'Quiz du jour', '10 questions choisies pour aujourd\'hui dans tout le manuel.', 'Relever le défi')}
        ${card('chrono', '⏱️', 'Chrono du jour', 'Un maximum de bonnes réponses en 60 secondes.', 'Lancer le chrono')}
        ${card('calc', '🧮', 'Calcul du jour', '10 calculs rapides, 30 secondes chacun.', 'Calculer')}
      </div>`;
    $$('#daily-body [data-daily]').forEach((b) => (b.onclick = () => {
      const k = b.dataset.daily;
      if (k === 'quiz') { const rng = seededRng('quiz' + S.cls + todayKey()); const qs = shuffle(classQ(S.cls), rng).slice(0, 10).sort((a, b2) => a.lv - b2.lv); startGame({ mode: 'daily', daily: 'quiz', title: '🎯 Quiz du jour', questions: qs, replay: () => show('daily') }); }
      if (k === 'chrono') startChrono('all', 60, 'chrono');
      if (k === 'calc') startCalc('all', 'all', 30, 'calc');
    }));
  }

  /* ------------------------------------------------------------------
     13. TABLEAU DE BORD
     ------------------------------------------------------------------ */
  const MODE_NAMES = { lesson: 'Leçon', chapter: 'Chapitre', random: 'Aléatoire', exam: 'Examen', chrono: 'Défi chrono', calc: 'Calcul rapide', errors: 'Révision erreurs', daily: 'Défi du jour' };
  function renderDashboard() {
    const { rank, next } = rankOf(S.points);
    const rate = pct(S.correct, S.answered);
    const subjRows = (SUBJECTS.filter((s) => S.subj[s.id]).length ? SUBJECTS.filter((s) => S.subj[s.id]) : classBooks(S.cls || "cm1")).map((s) => { const r = subjectRate(s.id); return `<div class="subj-row"><span>${s.icon} ${esc(s.className)} · ${esc(s.name)}</span><div class="meter"><i style="width:${r || 0}%;background:${s.color}"></i></div><span>${r == null ? '—' : r + ' %'}</span></div>`; }).join('');
    const played = SUBJECTS.filter((s) => (S.subj[s.id] || {}).answered >= 5);
    const mastered = played.filter((s) => subjectRate(s.id) >= 75);
    const toImprove = played.filter((s) => subjectRate(s.id) < 60);
    // Leçons à améliorer
    const weakLessons = Object.keys(S.lessons).filter((l) => LESSON_BY_ID[l] && S.lessons[l].answered >= 3 && pct(S.lessons[l].correct, S.lessons[l].answered) < 60).slice(0, 8);
    const unlocked = BADGES.filter((b) => S.badges[b.id]);
    $('#dashboard-body').innerHTML = `
      <div class="print-only"><h2>Mon Super Quiz CM1 — Bilan de ${esc(S.name || 'l\'élève')}</h2><p>Imprimé le ${fmtDate(Date.now())}</p></div>
      <div class="panel no-print"><h3>👤 Mon espace (sans inscription)</h3>
        <div class="name-row"><input id="dash-name" maxlength="24" placeholder="Ton prénom (facultatif)" value="${esc(S.name)}"><button class="btn" id="dash-save">Enregistrer</button></div></div>
      <div class="panel"><div class="level-card"><div class="level-badge">${rank.ico}</div><div style="flex:1;min-width:180px"><h3 style="margin:0">Niveau : ${esc(rank.name)}</h3>
        <p style="margin:4px 0;font-weight:700;color:var(--ink-soft)">${next ? `Encore ${next.min - S.points} points pour devenir « ${esc(next.name)} » ${next.ico}` : 'Tu as atteint le plus haut niveau !'}</p>
        <div class="meter"><i style="width:${next ? pct(S.points - rank.min, next.min - rank.min) : 100}%"></i></div></div></div></div>
      <div class="dash-grid">
        <div class="kpi"><span class="kpi-ico">🎮</span><b>${S.games.length}</b><small>Parties jouées</small></div>
        <div class="kpi"><span class="kpi-ico">✅</span><b>${S.correct}</b><small>Bonnes réponses</small></div>
        <div class="kpi"><span class="kpi-ico">🎯</span><b>${rate} %</b><small>Taux de réussite</small></div>
        <div class="kpi"><span class="kpi-ico">⭐</span><b>${S.points.toLocaleString('fr-FR')}</b><small>Points obtenus</small></div>
      </div>
      <div class="panel"><h3>📚 Réussite par domaine</h3>${subjRows}</div>
      <div class="two-col">
        <div class="panel"><h3>🏅 Domaines maîtrisés</h3><div class="tag-list">${mastered.length ? mastered.map((s) => `<span class="tag good">${s.icon} ${esc(s.name)} (${subjectRate(s.id)} %)</span>`).join('') : '<span class="tag neutral">Atteins 75 % de réussite dans une matière</span>'}</div></div>
        <div class="panel"><h3>🛠️ À améliorer</h3><div class="tag-list">${toImprove.length || weakLessons.length ? toImprove.map((s) => `<span class="tag bad">${s.icon} ${esc(s.name)} (${subjectRate(s.id)} %)</span>`).join('') + weakLessons.map((l) => `<span class="tag bad">📄 ${esc(LESSON_BY_ID[l].lesson.title)}</span>`).join('') : '<span class="tag neutral">Rien à signaler pour l\'instant 👍</span>'}</div></div>
      </div>
      <div class="panel"><h3>🏆 Badges débloqués (${unlocked.length} / ${BADGES.length})</h3><div class="tag-list">${unlocked.length ? unlocked.map((b) => `<span class="mini-badge">${b.ico} ${esc(b.name)}</span>`).join('') : '<span class="tag neutral">Aucun badge pour l\'instant : joue pour en gagner !</span>'}</div></div>
      <div class="panel"><h3>🕘 Historique des résultats</h3>${S.games.length ? `<div class="table-wrap"><table class="history"><thead><tr><th>Date</th><th>Jeu</th><th>Titre</th><th>Score</th><th>Points</th><th>Note</th></tr></thead><tbody>
        ${S.games.slice(0, 40).map((g) => `<tr><td>${fmtDate(g.ts)}</td><td>${MODE_NAMES[g.mode] || g.mode}</td><td>${esc(g.title)}</td><td>${g.correct}/${g.total} ${'⭐'.repeat(g.stars)}</td><td>+${g.points}</td><td>${g.note != null ? fmtNum(g.note) + '/20' : '—'}</td></tr>`).join('')}
        </tbody></table></div>` : '<p class="empty">Pas encore de partie. Lance-toi !</p>'}</div>
      <div class="btn-row no-print">
        <button class="btn ghost" id="dash-print">🖨️ Imprimer mes résultats</button>
        <button class="btn ghost" id="dash-trophies">🏆 Voir mes trophées</button>
        <button class="btn red" id="dash-reset">🗑️ Recommencer ma progression</button>
      </div>
      <p style="color:var(--ink-soft);font-size:.85rem" class="no-print">💾 Sauvegarde automatique dans ce navigateur (LocalStorage).</p>`;
    $('#dash-save').onclick = () => { S.name = $('#dash-name').value.trim().slice(0, 24); save(); toast('Prénom enregistré !'); renderHome(); };
    $('#dash-print').onclick = () => window.print();
    $('#dash-trophies').onclick = () => show('trophies');
    $('#dash-reset').onclick = () => confirmBox('Recommencer ma progression ?', 'Tous tes points, badges, résultats et erreurs seront effacés. Cette action est définitive.', 'Oui, tout effacer', () => {
      const sound = S.settings.sound; S = defaultState(); S.settings.sound = sound; save(); updateHeader(); toast('Progression remise à zéro.'); show('home');
    });
  }

  /* ------------------------------------------------------------------
     14. TROPHÉES
     ------------------------------------------------------------------ */
  function renderTrophies() {
    const best = S.games.slice().sort((a, b) => b.points - a.points || b.pct - a.pct).slice(0, 10);
    const exams = S.games.filter((g) => g.mode === 'exam').sort((a, b) => b.note - a.note).slice(0, 5);
    const medal = (i) => ['🥇', '🥈', '🥉'][i] || (i + 1) + '.';
    $('#trophies-body').innerHTML = `
      <div class="badge-grid">${BADGES.map((b) => `<div class="badge ${S.badges[b.id] ? 'unlocked' : 'locked'}"><span class="b-ico">${b.ico}</span><b>${esc(b.name)}</b><small>${esc(b.desc)}</small>${S.badges[b.id] ? `<span class="b-date">Débloqué le ${new Date(S.badges[b.id]).toLocaleDateString('fr-FR')}</span>` : ''}</div>`).join('')}</div>
      <div class="two-col" style="margin-top:18px">
        <div class="panel"><h3>🏅 Mon classement personnel</h3>${best.length ? `<div class="podium">${best.map((g, i) => `<div class="podium-row"><span class="rank">${medal(i)}</span><span>${esc(g.title)}<br><small style="color:var(--ink-soft)">${fmtDate(g.ts)} · ${g.correct}/${g.total}</small></span><span>⭐ ${g.points}</span></div>`).join('')}</div>` : '<p class="empty">Joue pour remplir ton classement !</p>'}</div>
        <div class="panel"><h3>📝 Meilleurs examens</h3>${exams.length ? `<div class="podium">${exams.map((g, i) => `<div class="podium-row"><span class="rank">${medal(i)}</span><span>${esc(g.title)}<br><small style="color:var(--ink-soft)">${fmtDate(g.ts)}</small></span><span>${fmtNum(g.note)}/20</span></div>`).join('')}</div>` : '<p class="empty">Aucun examen passé.</p>'}
          <h3 style="margin-top:16px">⚡ Records</h3>
          <p>⏱️ Défi chrono : <b>${S.bestChrono}</b> bonnes réponses<br>🧮 Calcul rapide : <b>${S.bestCalc}</b> / 10<br>🔥 Plus longue série : <b>${S.bestStreak}</b></p></div>
      </div>`;
  }

  /* ------------------------------------------------------------------
     15. ÉVÉNEMENTS GLOBAUX
     ------------------------------------------------------------------ */
  document.addEventListener('click', (e) => {
    const go = e.target.closest('[data-go]'); if (!go) return;
    if (currentScreen === 'game' && G) { quitGame(); return; }
    sfx('click'); show(go.dataset.go);
  });
  $('#game-quit').onclick = quitGame;
  $('#btn-start').onclick = () => { sfx('click'); if (S.cls) openClass(S.cls); else $('#classes').scrollIntoView({ behavior: 'smooth' }); };
  $('#hdr-class').onclick = () => { show('home'); setTimeout(() => $('#classes').scrollIntoView({ behavior: 'smooth' }), 50); };
  $('#modal-close').onclick = closeModal;
  $('#modal').addEventListener('click', (e) => { if (e.target.id === 'modal') closeModal(); });
  $('#btn-sound').onclick = () => { S.settings.sound = !S.settings.sound; save(); updateHeader(); sfx('click'); };
  $('#btn-fullscreen').onclick = () => {
    const d = document; const el = d.documentElement;
    if (!d.fullscreenElement && !d.webkitFullscreenElement) { (el.requestFullscreen || el.webkitRequestFullscreen || function () {}).call(el); }
    else { (d.exitFullscreen || d.webkitExitFullscreen).call(d); }
  };
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !$('#modal').hidden) { closeModal(); return; }
    if (currentScreen !== 'game' || !G || !$('#modal').hidden) return;
    const tag = (e.target.tagName || '').toLowerCase(); if (tag === 'input') return;
    const q = G.queue[G.idx];
    if (!G.answered) {
      if (q.type === 'qcm') { const i = 'abcd1234'.indexOf(e.key.toLowerCase()) % 4; if (i >= 0 && $$('.choice')[i]) $$('.choice')[i].click(); }
      if (q.type === 'vf') { if (/^[v1]$/i.test(e.key)) $('.vf-btn.vrai').click(); if (/^[f2]$/i.test(e.key)) $('.vf-btn.faux').click(); }
    } else if (e.key === 'Enter' && $('#btn-next') && document.activeElement !== $('#btn-next')) { e.preventDefault(); $('#btn-next').click(); }
  });
  window.addEventListener('beforeunload', save);

  // Expose quelques fonctions pour les tests manuels dans la console
  window.SuperQuiz = { state: () => S, questions: ALL_Q, isCorrect, normalize };

  updateHeader();
  renderHome();
})();

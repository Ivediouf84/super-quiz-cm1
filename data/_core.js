/* =====================================================================
   MON SUPER QUIZ — Noyau des données
   Chaque livre est un fichier data/<classe>-<domaine>.js qui appelle QB.book({...}).
   ---------------------------------------------------------------------
   FONCTIONS POUR ÉCRIRE LES QUESTIONS (la bonne réponse toujours en premier) :
   qcm(niv, question, bonneRéponse, [mauvaises], explication, options)
   vf(niv, affirmation, true|false, explication, options)
   multi(niv, question, [bonnes], [mauvaises], explication, options)
   comp(niv, "phrase avec ___", motJuste, [autres mots], explication, options)
   trou(niv, question, [réponses acceptées], explication, options)
   rel(niv, consigne, [[gauche, droite], ...], explication, options)
   ord(niv, consigne, [éléments dans le BON ordre], explication, options)
   calc(niv, question, nombre, explication, options)
   niv : 1 = Débutant, 2 = Intermédiaire, 3 = Expert
   options (facultatif) : { img: 'assets/books/ci-maths/p012.jpg' } affiche une image
   Une réponse peut être une image : 'img:assets/books/ci-maths/x.jpg|texte lu'
   ===================================================================== */
(function () {
  const mk = (type, extra) => (lv, q, a, b, ex, opt) => Object.assign({ type, lv, q }, extra(a, b), { ex: ex || '' }, opt || {});
  const QB = {
    books: [],
    qcm: (lv, q, good, bad, ex, opt) => Object.assign({ type: 'qcm', lv, q, good, bad, ex: ex || '' }, opt || {}),
    vf: (lv, q, ans, ex, opt) => Object.assign({ type: 'vf', lv, q, ans, ex: ex || '' }, opt || {}),
    multi: (lv, q, good, bad, ex, opt) => Object.assign({ type: 'multi', lv, q, good, bad, ex: ex || '' }, opt || {}),
    comp: (lv, q, good, bad, ex, opt) => Object.assign({ type: 'comp', lv, q, good, bad, ex: ex || '' }, opt || {}),
    trou: (lv, q, ans, ex, opt) => Object.assign({ type: 'trou', lv, q, ans, ex: ex || '' }, opt || {}),
    rel: (lv, q, pairs, ex, opt) => Object.assign({ type: 'rel', lv, q, pairs, ex: ex || '' }, opt || {}),
    ord: (lv, q, items, ex, opt) => Object.assign({ type: 'ord', lv, q, items, ex: ex || '' }, opt || {}),
    calc: (lv, q, ans, ex, opt) => Object.assign({ type: 'calc', lv, q, ans, ex: ex || '' }, opt || {}),
    book(def) { this.books.push(def); }
  };
  void mk;
  window.QB = QB;

  window.QUIZ_CLASSES = [
    { id: 'ci', name: 'CI', full: "Cours d'Initiation", color: '#ff5fa2', ico: '🌱' },
    { id: 'cp', name: 'CP', full: 'Cours Préparatoire', color: '#a855f7', ico: '✏️' },
    { id: 'ce1', name: 'CE1', full: 'Cours Élémentaire 1', color: '#eab308', ico: '📗' },
    { id: 'ce2', name: 'CE2', full: 'Cours Élémentaire 2', color: '#06b6d4', ico: '🔭' },
    { id: 'cm1', name: 'CM1', full: 'Cours Moyen 1', color: '#6d4aff', ico: '🧭' },
    { id: 'cm2', name: 'CM2', full: 'Cours Moyen 2', color: '#f97316', ico: '🎓' }
  ];
  window.QUIZ_DOMAINS = [
    { id: 'maths', name: 'Mathématiques', ico: '🔢', color: '#2f6fde' },
    { id: 'lc', name: 'Langue et Communication', ico: '📖', color: '#e11d48' },
    { id: 'edd', name: 'Éducation au Développement Durable', ico: '🌿', color: '#16a34a' },
    { id: 'dm', name: 'Découverte du Monde', ico: '🌍', color: '#c2410c' }
  ];
})();

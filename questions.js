/* =====================================================================
   MON SUPER QUIZ CM1 — Banque de questions
   Source : « Découverte du monde CM1 » (Éditions Didactikos, 2022)
   Matières : Histoire · Géographie · Initiation Scientifique et Technologique
   ---------------------------------------------------------------------
   COMMENT AJOUTER DES QUESTIONS ?
   Dans la leçon voulue, ajoute une ligne dans le tableau "questions"
   avec l'une des fonctions ci-dessous. Le premier paramètre est le
   niveau : 1 = Débutant, 2 = Intermédiaire, 3 = Expert.
   La bonne réponse est TOUJOURS écrite en premier : le jeu mélange
   automatiquement les propositions à l'affichage.

   qcm(niv, question, bonneRéponse, [3 mauvaises], explication)
   vf(niv, affirmation, true|false, explication)
   multi(niv, question, [bonnes], [mauvaises], explication)
   comp(niv, "phrase avec ___", motJuste, [autres mots], explication)
   trou(niv, question, [réponses acceptées], explication)
   rel(niv, consigne, [[gauche, droite], ...], explication)
   ord(niv, consigne, [éléments dans le BON ordre], explication)
   calc(niv, question, nombre, explication)
   ===================================================================== */
(function () {
  const qcm = (lv, q, good, bad, ex) => ({ type: 'qcm', lv, q, good, bad, ex });
  const vf = (lv, q, ans, ex) => ({ type: 'vf', lv, q, ans, ex });
  const multi = (lv, q, good, bad, ex) => ({ type: 'multi', lv, q, good, bad, ex });
  const comp = (lv, q, good, bad, ex) => ({ type: 'comp', lv, q, good, bad, ex });
  const trou = (lv, q, ans, ex) => ({ type: 'trou', lv, q, ans, ex });
  const rel = (lv, q, pairs, ex) => ({ type: 'rel', lv, q, pairs, ex });
  const ord = (lv, q, items, ex) => ({ type: 'ord', lv, q, items, ex });
  const calc = (lv, q, ans, ex) => ({ type: 'calc', lv, q, ans, ex });

  /* =================================================================
     HISTOIRE
     ================================================================= */
  const histoire = {
    id: 'histoire', name: 'Histoire', icon: '🏺', color: '#2f6fde',
    chapters: [
      {
        id: 'h1', title: 'La préhistoire', palier: 1,
        lessons: [
          {
            id: 'h1l1', title: 'Préhistoire et histoire', pages: '12-13',
            summary: [
              "La préhistoire est la longue période qui va de l'apparition de l'homme (il y a plusieurs millions d'années) jusqu'à la découverte des métaux et de l'écriture, vers 4000 avant J.-C.",
              "Elle comprend deux périodes : le paléolithique (âge de la pierre taillée) et le néolithique (âge de la pierre polie).",
              "L'histoire commence avec les traditions orales ou écrites et le travail des métaux. Elle conserve le passé jusqu'à nos jours.",
              "Le plus ancien texte écrit date d'environ 3200 avant J.-C., en Égypte.",
              "Pour dater les objets anciens, on utilise le Carbone 14 et le Potassium-Argon (laboratoire de Cheikh Anta Diop, IFAN)."
            ],
            questions: [
              qcm(1, "Qu'est-ce qui sépare la préhistoire de l'histoire ?", "Le travail des métaux et l'invention de l'écriture", ["La maîtrise du feu", "L'apparition de l'homme", "L'invention de l'électricité"], "Le livre l'indique : l'histoire commence avec l'écriture et le travail des métaux."),
              qcm(1, "Combien de grandes périodes la préhistoire compte-t-elle ?", "Deux", ["Une", "Trois", "Quatre"], "Le paléolithique (pierre taillée) et le néolithique (pierre polie)."),
              qcm(2, "Vers quelle date la préhistoire prend-elle fin ?", "Vers 4000 avant J.-C.", ["Vers l'an 1000", "Vers 1960", "Vers 7 millions d'années"], "Elle se termine avec la découverte des métaux et de l'écriture, vers 4000 av. J.-C."),
              vf(1, "L'utilisation de l'écriture est un fait de l'histoire.", true, "L'écriture marque le début de l'histoire."),
              vf(1, "Vivre dans des grottes et s'habiller de peaux de bêtes, ce sont des faits de l'histoire.", false, "Ce sont des faits de la préhistoire."),
              vf(2, "Le paléolithique est appelé « âge de la pierre polie ».", false, "Le paléolithique est l'âge de la pierre TAILLÉE ; le néolithique est l'âge de la pierre polie."),
              comp(1, "Le paléolithique est l'âge de la pierre ___.", "taillée", ["polie", "fondue", "peinte"], "Paléolithique = pierre taillée."),
              comp(1, "Le néolithique est l'âge de la pierre ___.", "polie", ["taillée", "cassée", "brûlée"], "Néolithique = pierre polie."),
              qcm(2, "Où a été trouvé le plus ancien texte écrit (vers 3200 av. J.-C.) ?", "En Égypte", ["Au Sénégal", "En Europe", "En Amérique"], "Le livre cite l'Égypte des Pharaons."),
              qcm(3, "Quelle méthode permet de dater les objets très anciens ?", "Le Carbone 14", ["La boussole", "Le thermomètre", "Le baromètre"], "Le Carbone 14 (C14) et le Potassium-Argon servent à dater les vestiges."),
              qcm(3, "Quel savant sénégalais a créé un laboratoire de datation au Carbone 14 ?", "Cheikh Anta Diop", ["Léopold Sédar Senghor", "Blaise Diagne", "Lamine Guèye"], "Le laboratoire de Cheikh Anta Diop à l'IFAN date les vestiges."),
              ord(2, "Range ces faits dans l'ordre chronologique.", ["Apparition de l'homme", "Maîtrise du feu", "Invention de l'écriture", "Électricité"], "D'abord l'homme apparaît, puis il maîtrise le feu, invente l'écriture, et bien plus tard l'électricité."),
              trou(3, "Comment appelle-t-on la période intermédiaire entre la préhistoire et l'histoire, marquée par l'âge des métaux ?", ["protohistoire", "la protohistoire"], "D'après le lexique, la protohistoire marque la fin de la préhistoire.")
            ]
          },
          {
            id: 'h1l2', title: 'Les caractéristiques de la préhistoire', pages: '24-25',
            summary: [
              "La préhistoire est la période avant l'histoire, et aussi la science qui étudie ce passé.",
              "L'homme de Toumaï, trouvé dans le désert du Tchad, est le plus ancien hominidé connu (7 millions d'années) : l'Afrique est le berceau de l'humanité.",
              "Au paléolithique, l'homme est un prédateur nomade : il vit de chasse, de pêche et de cueillette.",
              "Au néolithique, il devient producteur et sédentaire : il pratique l'agriculture et l'élevage."
            ],
            questions: [
              qcm(1, "Comment s'appelle le plus ancien hominidé connu, trouvé au Tchad ?", "L'homme de Toumaï", ["L'homme de Dakar", "L'homme de Gorée", "L'homme de Thiès"], "Toumaï a été trouvé dans le désert du Tchad."),
              qcm(2, "Quel âge a l'homme de Toumaï ?", "7 millions d'années", ["7 000 ans", "700 ans", "70 ans"], "Il a environ 7 millions d'années."),
              qcm(2, "Pourquoi dit-on que l'Afrique est le berceau de l'humanité ?", "Car on y a trouvé les plus anciens hominidés", ["Car il y fait chaud", "Car c'est le plus grand continent", "Car l'écriture y est née"], "L'homme de Toumaï, le plus ancien, a été découvert en Afrique."),
              multi(1, "Quels étaient les habitats de l'homme préhistorique ?", ["La grotte", "La caverne", "La hutte"], ["L'immeuble", "La terrasse"], "Il s'abritait dans des grottes, des cavernes puis des huttes."),
              qcm(1, "Quelle activité est l'intrus ?", "Le commerce", ["La chasse", "La pêche", "La cueillette"], "La chasse, la pêche et la cueillette étaient pratiquées dès la préhistoire."),
              vf(1, "L'homme pratiquait l'agriculture pendant l'âge de la pierre taillée.", false, "L'agriculture apparaît au néolithique (pierre polie)."),
              vf(1, "L'homme préhistorique ne connaissait pas l'écriture.", true, "L'écriture marque justement la fin de la préhistoire."),
              vf(1, "L'homme préhistorique utilisait l'électricité.", false, "L'électricité est une invention très récente."),
              vf(2, "Le paléolithique a duré plus longtemps que le néolithique.", true, "Le paléolithique est la période la plus ancienne et la plus longue."),
              rel(2, "Relie chaque période au mode de vie de l'homme.", [["Paléolithique", "Prédateur nomade"], ["Néolithique", "Producteur sédentaire"]], "Au paléolithique il se déplace pour chasser ; au néolithique il cultive et s'installe."),
              comp(2, "Au néolithique, l'homme devient ___ : il pratique l'agriculture et l'élevage.", "producteur", ["prédateur", "nomade", "chasseur"], "Il produit sa nourriture."),
              trou(3, "Dans quel pays a-t-on découvert l'homme de Toumaï ?", ["tchad", "le tchad", "au tchad"], "Dans le désert du Tchad.")
            ]
          },
          {
            id: 'h1l3', title: "L'âge de la pierre taillée", pages: '36-37',
            summary: [
              "Le paléolithique est la période la plus ancienne et la plus longue (de 3 millions d'années à 8000 av. J.-C.).",
              "L'homme vit de chasse, de cueillette et de pêche. Il est nomade et s'abrite dans des grottes et des cavernes.",
              "Ses outils sont en os, en cornes et en pierre taillée : galets aménagés, bifaces, hachereaux, racloirs, harpons.",
              "Il mange les aliments crus et s'habille de peaux de bêtes. La période s'achève avec la maîtrise du feu."
            ],
            questions: [
              qcm(1, "Au paléolithique, l'homme était :", "Nomade", ["Sédentaire", "Agriculteur", "Commerçant"], "Il se déplaçait sans cesse pour trouver sa nourriture."),
              multi(1, "Quelles activités pratiquait l'homme de la pierre taillée ?", ["La chasse", "La cueillette", "La pêche"], ["L'agriculture", "L'élevage"], "Agriculture et élevage n'apparaissent qu'au néolithique."),
              multi(2, "Quels outils appartiennent à l'âge de la pierre taillée ?", ["Le biface", "Le hachereau", "Le galet aménagé"], ["Le fusil", "La faucille en fer"], "Ce sont des outils en pierre taillée."),
              qcm(2, "Comment l'homme du paléolithique mangeait-il ses aliments, au début ?", "Crus", ["Cuits au four électrique", "En conserve", "Frits à l'huile"], "Avant la maîtrise du feu, il mangeait cru."),
              qcm(1, "Avec quoi s'habillait l'homme de la pierre taillée ?", "Des peaux de bêtes", ["Du coton tissé", "Du plastique", "Des habits en soie"], "Le tissage n'existe pas encore."),
              qcm(2, "Quel événement met fin au paléolithique ?", "La maîtrise du feu", ["L'invention de l'écriture", "L'arrivée des Européens", "La création des villes"], "Le livre dit : « La maîtrise du feu met fin au paléolithique »."),
              comp(1, "L'homme de la pierre taillée s'abritait dans des grottes et des ___.", "cavernes", ["immeubles", "villas", "baraques"], "Grottes et cavernes étaient ses abris."),
              vf(2, "Le harpon en os servait à la pêche.", true, "Le livre montre la pêche au harpon."),
              ord(3, "Range ces outils/étapes dans l'ordre chronologique.", ["Utilisation du biface", "Maîtrise du feu", "Polissage de la pierre", "Travail des métaux"], "Pierre taillée → feu → pierre polie → métaux."),
              trou(3, "Quel est l'autre nom de l'âge de la pierre taillée ?", ["paléolithique", "le paléolithique"], "Paléolithique = pierre taillée.")
            ]
          },
          {
            id: 'h1l4', title: "L'âge de la pierre polie", pages: '46-47 et 55',
            summary: [
              "Le néolithique va de 8000 à 3000 av. J.-C. C'est une grande révolution.",
              "L'homme se sédentarise : il crée les premiers villages. Il devient éleveur et agriculteur.",
              "Ses outils sont polis : aiguille, harpon, hameçon, meule, molette, faucille.",
              "Il invente la poterie et le tissage, pratique l'art rupestre, cuit ses aliments au feu et enterre ses morts."
            ],
            questions: [
              qcm(1, "Au néolithique, l'homme devient :", "Sédentaire", ["Nomade", "Chasseur seulement", "Navigateur"], "Il se fixe et crée les premiers villages."),
              multi(1, "Quelles activités apparaissent au néolithique ?", ["L'agriculture", "L'élevage", "Le tissage", "La poterie"], ["Le cinéma"], "Ce sont les grandes nouveautés de la pierre polie."),
              rel(2, "Range chaque élément dans la bonne période.", [["La sédentarisation", "Pierre polie"], ["Le nomadisme", "Pierre taillée"], ["L'agriculture", "Pierre polie"], ["Les habits en peaux de bêtes", "Pierre taillée"]], "Nomadisme et peaux de bêtes = pierre taillée ; sédentarisation et agriculture = pierre polie."),
              vf(1, "Au néolithique, l'homme mangeait encore la viande crue.", false, "Il maîtrise le feu et cuit ses aliments."),
              vf(1, "L'homme du néolithique pratiquait le tissage.", true, "Le tissage apparaît au néolithique."),
              qcm(2, "À quoi servaient la meule et la molette ?", "À moudre les grains", ["À chasser", "À écrire", "À pêcher"], "Ce sont des outils liés à l'agriculture."),
              qcm(2, "Que représente l'art rupestre ?", "Des peintures sur les parois des rochers", ["Des livres", "Des statues en métal", "Des chansons"], "L'homme du néolithique peignait sur les rochers."),
              comp(1, "Au néolithique, les hommes se fixent et créent les premiers ___.", "villages", ["immeubles", "aéroports", "royaumes"], "C'est la sédentarisation."),
              comp(2, "La préhistoire s'achève avec le travail des ___.", "métaux", ["pierres", "os", "cornes"], "Le travail des métaux marque la fin de la préhistoire."),
              qcm(3, "Entre quelles dates situe-t-on le néolithique ?", "De 8000 à 3000 av. J.-C.", ["De 3 millions à 8000 av. J.-C.", "De 1960 à nos jours", "Du XVe au XVIe siècle"], "Le néolithique suit le paléolithique."),
              ord(2, "Range ces événements dans l'ordre chronologique.", ["Apparition de l'homme", "Maîtrise du feu", "Travail des métaux", "Électricité"], "Exercice du livre (p. 47)."),
              trou(2, "Comment appelle-t-on le fait de s'installer définitivement dans un lieu ?", ["sédentarisation", "la sédentarisation", "se sédentariser"], "Le contraire du nomadisme est la sédentarisation.")
            ]
          }
        ]
      },
      {
        id: 'h2', title: 'Les royaumes du Sénégal', palier: 2,
        lessons: [
          {
            id: 'h2l1', title: "Les royaumes avant l'arrivée des Blancs", pages: '72-75',
            summary: [
              "Avant l'arrivée des Européens (XVe siècle), le Sénégal était divisé : Grand-Djolof, royaumes de Casamance, Gabou, Fouladou, royaume soninké, Niani-Wouli, Bambouk, Bouré…",
              "Les sociétés étaient divisées en castes : aristocratie, hommes libres, artisans, esclaves.",
              "Le roi était choisi et contrôlé par l'Assemblée du royaume, souvent selon le matrilignage. Il s'appuyait sur une armée.",
              "L'économie reposait sur l'agriculture, l'élevage, la pêche, l'artisanat et les mines, avec des échanges vers le Soudan, la forêt et le Sahara.",
              "Les royaumes vassaux du Djolof (Walo, Cayor, Baol, Sine, Saloum, Fouta-Toro) se libèrent ; la bataille de Danki (1549), gagnée par Amary Ngoné Sobel Fall, entraîne la dislocation du Grand-Djolof."
            ],
            questions: [
              qcm(1, "Quelle bataille entraîne la dislocation du Grand-Djolof en 1549 ?", "La bataille de Danki", ["La bataille de Somb", "La bataille de Nder", "La bataille de Pathé Badiane"], "Amary Ngoné Sobel Fall gagne à Danki en 1549."),
              qcm(2, "Qui remporte la bataille de Danki ?", "Amary Ngoné Sobel Fall", ["Lat Dior", "Alboury Ndiaye", "Maba Diakhou Ba"], "Il est le fils de Déthié Fou Ndiogou Fall."),
              multi(1, "Quels royaumes étaient vassaux du Grand-Djolof ?", ["Le Cayor", "Le Walo", "Le Baol"], ["Le Mali", "L'Égypte"], "Fouta-Toro, Walo, Cayor, Baol, Sine et Saloum étaient vassaux."),
              rel(2, "Relie chaque personnage à l'événement qu'il a marqué.", [["War Diaby Ndiaye", "Premier à se convertir à l'Islam"], ["Amari Ngoné Sobel", "Dislocation du Grand-Djolof"], ["Mansa Waly Dione", "Indépendance du Bambouk et du Bouré"], ["Ndiadiane Ndiaye", "Migration des populations du Nord vers le Sud"]], "Exercice du livre (p. 75)."),
              multi(2, "Quelles étaient les castes de la société ?", ["L'aristocratie", "Les hommes libres", "Les artisans", "Les esclaves"], ["Les fonctionnaires"], "Les sociétés étaient stables et divisées en castes."),
              qcm(2, "Qui choisissait et contrôlait le roi ?", "L'Assemblée du royaume", ["Les Européens", "Les enfants", "Le gouverneur"], "Le roi est choisi et contrôlé par l'Assemblée du royaume."),
              qcm(3, "Selon quelle règle le roi était-il souvent choisi ?", "Le matrilignage", ["Le tirage au sort", "Le vote de tout le peuple", "L'âge le plus jeune"], "Le matrilignage tient compte de la parenté par la mère."),
              vf(1, "Le titre du roi du Djolof était « Bourba Djolof ».", true, "Le livre parle de la faiblesse du pouvoir du Bourba Djolof."),
              qcm(2, "Avec quels empires du Soudan les royaumes échangeaient-ils leurs produits ?", "Le Sonraï et le Mali", ["La France et l'Angleterre", "L'Inde et la Chine", "Le Brésil et le Pérou"], "Les échanges se faisaient avec le Sonraï, le Mali, les pays forestiers du Sud et les Arabo-berbères."),
              comp(2, "La parenté à ___ est un cousinage entre ethnies (ex. Sérères et Diolas).", "plaisanterie", ["sang", "voisinage", "guerre"], "C'est la définition du lexique."),
              calc(2, "Le mouvement almoravide a lieu vers 1050 et la bataille de Danki en 1549. Combien d'années les séparent ?", 499, "1549 − 1050 = 499 ans."),
              trou(3, "En quelle année a eu lieu la bataille de Danki ?", ["1549"], "La bataille de Danki a eu lieu en 1549.")
            ]
          },
          {
            id: 'h2l2', title: "Les royaumes après l'arrivée des Blancs", pages: '80-81',
            summary: [
              "À partir du milieu du XVe siècle, les royaumes entrent en contact avec l'Europe grâce à des navigateurs comme Alvise Cadamosto.",
              "Les Européens cherchent des produits tropicaux (poivre, cannelle) et des métaux précieux (or, argent).",
              "Ils échangent de la pacotille (verroterie, alcool, miroirs, étoffes, fusils…) contre de l'ivoire, des métaux précieux, des peaux…",
              "Les missionnaires construisent églises, écoles et structures sanitaires pour convertir au christianisme et favoriser l'assimilation.",
              "Ces contacts permettent la Traite négrière à partir du début du XVIe siècle."
            ],
            questions: [
              qcm(1, "À partir de quel siècle les royaumes du Sénégal entrent-ils en contact avec l'Europe ?", "Le XVe siècle", ["Le VIIIe siècle", "Le XXe siècle", "Le Ier siècle"], "C'est à partir du milieu du XVe siècle."),
              qcm(2, "Quel navigateur européen est cité par le livre ?", "Alvise Cadamosto", ["Faidherbe", "Dodds", "Pinet Laprade"], "Alvise Cadamosto aborda les côtes africaines."),
              multi(1, "Quels produits les Européens venaient-ils chercher ?", ["L'or", "La gomme arabique"], ["Le pétrole", "Le gaz"], "Exercice du livre (p. 81)."),
              qcm(2, "Qu'est-ce que la « pacotille » ?", "Des marchandises sans grande valeur", ["De l'or pur", "Des esclaves", "Des terres agricoles"], "Verroterie, alcool, miroirs, peignes… étaient de la pacotille."),
              multi(2, "Quels étaient les objectifs des missionnaires européens ?", ["Convertir les populations au christianisme", "Véhiculer la culture occidentale"], ["Islamiser les populations", "Organiser les royaumes"], "Exercice du livre (p. 81)."),
              vf(1, "La Traite négrière commence au début du XVIe siècle.", true, "Le livre le précise."),
              vf(2, "Les missionnaires ont construit des églises, des écoles et des structures sanitaires.", true, "Ces constructions servaient la conversion et l'assimilation."),
              comp(2, "Le fait de s'insérer dans une culture étrangère s'appelle l'___.", "assimilation", ["évangélisation", "exploration", "émigration"], "Définition du lexique."),
              trou(3, "Comment appelle-t-on l'action de convertir des populations au christianisme ?", ["évangélisation", "l'évangélisation", "evangelisation"], "C'est l'évangélisation."),
              qcm(3, "Avec quels royaumes les Européens ont-ils entretenu des échanges ?", "Le Walo, le Cayor, le Sine", ["Le Mali, l'Égypte, le Ghana", "La France, l'Espagne, le Portugal", "Le Tchad, le Niger, la Libye"], "Le texte cite le Walo, le Cayor, le Sine et les rivières de la Casamance.")
            ]
          }
        ]
      },
      {
        id: 'h3', title: 'Les premiers contacts avec les Arabes et les Européens', palier: 2,
        lessons: [
          {
            id: 'h3l1', title: 'Les contacts avec les Arabes', pages: '84-87',
            summary: [
              "Grâce au commerce transsaharien, les Arabes sont en contact avec l'Afrique noire, dont le Sénégal, vers le VIIIe siècle.",
              "Commerçants arabes et berbères échangent soierie, dattes, sel, encens contre or, argent, cuivre, ivoire, peaux, esclaves.",
              "Conséquence : l'islamisation de plusieurs royaumes, de façon pacifique. War Diaby Ndiaye, roi du Tékrour, est le premier roi à se convertir.",
              "Au XIe siècle, les Almoravides imposent l'Islam par la contrainte, ce qui provoque des résistances et des migrations vers le Sud.",
              "Écoles coraniques (daaras) et mosquées contribuent à la diffusion de l'Islam."
            ],
            questions: [
              qcm(1, "Comment s'appelle le commerce des Arabes à travers le Sahara ?", "Le commerce transsaharien", ["Le commerce triangulaire", "Le commerce en ligne", "Le commerce maritime"], "Les Arabes traversaient le Sahara pour commercer."),
              qcm(1, "Qui fut le premier roi du Tékrour à se convertir à l'Islam ?", "War Diaby Ndiaye", ["Lat Dior", "Maba Diakhou Ba", "Alboury Ndiaye"], "War Diaby Ndiaye est le premier roi converti."),
              qcm(2, "Vers quel siècle les Arabes entrent-ils en contact avec le Sénégal ?", "Le VIIIe siècle", ["Le IVe siècle", "Le XVe siècle", "Le XXe siècle"], "Le « Je retiens » dit : vers le VIIIe siècle."),
              qcm(2, "Au XIe siècle, quel mouvement impose l'Islam par la contrainte ?", "Le mouvement almoravide", ["Le mouvement des cheminots", "Le RDA", "L'UGTAN"], "Les Almoravides utilisèrent la force."),
              multi(1, "Quelles sont des conséquences des contacts avec les Arabes ?", ["L'islamisation de l'Afrique", "Le commerce transsaharien", "La création des daaras"], ["La colonisation de l'Afrique", "La construction d'églises"], "Corrigé du livre : écoles coraniques et commerce transsaharien."),
              rel(2, "Relie chaque produit à ceux qui l'apportaient.", [["Le sel et les dattes", "Commerçants arabes"], ["L'or et l'ivoire", "Royaumes africains"]], "Les Arabes apportaient sel, dattes, soierie ; les royaumes donnaient or, ivoire, peaux."),
              qcm(1, "Qu'est-ce qu'un daara ?", "Une école coranique", ["Un marché", "Un bateau", "Un palais royal"], "Daara signifie école coranique en wolof."),
              vf(2, "Les commerçants arabes ont diffusé l'Islam de façon pacifique.", true, "Le livre parle d'un Islam non violent et pacifique."),
              qcm(3, "Quel chef almoravide est mort lors de la résistance armée ?", "Abou Bakr", ["Okba Ibn Nafi", "Faidherbe", "Ndiadiane Ndiaye"], "La résistance provoqua la mort du chef almoravide Abou Bakr."),
              qcm(3, "Qui dirigea l'expansion musulmane au VIIe siècle en Afrique du Nord ?", "Okba Ibn Nafi", ["Abou Bakr", "War Diaby", "El Hadji Omar"], "Okba Ibn Nafi dirigea cette expansion."),
              comp(2, "La mosquée de ___ a été construite en 1325.", "Tombouctou", ["Touba", "Dakar", "Gorée"], "Image du livre (p. 85)."),
              trou(2, "Quel désert les caravanes arabes traversaient-elles ?", ["sahara", "le sahara"], "Le commerce transsaharien traverse le Sahara."),
              calc(3, "La mosquée de Tombouctou fut construite en 1325. Combien d'années jusqu'en 2025 ?", 700, "2025 − 1325 = 700 ans.")
            ]
          },
          {
            id: 'h3l2', title: 'Les contacts avec les Européens', pages: '92-93',
            summary: [
              "Au XVe siècle, les Européens entrent en contact avec les peuples africains par les côtes et les cours d'eau.",
              "Ils cherchent des produits pour l'Europe et de la main-d'œuvre pour l'Amérique : c'est le début de la Traite négrière au XVIe siècle.",
              "Ils évangélisent (églises, christianisme), créent hôpitaux, dispensaires et centres d'accueil.",
              "Ils ouvrent des comptoirs commerciaux gérés par des compagnies à privilèges (gomme arabique, ivoire, cire… et surtout esclaves).",
              "Cette conquête rencontre des résistances armées ou passives."
            ],
            questions: [
              qcm(1, "Quelle religion les Européens ont-ils introduite en Afrique ?", "Le christianisme", ["L'Islam", "Les religions traditionnelles", "Le bouddhisme"], "Ils ont évangélisé les populations."),
              multi(1, "Quelles conséquences sont liées aux premiers contacts avec les Européens ?", ["La création des hôpitaux et dispensaires", "L'installation des comptoirs commerciaux", "La construction d'églises"], ["Le commerce transsaharien", "La guerre sainte"], "Exercice du livre (p. 93)."),
              multi(2, "Qu'est-ce qui a motivé les premiers contacts des Européens avec l'Afrique ?", ["Le goût de l'aventure", "L'évangélisation des populations"], ["Le développement de l'Afrique", "L'introduction de l'Islam"], "Exercice du livre (p. 93)."),
              qcm(2, "Pourquoi les Européens avaient-ils besoin de main-d'œuvre en Amérique ?", "Après le génocide des Amérindiens", ["Pour construire des mosquées", "Pour cultiver en Europe", "Pour garder les comptoirs"], "Le livre l'explique dans le « Je retiens »."),
              vf(2, "Les comptoirs commerciaux étaient gérés par des compagnies à privilèges.", true, "Elles imposaient leurs types de commerce."),
              vf(1, "Les Européens sont arrivés par le désert du Sahara.", false, "Ils sont arrivés par les côtes et les cours d'eau."),
              comp(1, "Le commerce des esclaves s'appelle la traite ___.", "négrière", ["transsaharienne", "maritime", "agricole"], "C'est la Traite négrière."),
              rel(3, "Relie chaque conséquence à ceux qui l'ont apportée.", [["Les daaras", "Les Arabes"], ["Les églises", "Les Européens"], ["Le commerce transsaharien", "Les Arabes"], ["Les dispensaires", "Les Européens"]], "Tableau de comparaison du livre (p. 93)."),
              qcm(3, "Quelles formes de résistance ont rencontrées les Européens ?", "Armée et passive", ["Seulement religieuse", "Aucune", "Sportive"], "Le texte parle de résistances armée ou passive."),
              trou(3, "À partir de quel siècle commence la Traite négrière ? (écris en chiffres romains, ex : XIIe)", ["xvie", "xvi", "16e", "xvie siècle", "16"], "La Traite commence au XVIe siècle.")
            ]
          }
        ]
      },
      {
        id: 'h4', title: 'La résistance à la conquête coloniale', palier: 2,
        lessons: [
          {
            id: 'h4l1', title: 'El Hadji Omar et Ahmadou Cheikhou', pages: '96-97',
            summary: [
              "El Hadji Omar Tall est né en 1796 à Alwar, près de Podor, dans une famille maraboutique. Il fait le pèlerinage à La Mecque.",
              "Il proclame la guerre sainte en 1853 et lutte sur deux fronts : contre les païens et contre la domination coloniale.",
              "En 1857, il attaque le fort de Médine, défendu par Paul Holle et secouru par Faidherbe.",
              "Il disparaît dans les falaises de Bandiagara en 1864 (12 février).",
              "Son fils Ahmadou Cheikhou continue la résistance, signe un traité avec les Français en 1881, puis se retire au Nigéria (Sokoto) où il meurt en 1897."
            ],
            questions: [
              qcm(1, "En quelle année est né El Hadji Omar Tall ?", "1796", ["1769", "1679", "1976"], "Il est né en 1796 à Alwar."),
              qcm(1, "Quel administrateur colonial s'opposa à El Hadji Omar ?", "Faidherbe", ["Archinard", "Dodds", "De Gaulle"], "Faidherbe intervint notamment à Médine en 1857."),
              qcm(2, "En quelle année Ahmadou Cheikhou signe-t-il un traité avec les Français ?", "1881", ["1818", "1188", "1880"], "Le traité est signé en 1881."),
              qcm(1, "Où est né El Hadji Omar ?", "À Alwar, près de Podor", ["À Dakar", "À Ziguinchor", "À Kaolack"], "Alwar se trouve près de Podor."),
              qcm(2, "Où El Hadji Omar a-t-il disparu ?", "Dans les falaises de Bandiagara", ["Sur l'île de Gorée", "À Saint-Louis", "À La Mecque"], "Il disparaît en 1864 dans les falaises de Bandiagara."),
              ord(2, "Range les étapes de la vie d'El Hadji Omar.", ["Naissance à Alwar", "Pèlerinage à La Mecque", "Proclamation de la guerre sainte", "Bataille de Médine en 1857", "Disparition dans les falaises de Bandiagara"], "1796 → pèlerinage → 1853 → 1857 → 1864."),
              vf(2, "El Hadji Omar proclama la guerre sainte en 1853.", true, "C'est le début de la guerre sainte."),
              vf(2, "Le fort de Médine était défendu par Paul Holle.", true, "Il le défendit pendant quatre mois."),
              comp(2, "Le fils d'El Hadji Omar s'appelle Ahmadou ___.", "Cheikhou", ["Bamba", "Molo", "Sobel"], "Ahmadou Cheikhou hérita de l'empire."),
              calc(2, "El Hadji Omar est né en 1796 et a disparu en 1864. Quel âge avait-il ?", 68, "1864 − 1796 = 68 ans."),
              trou(3, "En quelle année El Hadji Omar a-t-il disparu dans les falaises de Bandiagara ?", ["1864"], "Il disparaît le 12 février 1864."),
              qcm(3, "Où meurt Ahmadou Cheikhou en 1897 ?", "À Sokoto (Nigéria)", ["À Podor", "À Dakar", "À Médine"], "Harcelé, il émigre à Sokoto où il meurt.")
            ]
          },
          {
            id: 'h4l2', title: 'Fodé Kaba Doumbouya', pages: '102-103',
            summary: [
              "Fodé Kaba Doumbouya est né vers 1820 à Goumbeyel (Boundou). C'est un Diakhanké.",
              "Il conquiert le Djimara, le Toumana, le Wouli, puis le Souna, le Balmadou et le pays Balant (1876). Il résiste aussi aux Français.",
              "Il établit un « tata » (fortification) à Karantaba, puis se fortifie à Médina (1877).",
              "En 1893, il signe un traité laissant le Fogny à la France.",
              "En 1901, une expédition franco-anglaise, avec Moussa Molo, prend son tata. Il y trouve la mort."
            ],
            questions: [
              qcm(1, "En quelle année Fodé Kaba signe-t-il un traité avec la France ?", "1893", ["1877", "1869", "1901"], "Le traité de 1893 laisse le Fogny à la France."),
              qcm(2, "Dans quelle partie du Sénégal est né Fodé Kaba (Goumbeyel, Boundou) ?", "À l'Est", ["Au Nord", "Au Sud", "À l'Ouest"], "Le Boundou est situé à l'Est du Sénégal."),
              qcm(1, "Qu'est-ce qu'un « tata » ?", "Une fortification", ["Un bateau", "Un marché", "Une école"], "Le tata est une forteresse."),
              ord(3, "Range ces événements dans l'ordre chronologique.", ["Invasion du Souna et du Balmadou par Fodé Kaba", "Établissement d'un tata à Karantaba", "Traité laissant le Fogny à la France", "Expédition contre Fodé Kaba Doumbouya"], "1876 → Karantaba → 1893 → 1901."),
              rel(2, "Relie chaque date à l'événement.", [["1876", "Invasion du Souna, du Balmadou et du pays Balant"], ["1877", "Il se fortifie à Médina"], ["1893", "Traité laissant le Fogny à la France"], ["1901", "Expédition franco-anglaise et mort"]], "Dates du texte (p. 102)."),
              vf(2, "Moussa Molo a participé à l'expédition contre Fodé Kaba.", true, "L'expédition franco-anglaise de 1901 comptait Moussa Molo."),
              vf(1, "Fodé Kaba est mort à Paris.", false, "Il est mort dans son tata, après une longue résistance."),
              comp(1, "Fodé Kaba Doumbouya est un ___.", "Diakhanké", ["Wolof", "Sérère", "Toucouleur"], "Le texte le présente comme un Diakhanké."),
              trou(3, "Quelle région Fodé Kaba laisse-t-il à la France par le traité de 1893 ?", ["fogny", "le fogny"], "Le traité de 1893 laisse le Fogny à la France."),
              calc(3, "Fodé Kaba est né vers 1820 et mort en 1901. Quel âge environ avait-il ?", 81, "1901 − 1820 = 81 ans.")
            ]
          },
          {
            id: 'h4l3', title: 'Maba Diakhou Ba', pages: '106-107',
            summary: [
              "Maba Diakhou Ba est né vers 1810 dans le Rip, au Saloum.",
              "En 1846, lors de l'entrevue de Kaba Koto, El Hadji Omar le nomme représentant de la voie Tidjania.",
              "Il fait tuer le roi Diéréba Marone (1861) et devient Almamy du Rip. Il protège les paysans et impose l'Islam aux infidèles.",
              "Les Français le reconnaissent chef du Rip et du Saloum (1864). Lat Dior et Alboury renforcent son armée.",
              "Il meurt en 1867 à Somb, lors d'une bataille contre le Bour Sine Coumba Ndoffène Diouf."
            ],
            questions: [
              qcm(1, "Vers quelle année est né Maba Diakhou Ba ?", "1810", ["1800", "1910", "1720"], "Il est né vers 1810 dans le Rip."),
              qcm(1, "Qui nomme Maba représentant de la Tidjania ?", "El Hadji Omar Tall", ["El Hadji Malick Sy", "Cheikh Ahmadou Bamba", "Lat Dior"], "Lors de l'entrevue de Kaba Koto en 1846."),
              qcm(2, "Où Maba est-il mort en 1867 ?", "À Somb", ["À Danki", "À Dékheulé", "À Médine"], "Bataille de Somb contre le Bour Sine Coumba Ndoffène."),
              ord(2, "Range les étapes de la vie de Maba par ordre chronologique.", ["Naissance dans le Rip", "L'entrevue de Kaba Koto", "La mort du roi Diéréba Marone", "La bataille de Somb"], "Vers 1810 → 1846 → 1861 → 1867."),
              qcm(2, "Quel titre Maba prend-il après la mort du roi Diéréba Marone ?", "Almamy du Rip", ["Damel du Cayor", "Bourba Djolof", "Bour Sine"], "Il est proclamé Almamy du Rip."),
              vf(2, "Lat Dior et Alboury ont renforcé l'armée de Maba.", true, "Après la défaite de Loro, ils rejoignent Maba."),
              vf(1, "Maba est né au Cayor.", false, "Il est né dans le Rip, au Saloum."),
              comp(2, "Maba est mort en combattant le Bour Sine Coumba Ndoffène ___.", "Diouf", ["Fall", "Ndiaye", "Ba"], "Coumba Ndoffène Diouf était le Bour Sine."),
              calc(2, "Maba est né vers 1810 et mort en 1867. Quel âge avait-il environ ?", 57, "1867 − 1810 = 57 ans."),
              trou(3, "Comment s'appelle l'entrevue de 1846 entre El Hadji Omar et Maba ?", ["kaba koto", "kabakoto", "l'entrevue de kaba koto"], "C'est l'entrevue de Kaba Koto (ou Kabakato).")
            ]
          },
          {
            id: 'h4l4', title: 'Lat Dior Ngoné Latyr Diop', pages: '114-115',
            summary: [
              "Lat Dior Diop est né en 1842 à Keur Amadou Yalla. On l'appelle le « lion du Cayor ».",
              "Il règne comme Damel du Cayor de 1862 à 1863, après avoir battu Madiodio.",
              "Battu par les Français le 12 janvier 1864 à Loro, il s'exile au Rip chez Maba Diakhou (bataille de Somb, 1867).",
              "Il revient au Cayor et est reconnu Damel par les Français en 1871.",
              "Il s'oppose à la construction du chemin de fer Dakar–Saint-Louis (inauguré en 1885). Il meurt à la bataille de Dékheulé le 26 octobre 1886."
            ],
            questions: [
              qcm(1, "En quelle année est né Lat Dior ?", "1842", ["1886", "1871", "1863"], "Il est né en 1842 à Keur Amadou Yalla."),
              qcm(1, "Quel administrateur colonial s'opposa à Lat Dior ?", "Faidherbe", ["Archinard", "Dodds", "De Gaulle"], "Exercice du livre (p. 115)."),
              qcm(1, "À quelle construction Lat Dior s'opposait-il ?", "Au chemin de fer Dakar–Saint-Louis", ["À un pont", "À une mosquée", "À un aéroport"], "Le chemin de fer devait traverser le Cayor."),
              qcm(2, "Où Lat Dior est-il mort en 1886 ?", "À Dékheulé", ["À Somb", "À Loro", "À Danki"], "Le 26 octobre 1886 à Dékheulé."),
              ord(2, "Range les étapes de la vie de Lat Dior.", ["Victoire sur Damel Madiodio", "Exil chez Maba", "Intronisation comme Damel en 1871", "Inauguration du chemin de fer", "Bataille de Dékheulé"], "1862 → 1864 → 1871 → 1885 → 1886."),
              qcm(2, "Quel titre portait le roi du Cayor ?", "Damel", ["Bourba", "Almamy", "Bour"], "Lat Dior fut Damel du Cayor."),
              vf(1, "Lat Dior a réussi à empêcher la construction du chemin de fer.", false, "Il n'a pas réussi : le chemin de fer est inauguré en 1885."),
              vf(2, "Le cheval de Lat Dior s'appelait Malaw.", true, "Il combattit à Dékheulé sur son cheval Malaw."),
              comp(2, "Lat Dior est battu à Loro par les troupes de Pinet ___.", "Laprade", ["Holle", "Vallois", "Dodds"], "Le 12 janvier 1864."),
              calc(1, "Lat Dior est né en 1842 et mort en 1886. Quel âge avait-il ?", 44, "1886 − 1842 = 44 ans."),
              trou(3, "Quel surnom donne-t-on à Lat Dior ?", ["le lion du cayor", "lion du cayor"], "Le communicateur l'appelle « le lion du Cayor »."),
              qcm(3, "Quelle bataille Lat Dior remporte-t-il contre les Français en 1863 ?", "Ngol-Ngol", ["Loro", "Dékheulé", "Guilé"], "En 1863, il gagne la bataille de Ngol-Ngol.")
            ]
          },
          {
            id: 'h4l5', title: 'Alboury Ndiaye', pages: '118-121',
            summary: [
              "Alboury Ndiaye est né en 1842 à Thiéll. Il a été élevé à la cour du Cayor avec son oncle Lat Dior.",
              "Il devient « Bourba Djolof » en 1875 et installe sa capitale à Yang-Yang.",
              "En 1885, il accepte le protectorat français sur le Djolof (pacte de non-agression).",
              "En 1886, il gagne la bataille de Guilé contre le Damel Samba Laobé Fall.",
              "En 1890, le colonel Dodds arrive : Alboury brûle Yang-Yang et rejoint Ahmadou Cheikhou. Il meurt en exil au Niger, à Kala-Kala, en 1902."
            ],
            questions: [
              qcm(1, "En quelle année Alboury devient-il « Bourba Djolof » ?", "1875", ["1890", "1885", "1902"], "Il règne de 1875 à 1890."),
              qcm(1, "En quelle année Alboury accepte-t-il le protectorat français ?", "1885", ["1875", "1890", "1902"], "Le 18 avril 1885."),
              qcm(2, "Quelle était la capitale d'Alboury ?", "Yang-Yang", ["Keur Amadou Yalla", "Mboul", "Tivaouane"], "Il installe sa capitale à Yang-Yang."),
              qcm(2, "Quel colonel français arrive au Djolof en 1890 ?", "Dodds", ["Faidherbe", "Archinard", "Paul Holle"], "Le colonel Dodds se rend au Djolof le 24 mai 1890."),
              ord(2, "Classe ces événements par ordre chronologique.", ["Le protectorat des Français sur le Djolof", "La prise de Yang-Yang par Dodds", "Exil au Niger et mort en 1902"], "1885 → 1890 → 1902."),
              rel(2, "Relie chaque date à l'événement de la vie d'Alboury.", [["1875", "Devient Bourba Djolof"], ["1885", "Accepte le protectorat français"], ["1890", "Arrivée de Dodds, Yang-Yang incendiée"], ["1902", "Mort en exil au Niger"]], "Exercice du livre (p. 121)."),
              vf(2, "Alboury a incendié lui-même sa capitale pour ne rien laisser aux Français.", true, "Il brûla Yang-Yang en 1890."),
              vf(1, "Alboury est mort à Dakar.", false, "Il est mort en exil au Niger, à Kala-Kala."),
              comp(2, "En exil, Alboury se réfugie auprès d'Ahmadou ___, roi de Ségou.", "Cheikhou", ["Bamba", "Sy", "Molo"], "Ahmadou Cheikhou Tall était roi de Ségou."),
              trou(3, "Qu'est-ce qu'un protectorat ? Complète : un État fort protège un État…", ["faible", "plus faible"], "Lexique : un État fort assure la protection d'un État faible."),
              calc(2, "Alboury est né en 1842 et mort en 1902. Quel âge avait-il ?", 60, "1902 − 1842 = 60 ans."),
              qcm(3, "Contre qui Alboury gagne-t-il la bataille de Guilé en 1886 ?", "Le Damel du Cayor Samba Laobé Fall", ["Faidherbe", "Lat Dior", "Maba Diakhou Ba"], "Samba Laobé Fall était soutenu par les Français.")
            ]
          }
        ]
      },
      {
        id: 'h5', title: "La marche vers l'indépendance", palier: 2,
        lessons: [
          {
            id: 'h5l1', title: "La marche pacifique vers l'indépendance", pages: '126-127',
            summary: [
              "Après 1945, les revendications des syndicalistes deviennent politiques. Hommes politiques, syndicats (UGTAN, CFTC), intellectuels, étudiants, femmes et guides religieux luttent ensemble.",
              "Blaise Diagne (1872-1934) est le premier Noir élu député à l'Assemblée nationale française (1914-1934). Il est l'auteur de la loi sur la citoyenneté des quatre communes.",
              "Galandou Diouf (1875-1941) est élu député en 1934. Lamine Guèye (1891-1968) fut le premier président de l'Assemblée nationale du Sénégal.",
              "Léopold Sédar Senghor (1906-2001) fut le premier président de la République du Sénégal. Aline Sitoé Diatta (1920-1944) est la dame de Cabrousse.",
              "La Loi-cadre amène l'autonomie, puis la Fédération du Mali (Sénégal et Soudan français). Elle éclate en 1960 : le Sénégal devient indépendant le 4 avril 1960."
            ],
            questions: [
              qcm(1, "Quelle est la date de l'indépendance du Sénégal ?", "Le 4 avril 1960", ["Le 4 avril 1945", "Le 26 octobre 1886", "Le 1er janvier 1900"], "Le Sénégal est indépendant le 04 avril 1960."),
              qcm(1, "Qui est le premier Noir élu député à l'Assemblée nationale française ?", "Blaise Diagne", ["Léopold Sédar Senghor", "François Carpot", "Galandou Diouf"], "Il fut député de 1914 à 1934."),
              qcm(1, "Qui était surnommée la dame de Cabrousse ?", "Aline Sitoé Diatta", ["Ngoné Latyr Fall", "Seynabou Diop", "Linguère Fatim"], "Née en 1920, elle mena une résistance."),
              rel(2, "Relie chaque personnalité à son rôle.", [["Lamine Guèye", "Premier président de l'Assemblée nationale du Sénégal"], ["Léopold S. Senghor", "Premier président de la République du Sénégal"], ["Blaise Diagne", "Auteur de la loi sur la citoyenneté des quatre communes"]], "Exercice du livre (p. 127)."),
              ord(3, "Classe ces personnalités par ordre d'arrivée à l'Assemblée nationale française.", ["Blaise Diagne", "Galandou Diouf", "Lamine Guèye", "Léopold Sédar Senghor"], "Corrigé du livre (p. 140)."),
              qcm(2, "Quels pays formaient la Fédération du Mali ?", "Le Sénégal et le Soudan français", ["Le Sénégal et la Gambie", "Le Mali et le Niger", "La France et le Sénégal"], "Elle éclate en 1960."),
              vf(2, "L'UGTAN était un syndicat.", true, "Union Générale des Travailleurs d'Afrique Noire."),
              vf(1, "Le Sénégal a obtenu son indépendance uniquement par les armes.", false, "Le livre parle d'une marche pacifique."),
              rel(2, "Relie chaque personnalité à ses dates.", [["Blaise Diagne", "1872 – 1934"], ["Galandou Diouf", "1875 – 1941"], ["Lamine Guèye", "1891 – 1968"], ["Léopold Sédar Senghor", "1906 – 2001"], ["Aline Sitoé Diatta", "1920 – 1944"]], "Tableau du « Je retiens » (p. 127)."),
              comp(2, "La ___ entraîne la création de la Fédération du Mali.", "Loi-cadre", ["Loi des quatre communes", "Constitution de 2001", "Bataille de Somb"], "La Loi-cadre donne l'autonomie interne."),
              calc(2, "Senghor est né en 1906 et mort en 2001. Quel âge avait-il ?", 95, "2001 − 1906 = 95 ans."),
              trou(3, "En quelle année Senghor est-il né ?", ["1906"], "Léopold Sédar Senghor : 1906 – 2001."),
              multi(3, "Quels partis politiques africains sont cités par le livre ?", ["RDA", "PRA", "PAI"], ["UGTAN", "CFTC"], "UGTAN et CFTC sont des syndicats, pas des partis.")
            ]
          },
          {
            id: 'h5l2', title: 'La résistance culturelle et spirituelle', pages: '130-131',
            summary: [
              "La résistance culturelle et spirituelle fut l'œuvre de grands marabouts, basée sur la foi et le dialogue.",
              "Cheikh Ahmadou Bamba (vers 1853 – 1927), né à Mbacké-Baol, fonda Touba et la confrérie mouride. Il fut déporté au Gabon en 1895.",
              "El Hadji Malick Sy (1855 – 1922), né à Gaya près de Dagana, propagea la Tidianiya ; il mourut à Tivaouane.",
              "Seydina Limamou Laye (vers 1843 – 1909), né à Yoff, fonda la confrérie layène vers 1885.",
              "Ils étaient craints et respectés par l'administration coloniale grâce à leur renommée, leur foi et leurs nombreux disciples."
            ],
            questions: [
              rel(1, "Relie chaque guide à sa confrérie.", [["Seydina Limamou Laye", "Layène"], ["El Hadji Malick Sy", "Tidiane"], ["Cheikh Ahmadou Bamba", "Mouride"]], "Exercice du livre (p. 131)."),
              qcm(1, "Quelle ville sainte a fondé Cheikh Ahmadou Bamba ?", "Touba", ["Tivaouane", "Yoff", "Podor"], "Il fonda Touba et la confrérie mouride."),
              qcm(2, "Où Cheikh Ahmadou Bamba fut-il déporté en 1895 ?", "Au Gabon", ["Au Mali", "En France", "Au Niger"], "L'administration coloniale le déporta au Gabon."),
              multi(2, "Quelles personnalités ont pratiqué la résistance spirituelle ?", ["Cheikh Ahmadou Bamba Mbacké", "El Hadji Malick Sy", "Seydina Limamou Laye"], ["Lat Dior Diop", "Alboury Ndiaye", "Lamine Guèye"], "Lat Dior et Alboury sont des résistants armés."),
              rel(2, "Que te rappellent ces dates ?", [["1855", "Naissance d'El Hadji Malick Sy"], ["1927", "Mort de Cheikh Ahmadou Bamba"], ["1909", "Mort de Seydina Limamou Laye"]], "Exercice du livre (p. 131)."),
              qcm(2, "Où est né Seydina Limamou Laye ?", "À Yoff", ["À Gaya", "À Mbacké", "À Alwar"], "Il est né vers 1843 à Yoff."),
              qcm(2, "Où est mort El Hadji Malick Sy, le 27 juin 1922 ?", "À Tivaouane", ["À Touba", "À Diourbel", "À Yoff"], "Il mourut à Tivaouane."),
              vf(1, "Les guides religieux étaient respectés par l'administration coloniale.", true, "Grâce à leur renommée, leur foi et leurs disciples."),
              vf(2, "Cheikh Ahmadou Bamba est mort en 1927 à Diourbel.", true, "Le texte l'indique."),
              comp(3, "Le ___ est la cérémonie qui marque le départ en exil de Cheikh Ahmadou Bamba.", "Magal", ["Maouloud", "Gamou de Tivaouane", "Tabaski"], "Définition du lexique."),
              trou(3, "Quelle confrérie Seydina Limamou Laye a-t-il fondée vers 1885 ?", ["layène", "layene", "la confrérie layène", "layenne", "les layènes"], "Il fonda la confrérie des Layènes."),
              multi(3, "Classe : quels sont des résistants ARMÉS ?", ["Lat Dior Diop", "Alboury Ndiaye", "El Hadji Omar Tall"], ["El Hadji Malick Sy", "Aline Sitoé Diatta"], "Corrigé du livre (p. 140) : résistants armés et pacifiques.")
            ]
          }
        ]
      }
    ]
  };

  /* =================================================================
     GÉOGRAPHIE
     ================================================================= */
  const geographie = {
    id: 'geographie', name: 'Géographie', icon: '🌍', color: '#1f9d55',
    chapters: [
      {
        id: 'g1', title: 'Les caractéristiques physiques du Sénégal', palier: 1,
        lessons: [
          {
            id: 'g1l1', title: 'Situation, limites et superficie', pages: '14-17',
            summary: [
              "Le Sénégal est situé à l'extrême Ouest de l'Afrique. Sa superficie est de 196 714 km².",
              "Il est limité à l'Ouest par l'océan Atlantique, au Nord par la Mauritanie, à l'Est par le Mali, au Sud par la Guinée et la Guinée-Bissau.",
              "La Gambie est enclavée à l'intérieur du Sénégal.",
              "Il mesure environ 600 km de Dakar (Ouest) à Kidira (Est) et 500 km de Podor (Nord) à Kolda (Sud). Ses côtes font 700 km, de Saint-Louis au Cap Roxo."
            ],
            questions: [
              qcm(1, "Quelle est la superficie du Sénégal ?", "196 714 km²", ["196 741 km²", "196 174 km²", "296 417 km²"], "Le livre donne 196 714 km²."),
              qcm(1, "Quel océan borde le Sénégal à l'Ouest ?", "L'océan Atlantique", ["L'océan Indien", "L'océan Pacifique", "La mer Méditerranée"], "L'Atlantique est à l'Ouest."),
              multi(1, "Quels sont les pays limitrophes du Sénégal ?", ["La Mauritanie", "Le Mali", "La Guinée", "La Guinée-Bissau"], ["Le Niger", "La Côte d'Ivoire", "Le Ghana"], "N : Mauritanie, E : Mali, S : Guinée et Guinée-Bissau (et la Gambie à l'intérieur)."),
              rel(2, "Relie chaque direction au pays ou à l'océan qui limite le Sénégal.", [["Nord", "Mauritanie"], ["Est", "Mali"], ["Ouest", "Océan Atlantique"], ["Sud", "Guinée et Guinée-Bissau"]], "Carte du Sénégal (p. 14)."),
              qcm(2, "Quel pays est enclavé à l'intérieur du Sénégal ?", "La Gambie", ["Le Mali", "Le Bénin", "Le Togo"], "La Gambie est entourée par le Sénégal."),
              qcm(2, "Quelle est la longueur des côtes sénégalaises ?", "700 km", ["70 km", "7 000 km", "600 km"], "De Saint-Louis au Cap Roxo."),
              calc(2, "Distance Dakar–Kidira : 600 km. Distance Podor–Kolda : 500 km. Quelle est la différence ?", 100, "600 − 500 = 100 km."),
              vf(1, "Le Sénégal se trouve à l'extrême Est de l'Afrique.", false, "Il est à l'extrême OUEST."),
              comp(2, "Les côtes du Sénégal vont de Saint-Louis au Cap ___.", "Roxo", ["Vert", "Manuel", "Skirring"], "700 km de Saint-Louis au Cap Roxo."),
              trou(3, "Quel pays limite le Sénégal au Nord ?", ["mauritanie", "la mauritanie"], "La Mauritanie est au Nord."),
              qcm(3, "Quelle ville marque l'extrémité Est du Sénégal sur la distance de 600 km ?", "Kidira", ["Kolda", "Podor", "Ziguinchor"], "600 km de Dakar à Kidira.")
            ]
          },
          {
            id: 'g1l2', title: "Le relief, les cours d'eau et les lacs", pages: '20-23',
            summary: [
              "Le relief dominant du Sénégal est la plaine (presque partout).",
              "À l'Ouest : plateau de Thiès (128 m), massif de Diass (90 m), collines des Mamelles (105 m). Au Sud-Est : collines de Kédougou, avec le point culminant (581 m). Au Nord-Est : falaises de Matam.",
              "On trouve des dunes jaunes (Niayes) et des dunes rouges (Nord-Est).",
              "Fleuves : Sénégal (du Fouta-Djalon à Saint-Louis), Gambie, Casamance (Sud), Sine et Saloum (bras de mer).",
              "Lacs : lac de Guiers (eau douce, alimente Dakar en eau potable), lac Rose ou Retba (sel), lac Tanma."
            ],
            questions: [
              qcm(1, "Quel est le relief dominant du Sénégal ?", "La plaine", ["La montagne", "Le plateau", "La falaise"], "Corrigé du livre : le relief dominant est la plaine."),
              qcm(1, "Où se trouve le point culminant du Sénégal (581 m) ?", "Dans les collines de Kédougou", ["Aux Mamelles", "À Thiès", "À Diass"], "Il est au Sud-Est, à Kédougou."),
              rel(2, "Relie chaque élément du relief à son altitude.", [["Plateau de Thiès", "128 m"], ["Collines des Mamelles", "105 m"], ["Massif de Diass", "90 m"], ["Collines de Kédougou", "581 m"]], "Altitudes du livre (p. 21)."),
              qcm(2, "Quel lac alimente Dakar en eau potable ?", "Le lac de Guiers", ["Le lac Rose", "Le lac Tanma", "Le lac Retba"], "Le lac de Guiers contient de l'eau douce."),
              qcm(1, "Quel est le plus long fleuve du Sénégal ?", "Le fleuve Sénégal", ["La Casamance", "Le Saloum", "Le Sine"], "Il va du Fouta-Djalon à Saint-Louis."),
              vf(1, "Le lac Rose alimente Dakar en eau douce.", false, "Le lac Rose (Retba) est connu pour son sel."),
              vf(2, "Le Sine et le Saloum sont des bras de mer.", true, "Ils vont de l'Ouest vers l'intérieur."),
              qcm(2, "Où trouve-t-on les falaises au Sénégal ?", "À Matam (Nord-Est)", ["À Dakar", "À Ziguinchor", "À Kaolack"], "Les falaises de Matam sont au Nord-Est."),
              comp(2, "Le fleuve Sénégal prend sa source dans le ___.", "Fouta-Djalon", ["lac de Guiers", "Saloum", "Ferlo"], "Il coule du Fouta-Djalon à Saint-Louis."),
              rel(3, "Relie chaque type de dune à sa région.", [["Dunes jaunes", "Les Niayes"], ["Dunes rouges", "Le Nord-Est"]], "Carte du relief (p. 21)."),
              calc(3, "Les collines de Kédougou culminent à 581 m et le plateau de Thiès à 128 m. Quelle est la différence ?", 453, "581 − 128 = 453 m."),
              trou(3, "Quel fleuve coule au Sud du Sénégal et porte le nom d'une région ?", ["casamance", "la casamance", "le fleuve casamance"], "La Casamance coule au Sud.")
            ]
          },
          {
            id: 'g1l3', title: 'Le climat et les vents', pages: '26-29',
            summary: [
              "Climats : sahélien au Nord (très chaud et très sec), soudanien (chaud et sec), côtier de Dakar à Saint-Louis et sur la Petite Côte (frais et humide), subguinéen en basse Casamance (chaud et pluvieux).",
              "Vents : l'harmattan (chaud et sec), l'alizé (frais et humide, sur la côte), la mousson (chaude et pluvieuse, venant du Sud).",
              "Deux saisons : la saison sèche (environ 7 mois, de novembre à mai) et la saison des pluies (environ 5 mois, de juin à octobre).",
              "Les températures sont basses sur la côte grâce à l'alizé maritime, élevées à l'intérieur à cause de l'harmattan. Les pluies sont plus fortes au Sud."
            ],
            questions: [
              rel(1, "Relie chaque vent à ses caractéristiques.", [["Harmattan", "Chaud et sec"], ["Alizé", "Frais et humide"], ["Mousson", "Chaude et pluvieuse"]], "Les trois vents du Sénégal."),
              qcm(1, "Combien de mois dure environ la saison des pluies ?", "5 mois", ["7 mois", "12 mois", "2 mois"], "De juin à octobre."),
              qcm(1, "Quel climat trouve-t-on au Nord du Sénégal ?", "Le climat sahélien", ["Le climat subguinéen", "Le climat côtier", "Le climat polaire"], "Très chaud et très sec."),
              qcm(2, "Quel climat trouve-t-on en basse Casamance ?", "Le climat subguinéen", ["Le climat sahélien", "Le climat soudanien", "Le climat désertique"], "Chaud et pluvieux."),
              vf(2, "Sur la côte, les températures sont basses à cause de l'harmattan.", false, "C'est grâce à l'ALIZÉ maritime."),
              vf(1, "La mousson est un vent chaud et sec.", false, "La mousson est chaude et pluvieuse."),
              vf(2, "La saison sèche dure de novembre à mai.", true, "Environ 7 mois."),
              qcm(2, "Quelle ville avait la température la plus élevée en mai (45 °C) ?", "Podor", ["Dakar", "Thiès", "Ziguinchor"], "Podor 45°, Matam 44°, Tambacounda 44°, Thiès 37°, Dakar 35°."),
              comp(2, "Le climat ___ s'étend de Dakar à Saint-Louis : il est frais et humide.", "côtier", ["sahélien", "soudanien", "subguinéen"], "C'est le climat côtier (alizé)."),
              calc(1, "En mai, il fait 45 °C à Podor et 35 °C à Dakar. Quelle est la différence ?", 10, "45 − 35 = 10 °C."),
              calc(2, "La saison sèche dure 7 mois. Combien de mois reste-t-il pour la saison des pluies dans une année ?", 5, "12 − 7 = 5 mois."),
              trou(3, "Quel vent frais et humide souffle sur la côte ?", ["alizé", "l'alizé", "alize"], "L'alizé maritime rafraîchit la côte."),
              qcm(3, "Où les pluies sont-elles les plus importantes ?", "Au Sud", ["Au Nord", "À Dakar", "À Saint-Louis"], "Les pluies sont plus importantes au Sud et au Sud-Est.")
            ]
          },
          {
            id: 'g1l4', title: 'Les types de sols', pages: '32-35',
            summary: [
              "Au Nord : des sols pauvres.",
              "Dans le bassin arachidier : les sols « joor » (secs ou humides), perméables, favorables à l'arachide.",
              "Dans le delta du fleuve Sénégal et le Sine-Saloum : des sols salins, impropres à la culture à cause du sel.",
              "Dans les Niayes et les vallées : des sols humides très riches en humus (maraîchage, riziculture).",
              "Au Sud-Est : des sols latéritiques (riches en fer, peu perméables, presque impropres) et des sols argileux favorables à l'agriculture."
            ],
            questions: [
              qcm(1, "Quels sols trouve-t-on dans le bassin arachidier ?", "Les sols « joor »", ["Les sols salins", "Les sols latéritiques", "La glace"], "Les sols joor conviennent à l'arachide."),
              qcm(2, "Pourquoi les sols salins sont-ils impropres à la culture ?", "À cause de leur teneur en sel", ["Car ils sont trop riches", "Car ils sont gelés", "Car ils sont en fer pur"], "Le sel empêche les cultures."),
              qcm(2, "Où trouve-t-on des sols humides très riches en humus ?", "Dans les Niayes et les vallées", ["Au Nord désertique", "Dans le delta salé", "Sur les dunes rouges"], "Ils permettent le maraîchage et la riziculture."),
              rel(2, "Relie chaque sol à sa région.", [["Sols salins", "Delta du fleuve et Sine-Saloum"], ["Sols joor", "Bassin arachidier"], ["Sols latéritiques", "Sud-Est"], ["Sols humifères", "Niayes"]], "Carte des sols (p. 33)."),
              vf(2, "Les sols latéritiques sont riches en fer.", true, "Ils sont riches en fer et peu perméables."),
              vf(1, "Les sols du Nord sont les plus riches du pays.", false, "Le livre parle de sols pauvres au Nord."),
              comp(2, "Les sols humides des Niayes permettent le ___.", "maraîchage", ["tourisme", "commerce", "transport"], "Culture de légumes."),
              trou(3, "Quelle culture est pratiquée sur les sols joor du bassin arachidier ?", ["arachide", "l'arachide", "arachides"], "C'est le bassin ARACHIDIER."),
              qcm(3, "Quels types de sols se trouvent au Sud-Est ?", "Argileux et latéritiques", ["Salins et sableux", "Joor secs", "Uniquement du sable"], "Sud-Est : argileux et latéritiques.")
            ]
          },
          {
            id: 'g1l5', title: 'La végétation', pages: '40-43',
            summary: [
              "La végétation dépend du climat et du type de sol.",
              "Au Nord (de Dagana à Matam) : la steppe, végétation squelettique avec quelques épineux et un tapis herbacé ras (climat sahélien).",
              "Au centre, d'Ouest en Est : la savane, avec des arbres (kadd, baobab) et un vaste tapis herbacé.",
              "Sur la côte Ouest et Sud-Ouest : la mangrove, formation d'arbres dans les lagunes.",
              "Au Sud : la forêt casamançaise, touffue, qui s'éclaircit vers le Nord."
            ],
            questions: [
              qcm(1, "Quelle végétation trouve-t-on au Sud du Sénégal ?", "La forêt casamançaise", ["La steppe", "Le désert", "La toundra"], "Elle est touffue grâce aux fortes pluies."),
              qcm(1, "Quelle végétation trouve-t-on au Nord ?", "La steppe", ["La forêt dense", "La mangrove", "La savane boisée"], "Végétation squelettique avec épineux."),
              qcm(2, "Qu'est-ce que la mangrove ?", "Une formation d'arbres dans les lagunes", ["Un désert de sable", "Une montagne", "Un fleuve"], "Solution du quiz du livre (p. 17)."),
              multi(2, "Quels arbres caractérisent la savane ?", ["Le baobab", "Le kadd"], ["Le sapin", "Le palétuvier des glaces"], "La savane a des arbres comme le kadd et le baobab."),
              vf(1, "La végétation dépend du climat et du type de sol.", true, "C'est la première phrase du « Je retiens »."),
              vf(2, "La forêt casamançaise s'éclaircit vers le Nord.", true, "Elle laisse place à la savane."),
              rel(2, "Relie chaque végétation à sa zone.", [["Steppe", "Nord (Dagana – Matam)"], ["Savane", "Centre"], ["Mangrove", "Côte Ouest et Sud-Ouest"], ["Forêt", "Sud (Casamance)"]], "Carte de la végétation (p. 41)."),
              comp(2, "La steppe correspond au climat ___.", "sahélien", ["subguinéen", "côtier", "équatorial"], "Climat très chaud et très sec."),
              trou(3, "Comment appelle-t-on la végétation d'arbres qui pousse dans les lagunes ?", ["mangrove", "la mangrove"], "C'est la mangrove.")
            ]
          },
          {
            id: 'g1l6', title: 'Le découpage administratif', pages: '48-51',
            summary: [
              "Le Sénégal compte 14 régions et 45 départements.",
              "Les départements sont divisés en arrondissements, eux-mêmes divisés en communes.",
              "La région est dirigée par un gouverneur, le département par un préfet, l'arrondissement par un sous-préfet, la commune par un maire.",
              "L'Acte 3 de la décentralisation a créé le conseil départemental (dirigé par un président) ; les communautés rurales sont devenues des communes."
            ],
            questions: [
              qcm(1, "Combien de régions compte le Sénégal ?", "14", ["11", "45", "10"], "Le Sénégal compte 14 régions."),
              qcm(1, "Combien de départements compte le Sénégal ?", "45", ["14", "40", "54"], "Il y a 45 départements."),
              rel(1, "Relie chaque entité administrative à son chef.", [["Région", "Gouverneur"], ["Département", "Préfet"], ["Arrondissement", "Sous-préfet"], ["Commune", "Maire"]], "Organisation administrative (p. 51)."),
              rel(2, "Relie chaque département à sa région.", [["Mbour", "Thiès"], ["Podor", "Saint-Louis"], ["Linguère", "Louga"], ["Bignona", "Ziguinchor"]], "Tableau des régions (p. 49-50)."),
              qcm(2, "Dans quelle région se trouve le département de Rufisque ?", "Dakar", ["Thiès", "Fatick", "Kaolack"], "Dakar : Dakar, Pikine, Guédiawaye, Rufisque."),
              qcm(2, "Dans quelle région se trouve le département de Mbacké ?", "Diourbel", ["Louga", "Kaffrine", "Matam"], "Diourbel : Bambey, Diourbel, Mbacké."),
              multi(2, "Quels départements appartiennent à la région de Tambacounda ?", ["Bakel", "Goudiry", "Koumpentoum"], ["Kanel", "Saraya"], "Tambacounda : Bakel, Goudiry, Koumpentoum, Tambacounda."),
              vf(2, "L'Acte 3 de la décentralisation a créé le conseil départemental.", true, "Il est dirigé par un président."),
              vf(1, "La commune est dirigée par un gouverneur.", false, "La commune est dirigée par un MAIRE."),
              ord(3, "Range ces entités de la plus grande à la plus petite.", ["Région", "Département", "Arrondissement", "Commune"], "Région > département > arrondissement > commune."),
              trou(3, "Qui dirige un département ?", ["préfet", "le préfet", "un préfet", "prefet"], "Le département est dirigé par un préfet."),
              qcm(3, "À quelle région appartient le département de Saraya ?", "Kédougou", ["Kolda", "Sédhiou", "Tambacounda"], "Kédougou : Kédougou, Salémata, Saraya."),
              calc(3, "Le Sénégal a 45 départements et 14 régions. Combien de départements de plus que de régions ?", 31, "45 − 14 = 31.")
            ]
          }
        ]
      },
      {
        id: 'g2', title: 'Les caractéristiques humaines et économiques', palier: 1,
        lessons: [
          {
            id: 'g2l1', title: 'La taille et la composition de la population', pages: '56-57',
            summary: [
              "Au recensement de 2013, le Sénégal comptait 13 508 715 habitants : 6 735 421 hommes et 6 773 294 femmes.",
              "La population est très jeune : la moyenne d'âge est de 23 ans. Les 0-14 ans représentent 42,5 %.",
              "Principales ethnies : Wolof (35 %), Peul (25 %), Sérère (20 %), Diola (8 %), puis Mandingue, Soninké, Baïnouk…",
              "Croyances : musulmans 94 %, chrétiens 5 %, religions traditionnelles 1 %."
            ],
            questions: [
              qcm(1, "Combien d'habitants comptait le Sénégal en 2013 ?", "13 508 715", ["13 805 715", "13 715 508", "1 350 871"], "Recensement RGPHAE 2013."),
              ord(1, "Range ces religions de la plus représentée à la moins représentée au Sénégal.", ["L'Islam", "Le christianisme", "Les religions traditionnelles"], "94 % → 5 % → 1 %."),
              qcm(1, "Quel pourcentage de la population est chrétien ?", "5 %", ["94 %", "1 %", "20 %"], "Les chrétiens sont estimés à 5 %."),
              qcm(2, "Quelle est l'ethnie la plus nombreuse au Sénégal ?", "Les Wolof", ["Les Diola", "Les Sérère", "Les Bassari"], "Wolof : 35 %."),
              rel(2, "Relie chaque ethnie à son pourcentage.", [["Wolof", "35 %"], ["Peul", "25 %"], ["Sérère", "20 %"], ["Diola", "8 %"]], "Répartition ethnique (p. 56)."),
              vf(2, "Il y a un peu plus de femmes que d'hommes au Sénégal.", true, "6 773 294 femmes contre 6 735 421 hommes."),
              vf(1, "La population sénégalaise est plutôt âgée.", false, "Elle est très jeune : moyenne d'âge 23 ans."),
              comp(2, "La moyenne d'âge de la population sénégalaise est de ___ ans.", "23", ["32", "45", "60"], "Le livre donne 23 ans."),
              calc(3, "6 773 294 femmes − 6 735 421 hommes = ? (nombre de femmes en plus)", 37873, "6 773 294 − 6 735 421 = 37 873."),
              qcm(2, "Quelle est la région la plus peuplée ?", "Dakar", ["Kédougou", "Matam", "Sédhiou"], "Dakar compte 3 137 196 habitants."),
              qcm(2, "Quelle est la région la moins peuplée ?", "Kédougou", ["Dakar", "Thiès", "Diourbel"], "Kédougou compte environ 151 000 habitants."),
              trou(3, "Quel pourcentage de la population a entre 0 et 14 ans ? (nombre seul)", ["42,5", "42.5", "42,5 %", "42,5%"], "Les 0-14 ans représentent 42,5 %.")
            ]
          },
          {
            id: 'g2l2', title: 'La répartition et les mouvements de la population', pages: '60-61',
            summary: [
              "La population est inégalement répartie. Dakar, la plus peuplée (3 137 196 hab.), a une densité de 4 459 hab./km². Kédougou, la moins peuplée, n'a que 9 hab./km².",
              "La population est majoritairement rurale (54,8 %), mais les villes grandissent à cause de l'exode rural.",
              "L'exode rural est le déplacement des populations des villages vers les villes. Il dépeuple et appauvrit les villages ; dans les villes, il provoque surpeuplement, promiscuité, délinquance juvénile et bidonvilles.",
              "L'émigration : les Sénégalais vivant à l'étranger représentent 1,2 % de la population (Europe, États-Unis, Afrique)."
            ],
            questions: [
              qcm(1, "L'exode rural, c'est le mouvement des populations :", "Des villages vers les villes", ["De la ville vers les villages", "D'un pays vers un autre", "De la mer vers la montagne"], "Exercice du livre (p. 61)."),
              qcm(2, "Quelle est la densité de la région de Kédougou ?", "9 hab./km²", ["79 hab./km²", "69 hab./km²", "96 hab./km²"], "C'est la plus faible densité."),
              qcm(2, "Quelle est la densité de la région de Dakar ?", "4 459 hab./km²", ["9 hab./km²", "459 hab./km²", "44 hab./km²"], "C'est la plus forte densité."),
              rel(2, "Range chaque conséquence de l'exode rural.", [["Le dépeuplement", "Villages"], ["L'appauvrissement", "Villages"], ["Le surpeuplement", "Villes"], ["La délinquance juvénile", "Villes"]], "Exercice du livre (p. 61)."),
              vf(1, "La population du Sénégal est majoritairement rurale.", true, "54,8 % de ruraux."),
              vf(2, "Plus on s'éloigne de Dakar, plus la densité augmente.", false, "Plus on s'éloigne de Dakar, plus la densité est FAIBLE."),
              comp(2, "Quitter son pays pour travailler à l'étranger s'appelle l'___.", "émigration", ["exode rural", "urbanisation", "immigration"], "C'est l'émigration."),
              trou(3, "Comment appelle-t-on le nombre d'habitants au kilomètre carré ?", ["densité", "la densité"], "C'est la densité de population."),
              calc(2, "Les ruraux représentent 54,8 % de la population. Quel est le pourcentage d'urbains ?", 45.2, "100 − 54,8 = 45,2 %."),
              qcm(3, "Quel pourcentage de Sénégalais vit à l'étranger ?", "1,2 %", ["12 %", "54,8 %", "94 %"], "Les principales destinations : Europe, États-Unis, Afrique.")
            ]
          },
          {
            id: 'g2l3', title: 'Les activités économiques', pages: '64-65',
            summary: [
              "Au Sénégal, on pratique : l'agriculture, l'élevage, la pêche, l'industrie, le commerce, le tourisme, l'artisanat, les services…",
              "L'agriculture : surtout dans le bassin arachidier, la vallée du fleuve et la Casamance.",
              "L'élevage extensif : surtout dans la zone sylvopastorale (Linguère, Podor, Ranérou). L'élevage intensif se développe avec des fermes modernes.",
              "Le tourisme et la pêche : surtout dans les régions côtières (Dakar, Saint-Louis, Thiès, Fatick, Ziguinchor). L'industrie : surtout à l'Ouest.",
              "Le commerce, l'artisanat et les services emploient beaucoup de monde, mais restent dominés par l'informel."
            ],
            questions: [
              qcm(1, "Quelle est la principale activité du bassin arachidier ?", "L'agriculture", ["Le tourisme", "La pêche", "L'élevage"], "Exercice du livre (p. 65)."),
              qcm(1, "Quelle est la principale activité de la zone sylvopastorale ?", "L'élevage", ["L'agriculture", "La pêche", "Le tourisme"], "Exercice du livre (p. 65)."),
              rel(2, "Relie chaque département à son activité dominante.", [["Mbour", "Tourisme"], ["Linguère", "Élevage"], ["Nioro", "Agriculture"]], "Exercice du livre (p. 65)."),
              multi(1, "Cite des activités économiques pratiquées au Sénégal.", ["L'agriculture", "La pêche", "Le tourisme", "L'artisanat"], ["La chasse aux mammouths"], "Liste du « Je retiens »."),
              qcm(2, "Dans quelle partie du pays les industries sont-elles concentrées ?", "À l'Ouest", ["À l'Est", "Au Sud-Est", "Au Nord-Est"], "Les activités industrielles sont surtout dans la partie Ouest."),
              vf(2, "Le tourisme et la pêche sont développés dans les régions côtières.", true, "Dakar, Saint-Louis, Thiès, Fatick, Ziguinchor."),
              qcm(2, "Qu'est-ce qu'un forail ?", "Un marché de bétail", ["Un bateau de pêche", "Une usine d'huile", "Un hôtel"], "Image « Un forail du Sénégal » (p. 64)."),
              comp(3, "Le commerce, l'artisanat et les services sont dominés par l'___.", "informel", ["industrie", "État", "étranger"], "Le secteur informel domine."),
              trou(3, "Comment appelle-t-on les ressources issues de la pêche ?", ["ressources halieutiques", "halieutiques"], "Lexique : ressources halieutiques."),
              qcm(3, "Quels départements forment la zone sylvopastorale citée par le livre ?", "Linguère, Podor et Ranérou", ["Dakar, Pikine et Rufisque", "Mbour, Fatick et Foundiougne", "Ziguinchor, Bignona et Oussouye"], "Zone d'élevage extensif.")
            ]
          }
        ]
      },
      {
        id: 'g3', title: "L'habitat et les ressources du milieu", palier: 2,
        lessons: [
          {
            id: 'g3l1', title: "Les ressources et les types d'habitation", pages: '78-79',
            summary: [
              "Pour s'abriter en sécurité, l'homme aménage un cadre de vie.",
              "Au Sénégal, les types d'habitation sont : la case, la baraque, la maison (en tuiles, en terrasse, en tôles, à étages), l'immeuble.",
              "Matériaux : paille, tiges de mil, planches en bois, argile, sable, fer, ciment, bambou, tuiles, graviers, tôle en zinc, fibrociment, béton, carreaux…"
            ],
            questions: [
              qcm(1, "Une baraque est construite avec :", "Des planches en bois", ["Des tiges de mil", "Du ciment et du fer", "De la glace"], "Exercice du livre (p. 79)."),
              multi(2, "Quelles ressources servent à construire un immeuble ?", ["Le ciment", "Les carreaux"], ["La paille", "Le bambou"], "L'immeuble utilise des matériaux industriels."),
              rel(2, "Relie chaque habitation à une ressource correspondante.", [["Case", "Paille"], ["Baraque", "Bois"], ["Immeuble", "Béton"]], "Exercice du livre (p. 79)."),
              multi(1, "Quels sont des types d'habitation au Sénégal ?", ["La case", "La baraque", "L'immeuble", "La maison à étages"], ["L'igloo"], "Liste du « Je retiens »."),
              vf(1, "Une case peut être construite en paille.", true, "Il existe des cases en paille et en banco."),
              comp(2, "La tôle en ___ sert à faire des toitures.", "zinc", ["paille", "argile", "sable"], "Tôle en zinc."),
              qcm(2, "Qu'est-ce que le banco ?", "Un mélange de terre (argile) pour construire", ["Une sorte de fer", "Du verre", "Une tuile en plastique"], "La case en banco est en terre."),
              trou(3, "Quel arbre fournit des tiges et des feuilles pour les palissades ?", ["rônier", "le rônier", "ronier"], "Case avec palissade en tiges de rônier.")
            ]
          },
          {
            id: 'g3l2', title: "L'habitat en milieu rural", pages: '90-91',
            summary: [
              "En milieu rural, les habitations les plus courantes sont des cases en paille, en banco, en tiges de mil ou de bambou, en feuilles de rôniers…",
              "La nature des activités (agriculture, élevage) et les ressources du milieu expliquent la diversité de ces habitats.",
              "Il existe une relation entre l'habitat et les ressources du milieu, même si on trouve de plus en plus de constructions en dur dans les villages.",
              "L'habitat rural est généralement dispersé."
            ],
            questions: [
              qcm(1, "Quel type d'habitation trouve-t-on le plus souvent en milieu rural ?", "La case", ["L'immeuble", "Le bâtiment en terrasse", "La villa à étages"], "Exercice du livre (p. 91)."),
              multi(1, "Quelles ressources sont les plus utilisées en milieu rural ?", ["La paille", "La feuille de rônier"], ["Le carreau", "Le ciment", "La tuile"], "Exercice du livre (p. 91)."),
              rel(2, "Relie chaque habitat à son type.", [["Habitat rural", "Dispersé"], ["Habitat urbain", "Groupé"]], "Autoévaluation (p. 132)."),
              vf(2, "On trouve de plus en plus de constructions en dur dans les villages.", true, "Le « Je retiens » le précise."),
              vf(1, "Les ressources du milieu n'ont aucun lien avec l'habitat.", false, "Il existe une relation entre types d'habitat et ressources."),
              comp(2, "Les activités comme l'agriculture et l'___ expliquent la diversité des habitats ruraux.", "élevage", ["industrie", "aviation", "informatique"], "Agriculture et élevage."),
              trou(3, "L'habitat rural est-il groupé ou dispersé ?", ["dispersé", "disperse"], "Corrigé du livre : habitat rural → dispersé.")
            ]
          },
          {
            id: 'g3l3', title: "L'habitat en milieu urbain", pages: '100-101',
            summary: [
              "L'habitat urbain est en général groupé à cause du manque d'espace et de la forte densité.",
              "Les habitations les plus fréquentes : villas, appartements, immeubles, maisons en dur.",
              "Elles sont construites avec des ressources ayant subi une transformation industrielle : ciment, fer, zinc, carreau, tuile, fibrociment…",
              "Chaque type d'habitation fait appel à des ressources appropriées."
            ],
            questions: [
              qcm(1, "Dans le milieu urbain, le type d'habitat le plus fréquent est :", "L'habitat groupé", ["L'habitat dispersé", "Les grottes", "Les huttes"], "Exercice du livre (p. 101)."),
              multi(1, "Que trouve-t-on fréquemment dans les villes ?", ["Des maisons à étages", "Des immeubles"], ["Des clôtures en tiges de mil", "Des cases en banco"], "Exercice du livre (p. 101)."),
              multi(2, "Quelles ressources sont utilisées dans l'habitat urbain ?", ["Le ciment", "Le carreau", "La tuile"], ["La paille", "Les tiges de bambou"], "Exercice du livre (p. 101)."),
              qcm(2, "Pourquoi l'habitat urbain est-il groupé ?", "Manque d'espace et forte densité", ["Il fait trop chaud", "Il n'y a pas de route", "Les villes sont dans le désert"], "Le « Je retiens » l'explique."),
              vf(2, "Les ressources de l'habitat urbain ont souvent subi une transformation industrielle.", true, "Ciment, fer, zinc, carreau…"),
              comp(1, "En ville, on trouve des villas, des appartements et des ___.", "immeubles", ["huttes", "grottes", "cases en paille"], "Habitations urbaines."),
              trou(3, "Cite un matériau industriel utilisé pour construire en ville (un seul mot).", ["ciment", "fer", "zinc", "carreau", "tuile", "fibrociment", "béton", "carreaux", "tuiles"], "Ciment, fer, zinc, carreau, tuile, fibrociment…")
            ]
          },
          {
            id: 'g3l4', title: 'Les caractéristiques du milieu', pages: '110-112',
            summary: [
              "Nord : plaine ; harmattan, région chaude ; fleuve Sénégal, lac de Guiers ; densité faible.",
              "Sud : plaine et collines ; mousson, chaude et pluvieuse ; fleuve Casamance ; densité faible.",
              "Est : falaise de Matam et plaine ; harmattan ; fleuve Sénégal ; densité faible.",
              "Ouest : collines, plateau, massif, plaine ; alizé maritime, climat doux et frais ; océan Atlantique, lacs Rose et Tanma ; forte densité.",
              "Centre : plaine ; chaude, influence de l'harmattan ; bras de mer (Sine et Saloum) ; densité moyenne."
            ],
            questions: [
              qcm(1, "Quelle partie du Sénégal a la plus forte densité ?", "L'Ouest", ["Le Nord", "L'Est", "Le Sud"], "Tableau du « Je retiens » (p. 112)."),
              qcm(2, "Quelle est la densité de population du Centre ?", "Moyenne", ["Forte", "Faible", "Nulle"], "Le Centre a une densité moyenne."),
              rel(2, "Relie chaque zone à son cours d'eau.", [["Nord", "Fleuve Sénégal et lac de Guiers"], ["Sud", "Fleuve Casamance"], ["Centre", "Sine et Saloum"], ["Ouest", "Océan Atlantique, lacs Rose et Tanma"]], "Tableau (p. 112)."),
              rel(2, "Relie chaque zone au vent dominant.", [["Ouest", "Alizé maritime"], ["Sud", "Mousson"], ["Nord", "Harmattan"]], "Tableau (p. 112)."),
              vf(2, "Le Sud est une région chaude et pluvieuse.", true, "Influence de la mousson."),
              vf(1, "L'Est a une forte densité de population.", false, "L'Est a une densité faible."),
              comp(3, "À l'Ouest, le climat est doux et frais grâce à l'influence de la ___.", "mer", ["montagne", "forêt", "falaise"], "Alizé maritime."),
              trou(3, "Quel élément de relief caractérise l'Est (avec la plaine) ?", ["falaise de matam", "falaises de matam", "la falaise de matam", "falaise", "falaises"], "La falaise de Matam.")
            ]
          },
          {
            id: 'g3l5', title: "L'habitat et les caractéristiques du milieu", pages: '124-125',
            summary: [
              "Les types d'habitat sont fortement liés aux caractéristiques du milieu.",
              "En zone côtière, il faut tenir compte de l'humidité, de la fraîcheur et de la salinité : l'aluminium et le bois sont plus adaptés que le fer.",
              "Dans les zones chaudes, les constructions en banco sont plus adaptées que celles en ciment, qui emmagasinent beaucoup de chaleur."
            ],
            questions: [
              multi(1, "Yacine habite à côté de la plage. Quels matériaux sont adaptés pour ses portes ?", ["Le bois", "L'aluminium"], ["Le fer"], "Près de la mer, le fer rouille ; bois et aluminium sont adaptés."),
              qcm(2, "Pourquoi le fer est-il peu adapté près de la mer ?", "L'humidité et le sel le font rouiller", ["Il est trop léger", "Il fond au soleil", "Il attire les poissons"], "Humidité et salinité du milieu côtier."),
              qcm(2, "Dans les zones chaudes (ex. Matam), quelle construction est la plus adaptée ?", "La construction en banco", ["La construction en ciment", "La construction en tôle", "La construction en verre"], "Le ciment emmagasine beaucoup de chaleur."),
              vf(2, "Le ciment emmagasine une grande quantité de chaleur.", true, "C'est pourquoi le banco est préféré en zone chaude."),
              vf(1, "Kalidou passe la journée dans la case en paille car elle est plus fraîche.", true, "La paille garde la fraîcheur à Sinthiou Mbal (Matam)."),
              comp(3, "En zone côtière, il faut tenir compte de l'humidité, de la fraîcheur et de la ___.", "salinité", ["sécheresse", "neige", "altitude"], "Humidité, fraîcheur et salinité."),
              trou(3, "Quel métal léger, qui ne rouille pas, est conseillé près de la mer ?", ["aluminium", "l'aluminium", "alu"], "L'aluminium est adapté aux zones côtières.")
            ]
          }
        ]
      }
    ]
  };

  /* =================================================================
     INITIATION SCIENTIFIQUE ET TECHNOLOGIQUE
     ================================================================= */
  const ist = {
    id: 'ist', name: 'Sciences et Technologie', icon: '🔬', color: '#c2410c',
    chapters: [
      {
        id: 's1', title: 'Les objets technologiques', palier: 1,
        lessons: [
          {
            id: 's1l1', title: 'Le levier et la poulie', pages: '18-19',
            summary: [
              "Un levier est une barre rigide qui peut tourner autour d'un point fixe appelé pivot ou point d'appui.",
              "Ses parties : le point d'appui, le bras de levier, la charge et l'effort. Le levier multiplie la force appliquée sur le bras long.",
              "Plus la charge est éloignée du point d'appui, plus la force à appliquer est importante.",
              "Outils-leviers : tenailles, brouette, pied de biche, ouvre-bouteille, pince…",
              "Une poulie est une petite roue qui porte sur sa jante une corde, un câble ou une chaîne. Elle sert à soulever des charges (puits, chantiers)."
            ],
            questions: [
              qcm(1, "Comment s'appelle le point fixe autour duquel tourne un levier ?", "Le point d'appui (pivot)", ["La charge", "La jante", "Le câble"], "Le levier tourne autour du pivot."),
              qcm(1, "Qu'est-ce qu'une poulie ?", "Une petite roue qui porte une corde sur sa jante", ["Une barre rigide", "Un moteur", "Une lampe"], "Définition du livre (p. 19)."),
              multi(2, "Quels outils fonctionnent comme des leviers ?", ["Les tenailles", "La brouette", "La pince"], ["Le marteau", "La scie"], "Exercice du livre (p. 19)."),
              vf(2, "Plus la charge est éloignée du point d'appui, plus la force à appliquer est importante.", true, "C'est ce que dit le livre."),
              vf(2, "Si l'objet est proche du point d'appui, la force à appliquer est plus grande.", false, "Proche du point d'appui → force MOINS importante."),
              qcm(2, "Où utilise-t-on souvent une poulie ?", "Au puits et sur les chantiers", ["Dans un ordinateur", "Dans une lampe de poche", "Dans un réfrigérateur"], "Pour soulever des charges."),
              comp(1, "Le levier multiplie la force appliquée sur le bras ___.", "long", ["court", "cassé", "rond"], "La force est démultipliée sur le bras long."),
              multi(3, "Quelles sont les parties d'un levier ?", ["Le point d'appui", "La charge", "L'effort", "Le bras de levier"], ["L'ampoule"], "Schéma du levier (p. 18)."),
              trou(3, "Comment appelle-t-on la barre rigide mobile autour d'un point fixe ?", ["levier", "un levier", "le levier"], "C'est un levier.")
            ]
          },
          {
            id: 's1l2', title: 'La lampe de poche et la brouette', pages: '30-31 et 44-45',
            summary: [
              "La lampe de poche est un objet d'éclairage portable. Parties : boîtier, interrupteur, tête, réflecteur, lentille, couvercle, piles, ampoule.",
              "Fonctionnement : les piles (source d'énergie) alimentent un circuit relié à l'ampoule. L'interrupteur ouvre ou ferme le circuit.",
              "Circuit fermé → la lampe s'allume. Circuit ouvert → la lampe s'éteint.",
              "La brouette est un outil-levier pour déplacer des objets lourds. Parties : benne, brancards, poignées, roue, essieu, pieds.",
              "Pour l'utiliser : placer la charge près de la roue, tenir les poignées, soulever, puis pousser en équilibre."
            ],
            questions: [
              qcm(1, "Quelle partie permet d'allumer ou d'éteindre la lampe de poche ?", "L'interrupteur", ["Le boîtier", "Le couvercle", "La tête"], "Corrigé du livre (p. 139)."),
              qcm(1, "Quand le circuit est fermé :", "La lampe s'allume", ["La lampe s'éteint", "Les piles fondent", "La lampe explose"], "Corrigé du livre."),
              qcm(2, "Quelle partie de la brouette contient l'objet transporté ?", "La benne", ["La roue", "Le pied", "L'essieu"], "La benne reçoit la charge."),
              multi(1, "Quelles sont des parties de la lampe de poche ?", ["Le boîtier", "L'ampoule", "Les piles", "Le réflecteur"], ["La benne"], "La benne appartient à la brouette."),
              multi(2, "Quelles sont des parties de la brouette ?", ["La roue", "Les brancards", "Les poignées", "La benne"], ["La lentille"], "La lentille appartient à la lampe."),
              ord(2, "Range les étapes pour utiliser une brouette.", ["Placer la charge dans la benne près de la roue", "Tenir les poignées", "Soulever la brouette", "Pousser en gardant l'équilibre"], "Étapes du livre (p. 45)."),
              ord(3, "Range les étapes pour faire fonctionner une lampe de poche.", ["Insérer les piles dans le boîtier", "Bien disposer les piles", "Visser l'ampoule", "Refermer le boîtier", "Pousser l'interrupteur"], "Étapes du livre (p. 45)."),
              vf(2, "La brouette est un outil-levier.", true, "Elle multiplie la force pour soulever de lourdes charges."),
              vf(1, "Quand le circuit est ouvert, la lampe s'allume.", false, "Circuit ouvert = lampe éteinte."),
              comp(2, "Dans la lampe, la source d'énergie est la ___.", "pile", ["benne", "lentille", "roue"], "Piles ou batterie."),
              trou(3, "Pour soulever plus facilement, où place-t-on la charge dans la brouette ? (près de la…)", ["roue", "la roue"], "Le plus près possible de la roue.")
            ]
          },
          {
            id: 's1l3', title: "L'ordinateur", pages: '38-39 et 52-53',
            summary: [
              "Il existe deux types d'ordinateurs : l'ordinateur fixe et l'ordinateur portable.",
              "Parties principales : l'unité centrale, l'écran (moniteur) et le clavier.",
              "Un périphérique est un élément connecté à l'unité centrale : souris, imprimante, modem, clé USB, microphone…",
              "L'écran permet de visualiser les données ; l'unité centrale stocke et traite les données.",
              "Pour l'allumer : relier l'unité centrale à l'écran, brancher sur l'énergie, allumer l'écran, allumer l'unité centrale."
            ],
            questions: [
              multi(1, "Quelles sont les parties principales d'un ordinateur ?", ["L'unité centrale", "L'écran", "Le clavier"], ["Le courant", "La rallonge", "Internet"], "Corrigé du livre (p. 139)."),
              qcm(1, "Quels sont les deux types d'ordinateurs ?", "Fixe et portable", ["Rond et carré", "Rouge et bleu", "Petit et géant"], "Ordinateur fixe et ordinateur portable."),
              qcm(2, "Quelle partie stocke et traite les données ?", "L'unité centrale", ["L'écran", "La souris", "Le haut-parleur"], "L'unité centrale est le « cerveau »."),
              qcm(2, "Comment appelle-t-on la souris ou l'imprimante branchées à l'unité centrale ?", "Des périphériques", ["Des piles", "Des leviers", "Des moteurs"], "Tout élément connecté à l'unité centrale est un périphérique."),
              ord(2, "Range les étapes pour allumer un ordinateur.", ["Relier l'unité centrale à l'écran", "Relier à la source d'énergie", "Allumer l'écran", "Allumer l'unité centrale", "Commencer le travail"], "Étapes du livre (p. 53)."),
              vf(2, "Un ordinateur peut fonctionner sans source d'énergie.", false, "Il faut le brancher à l'énergie."),
              vf(1, "L'écran permet de visualiser les données.", true, "C'est son rôle."),
              rel(2, "Relie chaque partie à sa fonction.", [["Écran", "Visualiser les données"], ["Unité centrale", "Stocker et traiter les données"], ["Clavier", "Saisir du texte"]], "Fonctions des parties de l'ordinateur."),
              comp(3, "La clé USB est un ___ de l'ordinateur.", "périphérique", ["moteur", "levier", "réflecteur"], "Elle se branche à l'unité centrale."),
              trou(3, "Quel autre nom donne-t-on à l'écran de l'ordinateur ?", ["moniteur", "le moniteur"], "Écran = moniteur.")
            ]
          },
          {
            id: 's1l4', title: 'Le moteur à explosion', pages: '58-59',
            summary: [
              "Le moteur à explosion fonctionne en 4 temps.",
              "1er temps – l'admission : le mélange carburant-air arrive, le piston descend, la soupape d'admission s'ouvre.",
              "2e temps – la compression : le piston comprime le mélange, la soupape se ferme.",
              "3e temps – la combustion (explosion) : le mélange rencontre l'étincelle produite par la bougie.",
              "4e temps – l'échappement : les gaz s'échappent par la soupape d'échappement, le piston remonte.",
              "Parties : soupapes, piston, bielle, cylindre, chambre de combustion, bougie, vilebrequin."
            ],
            questions: [
              qcm(1, "Combien de temps comporte le fonctionnement d'un moteur à explosion ?", "4 temps", ["1 temps", "2 temps", "3 temps"], "Admission, compression, combustion, échappement."),
              ord(1, "Range les 4 temps du moteur dans l'ordre.", ["L'admission", "La compression", "La combustion", "L'échappement"], "Exercice du livre (p. 59)."),
              qcm(2, "Que se passe-t-il au troisième temps ?", "Le mélange rencontre l'étincelle produite par la bougie", ["Le mélange carburant-air arrive", "La soupape se ferme et le piston comprime", "Les gaz s'échappent"], "Exercice du livre (p. 59)."),
              qcm(2, "Quelle pièce produit l'étincelle ?", "La bougie", ["Le piston", "La bielle", "Le cylindre"], "La bougie produit l'étincelle."),
              rel(2, "Relie chaque temps à ce qui se passe.", [["Admission", "Arrivée du mélange carburant-air"], ["Compression", "Le piston comprime le mélange"], ["Combustion", "Étincelle de la bougie"], ["Échappement", "Les gaz sortent, le piston remonte"]], "Tableau du « Je retiens » (p. 59)."),
              multi(2, "Quelles sont des parties du moteur à explosion ?", ["Le piston", "La bielle", "Le vilebrequin", "La bougie"], ["Le clavier", "La benne"], "Schéma du moteur (p. 58)."),
              vf(2, "Pendant l'admission, le piston descend.", true, "La soupape d'admission s'ouvre et le piston descend."),
              vf(1, "Au 4e temps, le piston remonte et les gaz s'échappent.", true, "C'est l'échappement."),
              comp(3, "Le mélange entre par la soupape d'___.", "admission", ["échappement", "explosion", "arrivée"], "Soupape d'admission."),
              trou(3, "Comment s'appelle le 2e temps du moteur ?", ["compression", "la compression"], "Le 2e temps est la compression.")
            ]
          },
          {
            id: 's1l5', title: 'Démonter et assembler un objet', pages: '62-63 et 66-67',
            summary: [
              "Démonter un objet consiste à séparer ses différentes parties sans les détériorer : on va de l'objet vers les parties.",
              "Actions pour démonter : dévisser, décoller, détacher, desserrer…",
              "Outils : le tournevis, la clé à molette, la clé Allen, la pince universelle, la clé à roue…",
              "Assembler, c'est partir des parties vers le tout : remettre chaque partie à sa place par vissage, serrage, collage…",
              "Un vélo se compose d'un cadre, d'un guidon, d'une selle, de roues, d'un porte-bagages…"
            ],
            questions: [
              qcm(1, "Démonter un objet, c'est :", "Aller de l'objet vers les parties", ["Aller des parties vers l'objet", "Casser l'objet", "Peindre l'objet"], "Exercice du livre (p. 63)."),
              qcm(1, "Quand je pars des parties pour obtenir l'objet :", "J'assemble", ["Je démonte", "Je casse", "Je mesure"], "Exercice du livre (p. 67)."),
              multi(1, "Quelles actions permettent de démonter ?", ["Dévisser", "Décoller", "Détacher"], ["Visser", "Coller", "Serrer"], "Exercice du livre (p. 63)."),
              multi(1, "Quelles actions permettent d'assembler ?", ["Coller", "Visser", "Serrer"], ["Dévisser", "Décoller", "Desserrer"], "Exercice du livre (p. 67)."),
              multi(2, "Quels outils permettent de démonter ?", ["Un tournevis", "Une clé à roue"], ["Une règle", "Un stylo"], "Exercice du livre (p. 63)."),
              multi(2, "Quelles actions permettent de démonter une lampe de poche ?", ["Enlever le couvercle", "Démonter la pile"], ["Replacer les piles", "Visser la tête"], "Exercice du livre (p. 67)."),
              vf(2, "Démonter, c'est séparer les parties sans les détériorer.", true, "Définition du livre."),
              multi(2, "Quelles sont des parties d'un vélo ?", ["La selle", "Le guidon", "Le cadre", "Le porte-bagages"], ["Le réflecteur de lampe"], "Image du vélo (p. 66)."),
              comp(3, "La clé ___ est un outil utilisé pour démonter.", "Allen", ["USB", "de sol", "de voûte"], "Tournevis, clé à molette, clé Allen, pince universelle."),
              trou(3, "Comment appelle-t-on l'action contraire de démonter ?", ["assembler", "monter", "l'assemblage"], "Assembler (ou monter).")
            ]
          }
        ]
      },
      {
        id: 's2', title: 'Les phénomènes physiques et chimiques', palier: 2,
        lessons: [
          {
            id: 's2l1', title: "L'air et ses propriétés", pages: '76-77',
            summary: [
              "L'air est indispensable à la vie de l'homme, des animaux et des plantes.",
              "Il est surtout formé de deux gaz : l'azote et l'oxygène. Il contient aussi un peu de gaz carbonique et de vapeur d'eau.",
              "Propriétés physiques : il se déplace, il est compressible et élastique, il a une masse (1 litre d'air pèse 1,3 g).",
              "Propriétés chimiques : c'est un gaz invisible, incolore, inodore.",
              "La poussée de l'air sur les solides et les liquides s'appelle la pression atmosphérique."
            ],
            questions: [
              qcm(1, "L'air est :", "Un gaz", ["Un solide", "Un liquide", "Un métal"], "Exercice du livre (p. 77)."),
              multi(1, "Quels éléments composent l'air ?", ["L'oxygène", "L'azote", "Le gaz carbonique", "La vapeur d'eau"], ["Le butane", "Le gasoil"], "Exercice du livre (p. 77)."),
              rel(2, "Relie chaque propriété de l'air au terme qui la désigne.", [["L'air peut être comprimé", "Compressible"], ["L'air a une masse", "Pesant"], ["L'air occupe tous les espaces vides", "Expansible"], ["L'air peut changer de forme", "Élastique"]], "Exercice du livre (p. 77)."),
              qcm(2, "Comment s'appelle la poussée de l'air sur les solides et les liquides ?", "La pression atmosphérique", ["L'évaporation", "La dilatation", "La combustion vive"], "Exercice du livre (p. 77)."),
              qcm(2, "Combien pèse 1 litre d'air ?", "1,3 g", ["13 kg", "1 kg", "0 g"], "L'air a une masse : 1 litre pèse 1,3 g."),
              vf(1, "L'air a une couleur et une odeur.", false, "L'air est incolore et inodore."),
              vf(2, "Un ballon gonflé pèse plus lourd qu'un ballon dégonflé.", true, "L'air a une masse (expérience de la balance)."),
              comp(2, "L'air est surtout formé d'azote et d'___.", "oxygène", ["hélium", "butane", "eau"], "Deux gaz principaux."),
              calc(2, "1 litre d'air pèse 1,3 g. Combien pèsent 10 litres d'air (en g) ?", 13, "1,3 × 10 = 13 g."),
              trou(3, "Quelle propriété : l'air peut être comprimé. Il est…", ["compressible"], "L'air est compressible.")
            ]
          },
          {
            id: 's2l2', title: 'Les états de la matière', pages: '82-83',
            summary: [
              "La matière se présente sous trois états : solide, liquide et gazeux.",
              "Solide : forme propre et volume propre (bois, fer, sucre, caillou, bille, craie).",
              "Liquide : il s'écoule et prend la forme du récipient ; sa surface est toujours horizontale (eau, pétrole, huile, lait).",
              "Gazeux : invisible, sans forme propre, il se répand ; il est expansible et élastique (air, butane, propane).",
              "Changements d'état : fusion (solide → liquide), solidification (liquide → solide), évaporation (liquide → gaz), condensation (gaz → liquide)."
            ],
            questions: [
              qcm(1, "Combien d'états de la matière existe-t-il ?", "3", ["2", "4", "5"], "Solide, liquide, gazeux."),
              qcm(1, "La fusion, c'est le passage :", "De l'état solide à l'état liquide", ["De l'état liquide à l'état solide", "De l'état liquide à l'état gazeux", "Du gaz au liquide"], "Exercice du livre (p. 83)."),
              qcm(2, "À l'état solide, la matière a :", "Une forme propre et un volume propre", ["Une forme propre et pas de volume", "Pas de forme propre mais un volume", "Ni forme ni volume"], "Exercice du livre (p. 83)."),
              rel(2, "Range chaque corps selon son état.", [["Eau", "Liquide"], ["Essence", "Liquide"], ["Or", "Solide"], ["Bois", "Solide"], ["Air", "Gaz"], ["Butane", "Gaz"]], "Exercice du livre (p. 83)."),
              rel(2, "Relie chaque changement d'état à sa définition.", [["Fusion", "Solide → liquide"], ["Solidification", "Liquide → solide"], ["Évaporation", "Liquide → gaz"], ["Condensation", "Gaz → liquide"]], "Schéma du livre (p. 83)."),
              vf(1, "Un solide a une forme propre.", true, "Exercice du livre."),
              vf(1, "Un liquide a une forme propre.", false, "Il prend la forme du récipient."),
              vf(2, "Le gaz est compressible.", true, "Exercice du livre."),
              qcm(2, "Anna laisse une marmite d'eau sur le feu ; elle revient et la marmite est vide. Pourquoi ?", "L'eau s'est évaporée", ["L'eau s'est solidifiée", "L'eau s'est condensée", "L'eau a fondu"], "La chaleur transforme l'eau en vapeur."),
              comp(2, "La surface d'un liquide au repos est toujours ___.", "horizontale", ["verticale", "ronde", "penchée"], "« Je retiens » (p. 82)."),
              trou(3, "Comment s'appelle le passage de l'état liquide à l'état solide ?", ["solidification", "la solidification"], "L'eau qui devient glace : solidification.")
            ]
          },
          {
            id: 's2l3', title: "Le cycle de l'eau", pages: '88-89',
            summary: [
              "Le cycle de l'eau repose sur trois mécanismes : l'évaporation, la condensation et la précipitation.",
              "Sous l'action du soleil, l'eau s'évapore et monte vers l'atmosphère : c'est l'évaporation.",
              "Dans l'air froid, la vapeur se condense en gouttelettes et forme des nuages : c'est la condensation.",
              "Les gouttelettes s'alourdissent et retombent : c'est la précipitation (pluie).",
              "Une partie de l'eau s'infiltre dans le sol (nappe phréatique), l'autre ruisselle vers les cours d'eau."
            ],
            questions: [
              qcm(1, "Quand l'eau est chauffée, elle :", "S'évapore", ["Se condense", "Se solidifie", "Devient du sable"], "Exercice du livre (p. 89)."),
              qcm(2, "Il y a formation de nuages lorsque :", "La vapeur d'eau se condense", ["L'eau s'évapore", "L'eau ruisselle", "Les gouttelettes tombent"], "Exercice du livre (p. 89)."),
              multi(2, "Au sol, que fait l'eau de pluie ?", ["Elle s'infiltre", "Elle ruisselle", "Elle s'évapore"], ["Elle se condense", "Elle se solidifie"], "Exercice du livre (p. 89)."),
              ord(1, "Range les étapes du cycle de l'eau.", ["L'évaporation", "La condensation", "La pluie", "Le ruissellement"], "Exercice du livre (p. 89)."),
              vf(1, "C'est le soleil qui fait évaporer l'eau.", true, "Sous l'action du soleil, l'eau s'évapore."),
              vf(2, "L'eau qui s'infiltre forme la nappe phréatique.", true, "Elle alimente les végétaux et la nappe."),
              comp(2, "Les gouttelettes s'alourdissent et tombent : c'est la ___.", "précipitation", ["condensation", "évaporation", "fusion"], "Pluie, neige… sont des précipitations."),
              rel(3, "Relie chaque mot à son explication.", [["Évaporation", "L'eau monte vers l'atmosphère"], ["Condensation", "La vapeur forme des gouttelettes"], ["Précipitation", "L'eau retombe sur la terre"], ["Ruissellement", "L'eau coule vers les cours d'eau"]], "« Je retiens » (p. 89)."),
              trou(3, "Comment s'appelle l'eau souterraine provenant des infiltrations ?", ["nappe phréatique", "la nappe phréatique", "nappe phreatique"], "Lexique : nappe phréatique.")
            ]
          },
          {
            id: 's2l4', title: 'Les combustions', pages: '94-95',
            summary: [
              "Les combustibles sont des corps qui peuvent brûler : solides (bois, charbon de bois, papier…), liquides (essence, pétrole, gasoil…), gazeux (butane, propane…).",
              "Ce qui se produit quand un corps brûle est une combustion.",
              "Combustion vive : le corps brûle en produisant chaleur et lumière (un bois qui brûle).",
              "Combustion lente : la rouille, action de l'oxygène de l'air sur le métal (oxydation). Elle détériore le métal.",
              "Pour éviter la rouille, on recouvre les métaux de peinture antirouille."
            ],
            questions: [
              qcm(1, "Un corps qui peut brûler est :", "Un combustible", ["Une combustion", "Un liquide", "Un solide"], "Corrigé du livre (p. 141)."),
              rel(1, "Range chaque combustible dans la bonne colonne.", [["Essence", "Liquide"], ["Pétrole", "Liquide"], ["Papier", "Solide"], ["Charbon de bois", "Solide"], ["Butane", "Gazeux"]], "Exercice du livre (p. 95)."),
              vf(1, "L'eau est un combustible liquide.", false, "L'eau ne brûle pas."),
              vf(2, "L'oxygène favorise la combustion lente.", true, "La rouille est due à l'oxygène de l'air."),
              vf(2, "Une combustion lente dégage de la lumière.", false, "La combustion lente ne dégage ni chaleur vive ni lumière."),
              vf(1, "Le charbon de bois est un combustible solide.", true, "Exercice du livre."),
              rel(2, "Relie chaque expression au bon terme.", [["Un corps qui peut brûler", "Combustible"], ["Ce qui se produit quand un corps brûle", "Combustion"], ["Combustion avec chaleur et lumière", "Combustion vive"], ["Combustion sans chaleur ni lumière", "Combustion lente"]], "Exercice du livre (p. 95)."),
              qcm(2, "Pourquoi le peintre peint-il la porte en fer ?", "Pour éviter la rouille", ["Pour la faire brûler", "Pour la rendre transparente", "Pour qu'elle fonde"], "La peinture antirouille protège le métal."),
              comp(3, "La rouille est aussi appelée l'___ du métal.", "oxydation", ["évaporation", "fusion", "admission"], "Action de l'oxygène sur le métal."),
              trou(3, "Cite un combustible gazeux.", ["butane", "propane", "le butane", "le propane", "gaz butane"], "Butane, propane…")
            ]
          },
          {
            id: 's2l5', title: 'Les types de sols et la perméabilité', pages: '98-99',
            summary: [
              "Les sols varient selon la taille et la nature de leurs particules.",
              "Sols sableux : très perméables, très poreux, légers ; ils ne retiennent pas l'eau.",
              "Sols argileux : lourds et compacts, aux particules collées ; ils sont imperméables.",
              "Sols humifères : riches en humus (matières organiques) ; plus perméables que les sols argileux et moins que les sols sableux."
            ],
            questions: [
              ord(1, "Classe ces sols du plus perméable au moins perméable.", ["Sol sableux", "Sol humifère", "Sol argileux"], "Exercice du livre (p. 99)."),
              rel(2, "Relie chaque sol à sa caractéristique.", [["Sol sableux", "Poreux et léger"], ["Sol argileux", "Lourd et compact"], ["Sol humifère", "Formé de matières organiques"]], "Exercice du livre (p. 99)."),
              qcm(1, "Quel sol ne retient pas l'eau ?", "Le sol sableux", ["Le sol argileux", "Le sol humifère", "Le béton"], "Il est très perméable."),
              qcm(2, "Quel sol est imperméable ?", "Le sol argileux", ["Le sol sableux", "Le sol humifère", "Le gravier"], "Ses particules restent collées."),
              vf(2, "Le sol humifère est plus perméable que le sol argileux.", true, "Mais moins que le sol sableux."),
              vf(1, "Le sol sableux est lourd et compact.", false, "C'est le sol argileux qui est lourd et compact."),
              comp(2, "Le sol humifère est riche en ___.", "humus", ["sel", "fer", "sable"], "Humus = matières organiques."),
              trou(3, "Comment appelle-t-on un sol qui laisse passer l'eau ?", ["perméable", "permeable", "un sol perméable"], "Un sol perméable laisse passer l'eau.")
            ]
          }
        ]
      },
      {
        id: 's3', title: 'Les structures et fonctions biologiques', palier: 2,
        lessons: [
          {
            id: 's3l1', title: "L'appareil respiratoire et la respiration", pages: '108-109',
            summary: [
              "La respiration est une fonction indispensable à la vie. Elle comprend deux moments : l'inspiration (entrée de l'air) et l'expiration (sortie de l'air).",
              "Organes : les fosses nasales, la trachée-artère, les deux bronches et les deux poumons.",
              "L'air entre par les fosses nasales, passe dans la trachée-artère, puis dans les bronches, et arrive aux poumons.",
              "En inspirant, on absorbe de l'oxygène (produit surtout par les plantes). En expirant, on rejette du gaz carbonique.",
              "En cas d'asphyxie, on peut pratiquer la respiration artificielle (bouche-à-bouche)."
            ],
            questions: [
              comp(1, "Les deux moments de la respiration sont l'___ (entrée de l'air) et l'expiration.", "inspiration", ["évaporation", "admission", "infiltration"], "Exercice du livre (p. 109)."),
              qcm(1, "En inspirant :", "J'absorbe de l'oxygène", ["Je rejette du gaz carbonique", "J'absorbe du butane", "Je rejette de l'eau"], "Exercice du livre (p. 109)."),
              ord(2, "Range les étapes du trajet de l'air.", ["L'air entre par les narines", "L'air passe par la trachée-artère", "L'air passe par les bronches", "L'air arrive aux poumons"], "Exercice du livre (p. 109)."),
              rel(2, "Range chaque organe dans le bon appareil.", [["Estomac", "Digestion"], ["Œsophage", "Digestion"], ["Intestin grêle", "Digestion"], ["Poumons", "Respiration"], ["Bronches", "Respiration"], ["Trachée-artère", "Respiration"]], "Exercice du livre (p. 109)."),
              vf(1, "En expirant, on rejette du gaz carbonique.", true, "L'expiration rejette le gaz carbonique."),
              vf(2, "L'oxygène est produit principalement par les plantes.", true, "C'est pourquoi on respire un air pur au jardin."),
              qcm(2, "Que faire en cas d'asphyxie ?", "Pratiquer la respiration artificielle", ["Donner à manger", "Faire courir la personne", "Fermer les fenêtres"], "Bouche-à-bouche (image p. 108)."),
              multi(2, "Quels sont les organes de l'appareil respiratoire ?", ["Les fosses nasales", "La trachée-artère", "Les bronches", "Les poumons"], ["L'estomac"], "« Je retiens » (p. 108)."),
              trou(3, "Comment appelle-t-on la sortie de l'air des poumons ?", ["expiration", "l'expiration"], "C'est l'expiration."),
              calc(3, "On a 2 poumons et 2 bronches. Combien d'organes cela fait-il en tout ?", 4, "2 + 2 = 4.")
            ]
          },
          {
            id: 's3l2', title: "L'appareil circulatoire et la circulation sanguine", pages: '116-117',
            summary: [
              "L'appareil circulatoire comprend le cœur, les artères, les veines et les capillaires. Il transporte le sang dans tout l'organisme.",
              "Le cœur est le moteur de la circulation : il a deux oreillettes et deux ventricules (gauche et droit).",
              "Grande circulation : le sang quitte le cœur par une artère, chargé d'oxygène, et nourrit tout le corps. Il revient par une veine, chargé de gaz carbonique.",
              "Petite circulation : le sang chargé de déchets va du cœur aux poumons, reprend de l'oxygène et retourne au cœur.",
              "Les artères vont du cœur vers les organes ; les veines ramènent le sang au cœur ; les capillaires assurent les échanges avec les cellules."
            ],
            questions: [
              multi(1, "Quels organes interviennent dans la circulation sanguine ?", ["Le cœur", "Les artères", "Les veines"], ["Les bronches", "Les intestins", "Le nez"], "Exercice du livre (p. 117)."),
              rel(2, "Relie chaque vaisseau sanguin à sa fonction.", [["Les artères", "Transportent le sang du cœur vers les organes"], ["Les veines", "Transportent le sang vers le cœur"], ["Les capillaires", "Assurent les échanges entre le sang et les cellules"]], "Exercice du livre (p. 117)."),
              qcm(1, "Quel organe est le moteur de la circulation sanguine ?", "Le cœur", ["Le poumon", "Le foie", "L'estomac"], "Le cœur pompe le sang."),
              qcm(2, "Combien de ventricules le cœur possède-t-il ?", "2", ["1", "3", "4"], "Deux oreillettes et deux ventricules."),
              qcm(2, "Dans la petite circulation, le sang va du cœur vers :", "Les poumons", ["Les pieds", "L'estomac", "Le cerveau seulement"], "Il s'y débarrasse du gaz carbonique et reprend de l'oxygène."),
              ord(3, "Range les étapes de la circulation du sang (en partant de l'artère aorte).", ["Le sang sort du cœur par l'artère aorte", "Le sang revient au cœur par la veine cave", "Le sang sort du cœur vers les poumons", "Le sang revient au cœur par la veine pulmonaire"], "Grande circulation puis petite circulation."),
              vf(2, "Dans la grande circulation, le sang part du cœur chargé en oxygène.", true, "Il alimente organes et muscles."),
              vf(1, "Les veines transportent le sang du cœur vers les organes.", false, "Ce sont les ARTÈRES ; les veines ramènent le sang au cœur."),
              comp(3, "Le sang s'épure en passant dans le foie et les ___.", "reins", ["poumons", "os", "dents"], "« Je retiens » (p. 117)."),
              trou(3, "Comment appelle-t-on les petits vaisseaux qui font les échanges avec les cellules ?", ["capillaires", "les capillaires", "capillaire"], "Ce sont les capillaires.")
            ]
          },
          {
            id: 's3l3', title: 'La reproduction', pages: '122-123',
            summary: [
              "Pour donner naissance à un petit, il faut l'accouplement d'un mâle et d'une femelle de la même espèce : c'est la reproduction sexuée.",
              "Les vivipares mettent bas : les petits sortent vivants du ventre de la femelle (mammifères : moutons, chiens, baleines…).",
              "Les ovipares pondent des œufs (oiseaux, poissons, certains reptiles).",
              "Les ovovivipares ont des œufs qui éclosent dans le ventre de la femelle (exemple : la vipère)."
            ],
            questions: [
              rel(1, "Relie chaque terme à sa définition.", [["Ovipares", "Animaux qui pondent des œufs"], ["Vivipares", "Animaux qui mettent bas"], ["Ovovivipares", "Animaux dont les œufs éclosent dans le ventre"], ["Reproduction sexuée", "Accouplement entre un mâle et une femelle"]], "Exercice du livre (p. 123)."),
              rel(2, "Donne le mode de reproduction de chaque animal.", [["Le cheval", "Vivipare"], ["Le canard", "Ovipare"], ["Le margouillat", "Ovipare"], ["La souris", "Vivipare"], ["Le crocodile", "Ovipare"]], "Exercice du livre (p. 123)."),
              qcm(1, "Le zèbre met bas des petits vivants. Il est :", "Vivipare", ["Ovipare", "Ovovivipare", "Végétal"], "Mammifère vivipare."),
              qcm(1, "L'autruche pond des œufs. Elle est :", "Ovipare", ["Vivipare", "Ovovivipare", "Carnivore"], "Les oiseaux sont ovipares."),
              qcm(2, "Quel animal est donné en exemple d'ovovivipare ?", "La vipère", ["La baleine", "Le canard", "Le chien"], "Ses œufs éclosent dans son ventre."),
              multi(2, "Quels animaux sont ovipares ?", ["Le vautour", "Le serpent", "Le crocodile"], ["Le gnou", "La lapine", "Le hérisson"], "Correction du tableau (p. 123)."),
              multi(2, "Quels animaux sont vivipares ?", ["Le gnou", "La lapine", "La lionne", "Le hérisson"], ["La cane"], "Correction du tableau (p. 123)."),
              vf(2, "La baleine est un mammifère vivipare.", true, "Elle met bas un petit vivant."),
              trou(3, "Comment appelle-t-on les animaux qui allaitent leurs petits ?", ["mammifères", "mammifère", "les mammifères"], "Lexique : mammifère."),
              comp(3, "La réserve de Bandia se trouve dans le département de ___.", "Mbour", ["Podor", "Bakel", "Kolda"], "À une soixantaine de km de Dakar.")
            ]
          },
          {
            id: 's3l4', title: 'La locomotion des animaux', pages: '129',
            summary: [
              "Le mode de locomotion dépend du milieu de vie et de la structure du corps.",
              "Certains animaux marchent (bipèdes, quadrupèdes), sautent (grenouilles, crapauds), rampent (reptiles sans pattes ou à pattes courtes : c'est la reptation), nagent (animaux munis de nageoires) ou volent (animaux munis d'ailes).",
              "Remarque : la page 128 du manuel (début de cette leçon) est absente du fichier fourni."
            ],
            questions: [
              rel(1, "Classe chaque animal selon son mode de locomotion.", [["Perdrix", "Vol"], ["Carpe", "Nage"], ["Hyène", "Marche"], ["Requin", "Nage"], ["Moineau", "Vol"]], "Exercice du livre (p. 129)."),
              qcm(1, "Comment se déplacent les poissons ?", "Par la nage", ["Par le vol", "Par la reptation", "Par le saut"], "Ils ont des nageoires."),
              qcm(1, "Comment s'appelle le déplacement des serpents ?", "La reptation", ["La natation", "Le vol", "Le galop"], "Ils rampent."),
              qcm(2, "Comment se déplacent la grenouille et le crapaud ?", "Ils sautent", ["Ils volent", "Ils rampent sur le dos", "Ils nagent seulement"], "« Je retiens » (p. 129)."),
              vf(1, "Les oiseaux se déplacent par le vol grâce à leurs ailes.", true, "Ils sont munis d'ailes."),
              vf(2, "Un quadrupède marche sur deux pieds.", false, "Un quadrupède se déplace à quatre pattes ; un bipède marche sur deux pieds."),
              rel(2, "Relie chaque mot à sa définition.", [["Bipède", "Marche sur deux pieds"], ["Quadrupède", "Se déplace à quatre pattes"]], "Lexique du livre."),
              comp(3, "Le mode de locomotion dépend du milieu de vie et de la ___ du corps.", "structure", ["couleur", "taille des yeux", "voix"], "« Je retiens » (p. 129)."),
              trou(3, "Le dauphin se déplace par la…", ["nage", "la nage", "natation"], "Il nage.")
            ]
          }
        ]
      }
    ]
  };

  window.QUIZ_DATA = {
    book: 'Découverte du monde CM1 — Éditions Didactikos (2022)',
    missingPages: [
      "Pages 104-105 du manuel (leçon « L'appareil digestif / la digestion ») : absentes du PDF fourni. Aucune question n'a été inventée sur cette leçon.",
      "Page 128 du manuel (début de la leçon sur la locomotion) : absente du PDF fourni.",
      "Page 103 : scan flou mais lisible ; son contenu a été vérifié avec les pages 102-103."
    ],
    levels: { 1: 'Débutant', 2: 'Intermédiaire', 3: 'Expert' },
    subjects: [histoire, geographie, ist]
  };
})();

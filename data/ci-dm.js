/* =====================================================================
   CI — Découverte du Monde (Éditions Didactikos, 2021)
   Histoire · Géographie · Initiation Scientifique et Technologique
   Questions tirées des « Je retiens » et des exercices « J'agis ».
   Images : assets/books/ci-dm/
   ===================================================================== */
(function () {
  const { qcm, vf, multi, comp, rel, ord } = QB;
  const I = (n) => ({ img: 'assets/books/ci-dm/' + n + '.jpg' });

  QB.book({
    classId: 'ci', domainId: 'dm',
    title: 'Découverte du Monde CI', source: 'Découverte du Monde CI — Éditions Didactikos (2021)',
    chapters: [
      /* ============================ HISTOIRE ============================ */
      {
        id: 'h-rythme', title: 'Le rythme : moments, jours, fréquence', palier: 1, group: '🏺 Histoire',
        lessons: [
          {
            id: 'moments', title: 'Matin, midi, soir — jour et nuit', pages: '12-13, 24-25',
            summary: ['Le soleil se lève : c\'est le matin. Le soleil est au-dessus de nos têtes : c\'est midi. Le soleil se couche : c\'est le soir.', 'Le jour, je vois le soleil. Il fait clair. La nuit, il fait sombre. Paul dort dans son lit.'],
            img: 'assets/books/ci-dm/matin-midi-soir.jpg',
            questions: [
              rel(1, 'Relie chaque position du soleil au bon moment.', [['Le soleil se lève', 'Le matin'], ['Le soleil est au-dessus de nos têtes', 'Midi'], ['Le soleil se couche', 'Le soir']], 'Je retiens de la page 12.', I('matin-midi-soir')),
              qcm(1, 'Quand le soleil se couche, c\'est…', 'le soir', ['le matin', 'midi'], 'Je retiens de la page 12.', I('matin-midi-soir')),
              qcm(1, 'Quelle image vois-tu le jour ?', 'B (le soleil)', ['A (la lune)', 'C (les étoiles)'], 'Exercice du livre (p. 25).', I('lune-soleil')),
              qcm(2, 'La nuit, il fait…', 'sombre', ['clair', 'chaud'], 'Je retiens de la page 24.', I('jour-nuit')),
              vf(1, 'Le jour, je vois le soleil et il fait clair.', true, 'Je retiens de la page 24.'),
              qcm(2, 'Que fait Paul la nuit ?', 'Il dort dans son lit.', ['Il va à l\'école.', 'Il joue au ballon.'], 'Je retiens de la page 24.', I('jour-nuit'))
            ]
          },
          {
            id: 'jours', title: 'Les jours de la semaine', pages: '18-19',
            summary: ['Les jours de la semaine sont : lundi, mardi, mercredi, jeudi, vendredi, samedi, dimanche.', 'La levée des couleurs du lundi ; la prière du vendredi ; la messe du dimanche.'],
            img: 'assets/books/ci-dm/jours-semaine.jpg',
            questions: [
              ord(1, 'Range les jours de la semaine dans l\'ordre.', ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'], 'Je retiens de la page 18.', I('jours-semaine')),
              rel(1, 'Relie chaque fait à son jour.', [['La levée des couleurs', 'Le lundi'], ['La grande prière à la mosquée', 'Le vendredi'], ['La messe à l\'église', 'Le dimanche']], 'Je retiens de la page 18.', I('jours-semaine')),
              qcm(2, 'Quel est le 2e jour de la semaine ?', 'mardi', ['lundi', 'mercredi'], 'Évaluation (p. 108).'),
              qcm(2, 'Quel est le 4e jour de la semaine ?', 'jeudi', ['mercredi', 'vendredi'], 'Évaluation (p. 108).'),
              qcm(2, 'Quel est le dernier jour de la semaine ?', 'dimanche', ['samedi', 'lundi'], 'Évaluation (p. 108).'),
              comp(3, 'La levée des couleurs a lieu le ___ à l\'école.', 'lundi', ['vendredi', 'dimanche'], 'Je retiens de la page 18.')
            ]
          },
          {
            id: 'frequence', title: 'Plus fréquent, moins fréquent — reproduire un rythme', pages: '30-31, 36-37',
            summary: ['Aller au marché une fois par jour : c\'est moins fréquent. Se brosser les dents trois fois par jour : c\'est plus fréquent.', 'Les battements des mains, le galop du cheval, les pas cadencés des soldats, les battements de tam-tam… se font selon un rythme.'],
            img: 'assets/books/ci-dm/rythme.jpg',
            questions: [
              rel(1, 'Relie chaque activité à sa fréquence.', [['Une fois par jour', 'Moins fréquent'], ['Trois fois par jour', 'Plus fréquent']], 'Je retiens de la page 30.', I('frequence')),
              qcm(2, 'Quelle activité est la plus fréquente ?', 'Se brosser les dents trois fois par jour', ['Aller au marché une fois par jour'], 'Je retiens de la page 30.', I('frequence')),
              multi(1, 'Qu\'est-ce qui se fait selon un rythme ?', ['Les battements des mains', 'Le galop du cheval', 'Les battements de tam-tam'], ['Une pierre posée par terre'], 'Je retiens de la page 36.', I('rythme')),
              qcm(2, 'Dans quelle image y a-t-il un rythme sonore ?', 'A (il joue d\'un instrument)', ['B (il écrit)'], 'Exercice du livre (p. 37).', I('rythme-sonore'))
            ]
          }
        ]
      },
      {
        id: 'h-ordre', title: 'La notion d\'ordre et de durée', palier: 2, group: '🏺 Histoire',
        lessons: [
          {
            id: 'avant-apres', title: 'Avant, après, pendant — hier, aujourd\'hui, demain', pages: '44-45, 50-51, 58-59',
            summary: ['Avant la consultation, après la consultation.', 'Hier, c\'était lundi, j\'avais IST. Aujourd\'hui c\'est mardi, j\'ai Histoire. Demain, ce sera mercredi.', 'Avant la récréation, pendant la récréation, après la récréation.'],
            img: 'assets/books/ci-dm/hier-demain.jpg',
            questions: [
              qcm(1, 'Aujourd\'hui c\'est mardi. Quel jour était hier ?', 'lundi', ['mercredi', 'jeudi'], 'Je retiens de la page 50.', I('hier-demain')),
              qcm(1, 'Aujourd\'hui c\'est mardi. Quel jour sera demain ?', 'mercredi', ['lundi', 'dimanche'], 'Je retiens de la page 50.', I('hier-demain')),
              rel(2, 'La femme prend un médicament par jour. Relie chaque image au bon jour.', [['Image 1', 'Hier'], ['Image 2', 'Aujourd\'hui'], ['Image 3', 'Demain']], 'Exercice du livre (p. 51).', I('medicament')),
              ord(2, 'Range ces moments dans l\'ordre.', ['Avant la récréation', 'Pendant la récréation', 'Après la récréation'], 'Je retiens de la page 58.', I('avant-pendant-apres')),
              qcm(2, 'Quelle image vient après la préparation du repas ?', 'G (elle sert le plat)', ['E (elle nettoie le poisson)', 'F (elle fait cuire)'], 'Exercice du livre (p. 45).', I('apres-repas')),
              qcm(3, 'Quelle image a été prise avant le combat de lutte ?', '1 (les préparatifs)', ['2 (les lutteurs au sol)', '4 (le vainqueur porté)'], 'Exercice du livre (p. 59).', I('combat-lutte')),
              rel(3, 'Complète les étiquettes par hier ou aujourd\'hui (demain = jeudi).', [['mardi', 'hier'], ['mercredi', 'aujourd\'hui']], 'Exercice du livre (p. 51).')
            ]
          },
          {
            id: 'duree', title: 'Lent, rapide, long, court', pages: '70-71, 76-77, 82-83',
            summary: ['L\'âne est plus lent que la voiture. La course est plus rapide que la marche.', 'Le temps mis est long (se faire coiffer). Le temps mis est court (se laver les mains).', 'Puiser au puits dure plus longtemps que prendre l\'eau au robinet. Le moulin est plus rapide que le pilon.'],
            img: 'assets/books/ci-dm/lent-rapide.jpg',
            questions: [
              comp(1, 'L\'âne est plus ___ que la voiture.', 'lent', ['rapide', 'long'], 'Je retiens de la page 70.', I('lent-rapide')),
              comp(1, 'La course est plus ___ que la marche.', 'rapide', ['lente', 'courte'], 'Je retiens de la page 70.', I('lent-rapide')),
              ord(2, 'Range ces moyens de déplacement du plus lent au plus rapide.', ['La marche (4)', 'Le vélo (2)', 'La voiture (3)', 'L\'avion (1)'], 'Exercice du livre (p. 71).', I('deplacements')),
              ord(2, 'Classe les moyens de transport du plus rapide au moins rapide.', ['F (l\'avion)', 'G (la voiture)', 'E (le vélo)'], 'Exercice du livre (p. 83).', I('transports-rapide')),
              qcm(2, 'Quelle activité dure plus longtemps ?', 'A (repasser le linge)', ['B (arroser les fleurs)'], 'Exercice du livre (p. 83).', I('activite-longue')),
              rel(2, 'Dis si la tâche est longue ou courte.', [['a (se brosser les dents)', 'C\'est court'], ['b (une consultation chez le médecin)', 'C\'est long']], 'Exercice du livre (p. 77).', I('brosse-consultation')),
              qcm(3, 'Quelle technique est la plus rapide ?', 'Le moulin (3)', ['Le pilon (4)'], 'Je retiens de la page 82.', I('duree-techniques')),
              ord(3, 'Classe les dessins de Paul, de la plus longue durée à la plus courte.', ['1 (la maison)', '3 (le triangle)', '2 (le trait)'], 'Exercice du livre (p. 77).', I('dessins-paul'))
            ]
          },
          {
            id: 'ancien', title: 'Ancien, nouveau — mesurer une durée', pages: '88-89, 94-95, 102-103',
            summary: ['La « deux chevaux » est plus ancienne que la « 4×4 ». L\'ordinateur est moins ancien que la machine à écrire.', 'Pour mesurer la durée d\'une tâche, je peux utiliser le comptage de billes ou le sablier.', 'Quand la ligne est longue, la durée est longue. Quand la ligne est courte, la durée est courte.'],
            img: 'assets/books/ci-dm/ancien-nouveau.jpg',
            questions: [
              qcm(1, 'Quel téléphone est nouveau ?', '2 (le smartphone)', ['1 (le téléphone à cadran)'], 'Exercice du livre (p. 89).', I('telephones')),
              qcm(2, 'Quelle technique de préparation du repas est la plus ancienne ?', '1 (le feu de bois)', ['2 (le réchaud à gaz)'], 'Exercice du livre (p. 89).', I('cuisson')),
              multi(2, 'Quels objets sont nouveaux ?', ['B (la lampe torche)', 'D (la maison moderne)'], ['A (la lampe tempête)', 'C (la case)'], 'Exercice du livre (p. 89).', I('objets-nouveaux')),
              vf(2, 'L\'ordinateur est plus ancien que la machine à écrire.', false, 'Je retiens : l\'ordinateur est moins ancien que la machine à écrire.', I('ancien-nouveau')),
              multi(2, 'Avec quoi peut-on mesurer la durée d\'une tâche ?', ['Le comptage de billes', 'Le sablier'], ['La règle', 'La balance'], 'Je retiens de la page 94.', I('mesurer-duree')),
              qcm(3, 'Lala a fait plus de temps que Julie. Sa ligne est…', 'plus longue', ['plus courte', 'pareille'], 'Je retiens : ligne longue = durée longue.', I('lignes-durees')),
              qcm(3, 'Quelle activité dure le plus ?', '1 (peindre le mur)', ['2 (tracer au tableau)', '3 (se coiffer)'], 'Évaluation (p. 108).', I('activite-dure'))
            ]
          }
        ]
      },
      /* ============================ GÉOGRAPHIE ============================ */
      {
        id: 'g-reperes', title: 'Les repères fixes et mobiles', palier: 1, group: '🗺️ Géographie',
        lessons: [
          {
            id: 'fixes', title: 'Les repères fixes', pages: '14-15, 20-21',
            summary: ['Un repère fixe est un élément qui ne bouge pas et qui permet de se situer dans l\'espace. Exemples : arbre, bâtiment, monument…', 'Le baobab, l\'église, le puits et la mosquée ne bougent pas : ce sont des repères fixes.'],
            img: 'assets/books/ci-dm/repere-fixe.jpg',
            questions: [
              comp(1, 'Un repère fixe est un élément qui ne ___ pas.', 'bouge', ['brille', 'parle'], 'Je retiens de la page 14.', I('repere-fixe')),
              multi(1, 'Quels sont des repères fixes ?', ['le baobab', 'l\'église', 'le puits', 'la mosquée'], ['la voiture'], 'Je retiens de la page 20.', I('reperes-fixes')),
              multi(2, 'Quels numéros sont des repères fixes ?', ['1 (l\'arbre)', '3 (le bâtiment)'], ['2 (le vélo)'], 'Le vélo peut bouger.', I('reperes-ecole')),
              multi(2, 'Relève les lettres des repères fixes.', ['A (la pharmacie)', 'B (la mosquée)', 'C (l\'arbre)', 'E (le bâtiment)'], ['F (la voiture)'], 'Exercice du livre (p. 21).', I('carrefour')),
              vf(2, 'La voiture est un repère fixe.', false, 'Elle se déplace.'),
              vf(2, 'Le baobab est un repère fixe.', true, 'Il ne bouge pas.'),
              multi(3, 'Quels numéros sont des repères fixes ?', ['1 (la mosquée)', '3 (le baobab)'], ['2 (la lune)', '4 (le soleil)'], 'Évaluation (p. 62).', I('eval-reperes'))
            ]
          },
          {
            id: 'mobiles', title: 'Les repères mobiles : le soleil et la lune', pages: '26-27, 32-33',
            summary: ['Je peux me repérer à partir de la position du soleil (lever à l\'Est et coucher à l\'Ouest). Le soleil est un repère mobile.', 'La lune permet de se situer. Elle se déplace : c\'est un repère mobile.'],
            img: 'assets/books/ci-dm/soleil-repere.jpg',
            questions: [
              qcm(1, 'Le soleil est un repère…', 'mobile', ['fixe'], 'Je retiens de la page 26.', I('soleil-repere')),
              qcm(1, 'Où se lève le soleil ?', 'À l\'Est', ['À l\'Ouest', 'Au Nord'], 'Je retiens : lever à l\'Est, coucher à l\'Ouest.', I('soleil-repere')),
              qcm(2, 'Où se couche le soleil ?', 'À l\'Ouest', ['À l\'Est', 'Au Sud'], 'Je retiens de la page 26.'),
              qcm(1, 'Quel repère mobile utilise-t-on la nuit ?', 'La lune', ['Le baobab', 'La mosquée'], 'Je retiens de la page 32.', I('lune-repere')),
              multi(2, 'Quels repères mobiles peut-on voir la nuit ?', ['1 (l\'étoile)', '3 (la lune)'], ['2 (le soleil)'], 'Exercice du livre (p. 33).', I('reperes-nuit')),
              comp(3, 'Quand le soleil est au-dessus de nos têtes, il est au ___.', 'zénith', ['coucher', 'lever'], 'Je retiens de la page 26.', I('soleil-repere'))
            ]
          }
        ]
      },
      {
        id: 'g-situer', title: 'Se situer et suivre un itinéraire', palier: 1, group: '🗺️ Géographie',
        lessons: [
          {
            id: 'se-situer', title: 'Gauche, droite, devant, derrière, sur, sous', pages: '38-39, 46-47, 84-85, 90-91',
            summary: ['Je suis devant Julie, derrière Bira, à gauche de Lala, à droite de Paul et loin de l\'armoire.', 'Le seau se trouve sous la table. L\'ordinateur est sur la table. Je suis près de la table / loin de la table.', 'Le baobab est devant Bira. La case est derrière Bira. L\'enclos est à sa gauche. La borne fontaine est à sa droite.'],
            img: 'assets/books/ci-dm/situer-position.jpg',
            questions: [
              qcm(1, 'Où se trouve le seau ?', 'sous la table', ['sur la table', 'loin de la table'], 'Je retiens de la page 46.', I('situer-position')),
              qcm(1, 'Où est l\'ordinateur ?', 'sur la table', ['sous la table', 'derrière la table'], 'Je retiens de la page 46.', I('situer-position')),
              rel(2, 'Situe chaque élément par rapport à Bira.', [['Le baobab', 'devant'], ['La case', 'derrière'], ['L\'enclos', 'à sa gauche'], ['La borne fontaine', 'à sa droite']], 'Je retiens de la page 84.', I('gauche-droite-bira')),
              rel(2, 'Relève le numéro de l\'oiseau.', [['sur la branche', '1'], ['sous l\'arbre', '2'], ['loin de l\'arbre', '3']], 'Exercice du livre (p. 91).', I('oiseaux-reperes')),
              qcm(2, 'Quel enfant se trouve devant le bélier ?', '2', ['1'], 'L\'enfant 2 tire le bélier par la corde.', I('belier')),
              comp(2, 'Julie est assise ___ le canapé.', 'sur', ['sous', 'loin de'], 'Exercice du livre (p. 47).', I('julie-canape')),
              rel(3, 'Où placer chaque objet ?', [['Le ballon sous la table', '—'], ['Le livre en bas de l\'étagère', '○']], 'Exercice du livre (p. 91).', I('ballon-livre')),
              qcm(3, 'Les oiseaux sont… l\'arbre et les poules sont… l\'arbre.', 'sur — sous', ['sous — sur', 'loin de — près de'], 'Évaluation (p. 96).', I('oiseaux-poules'))
            ]
          },
          {
            id: 'itineraire', title: 'Suivre et indiquer un itinéraire', pages: '52-53, 60-61',
            summary: ['Pour suivre un itinéraire, je dois connaître le point de départ et le point d\'arrivée, puis respecter les indications données.', 'Pour indiquer un itinéraire à quelqu\'un, je dois identifier des repères et utiliser les notions : à gauche/à droite, devant/derrière, près de/loin de…'],
            img: 'assets/books/ci-dm/itineraire.jpg',
            questions: [
              multi(1, 'Que dois-je connaître pour suivre un itinéraire ?', ['Le point de départ', 'Le point d\'arrivée', 'Les indications'], ['La couleur des maisons'], 'Je retiens de la page 52.', I('itineraire')),
              multi(2, 'Pour indiquer un itinéraire, j\'utilise…', ['des repères', 'à gauche / à droite', 'devant / derrière'], ['les jours de la semaine'], 'Je retiens de la page 60.', I('indiquer-itineraire')),
              qcm(3, 'Lala passe derrière l\'école, devant la pharmacie, entre le poste de santé et la mosquée. Quel itinéraire suit-elle ?', '1', ['2'], 'Exercice du livre (p. 61).', I('itineraire-lala'))
            ]
          }
        ]
      },
      {
        id: 'g-milieu', title: 'Découvrir son espace immédiat', palier: 2, group: '🗺️ Géographie',
        lessons: [
          {
            id: 'milieu', title: 'Personnes, animaux, plantes et éléments physiques', pages: '72-73, 78-79',
            summary: ['Une personne : 1 tête, 1 tronc, 2 bras, 2 jambes. Un chien : 4 pattes, corps couvert de poils. Une poule : 2 pattes, corps couvert de plumes.', 'Plantes : arbre, fleur, herbe. Éléments physiques : rocher, dune, rivière.'],
            img: 'assets/books/ci-dm/personne-animal.jpg',
            questions: [
              rel(1, 'Relie chaque être vivant à sa description.', [['Une personne', '1 tête, 1 tronc, 2 bras, 2 jambes'], ['Un chien', '4 pattes, corps couvert de poils'], ['Une poule', '2 pattes, corps couvert de plumes']], 'Je retiens de la page 72.', I('personne-animal')),
              multi(1, 'Quelles images montrent des personnes ?', ['2 (au bureau)', '3 (la femme à genoux)'], ['1 (le bœuf)', '4 (la poule)'], 'Exercice du livre (p. 73).', I('personnes-images')),
              rel(2, 'Personne ou animal ?', [['2 pattes, corps couvert de plumes', 'Animal'], ['2 jambes, 2 mains', 'Personne'], ['5 doigts terminés par des ongles', 'Personne'], ['Pattes terminées par des griffes', 'Animal']], 'Exercice du livre (p. 73).'),
              rel(2, 'Range chaque élément du paysage.', [['L\'arbre', 'Plante'], ['La fleur', 'Plante'], ['Le rocher', 'Élément physique'], ['La rivière', 'Élément physique']], 'Je retiens de la page 78.', I('plantes-physiques')),
              multi(2, 'Quels numéros sont des éléments physiques ?', ['1 (la montagne)', '3 (le rocher)'], ['2 (l\'arbre)'], 'Exercice du livre (p. 79).', I('elements-physiques')),
              qcm(3, 'Dans l\'image de l\'évaluation, quel est l\'élément physique ?', 'La montagne', ['La voiture'], 'Évaluation (p. 96).')
            ]
          }
        ]
      },
      /* ============================ IST ============================ */
      {
        id: 's-matiere', title: 'Le monde physique et technique', palier: 1, group: '🔬 Sciences et Technologie',
        lessons: [
          {
            id: 'naturels', title: 'Éléments naturels et éléments techniques', pages: '16-17, 22-23, 40-41',
            summary: ['La pierre, le sable, les cauris… ne sont pas fabriqués ou modifiés par l\'homme : ce sont des éléments naturels.', 'Le téléphone, le téléviseur, les chaussures, la robe… sont fabriqués par l\'homme : ce sont des éléments techniques.'],
            img: 'assets/books/ci-dm/elements-naturels.jpg',
            questions: [
              multi(1, 'Quels sont des éléments naturels ?', ['la pierre', 'le sable', 'les cauris'], ['le téléphone', 'la robe'], 'Je retiens de la page 16.', I('elements-naturels')),
              multi(1, 'Quels sont des éléments techniques ?', ['le téléphone', 'le téléviseur', 'les chaussures'], ['la pierre'], 'Je retiens de la page 22.', I('elements-techniques')),
              rel(2, 'Naturel ou technique ?', [['La mare (eau)', 'Naturel'], ['La pierre', 'Naturel'], ['La radio', 'Technique'], ['Le téléphone', 'Technique']], 'Exercice du livre (p. 17).', I('naturels-serie')),
              multi(2, 'Relève les signes des éléments techniques.', ['+ (le collier)', '− (la marmite)', '○ (l\'avion)'], ['□ (la pierre)'], 'Exercice du livre (p. 23).', I('techniques-serie')),
              qcm(2, 'Quel est l\'intrus parmi les éléments techniques ?', 'Le coquillage', ['La chemise', 'La lampe', 'Le téléphone'], 'Le coquillage est un élément naturel.', I('intrus-techniques')),
              multi(3, 'Quels numéros sont des éléments techniques ?', ['1 (la statuette)', '4 (le téléphone)'], ['2 (la pierre)', '3 (l\'eau)'], 'Évaluation (p. 40).', I('eval-techniques')),
              rel(3, 'Naturel ou technique ?', [['Les cailloux (1)', 'Naturel'], ['Les cauris (2)', 'Naturel'], ['La lampe (3)', 'Technique'], ['La gomme (5)', 'Technique']], 'Intégration (p. 41).', I('integration-elements'))
            ]
          },
          {
            id: 'etats', title: 'Les états de la matière : solide, liquide, gazeux', pages: '28-29, 34-35',
            summary: ['De l\'eau à l\'état liquide (dans la marmite), à l\'état solide (les glaçons), à l\'état gazeux (la vapeur).', 'Éléments liquides contenus dans des objets : eau dans un verre, huile dans une bouteille. Éléments solides : bois, fer. Éléments gazeux contenus dans des objets : ballon, bouteille de gaz.'],
            img: 'assets/books/ci-dm/etats-eau.jpg',
            questions: [
              rel(1, 'Relie chaque forme de l\'eau à son état.', [['L\'eau dans la marmite', 'Liquide'], ['Les glaçons', 'Solide'], ['La vapeur', 'Gazeux']], 'Je retiens de la page 28.', I('etats-eau')),
              qcm(1, 'Quel élément est à l\'état liquide ?', '2 (l\'eau du pompier)', ['1 (le bois)', '3 (le ballon)'], 'Exercice du livre (p. 29).', I('etats-liquide')),
              qcm(2, 'Quel objet contient une matière à l\'état gazeux ?', '— (la bouteille de gaz)', ['○ (les billes)', '× (les barres de fer)'], 'Exercice du livre (p. 29).', I('etats-gaz')),
              rel(2, 'Classe chaque élément selon son état.', [['L\'huile', 'Liquide'], ['Le ballon gonflé', 'Gazeux'], ['Le pain', 'Solide'], ['Les glaçons', 'Solide']], 'Exercice du livre (p. 35).', I('etats-classement')),
              rel(3, 'Corrige le classement de Sidi.', [['L\'air', 'Gaz'], ['Le morceau de sucre', 'Solide'], ['Le sable', 'Solide'], ['Le vinaigre', 'Liquide']], 'Sidi avait mis l\'air dans les liquides, le sucre et le sable dans les gaz.', I('classement-sidi')),
              rel(3, 'Nomme l\'état de chaque produit.', [['Le sucre', 'Solide'], ['Le jus', 'Liquide'], ['Le gaz de la bouteille', 'Gazeux']], 'Évaluation (p. 40).', I('eval-produits'))
            ]
          }
        ]
      },
      {
        id: 's-vivant', title: 'Le monde biologique', palier: 2, group: '🔬 Sciences et Technologie',
        lessons: [
          {
            id: 'animaux', title: 'Décrire et classer les animaux', pages: '48-49, 54-57',
            summary: ['La poule a deux pattes, deux ailes, un corps couvert de plumes. Le chien a quatre pattes, un corps couvert de poils. Le poisson a une queue, des nageoires et un corps couvert d\'écailles. Le lézard a quatre courtes pattes et des écailles. La grenouille a quatre pattes et une peau nue.', 'Je peux classer les animaux selon leur manteau (à plumes, à poils) ou selon leur milieu de vie (domestique, sauvage).', 'Herbivores : bœuf, chèvre, cheval. Carnivores : chat, lion. Omnivores : cochon, homme.'],
            img: 'assets/books/ci-dm/animaux-description.jpg',
            questions: [
              rel(1, 'Relie chaque animal à son corps.', [['La poule', 'Couvert de plumes'], ['Le chien', 'Couvert de poils'], ['Le poisson', 'Couvert d\'écailles'], ['La grenouille', 'Une peau nue']], 'Je retiens de la page 48.', I('animaux-description')),
              qcm(1, 'Quel animal a deux pattes, deux ailes et un corps couvert de plumes ?', '3 (la poule)', ['1 (le lion)', '2 (le mouton)'], 'Exercice du livre (p. 49).', I('lion-mouton-poule')),
              multi(2, 'Quels animaux ont des plumes ?', ['1 (le canard)', '4 (le pigeon)'], ['2 (le chat)', '3 (le cochon)'], 'Exercice du livre (p. 55).', I('animaux-plumes')),
              multi(2, 'Quels animaux ont des poils ?', ['2 (la souris)', '4 (l\'antilope)'], ['1 (le dindon)', '3 (l\'oiseau)'], 'Exercice du livre (p. 55).', I('animaux-poils')),
              qcm(2, 'Quel critère a été utilisé pour ce classement ?', 'Domestiques / sauvages', ['À plumes / à poils'], 'Poule, chien, cheval sont domestiques ; lion, hyène, perdrix sont sauvages.', I('critere-classement')),
              rel(2, 'Range chaque animal.', [['Le cheval', 'Herbivore'], ['Le lion', 'Carnivore'], ['Le cochon', 'Omnivore'], ['La chèvre', 'Herbivore']], 'Je retiens de la page 56.', I('herbivores-carnivores')),
              multi(3, 'Quels animaux sont carnivores ?', ['le lion', 'l\'hyène'], ['le cheval', 'la biche'], 'Exercice du livre (p. 57).'),
              multi(3, 'Quels animaux sont herbivores ?', ['l\'âne', 'le mouton'], ['le chat', 'le lion'], 'Exercice du livre (p. 57).')
            ]
          },
          {
            id: 'vegetaux', title: 'Les végétaux du milieu', pages: '64-65, 74-75',
            summary: ['Un arbre : grand avec un tronc et des branches. Un arbuste : petit arbre avec une tige et des branchettes. De l\'herbe. Une fleur.', 'On peut classer les plantes : des arbres, des arbustes, des plantes à fleurs, des plantes sans fleurs.'],
            img: 'assets/books/ci-dm/vegetaux.jpg',
            questions: [
              rel(1, 'Relie chaque végétal à sa description.', [['Un arbre', 'Grand avec un tronc et des branches'], ['Un arbuste', 'Petit arbre avec une tige et des branchettes']], 'Je retiens de la page 64.', I('vegetaux')),
              multi(1, 'Quels sont des types de végétaux ?', ['l\'arbre', 'l\'arbuste', 'l\'herbe', 'la fleur'], ['le rocher'], 'Je retiens de la page 64.', I('vegetaux')),
              rel(2, 'Nomme chaque type de plante.', [['Groupe 1', 'Des arbres'], ['Groupe 2', 'Des arbustes']], 'Exercice du livre (p. 75).', I('arbres-arbustes')),
              multi(2, 'Comment peut-on classer les plantes ?', ['Les arbres', 'Les arbustes', 'Les plantes à fleurs', 'Les plantes sans fleurs'], ['Les plantes à plumes'], 'Je retiens de la page 74.', I('types-plantes'))
            ]
          },
          {
            id: 'personnes', title: 'Les types de personnes et la croissance', pages: '80-81, 86-87, 92-93, 100-101',
            summary: ['Une fille et un garçon. Une jeune fille blanche et une jeune fille noire. Un bébé, un adulte et une personne âgée.', 'On peut classer les personnes selon le sexe, l\'âge ou la couleur de la peau.', 'Je peux comparer la croissance des individus par l\'âge, la taille, le poids ou la pointure. La taille et la masse dépendent de l\'âge.'],
            img: 'assets/books/ci-dm/types-personnes.jpg',
            questions: [
              ord(1, 'Classe ces personnes de la plus âgée à la moins âgée.', ['3 (la grand-mère au bâton)', '1 (la femme)', '2 (la fille)', '4 (le bébé)'], 'Exercice du livre (p. 81).', I('age-personnes')),
              qcm(2, 'Selon quel critère ces enfants sont-ils classés ?', 'Le sexe', ['La taille', 'La couleur de la peau'], 'Les filles jouent à la marelle, les garçons aux billes.', I('classement-sexe')),
              qcm(2, 'Selon quoi ce classement est-il fait ?', 'Selon la couleur de la peau', ['Selon l\'âge', 'Selon le sexe'], 'Exercice du livre (p. 87).', I('classement-peau')),
              multi(2, 'Comment peut-on comparer la croissance des enfants ?', ['par l\'âge', 'par la taille', 'par le poids', 'par la pointure'], ['par la couleur des habits'], 'Je retiens de la page 92.', I('croissance')),
              ord(3, 'Classe les étapes de la croissance de cet enfant.', ['2 (le bébé couché)', '4 (à quatre pattes)', '1 (il marche)', '3 (l\'écolier)'], 'Exercice du livre (p. 93).', I('etapes-croissance')),
              qcm(3, 'Quel enfant peut avoir 6 ans ?', '3', ['1', '2'], 'Exercice du livre (p. 93).', I('ages-enfants')),
              vf(3, 'Abdou a 9 ans et moi 6 ans : Abdou est plus âgé que moi.', true, 'Je retiens de la page 100.', I('ages-croissance'))
            ]
          },
          {
            id: 'developpement', title: 'Le développement des plantes et des animaux', pages: '104-107',
            summary: ['Une plante comme le maïs, le mil ou le riz se développe selon les étapes : la graine, la germination, la montaison, la floraison, l\'épiaison.', 'Les oiseaux : la ponte, la couvaison, l\'éclosion, le développement.', 'Les mammifères : la gestation, la naissance, le développement.'],
            img: 'assets/books/ci-dm/etapes-plante.jpg',
            questions: [
              ord(1, 'Range les étapes du développement du maïs.', ['La graine', 'La germination', 'La montaison', 'La floraison', 'L\'épiaison'], 'Je retiens de la page 104.', I('etapes-plante')),
              qcm(2, 'Quelle étape correspond à la germination de la pomme de terre ?', '2 (la petite pousse)', ['1', '3', '4'], 'Exercice du livre (p. 105).', I('pomme-terre')),
              ord(2, 'Range les étapes du développement des oiseaux.', ['La ponte', 'La couvaison', 'L\'éclosion', 'Le développement'], 'Je retiens de la page 106.', I('etapes-animaux')),
              ord(2, 'Range les étapes du développement des mammifères.', ['La gestation', 'La naissance', 'Le développement'], 'Je retiens de la page 106.', I('etapes-animaux')),
              qcm(3, 'Quelle image correspond à la couvaison ?', 'C (l\'oiseau assis sur ses œufs)', ['A', 'B'], 'Exercice du livre (p. 107).', I('couvaison')),
              vf(3, 'Les animaux se reproduisent tous de la même façon.', false, 'Je retiens : les animaux ne se reproduisent pas de la même façon.')
            ]
          }
        ]
      }
    ]
  });
})();

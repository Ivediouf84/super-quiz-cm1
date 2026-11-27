/* =====================================================================
   CM1 — Éducation au Développement Durable (Éditions Didactikos, 2022)
   Vivre dans son milieu · Vivre ensemble
   Questions tirées des « Je retiens », des exercices « J'agis »
   et des corrigés d'autoévaluation (p. 112-115).
   Images : assets/books/cm1-edd/
   ===================================================================== */
(function () {
  const { qcm, vf, multi, comp, trou, rel, ord, calc } = QB;
  const I = (n) => ({ img: 'assets/books/cm1-edd/' + n + '.jpg' });

  QB.book({
    classId: 'cm1', domainId: 'edd',
    title: 'Éducation au Développement Durable CM1', source: 'Éducation au Développement Durable CM1 — Éditions Didactikos (2022)',
    chapters: [
      /* ======================= PALIER 1 — VIVRE DANS SON MILIEU ======================= */
      {
        id: 'p1-milieu', title: 'Promiscuité, insalubrité et gestion des déchets', palier: 1, group: '🌿 Palier 1 — Vivre dans son milieu',
        lessons: [
          {
            id: 'cohabitation', title: 'Les formes de cohabitation', pages: '12-13',
            summary: ['La cohabitation est le fait de vivre avec une ou plusieurs personnes dans un même endroit (chambre, maison, quartier…).', 'Formes de cohabitation : le voisinage de concessions ou de maisons, la grande famille, plusieurs familles dans une même maison, plusieurs personnes dans une même pièce.', 'Quand la cohabitation est gênante, on parle de promiscuité.'],
            img: 'assets/books/cm1-edd/cohabitation.jpg',
            questions: [
              qcm(1, 'Qu\'est-ce que la cohabitation ?', 'Le fait de vivre avec une ou plusieurs personnes dans un même endroit', ['Le fait de vivre chacun dans son coin', 'Le fait de changer souvent de maison'], 'Je retiens de la page 12.', I('cohabitation')),
              comp(1, 'Quand la cohabitation est gênante, on parle de ___.', 'promiscuité', ['solidarité', 'décentralisation'], 'Je retiens de la page 12.'),
              multi(2, 'Quelles sont des formes de cohabitation ?', ['Le voisinage de maisons', 'La grande famille', 'Plusieurs familles dans une même maison', 'Plusieurs personnes dans une même pièce'], ['Vivre seul sur une île'], 'Je retiens de la page 12.'),
              vf(1, 'Une famille nombreuse peut causer une cohabitation gênante.', true, 'Exercice du livre (p. 13).'),
              vf(2, 'Toute famille nombreuse est source de cohabitation gênante.', false, 'Une famille nombreuse peut vivre heureuse si l\'espace est suffisant.'),
              vf(2, 'La cohabitation est le fait de vivre chacun dans son coin.', false, 'C\'est vivre ensemble dans un même endroit.'),
              vf(2, 'Plusieurs familles dans une concession peuvent cohabiter de façon heureuse.', true, 'Exercice du livre (p. 13).'),
              calc(3, 'Une maison compte 13 personnes pour 3 chambres. Les parents occupent une chambre. Combien d\'enfants s\'entassent dans les deux autres chambres ?', 11, '13 – 2 = 11 enfants pour 2 chambres : c\'est une cohabitation gênante.', I('cohabitation'))
            ]
          },
          {
            id: 'insalubrite', title: 'Les manifestations de l\'insalubrité', pages: '16-17',
            summary: ['Il y a insalubrité quand un milieu est nuisible à la santé, quand il est malsain.', 'L\'insalubrité se manifeste par une accumulation de déchets (ordures, eaux usées, matières fécales, gravats…), l\'agglomération des habitations, l\'humidité, le manque d\'air et de lumière, l\'exiguïté des logements et l\'occupation anarchique de l\'espace public.'],
            img: 'assets/books/cm1-edd/insalubrite.jpg',
            questions: [
              qcm(1, 'Quand y a-t-il insalubrité ?', 'Quand un milieu est nuisible à la santé', ['Quand un milieu est propre et aéré', 'Quand il pleut beaucoup'], 'Je retiens de la page 16.', I('insalubrite')),
              multi(2, 'Quelles sont des manifestations de l\'insalubrité ?', ['Une chambre mal aérée', 'Une odeur de fosse septique', 'Des vendeurs sur les trottoirs', 'Des carcasses de véhicules dans la mer'], ['Des ordures dans des poubelles'], 'Exercice du livre (p. 17).'),
              vf(2, 'La cohabitation est toujours source d\'insalubrité.', false, 'Elle peut l\'être, mais pas toujours.'),
              vf(2, 'L\'insalubrité est un danger pour la santé.', true, 'Exercice du livre (p. 17).'),
              vf(1, 'Le manque de lumière et d\'air est une manifestation de l\'insalubrité.', true, 'Je retiens de la page 16.'),
              comp(3, 'Le fait que les logements soient trop petits s\'appelle l\'___ des logements.', 'exiguïté', ['aération', 'agglomération'], 'Je retiens de la page 16.')
            ]
          },
          {
            id: 'dechets', title: 'Collecte, traitement et évacuation des déchets', pages: '20-21',
            summary: ['Pour lutter contre l\'insalubrité, il faut bien gérer les déchets ménagers.', 'Après balayage, les ordures doivent être triées et mises dans des poubelles : c\'est le traitement.', 'Des éboueurs passent régulièrement dans les rues pour faire la collecte.', 'Ces déchets sont amenés à la décharge : c\'est l\'évacuation.'],
            img: 'assets/books/cm1-edd/ordures-gestion.jpg',
            questions: [
              ord(2, 'Mets dans l\'ordre les modes de gestion des ordures.', ['Le traitement', 'La collecte', 'L\'évacuation'], 'Je retiens de la page 20 (corrigé p. 112 : collecte, tri, évacuation, traitement ou recyclage).', I('ordures-gestion')),
              rel(1, 'Relie chaque étape à sa définition.', [['Le traitement', 'Trier les ordures et les mettre dans des poubelles'], ['La collecte', 'Les éboueurs ramassent les ordures dans les rues'], ['L\'évacuation', 'Les déchets sont amenés à la décharge']], 'Je retiens de la page 20.'),
              qcm(1, 'Qui passe dans les rues pour faire la collecte des ordures ?', 'Les éboueurs', ['Les maçons', 'Les policiers'], 'Je retiens de la page 20.'),
              comp(2, 'Après balayage, les ordures doivent être ___ et mises dans des poubelles.', 'triées', ['brûlées', 'enterrées'], 'Je retiens de la page 20.'),
              qcm(2, 'Que montrent ces poubelles de couleurs différentes ?', 'Le tri des déchets', ['L\'évacuation des eaux', 'La décoration de la rue'], 'Exercice du livre (p. 21).', I('tri-poubelles'))
            ]
          },
          {
            id: 'recyclage', title: 'Le recyclage et les eaux vannes', pages: '24-25',
            summary: ['Certains déchets comme les pots en aluminium, les morceaux de fer, le plastique… peuvent être réutilisés à d\'autres fins : c\'est le recyclage. Il faut donc trier les déchets.', 'Les eaux vannes sont issues des toilettes. Il faut les connecter à un réseau qui les achemine vers une usine de traitement. Après traitement, elles sont réutilisées ou déversées dans la nature.'],
            img: 'assets/books/cm1-edd/recuplast.jpg',
            questions: [
              comp(1, 'La réutilisation de déchets à d\'autres fins s\'appelle le ___.', 'recyclage', ['ramassage', 'dépôt'], 'Je retiens de la page 24.', I('recuplast')),
              qcm(1, 'D\'où viennent les eaux vannes ?', 'Des toilettes', ['De la pluie', 'Du robinet de la cuisine'], 'Je retiens de la page 24.'),
              rel(2, 'Associe chaque déchet à l\'objet recyclé correspondant.', [['Tas de ferraille', 'Fer de construction'], ['Tas de matières plastiques', 'Seaux et bassines'], ['Tas de cartons', 'Tablettes d\'œufs'], ['Tas de pneus', 'Granulés pour gazon'], ['Tas de fils électriques', 'Bracelets en cuivre']], 'Exercice du livre (p. 25).'),
              vf(1, 'Tous les déchets ménagers sont jetés au dépotoir.', false, 'Certains peuvent être recyclés.'),
              vf(1, 'À la maison, il faut trier les déchets.', true, 'Exercice du livre (p. 25).'),
              trou(2, 'Comment appelle-t-on le lieu public où l\'on dépose les ordures ?', ['dépotoir', 'le dépotoir', 'décharge', 'la décharge'], 'Exercice du livre (p. 25).'),
              qcm(3, 'Où faut-il acheminer les eaux vannes ?', 'Vers une usine de traitement', ['Dans la rue', 'Dans la mer directement'], 'Je retiens de la page 24.')
            ]
          },
          {
            id: 'espace', title: 'Respecter l\'espace du voisin et l\'espace public', pages: '28-29',
            summary: ['Pour lutter contre l\'insalubrité, je ne dois jeter les ordures et les eaux usées ni sur l\'espace du voisin ni sur le domaine public.', 'Il faut respecter ces espaces en veillant à leur propreté, sinon cela peut entraîner des maladies parfois contagieuses.'],
            img: 'assets/books/cm1-edd/espace-voisin.jpg',
            questions: [
              qcm(1, 'Que font ces deux personnes ?', 'Elles salissent l\'espace du voisin et l\'espace public.', ['Elles nettoient le quartier.', 'Elles arrosent les arbres.'], 'Situations du livre (p. 28).', I('espace-voisin')),
              rel(2, 'Bon ou mauvais comportement ?', [['Mettre ses ordures dans la poubelle', 'Bon'], ['Déverser les eaux usées dans la rue', 'Mauvais'], ['Laver sa voiture et laisser couler l\'eau sale dans la rue', 'Mauvais'], ['Laisser couler les eaux vannes dans la rue', 'Mauvais']], 'Exercice du livre (p. 29).'),
              vf(2, 'On peut balayer devant sa maison et laisser les ordures contre le mur du voisin.', false, 'C\'est un mauvais comportement.'),
              comp(3, 'Salir l\'espace public peut entraîner des maladies parfois ___.', 'contagieuses', ['agréables', 'rares'], 'Je retiens de la page 29.')
            ]
          }
        ]
      },
      {
        id: 'p1-maladies', title: 'Les maladies endémiques et épidémiques', palier: 1, group: '🌿 Palier 1 — Vivre dans son milieu',
        lessons: [
          {
            id: 'palu', title: 'Le paludisme (maladie endémique)', pages: '32-33',
            summary: ['Le paludisme est une maladie endémique car il sévit en permanence dans le pays.', 'Il se manifeste par une forte fièvre, des maux de tête, des frissons, des courbatures, des nausées et des vomissements.', 'Il se transmet par la piqûre de l\'anophèle femelle qui introduit dans le corps un microbe appelé plasmodium.', 'Dès les premiers signes, il faut aller au centre de santé faire le TDR (test de diagnostic rapide) avant de prendre des antipaludéens.', 'Autres maladies transmises par un insecte : fièvre jaune (moustique aedes), maladie du sommeil (mouche tsé-tsé).'],
            img: 'assets/books/cm1-edd/palu-malade.jpg',
            questions: [
              rel(1, 'Relie chaque élément à sa définition.', [['Endémie', 'Une maladie qui sévit en permanence dans une zone'], ['Moustique vecteur', 'L\'anophèle femelle'], ['Microbe responsable', 'Plasmodium']], 'Exercice du livre (p. 33).'),
              multi(1, 'Quels sont les symptômes du paludisme ?', ['Une forte fièvre', 'Des maux de tête', 'Des frissons', 'Des vomissements'], ['Des démangeaisons'], 'Je retiens de la page 33.', I('palu-malade')),
              vf(1, 'Le paludisme est une maladie contagieuse.', false, 'Il se transmet par la piqûre du moustique, pas d\'une personne à l\'autre.'),
              vf(2, 'Il faut un TDR avant de commencer un traitement contre le paludisme.', true, 'Exercice du livre (p. 33).'),
              vf(2, 'Tous les moustiques transmettent le paludisme.', false, 'Seule l\'anophèle femelle le transmet.'),
              rel(3, 'Relie chaque maladie à l\'insecte qui la transmet.', [['Le paludisme', 'L\'anophèle femelle'], ['La fièvre jaune', 'Le moustique aedes'], ['La maladie du sommeil', 'La mouche tsé-tsé']], 'Je retiens de la page 33.'),
              qcm(3, 'De quel arbre a été tiré le premier remède contre le paludisme ?', 'Le quinquina (quinine)', ['Le baobab', 'Le manguier'], 'Le savais-tu ? (p. 33).'),
              qcm(2, 'Pour éviter le paludisme, il faut dormir sous une…', 'milda (moustiquaire imprégnée)', ['tente', 'bâche'], 'Le savais-tu ? (p. 47).')
            ]
          },
          {
            id: 'cholera', title: 'Le choléra (maladie épidémique)', pages: '38-39',
            summary: ['Appelé aussi « maladie des mains sales », le choléra est une maladie diarrhéique très contagieuse causée par un microbe appelé vibrion cholérique.', 'Il peut toucher plusieurs personnes à la fois dans une zone et devenir une épidémie.', 'Symptômes : forte diarrhée liquide abondante, nausées, vomissements, douleurs abdominales, déshydratation, soif intense…', 'Il se transmet par l\'ingestion d\'eau ou d\'aliments souillés. Autres maladies diarrhéiques : la dysenterie, la fièvre typhoïde.'],
            img: 'assets/books/cm1-edd/cholera-enfant.jpg',
            questions: [
              qcm(1, 'Quel est l\'autre nom du choléra ?', 'La maladie des mains sales', ['La maladie du sommeil', 'La fièvre jaune'], 'Je retiens de la page 39.', I('cholera-enfant')),
              qcm(2, 'Quel microbe cause le choléra ?', 'Le vibrion cholérique', ['Le plasmodium', 'Le bacille de Koch'], 'Je retiens de la page 39.'),
              multi(2, 'Quels sont les facteurs favorisants du choléra ?', ['Boire l\'eau du marigot', 'Avoir les mains sales', 'Manger des crudités non lavées'], ['Boire de l\'eau potable', 'Bien cuire les aliments'], 'Exercice du livre (p. 39).'),
              vf(1, 'Le choléra est une maladie contagieuse.', true, 'Exercice du livre (p. 39).'),
              comp(2, 'Quand une maladie touche beaucoup de personnes à la fois dans une zone, c\'est une ___.', 'épidémie', ['endémie', 'allergie'], 'Je retiens de la page 39.'),
              multi(3, 'Quelles sont d\'autres maladies diarrhéiques ?', ['La dysenterie', 'La fièvre typhoïde'], ['L\'asthme', 'La gale'], 'Je retiens de la page 39.'),
              calc(3, 'Le monde a connu 7 pandémies de choléra entre 1817 et 1884. Combien d\'années séparent ces deux dates ?', 67, '1884 – 1817 = 67 ans.')
            ]
          },
          {
            id: 'tuberculose', title: 'La tuberculose', pages: '42-43',
            summary: ['La tuberculose est causée par le bacille de Koch. La forme la plus fréquente est la tuberculose pulmonaire, mais elle peut attaquer les os, les intestins, les reins, le cerveau.', 'Elle se manifeste par une toux persistante, une forte fièvre, des crachats sanguinolents, un manque d\'appétit, une perte de poids.', 'Elle est très contagieuse : contact avec la salive ou les crachats d\'un malade, ou ingestion de lait cru de vache infectée.'],
            img: 'assets/books/cm1-edd/tuberculose.jpg',
            questions: [
              qcm(1, 'Quel microbe cause la tuberculose ?', 'Le bacille de Koch', ['Le vibrion cholérique', 'Le sarcopte'], 'Je retiens de la page 42.', I('tuberculose')),
              vf(1, 'La tuberculose est une maladie respiratoire.', true, 'Exercice du livre (p. 43).'),
              vf(2, 'Toute toux est synonyme de tuberculose.', false, 'Il faut une toux persistante et d\'autres signes.'),
              vf(2, 'La tuberculose peut attaquer d\'autres organes que les poumons.', true, 'Os, intestins, reins, cerveau…'),
              multi(2, 'Quels sont les facteurs favorisants de la tuberculose ?', ['La promiscuité', 'Une alimentation pauvre et insuffisante', 'La fumée de la cigarette'], ['Le vaccin BCG à la naissance', 'Une bonne alimentation'], 'Exercice du livre (p. 43).'),
              qcm(3, 'Quel vaccin protège contre la tuberculose ?', 'Le BCG', ['Le TDR', 'La quinine'], 'Corrigé (p. 112) : se vacciner au BCG.'),
              comp(3, 'Une maladie qu\'on retrouve chez l\'homme et chez l\'animal est une ___.', 'zoonose', ['épidémie', 'allergie'], 'Le savais-tu ? (p. 43).')
            ]
          },
          {
            id: 'hygiene', title: 'Hygiène, eaux usées et gîtes larvaires', pages: '46-47, 50-51',
            summary: ['Nous sommes exposés aux maladies épidémiques (choléra, tuberculose) et endémiques (paludisme) à cause des déchets solides, des eaux usées et des eaux stagnantes.', 'Se protéger : aérer les habitations ; construire des puisards pour les eaux usées ; garder les ordures dans des poubelles ; éliminer par le remblai les eaux stagnantes qui sont des gîtes larvaires.', 'Règles d\'hygiène : se laver les mains avant de manger et à la sortie des toilettes ; laver fruits et légumes avec de l\'eau javellisée ; se déparasiter tous les six mois ; aérer toutes les pièces.'],
            img: 'assets/books/cm1-edd/eaux-usees.jpg',
            questions: [
              rel(2, 'Associe chaque problème à sa solution.', [['Dépôt sauvage d\'ordures', 'Collecte régulière des ordures'], ['Eaux usées dans les rues', 'Réalisation de puisards'], ['Eaux stagnantes dans les espaces de vie', 'Construction de caniveaux']], 'Exercice du livre (p. 47).', I('eaux-usees')),
              comp(2, 'Les eaux stagnantes sont des ___ larvaires.', 'gîtes', ['jardins', 'puits'], 'Je retiens de la page 46.'),
              multi(1, 'Quand faut-il obligatoirement se laver les mains ?', ['Avant de manger', 'À la sortie des toilettes'], ['Après avoir dormi seulement'], 'Je retiens de la page 51.'),
              rel(2, 'Pour chaque image, mets Bien ou Mal.', [['A (manger une orange pourrie)', 'Mal'], ['B (se laver les mains au robinet)', 'Bien'], ['C (faire ses besoins dans l\'herbe)', 'Mal'], ['E (laver un fruit à l\'eau)', 'Bien']], 'Exercice du livre (p. 51).', I('hygiene-bien-mal')),
              qcm(2, 'Tous les combien faut-il se déparasiter ?', 'Au moins tous les six mois', ['Une fois dans sa vie', 'Tous les dix ans'], 'Je retiens de la page 51.'),
              comp(3, 'On lave les fruits et les légumes avec de l\'eau ___.', 'javellisée', ['salée', 'sucrée'], 'Je retiens de la page 51.')
            ]
          }
        ]
      },
      /* ======================= PALIER 1 — VIVRE ENSEMBLE ======================= */
      {
        id: 'p1-ensemble', title: 'Divergences d\'opinions et différences d\'appartenance', palier: 1, group: '🤝 Palier 1 — Vivre ensemble',
        lessons: [
          {
            id: 'divergence', title: 'Les problèmes nés de la divergence d\'opinions', pages: '14-15',
            summary: ['On parle de divergence d\'opinions quand deux personnes n\'ont pas la même idée ou le même point de vue sur un sujet.', 'Problèmes nés de la divergence d\'opinions : oppositions radicales, propos vifs, querelles, intransigeance, railleries, ironie, agressions verbales, injures, bouderie, bagarres…'],
            img: 'assets/books/cm1-edd/bagarre-lutte.jpg',
            questions: [
              qcm(1, 'Qu\'est-ce qu\'une divergence d\'opinions ?', 'Deux personnes n\'ont pas le même point de vue sur un sujet', ['Deux personnes sont toujours d\'accord', 'Deux personnes ont la même religion'], 'Je retiens de la page 14.', I('bagarre-lutte')),
              multi(1, 'Quelles phrases sont justes ?', ['La divergence est le désaccord entre deux personnes.', 'Une opinion est un avis personnel sur un sujet.'], ['La divergence est le fait d\'être d\'accord sur une chose.'], 'Exercice du livre (p. 15).'),
              rel(2, 'Réponds par Oui ou Non.', [['La divergence d\'opinions est normale.', 'Oui'], ['Je dois toujours avoir raison.', 'Non'], ['Avoir une divergence d\'opinions ne signifie pas être ennemis.', 'Oui'], ['La divergence d\'opinions débouche toujours sur des problèmes.', 'Non']], 'Exercice du livre (p. 15).'),
              multi(2, 'Quels sont des problèmes nés de la divergence d\'opinions ?', ['Les querelles', 'Les injures', 'Les bagarres', 'Les propos vifs'], ['Le racisme'], 'Je retiens de la page 14. Le racisme vient de la différence d\'appartenance.'),
              qcm(3, 'Julie et Bira se disputent : chacun prétend que son équipe de football est la meilleure. Comment appelle-t-on cette situation ?', 'Une divergence d\'opinions', ['Une différence d\'appartenance', 'Une épidémie'], 'Exercice du livre (p. 15).')
            ]
          },
          {
            id: 'prevenir', title: 'Prévenir et régler les conflits d\'opinions', pages: '18-19, 22-23',
            summary: ['Pour prévenir les problèmes nés de la divergence d\'opinions : sens de l\'écoute, ouverture d\'esprit, respect de l\'opinion d\'autrui, respect de l\'autre, humilité, sens de la mesure et de la modération, bonne foi, empathie, tolérance.', 'Pour régler ces conflits : privilégier un dialogue constructif ; avoir le sens de l\'écoute ; respecter l\'opinion d\'autrui ; avoir de la retenue et le sens du dépassement ; faire preuve d\'humilité et de bonne foi.'],
            img: 'assets/books/cm1-edd/conflit-elections.jpg',
            questions: [
              multi(1, 'Quels sont les bons comportements ?', ['Donner des arguments pour convaincre l\'autre', 'Accepter l\'opinion de l\'autre même si je ne suis pas d\'accord'], ['Vouloir toujours avoir raison', 'Ne jamais écouter quelqu\'un'], 'Exercice du livre (p. 19).'),
              multi(2, 'Quelles propositions permettent de régler une divergence d\'opinions ?', ['Écouter l\'autre et essayer de le comprendre', 'Ne jamais essayer d\'humilier l\'autre', 'Toujours être franc'], ['Ne jamais accepter l\'opinion de l\'autre'], 'Exercice du livre (p. 23).'),
              rel(2, 'Propose une prévention pour chaque problème.', [['Propos vifs', 'Sens de la mesure et de la modération'], ['Querelles', 'Tolérance'], ['Injures', 'Ouverture d\'esprit ou respect de l\'autre']], 'Corrigé de l\'autoévaluation (p. 113).'),
              qcm(2, 'Lors des élections municipales, deux voisins se battent. Qu\'aurait-il fallu privilégier ?', 'Un dialogue constructif', ['Les injures', 'Les railleries'], 'Je retiens de la page 22.', I('conflit-elections')),
              comp(3, 'Se mettre à la place de l\'autre pour comprendre ce qu\'il ressent s\'appelle l\'___.', 'empathie', ['intransigeance', 'ironie'], 'Je retiens de la page 18.')
            ]
          },
          {
            id: 'appartenance', title: 'Les problèmes nés de la différence d\'appartenance', pages: '26-27, 30-31',
            summary: ['Nos différences religieuses, ethniques, culturelles, raciales, physiques… peuvent engendrer des conflits.', 'Problèmes : la rivalité, l\'intolérance, l\'ironie, la moquerie, le complexe de supériorité, la fierté déplacée, le repli identitaire, le mépris, le communautarisme, le racisme…', 'Pour les prévenir et les régler : dialogue constructif, ouverture d\'esprit, respect de l\'autre et de son opinion, humilité, bonne foi, sens de l\'égalité et de l\'équité, sensibilisation.'],
            img: 'assets/books/cm1-edd/differences.jpg',
            questions: [
              rel(1, 'Précise le type de différence d\'appartenance.', [['Un Noir et un Blanc', 'Raciale'], ['Un chrétien et un musulman', 'Religieuse'], ['Un Français et un Sénégalais', 'Nationalité']], 'Exercice du livre (p. 27, 31).', I('differences')),
              multi(2, 'Quelles propositions sont justes ?', ['La différence d\'appartenance est une richesse.', 'Les problèmes nés de la différence d\'appartenance ne favorisent pas le vouloir de vie commune.'], ['Il y a une hiérarchie des races.', 'La différence d\'appartenance est forcément source de problèmes.'], 'Exercice du livre (p. 27).'),
              rel(2, 'Classe chaque problème selon sa nature.', [['Querelles', 'Divergence d\'opinions'], ['Injures', 'Divergence d\'opinions'], ['Racisme', 'Différence d\'appartenance'], ['Mépris', 'Différence d\'appartenance']], 'Corrigé de l\'autoévaluation (p. 113).'),
              rel(3, 'Donne une solution à chaque problème.', [['Complexe de supériorité', 'Respecter l\'autre et son opinion'], ['Repli identitaire', 'Avoir une ouverture d\'esprit'], ['Racisme', 'Cultiver le sens de l\'égalité et de l\'équité']], 'Corrigé de l\'autoévaluation (p. 113).'),
              rel(3, 'Mets O pour divergence d\'opinions et A pour différence d\'appartenance.', [['Agressions verbales', 'O'], ['Intolérance', 'A'], ['Bagarres', 'O'], ['Rivalité', 'A']], 'Intégration du palier 1 (p. 35).')
            ]
          }
        ]
      },
      /* ======================= PALIER 2 — VIVRE ENSEMBLE ======================= */
      {
        id: 'p2-organisations', title: 'Les organisations locales', palier: 2, group: '🤝 Palier 2 — Vivre ensemble',
        lessons: [
          {
            id: 'org-ecole', title: 'Organisations scolaires et parascolaires', pages: '40-41, 62-63',
            summary: ['Une organisation locale est un groupe d\'individus en interaction, habitant la même localité et ayant un but commun.', 'Organisations scolaires (gérées par les élèves) : la coopérative scolaire, le parlement et le gouvernement scolaire.', 'Organisations parascolaires : le comité de gestion de l\'école (CGE), l\'association des parents d\'élèves (APE), l\'association des mères d\'élèves (AME).', 'Leurs organes : assemblée générale, bureau exécutif, commissions spécialisées. Ressources : cotisations, activités génératrices de revenus (AGR), subventions, dons.'],
            img: 'assets/books/cm1-edd/organisations-ecole.jpg',
            questions: [
              rel(1, 'Donne la signification de chaque sigle.', [['APE', 'Association des parents d\'élèves'], ['CGE', 'Comité de gestion de l\'école'], ['AME', 'Association des mères d\'élèves']], 'Je retiens de la page 41.'),
              rel(2, 'Fais correspondre.', [['CGE', 'Organisation parascolaire'], ['Coopérative scolaire', 'Organisation scolaire'], ['AME', 'Organisation parascolaire'], ['Gouvernement scolaire', 'Organisation scolaire']], 'Exercice du livre (p. 41).', I('organisations-ecole')),
              vf(1, 'La coopérative scolaire est gérée par les élèves.', true, 'Exercice du livre (p. 41).'),
              vf(2, 'L\'APE est une organisation scolaire.', false, 'C\'est une organisation parascolaire.'),
              vf(2, 'Le directeur n\'est pas le président du CGE.', true, 'Exercice du livre (p. 63).'),
              rel(3, 'Relie chaque organisation à son but.', [['APE', 'Défendre les intérêts des enfants et représenter tous les parents'], ['CGE', 'Œuvrer à l\'amélioration de la qualité et à une bonne gestion de l\'école'], ['AME', 'Améliorer l\'accès, le maintien et la réussite des enfants, notamment des filles']], 'Je retiens de la page 63.'),
              trou(3, 'Que signifie le sigle AGR ?', ['activités génératrices de revenus', 'activite generatrice de revenus', 'activités génératrices de revenu'], 'Je retiens de la page 63.')
            ]
          },
          {
            id: 'cooperative', title: 'La coopérative et le gouvernement scolaires', pages: '48-49, 52-53',
            summary: ['La coopérative scolaire est créée et gérée par les élèves, sous le contrôle des adultes. Elle a des buts éducatifs, sociaux et économiques. Elle comprend des membres actifs et des membres honoraires.', 'Le conseil d\'administration exécute les décisions de l\'assemblée générale (organe délibératif). Les commissaires aux comptes contrôlent les ressources. Le conseil de tutelle élit le maître ou la maîtresse de tutelle.', 'Le gouvernement scolaire réunit des élèves choisis par leurs pairs pour les éduquer à la démocratie. À sa tête : un(e) président(e), un premier ministre et des ministres.'],
            img: 'assets/books/cm1-edd/gouvernement-scolaire.jpg',
            questions: [
              vf(1, 'La coopérative scolaire est une organisation locale.', true, 'Exercice du livre (p. 49).', I('cooperative')),
              vf(2, 'Le conseil d\'administration est l\'organe délibératif de la coopérative.', false, 'C\'est l\'assemblée générale qui est l\'organe délibératif ; le conseil d\'administration exécute.'),
              qcm(2, 'Qui contrôle les ressources de la coopérative ?', 'Les commissaires aux comptes', ['Le directeur seul', 'Les parents'], 'Je retiens de la page 49.'),
              multi(2, 'Quelles sont les ressources de la coopérative ?', ['Les cotisations', 'La vente des produits', 'Les dons', 'Les subventions'], ['Les amendes de la police'], 'Je retiens de la page 49.'),
              qcm(1, 'Quel est le but du gouvernement scolaire ?', 'Éduquer les élèves à la démocratie', ['Remplacer les maîtres', 'Vendre des produits'], 'Je retiens de la page 53.', I('gouvernement-scolaire')),
              vf(2, 'Le gouvernement scolaire est dirigé par le directeur de l\'école.', false, 'Il est dirigé par un(e) président(e) élu(e) par les élèves.'),
              vf(2, 'Tous les élèves peuvent être membres du gouvernement scolaire.', true, 'Exercice du livre (p. 53).'),
              qcm(3, 'Le directeur veut garder l\'argent de la coopérative. En a-t-il le droit ?', 'Non, la coopérative est gérée par les élèves', ['Oui, c\'est le chef', 'Oui, s\'il le décide seul'], 'Exercice du livre (p. 49).')
            ]
          },
          {
            id: 'org-milieu', title: 'Les organisations du milieu : ASC, GIE, GPF', pages: '44-45, 66-67, 70-71',
            summary: ['Organisations locales du milieu : le conseil de quartier, la maison de justice, l\'ASC, le GIE, le GPF…', 'ASC : association sportive et culturelle. Mission : cultiver l\'amour, la fraternité et la solidarité par le sport et la culture. Adhésion libre mais achat d\'une carte de membre à 1 000 F. Dirigeants choisis démocratiquement lors de l\'assemblée générale.', 'GIE : faciliter ou développer les activités économiques de ses membres. GPF : permettre aux femmes de gagner du temps sur les travaux domestiques. Organes : conseil d\'administration (CA) et comité de direction (CD).'],
            img: 'assets/books/cm1-edd/asc.jpg',
            questions: [
              rel(1, 'Donne la signification de chaque sigle.', [['ASC', 'Association sportive et culturelle'], ['GIE', 'Groupement d\'intérêt économique'], ['GPF', 'Groupement de promotion féminine']], 'Je retiens des pages 44 à 71.'),
              qcm(1, 'Quelle est la mission d\'une ASC ?', 'Cultiver l\'amour, la fraternité et la solidarité par le sport et la culture', ['Développer économiquement le quartier', 'Juger les conflits'], 'Je retiens de la page 66.', I('asc')),
              qcm(2, 'Combien coûte la carte de membre de l\'ASC du livre ?', '1 000 F', ['100 F', '10 000 F'], 'Je retiens de la page 66.'),
              rel(2, 'Réponds par Oui ou Non.', [['Une ASC est une organisation nationale.', 'Non'], ['Une ASC fonctionne avec des statuts.', 'Oui'], ['La personne est libre d\'adhérer à une ASC hors de son quartier.', 'Oui']], 'Exercice du livre (p. 67).'),
              vf(2, 'Le GPF peut évoluer en GIE.', true, 'Exercice du livre (p. 71).'),
              vf(2, 'Le GIE n\'a que des membres hommes.', false, 'Le GIE peut avoir des hommes et des femmes.'),
              multi(3, 'Quelles organisations ont des objectifs économiques ?', ['Le GIE', 'Le GPF'], ['L\'ASC', 'La maison de justice'], 'Exercice du livre (p. 45).', I('chambre-commerce')),
              qcm(3, 'Où se font les formalités pour créer un GIE ?', 'Au bureau d\'appui à la création d\'entreprise (APIX) ou à la chambre de commerce', ['À l\'école', 'À la mosquée'], 'Texte du livre (p. 70).', I('chambre-commerce'))
            ]
          },
          {
            id: 'decentralisation', title: 'Les institutions décentralisées', pages: '74-75, 82-83, 86-87',
            summary: ['La décentralisation est un système dans lequel le pouvoir de décision est exercé à la fois par l\'État et les collectivités territoriales.', 'Depuis 2013 (Acte III de la décentralisation), les collectivités territoriales sont la commune et le département, gérées par le conseil municipal et le conseil départemental.', 'Le conseil municipal est élu au suffrage universel direct pour 5 ans. Le maire exécute ses décisions sous son contrôle, secondé par ses adjoints.', 'Le conseil départemental est élu pour 5 ans. Son président, aidé de vice-présidents, exécute les décisions du conseil.'],
            img: 'assets/books/cm1-edd/hotel-ville.jpg',
            questions: [
              multi(1, 'Quelles sont les collectivités territoriales au Sénégal depuis 2013 ?', ['La commune', 'Le département'], ['La région', 'L\'arrondissement'], 'Je retiens de la page 75.', I('decentralisation')),
              rel(2, 'Relie chaque collectivité à l\'institution qui la gère.', [['La commune', 'Le conseil municipal'], ['Le département', 'Le conseil départemental']], 'Je retiens de la page 75.'),
              vf(1, 'La région est une collectivité territoriale au Sénégal.', false, 'Depuis l\'Acte III, ce n\'est plus une collectivité territoriale.'),
              vf(2, 'Une collectivité territoriale est une personne physique.', false, 'C\'est une personne morale de droit public.'),
              qcm(2, 'Pour combien de temps sont élus les conseillers municipaux ?', '5 ans', ['2 ans', '10 ans'], 'Je retiens de la page 83.', I('hotel-ville')),
              qcm(2, 'Qui est le chef de l\'exécutif dans la commune ?', 'Le maire', ['Le préfet', 'Le gouverneur'], 'Je retiens de la page 83.'),
              rel(3, 'Réponds par Oui ou Non.', [['Le conseil municipal contrôle le maire.', 'Oui'], ['Le maire prend seul les décisions.', 'Non'], ['Le conseil départemental représente seulement les habitants du chef-lieu.', 'Non']], 'Exercices du livre (p. 83, 87).'),
              comp(3, 'L\'Acte III de la décentralisation date de l\'année ___.', '2013', ['1960', '2000'], 'Loi n° 2013-10 du 28 décembre 2013.', I('conseil-departemental'))
            ]
          },
          {
            id: 'deconcentration', title: 'Les institutions déconcentrées', pages: '78-79, 90-91, 94-95, 98-99',
            summary: ['Une circonscription administrative est une zone résultant d\'une division du territoire national à des fins de gestion administrative.', 'La déconcentration est une délégation par l\'État de moyens et de pouvoirs à des autorités administratives au niveau local.', 'Trois institutions déconcentrées : la sous-préfecture (arrondissement), la préfecture (département), la gouvernance (région).', 'Le sous-préfet, le préfet et le gouverneur sont nommés par décret du Président de la République.'],
            img: 'assets/books/cm1-edd/gouvernance.jpg',
            questions: [
              rel(1, 'Relie chaque circonscription à son autorité.', [['L\'arrondissement', 'Le sous-préfet'], ['Le département', 'Le préfet'], ['La région', 'Le gouverneur']], 'Corrigé de l\'autoévaluation (p. 115).', I('sous-prefecture')),
              rel(2, 'Relie chaque institution à son lieu.', [['La sous-préfecture', 'L\'arrondissement'], ['La préfecture', 'Le département'], ['La gouvernance', 'La région']], 'Je retiens de la page 78.', I('prefecture')),
              qcm(1, 'Comment le gouverneur est-il désigné ?', 'Il est nommé par décret du Président de la République', ['Il est élu par les habitants', 'Il est choisi par le maire'], 'Je retiens de la page 99.', I('gouvernance')),
              vf(2, 'La sous-préfecture est une institution décentralisée.', false, 'C\'est une institution déconcentrée.'),
              vf(2, 'Chaque département choisit son préfet.', false, 'Le préfet est nommé par le Président de la République.'),
              vf(2, 'Le gouverneur a deux adjoints.', true, 'L\'adjoint aux affaires administratives et l\'adjoint au développement.'),
              vf(3, 'La commune est une circonscription administrative.', false, 'La commune est une collectivité territoriale.'),
              qcm(3, 'Quelle circonscription est à la fois collectivité territoriale et circonscription administrative ?', 'Le département', ['La commune', 'La région'], 'Exercice du livre (p. 75).')
            ]
          }
        ]
      },
      /* ======================= PALIER 2 — VIVRE DANS SON MILIEU ======================= */
      {
        id: 'p2-sante', title: 'Pollution, maladies respiratoires et cutanées', palier: 2, group: '🌿 Palier 2 — Vivre dans son milieu',
        lessons: [
          {
            id: 'asthme', title: 'L\'asthme', pages: '64-65',
            summary: ['L\'asthme est une maladie caractérisée par l\'inflammation, le rétrécissement et la contraction des voies respiratoires, rendant la respiration difficile.', 'Certains éléments (poussière, poils d\'animaux, pollen…) provoquent une réaction allergique chez des personnes prédisposées.', 'Symptômes : crise d\'essoufflement, respiration sifflante, essoufflement à l\'effort, toux. Ils surviennent surtout en pleine nuit ou au petit matin.'],
            img: 'assets/books/cm1-edd/asthme.jpg',
            questions: [
              vf(1, 'L\'asthme est une maladie respiratoire.', true, 'Exercice du livre (p. 65).', I('asthme')),
              vf(2, 'Les crises d\'asthme ont lieu surtout la nuit et à l\'aube.', true, 'Je retiens de la page 64.'),
              vf(2, 'Une personne prédisposée ne risque pas d\'avoir l\'asthme.', false, 'Ce sont justement les personnes prédisposées qui réagissent.'),
              rel(2, 'Range chaque élément : cause ou conséquence de l\'asthme ?', [['Le pollen', 'Cause'], ['Les poils d\'animaux', 'Cause'], ['La poussière', 'Cause'], ['La respiration difficile et sifflante', 'Conséquence'], ['L\'essoufflement à l\'effort', 'Conséquence']], 'Exercice du livre (p. 65).'),
              multi(3, 'Qu\'est-ce qui peut déclencher ou aggraver une crise d\'asthme ?', ['Le rhume', 'La fumée', 'L\'air froid', 'La pollution'], ['L\'eau potable'], 'Je retiens de la page 64.')
            ]
          },
          {
            id: 'bronchite', title: 'La bronchite et la pneumonie', pages: '68-69',
            summary: ['La bronchite est une maladie respiratoire causée par des virus ou des bactéries, favorisée par le tabac et la pollution. C\'est une inflammation des bronches.', 'Symptômes : toux profonde, mucus clair, jaunâtre ou verdâtre, frissons, fatigue, maux de tête, légère fièvre, douleur à la poitrine, souffle court.', 'Non ou mal soignée, elle peut évoluer en pneumonie, causée par le pneumocoque. Peu contagieuse, la pneumonie peut provoquer la mort.'],
            img: 'assets/books/cm1-edd/bronchite.jpg',
            questions: [
              qcm(1, 'Quel organe est enflammé dans la bronchite ?', 'Les bronches', ['L\'estomac', 'La peau'], 'Je retiens de la page 68.', I('bronchite')),
              qcm(2, 'Quel microbe cause la pneumonie ?', 'Le pneumocoque', ['Le plasmodium', 'Le sarcopte'], 'Je retiens de la page 68.'),
              vf(1, 'La bronchite est une infection respiratoire.', true, 'Exercice du livre (p. 69).'),
              vf(2, 'Tout fumeur a une bronchite.', false, 'Le tabac favorise la bronchite, mais tous les fumeurs ne l\'ont pas.'),
              vf(2, 'La pneumonie est très contagieuse.', false, 'Elle est peu contagieuse.'),
              comp(3, 'Une bronchite non ou mal soignée peut évoluer en ___.', 'pneumonie', ['gale', 'paludisme'], 'Je retiens de la page 68.')
            ]
          },
          {
            id: 'covid', title: 'La covid-19 : causes, symptômes et mesures', pages: '72-73, 76-77, 80-81',
            summary: ['La covid-19 est une pandémie, une maladie respiratoire causée par un coronavirus. Le virus est libéré par de petites particules quand une personne infectée tousse, éternue ou parle ; on peut aussi l\'attraper en se touchant le visage après avoir touché une surface contaminée.', 'Symptômes les plus courants : fièvre, toux sèche, difficultés respiratoires, fatigue. Moins courants : perte du goût et de l\'odorat, mal de gorge… Certaines personnes n\'ont aucun symptôme : ce sont les asymptomatiques.', 'Pour l\'éviter : se laver fréquemment les mains, porter un masque, respecter la distanciation physique, tousser dans le pli du coude, rester chez soi si on ne se sent pas bien.'],
            img: 'assets/books/cm1-edd/covid-lavage.jpg',
            questions: [
              qcm(1, 'Qu\'est-ce qui cause la covid-19 ?', 'Un coronavirus', ['Un moustique', 'Un parasite de la peau'], 'Je retiens de la page 72.', I('covid')),
              multi(1, 'Quels sont les symptômes les plus courants de la covid-19 ?', ['La fièvre', 'La toux sèche', 'Les difficultés respiratoires', 'La fatigue'], ['Les démangeaisons'], 'Je retiens de la page 76.', I('covid-symptomes')),
              comp(2, 'Une personne infectée qui n\'a aucun symptôme est dite ___.', 'asymptomatique', ['allergique', 'contagieuse'], 'Je retiens de la page 76.'),
              multi(1, 'Quelles mesures permettent d\'éviter la covid-19 ?', ['Se laver fréquemment les mains', 'Porter un masque', 'Respecter la distanciation physique', 'Tousser dans le pli du coude'], ['Se toucher le visage avec des mains sales'], 'Je retiens de la page 81.', I('covid-lavage')),
              vf(2, 'Toute toux est le début d\'une covid-19.', false, 'Exercice du livre (p. 77).'),
              vf(2, 'Tous les malades de la covid-19 développent les mêmes symptômes.', false, 'Les symptômes varient selon les personnes.'),
              qcm(3, 'Quelle température indique une forme grave de covid-19 ?', 'Supérieure à 38 °C', ['Inférieure à 30 °C', 'Exactement 36 °C'], 'Je retiens de la page 76.'),
              multi(3, 'Quelles maladies ont aussi été des pandémies dans l\'histoire ?', ['La peste noire', 'La grippe espagnole', 'Le choléra', 'Le sida'], ['L\'asthme'], 'Le savais-tu ? (p. 73).')
            ]
          },
          {
            id: 'pollution', title: 'Pollution et allergènes', pages: '84-85, 88-89',
            summary: ['Certains éléments peuvent causer des maladies respiratoires chez les personnes allergiques : ce sont les allergènes (pollen, encens, fumée, poussière, poils d\'animaux, courant d\'air…).', 'Les usines et les voitures polluent l\'atmosphère à cause de la fumée et des gaz d\'échappement.', 'Pour lutter contre les allergènes : sensibiliser pour diminuer la pollution ; dépoussiérer régulièrement ; éviter la fumée et la poussière ; porter un cache-nez ; arroser avant de balayer ; se couvrir contre le froid.'],
            img: 'assets/books/cm1-edd/allergie.jpg',
            questions: [
              comp(1, 'Les éléments qui provoquent une allergie s\'appellent des ___.', 'allergènes', ['vaccins', 'parasites'], 'Je retiens de la page 84.', I('allergie')),
              multi(1, 'Quels sont des allergènes ?', ['Le pollen', 'L\'encens', 'La fumée', 'La poussière', 'Les poils d\'animaux'], ['L\'eau potable'], 'Je retiens de la page 84.'),
              qcm(2, 'Pourquoi les usines et les voitures polluent-elles l\'air ?', 'À cause de la fumée et des gaz d\'échappement', ['À cause de leur couleur', 'Parce qu\'elles font du bruit'], 'Je retiens de la page 84.', I('usine-pollution')),
              vf(2, 'Les allergènes causent des maladies chez toutes les personnes.', false, 'Seulement chez les personnes allergiques.'),
              rel(2, 'Réponds par Oui ou Non.', [['Dormir dans une chambre envahie par la fumée d\'encens', 'Non'], ['Laisser sortir la fumée avant d\'entrer dans la chambre', 'Oui'], ['Porter un cache-nez pour éviter la poussière', 'Oui'], ['En tant qu\'asthmatique, jouer avec les chats', 'Non']], 'Exercice du livre (p. 89).'),
              qcm(3, 'Que faut-il faire avant de balayer pour éviter la poussière ?', 'Arroser', ['Ouvrir toutes les fenêtres', 'Allumer de l\'encens'], 'Je retiens de la page 89.')
            ]
          },
          {
            id: 'promiscuite', title: 'La promiscuité, la gale et les maladies cutanées', pages: '92-93, 96-97, 100-101',
            summary: ['La promiscuité est une mauvaise forme de cohabitation : une proximité qui empêche l\'intimité. Formes : plusieurs familles dans une même maison, plusieurs personnes dans une même pièce, quartiers non lotis.', 'Causes de la promiscuité : la pauvreté, l\'exode rural, les quartiers spontanés, la bidonvilisation, le manque d\'espace.', 'La gale est une infection cutanée favorisée par la promiscuité, causée par un parasite appelé sarcopte. Elle se manifeste par des démangeaisons partout sauf au visage.', 'Pour lutter contre les maladies cutanées : bien aérer les habitations, respecter les normes de construction, limiter le nombre de personnes par chambre, avoir un corps et des vêtements propres, reboiser.'],
            img: 'assets/books/cm1-edd/gale.jpg',
            questions: [
              multi(2, 'Quelles sont les causes de la promiscuité ?', ['La pauvreté', 'L\'exode rural', 'Les quartiers spontanés', 'Le manque d\'espace'], ['Le vaccin BCG'], 'Je retiens de la page 93.', I('quartier-promiscuite')),
              vf(1, 'La promiscuité est une cohabitation gênante.', true, 'Exercice du livre (p. 93).'),
              vf(2, 'Plusieurs familles dans une concession peuvent cohabiter sans promiscuité.', true, 'Exercice du livre (p. 93).'),
              qcm(1, 'Quel parasite cause la gale ?', 'Le sarcopte', ['Le plasmodium', 'Le pneumocoque'], 'Je retiens de la page 96.', I('gale')),
              rel(2, 'Réponds par Oui ou Non.', [['La gale est une pandémie.', 'Non'], ['La gale est une maladie éruptive.', 'Oui'], ['La gale est une maladie favorisée par la promiscuité.', 'Oui'], ['La gale ne touche que les enfants.', 'Non']], 'Exercice du livre (p. 97).'),
              qcm(2, 'Où la gale ne provoque-t-elle pas de démangeaisons ?', 'Au visage', ['Entre les doigts', 'Aux poignets'], 'Je retiens de la page 97.', I('gale-dos')),
              multi(3, 'Quelles sont d\'autres maladies éruptives ?', ['L\'eczéma', 'Le zona'], ['L\'asthme', 'Le choléra'], 'Je retiens de la page 97.'),
              multi(3, 'Comment lutter contre les maladies cutanées favorisées par la promiscuité ?', ['Bien aérer les habitations', 'Limiter le nombre de personnes par chambre', 'Avoir un corps et des vêtements propres'], ['Partager les vêtements de tout le monde'], 'Je retiens de la page 100.')
            ]
          }
        ]
      }
    ]
  });
})();

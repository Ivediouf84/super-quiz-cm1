/* =====================================================================
   CM1 — Langue et Communication (Éditions Didactikos)
   Palier 1 textes narratifs · Palier 2 textes descriptifs ·
   Palier 3 textes injonctifs · Palier 4 textes informatifs (lettres)
   Questions tirées des textes de lecture, des « Je retiens »
   (vocabulaire, grammaire, conjugaison, orthographe), des exercices
   et des corrigés d'autoévaluation. Images : assets/books/cm1-lc/
   ===================================================================== */
(function () {
  const { qcm, vf, multi, comp, trou, rel, ord } = QB;
  const I = (n) => ({ img: 'assets/books/cm1-lc/' + n + '.jpg' });

  QB.book({
    classId: 'cm1', domainId: 'lc',
    title: 'Langue et Communication CM1', source: 'Langue et Communication CM1 — Éditions Didactikos',
    chapters: [
      /* ============================ LECTURE ============================ */
      {
        id: 'lecture', title: 'Lecture : comprendre les textes du livre', palier: '📖 Lecture', group: '📖 Lecture et compréhension',
        lessons: [
          {
            id: 'narratifs', title: 'Textes narratifs (Palier 1)', pages: '14-55',
            summary: ['Un texte narratif raconte une histoire. Il comprend une situation initiale, un élément perturbateur et une situation finale.', 'On y trouve des connecteurs temporels, des connecteurs logiques et des phrases déclaratives.', 'Textes étudiés : « La rentrée des classes », « Un match de football », « La vaccination », « La mésaventure de Toutane », « Une visite mémorable », « Un jour de marché ».'],
            questions: [
              qcm(1, '« La rentrée des classes » : quel jour a lieu la rentrée ?', 'Le lundi', ['Le samedi', 'Le dimanche'], 'Le texte commence un lundi.', I('rentree-classes')),
              qcm(2, 'Dans quelle classe sont Bira et Lala ?', 'Au CM1, chez madame Fall', ['Au CM2', 'Au CE2'], 'Madame Fall est la maîtresse du CM1, pas la directrice.', I('rentree-classes')),
              rel(2, 'Relie chaque expression à son sens (lexique p. 14).', [['rire aux éclats', 'rire très fort'], ['un conteur en herbe', 'quelqu\'un qui s\'essaie à faire des contes'], ['la mine triste', 'l\'air troublé, le visage inquiet']], 'Lexique de « La rentrée des classes ».'),
              qcm(2, '« Un match de football » : quel est le score de la finale navétane ?', '1 à 0 pour Darou', ['1 à 0 pour Santos', '2 à 2'], 'Le capitaine de Darou marque juste avant la mi-temps.', I('match-football')),
              qcm(2, 'Que veut dire « fair-play » ?', 'Respectueux des règles du jeu', ['Très rapide', 'Mauvais perdant'], 'Lexique de « Un match de football ».'),
              qcm(1, '« La vaccination » : quels enfants sont vaccinés ?', 'Les enfants de moins de quatorze ans', ['Les adultes seulement', 'Les enfants de plus de quinze ans'], 'Texte de lecture (p. 30).', I('vaccination')),
              qcm(2, 'Qui annonce l\'arrivée des équipes de vaccination ?', 'Le crieur public', ['La directrice', 'Le chef du village'], 'Exercice du livre (p. 31).', I('vaccination')),
              qcm(1, '« La mésaventure de Toutane » : que faisait Toutane la nuit ?', 'Elle déposait des ordures à la place publique', ['Elle balayait la place', 'Elle surveillait le village'], 'Texte de lecture (p. 39).', I('toutane')),
              qcm(2, 'Qu\'a vu Toutane près des ordures ?', 'Un épouvantail', ['Un vrai djinn', 'Un voleur'], 'Les veilleurs avaient installé un épouvantail ressemblant à un fantôme.', I('toutane')),
              comp(2, 'Prendre ses jambes à son cou, c\'est courir à toute ___.', 'vitesse', ['heure', 'fête'], 'Lexique de « La mésaventure de Toutane ».'),
              qcm(1, '« Une visite mémorable » : quelle île les élèves visitent-ils ?', 'L\'île de Gorée', ['L\'île de Carabane', 'Les îles du Saloum'], 'Pour renforcer leurs connaissances sur l\'esclavage.', I('goree')),
              qcm(2, 'Comment s\'appelle la chaloupe qui va à Gorée ?', 'Coumba Castel', ['Aline Sitoé', 'Le Joola'], 'Texte de lecture (p. 47).', I('goree')),
              comp(2, 'L\'___ est le lieu de départ et d\'arrivée des bateaux.', 'embarcadère', ['exposition', 'baignade'], 'Lexique de « Une visite mémorable ».'),
              qcm(1, '« Un jour de marché » : où se tient le marché hebdomadaire ?', 'À Sandiara, entre Mbour et Fatick', ['À Diaobé', 'À Dakar'], 'Texte de lecture (p. 55).', I('marche-sandiara')),
              vf(1, 'Le marché de Sandiara se tient deux fois par semaine.', false, 'Il est hebdomadaire : une fois par semaine.', I('marche-sandiara')),
              comp(3, 'Un marché ___ a lieu une fois par semaine.', 'hebdomadaire', ['quotidien', 'annuel'], 'Lexique de « Un jour de marché ».'),
              ord(3, 'Range les parties d\'un texte narratif.', ['La situation initiale', 'L\'élément perturbateur', 'La situation finale'], 'Je remarque (p. 15).')
            ]
          },
          {
            id: 'descriptifs', title: 'Textes descriptifs (Palier 2)', pages: '66-108',
            summary: ['Un texte descriptif présente un lieu, un animal ou une personne. Il utilise des connecteurs spatiaux, des adjectifs qualificatifs et des verbes d\'état.', 'Textes étudiés : « L\'atelier de Fama », « Une plage accueillante », « La girafe », « Une salle informatique », « Portrait d\'un digne fils du pays », « Débi, un village sur le fleuve ».'],
            questions: [
              qcm(1, '« L\'atelier de Fama » : quel est le métier de Fama ?', 'Couturière', ['Coiffeuse', 'Boulangère'], 'Texte de lecture (p. 66).', I('atelier-fama')),
              vf(2, 'Il y a deux machines dans l\'atelier de Fama.', false, 'Il y a trois bruyantes machines.', I('atelier-fama')),
              qcm(2, 'Que sont les mannequins ?', 'Des objets à forme humaine portant des modèles de tenues', ['Des clientes', 'Des apprentis'], 'Lexique de « L\'atelier de Fama ».'),
              qcm(1, '« Une plage accueillante » : quand les jeunes nettoient-ils la plage ?', 'Le premier dimanche de chaque mois', ['Chaque jour', 'Une fois par an'], 'Texte de lecture (p. 74).', I('plage-accueillante')),
              rel(2, 'Relie chaque mot à son sens (lexique p. 74).', [['des bénévoles', 'des personnes qui travaillent sans être payées'], ['vigilants', 'attentifs'], ['patauger', 'marcher dans un endroit boueux']], 'Lexique de « Une plage accueillante ».'),
              qcm(1, '« La girafe » : de quelle couleur est son pelage ?', 'Roux, marqué de polygones', ['Gris et uni', 'Noir et blanc'], 'Texte d\'Abdoulaye Fall (p. 82).', I('girafe')),
              multi(2, 'Quelles phrases sur la girafe sont justes ?', ['La girafe a un cou immense.', 'Devant un arbre géant, la girafe lève la tête pour brouter les feuilles.'], ['La girafe est un carnivore.', 'La girafe ne peut pas se défendre.'], 'Exercice du livre (p. 83).', I('girafe')),
              qcm(3, 'À quoi la girafe est-elle comparée au galop ?', 'À un ressort', ['À un avion', 'À une flèche'], 'On dirait un ressort qui se comprime et se détend.'),
              qcm(2, '« Une salle informatique » : qui est la gérante ?', 'Coumba Sané', ['Fama', 'Madame Fall'], 'Ancienne étudiante de l\'université Senghor d\'Alexandrie.', I('salle-informatique')),
              vf(2, 'Coumba a financé elle-même la salle informatique.', false, 'Elle a été financée par une agence de l\'État pour l\'emploi des jeunes.', I('salle-informatique')),
              qcm(1, '« Portrait d\'un digne fils du pays » : qui est décrit ?', 'Jules François Bertrand Bocandé', ['Sadio Mané', 'El Hadji Diouf'], 'Ancien joueur de l\'équipe nationale du Sénégal.', I('bocande')),
              vf(2, 'Bocandé est né à Dakar.', false, 'Il est natif de la Casamance.'),
              comp(2, 'Le patriotisme, c\'est l\'amour de la ___.', 'patrie', ['gloire', 'famille'], 'Lexique du portrait de Bocandé.'),
              qcm(1, '« Débi, un village sur le fleuve » : sur quel fleuve se trouve Débi ?', 'Le fleuve Sénégal', ['La Casamance', 'La Gambie'], 'Sur la rive gauche, à la frontière avec la Mauritanie.', I('debi-pirogue')),
              rel(3, 'Où se trouve chaque lieu de Débi ?', [['La mosquée', 'À l\'Est de la place'], ['L\'école', 'À l\'Ouest, derrière les habitations'], ['Le chemin de la berge', 'Au Nord']], 'Texte d\'Ibrahima Diop (p. 107).'),
              qcm(3, 'Que veut dire « en forme de coupole » ?', 'En forme de calebasse renversée', ['En forme de carré', 'Très haut'], 'Lexique de « Débi ».')
            ]
          },
          {
            id: 'injonctifs', title: 'Textes injonctifs (Palier 3)', pages: '118-144',
            summary: ['Un texte injonctif donne des ordres, des conseils ou des consignes : recette, règle de jeu, notice, fabrication.', 'Textes étudiés : « Préparation d\'une omelette », « Le jeu du drapeau », « Le paracétamol comprimé », « Fabrication d\'une charrette ».'],
            questions: [
              qcm(1, 'Combien d\'œufs faut-il pour l\'omelette du livre ?', '6', ['2', '12'], 'Ingrédients : 6 œufs, 2 oignons, du poivre, de l\'huile, du sel.', I('omelette')),
              ord(2, 'Remets dans l\'ordre la préparation de l\'omelette.', ['Casser les œufs', 'Mélanger les œufs, le poivre, le sel et les oignons', 'Chauffer l\'huile', 'Faire cuire le mélange', 'Servir avec du pain'], 'Exercice du livre (p. 119).', I('omelette')),
              comp(2, 'Une ___ est une petite quantité prise entre deux doigts.', 'pincée', ['poêlée', 'cuillerée'], 'Lexique de l\'omelette.'),
              qcm(1, '« Le jeu du drapeau » : combien de joueurs au moins par équipe ?', 'Cinq', ['Deux', 'Onze'], 'Deux équipes comptant chacune cinq joueurs ou plus.', I('jeu-drapeau')),
              qcm(2, 'Quelle équipe gagne au jeu du drapeau ?', 'Celle qui a totalisé le plus de points', ['Celle qui marque le moins de points', 'Celle qui court le moins'], 'Texte de lecture (p. 126).', I('jeu-drapeau')),
              qcm(2, 'Paracétamol : à partir de quel âge l\'enfant peut-il prendre un comprimé ?', '8 ans', ['6 ans', '2 ans'], 'Notice du livre (p. 135).', I('paracetamol')),
              qcm(3, 'Combien de comprimés au maximum par jour pour un enfant de 8 à 14 ans ?', '4', ['8', '2'], 'Ne pas dépasser 4 comprimés par jour.', I('paracetamol')),
              rel(3, 'Durée du traitement au paracétamol sans avis du médecin.', [['En cas de douleur', '5 jours'], ['En cas de fièvre', '3 jours']], 'Notice du livre (p. 135).'),
              comp(2, 'La ___ précise la ou les doses à donner à un malade.', 'posologie', ['indication', 'notice'], 'Lexique du paracétamol.'),
              qcm(2, '« Fabrication d\'une charrette » : avec quoi fait-on les pneus ?', 'Des ronds découpés dans des semelles de sandales', ['Du carton', 'Du fil de fer'], 'On découpe deux ronds dans les sandales en guise de pneus.', I('charrette')),
              rel(3, 'Relie chaque partie de la charrette à son rôle.', [['L\'essieu', 'On y fixe les pneus'], ['Le plancher', 'On y met la charge'], ['La bride', 'Elle sert à diriger le cheval']], 'Lexique de la charrette (p. 143).', I('charrette'))
            ]
          },
          {
            id: 'lettres', title: 'Textes informatifs : les lettres (Palier 4)', pages: '154-180',
            summary: ['Une lettre comporte : le nom de l\'expéditeur, le lieu et la date, une formule d\'interpellation, le message, une formule de prise de congé et la signature.', 'Lettres étudiées : invitation de Sadio à Fatou, conseils d\'Ousmane pour l\'environnement, sensibilisation sur le choléra, lettre de solidarité de Sokhna.'],
            questions: [
              qcm(1, 'Qui est l\'expéditrice de la lettre d\'invitation ?', 'Sadio Kandé', ['Fatou', 'La maîtresse'], 'La destinataire est Fatou.'),
              qcm(2, 'Dans quelle région Sadio invite-t-elle Fatou pour les vacances ?', 'Au Fouladou (Kolda)', ['À Saint-Louis', 'À Thiès'], 'Fatou habite à Saint-Louis.'),
              comp(2, 'Une ___ est une lettre.', 'missive', ['trimestre', 'vacance'], 'Lexique de la lettre d\'invitation.'),
              qcm(2, 'Dans le gouvernement scolaire, de quoi Ousmane est-il ministre ?', 'De l\'environnement et de l\'hygiène', ['De l\'éducation', 'Des sports'], 'Lettre « Conseils pour le respect de l\'environnement ».', I('ecole-accueillante')),
              qcm(3, 'Quelle est la devise de l\'article 6 du code de l\'environnement d\'Ousmane ?', '« Un enfant sain dans un environnement sain »', ['« Travail, paix, justice »', '« Un peuple, un but, une foi »'], 'Code « Préserve ton école de la dégradation ».'),
              multi(2, 'Quels conseils Ousmane Sèye donne-t-il contre le choléra ?', ['Laver les aliments crus avec de l\'eau javellisée', 'Boire de l\'eau potable', 'Se laver les mains avant de manger', 'Désinfecter les toilettes'], ['Partager son assiette avec tout le monde'], 'Lettre « Sensibilisation sur le choléra » (p. 172).'),
              qcm(2, 'Lettre de Sokhna : qu\'est-il arrivé au village ?', 'Des intempéries ont causé des dégâts', ['Une grande fête a eu lieu', 'Un nouveau puits a été construit'], 'Le vent a endommagé les concessions et la foudre a provoqué un incendie.'),
              comp(3, 'La ___ est un sentiment de pitié qui rend sensible aux malheurs des autres.', 'compassion', ['météo', 'intempérie'], 'Lexique de « La solidarité ».')
            ]
          }
        ]
      },
      /* ============================ VOCABULAIRE ============================ */
      {
        id: 'vocabulaire', title: 'Vocabulaire', palier: '🔤 Vocabulaire', group: '🔤 Vocabulaire',
        lessons: [
          {
            id: 'connecteurs', title: 'Connecteurs, présentatifs, comparatifs', pages: '16, 68, 76, 80, 97',
            summary: ['D\'abord, puis, ensuite, enfin… renseignent sur la succession des actions : ce sont des connecteurs logiques.', 'Hier, aujourd\'hui, autrefois, soudain, tout à coup… renseignent sur le temps : ce sont des connecteurs temporels.', 'À l\'entrée, devant, à côté, à l\'intérieur, non loin… permettent de se situer dans l\'espace : ce sont des connecteurs spatiaux.', 'C\'est là que, voici, voilà, il y a, il y avait… servent à présenter : ce sont des présentatifs.'],
            questions: [
              rel(1, 'Range chaque mot dans sa famille de connecteurs.', [['ensuite', 'Connecteur logique'], ['enfin', 'Connecteur logique'], ['autrefois', 'Connecteur temporel'], ['soudain', 'Connecteur temporel'], ['à l\'intérieur', 'Connecteur spatial'], ['non loin', 'Connecteur spatial']], 'Je retiens des pages 16 et 68.'),
              ord(2, 'Remets les actions de Bira et Lala dans l\'ordre.', ['D\'abord, ils se préparent.', 'Ensuite, ils prennent leur petit déjeuner.', 'Puis, ils se dirigent vers l\'école.', 'Enfin, ils arrivent avant huit heures.'], 'Exercice du livre (p. 16).'),
              rel(2, 'Donne le connecteur spatial de sens contraire.', [['à l\'entrée du village', 'à la sortie du village'], ['très loin', 'très près'], ['à l\'intérieur', 'à l\'extérieur'], ['devant', 'derrière']], 'Exercice du livre (p. 68).'),
              multi(1, 'Quels mots sont des présentatifs ?', ['voici', 'voilà', 'il y a', 'c\'est là que'], ['ensuite'], 'Je retiens de la page 76.'),
              comp(2, '___ mon amie Sylvie.', 'Voici', ['Ensuite', 'Derrière'], 'Je retiens de la page 76.'),
              qcm(3, 'Transforme : « Notre maison est plus grande que ce château. »', 'Ce château est moins grand que notre maison.', ['Ce château est plus grand que notre maison.', 'Ce château est aussi grand que notre maison.'], 'Comparatifs plus… que / moins… que (p. 80).')
            ]
          },
          {
            id: 'syno-contraires', title: 'Synonymes, contraires, homonymes', pages: '24, 32, 57, 93, 101, 145',
            summary: ['Les synonymes sont des mots de sens proches, de même nature (débuter / commencer ; vainqueur / gagnant).', 'Les contraires sont des mots de sens opposés. On peut aussi exprimer le contraire par la négation. On forme des contraires avec in-, im-, dé-, dés-, il-, ir-.', 'Les homonymes se prononcent de la même manière mais ont des orthographes et des sens différents (tante / tente ; mère / mer / maire).'],
            questions: [
              rel(1, 'Relie chaque mot à son synonyme.', [['sortie', 'issue'], ['joyeux', 'content'], ['conducteur', 'chauffeur'], ['militaire', 'soldat'], ['immense', 'énorme']], 'Exercice du livre (p. 24).'),
              multi(2, 'Quels mots sont des synonymes de « ami » ?', ['camarade', 'compagnon', 'copain'], ['adversaire', 'rival', 'étranger'], 'Exercice du livre (p. 93).'),
              rel(1, 'Relie chaque adjectif à son contraire.', [['moche', 'beau'], ['terne', 'brillant'], ['clair', 'sombre'], ['vétuste', 'neuf'], ['foncé', 'pâle']], 'Exercice du livre (p. 101).'),
              rel(2, 'Forme le contraire avec le bon préfixe.', [['propre', 'impropre'], ['loyal', 'déloyal'], ['légal', 'illégal'], ['régulier', 'irrégulier']], 'Exercices du livre (p. 32).'),
              rel(3, 'Corrigé p. 104 : remplace chaque mot par son contraire.', [['inoffensif', 'offensif'], ['méchant', 'gentil'], ['décourage', 'encourage'], ['détesté', 'aimé']], 'Corrigé de l\'autoévaluation.'),
              rel(2, 'Trouve l\'homonyme qui correspond à la définition.', [['plan → (une jeune plante à repiquer)', 'plant'], ['pin → (un aliment)', 'pain'], ['elle → (permet à l\'oiseau de voler)', 'aile'], ['faire → (un métal)', 'fer']], 'Exercice du livre (p. 57).'),
              comp(2, 'La girafe a un très long ___.', 'cou', ['coût', 'coup', 'coud'], 'Exercice du livre (p. 57).'),
              comp(2, 'Le ___ de cette robe est élevé.', 'coût', ['cou', 'coup', 'coud'], 'Exercice du livre (p. 57).'),
              comp(3, 'En grattant le sol, la poule a découvert un ___ de terre.', 'ver', ['vert', 'vers', 'verre'], 'Exercice du livre (p. 57).')
            ]
          },
          {
            id: 'formation', title: 'Préfixes, suffixes, familles de mots, sens des mots', pages: '41, 49, 109, 145',
            summary: ['Le radical est la partie du mot qui ne change pas. Le préfixe se place avant (monter → surmonter), le suffixe après (chant → chanteur).', 'Les mots de la même famille ont le même radical (habitant, habiter, habitation). Attention : solaire et solitaire ne sont pas de la même famille.', 'Un mot peut avoir un sens propre (situation concrète) ou un sens figuré (comparaison).'],
            questions: [
              qcm(1, 'Dans « surmonter », quelle partie est le préfixe ?', 'sur-', ['-monter', 'mont'], 'Le préfixe se place avant le radical.'),
              qcm(2, 'Dans « détachable », quel est le suffixe ?', '-able', ['dé-', 'tach'], 'Radical : détach ; suffixe : able.'),
              rel(2, 'Ajoute un suffixe (corrigé p. 53).', [['port', 'porteur'], ['calme', 'calmement'], ['rond', 'rondeur'], ['propre', 'proprement']], 'Corrigé de l\'autoévaluation.'),
              multi(2, 'Quels mots sont de la même famille que « assister » ?', ['assistance', 'assistant'], ['désister', 'insister', 'assis'], 'Exercice du livre (p. 109).'),
              rel(2, 'Trouve l\'intrus de chaque famille.', [['plant, planteur, plan, plantation', 'plan'], ['former, formateur, formation, fermer', 'fermer']], 'Exercice du livre (p. 109).'),
              rel(3, 'Relie les mots de la même famille.', [['école', 'écolière'], ['année', 'annuelle'], ['terre', 'terrestre'], ['terreur', 'terrible'], ['fête', 'festin']], 'Exercice du livre (p. 109).'),
              rel(3, 'Trouve l\'origine de chaque famille (corrigé p. 177).', [['respectable, irrespectueux', 'respect'], ['chanter, chanson, chanteur', 'chant'], ['paiement, payable, payeur', 'paye']], 'Corrigé de l\'autoévaluation.'),
              qcm(2, '« Coura prend l\'autobus. » Le verbe prendre est employé au sens…', 'figuré', ['propre'], 'Je retiens de la page 41.')
            ]
          },
          {
            id: 'dictionnaire', title: 'Dictionnaire, ordre alphabétique, abréviations, lettres', pages: '84, 137, 156, 165',
            summary: ['Dans le dictionnaire, les mots sont classés par ordre alphabétique. On y cherche le sens, l\'orthographe, le genre et la classe d\'un mot. Pour un verbe, on cherche l\'infinitif.', 'Une abréviation est une écriture incomplète d\'un mot (Monsieur → M. ; Madame → Mme).', 'Formules d\'interpellation : Cher/Chère + prénom ; Mon cher ; Ma chère… Formules de prise de congé : Amicalement ; Fraternellement ; À bientôt…'],
            questions: [
              ord(1, 'Classe ces mots par ordre alphabétique.', ['girafe', 'gondelé', 'guichet', 'guidé', 'jambe'], 'Corrigé de l\'autoévaluation (p. 181).'),
              ord(2, 'Classe ces mots par ordre alphabétique.', ['amande', 'animation', 'animatrice', 'festival', 'festoyer', 'fête'], 'Exercice du livre (p. 84).'),
              qcm(2, 'Pour trouver un verbe dans le dictionnaire, on cherche…', 'son infinitif', ['sa forme au passé', 'sa forme au pluriel'], 'Je retiens de la page 84.'),
              rel(2, 'Relie chaque abréviation à sa signification.', [['O.M.S.', 'Organisation Mondiale de la Santé'], ['C.I.O.', 'Comité International Olympique'], ['A.S.C.', 'Association Sportive et Culturelle'], ['I.E.F.', 'Inspection de l\'Éducation et de la Formation']], 'Exercice du livre (p. 137).'),
              rel(3, 'Corrigé p. 166 : relie chaque abréviation.', [['B.F.E.M.', 'Brevet de Fin d\'Études Moyennes'], ['U.C.A.D.', 'Université Cheikh Anta Diop'], ['C.E.N.A.', 'Commission Électorale Nationale Autonome'], ['ONU', 'Organisation des Nations Unies']], 'Corrigé de l\'autoévaluation.'),
              multi(1, 'Quelles sont des formules d\'interpellation ?', ['Ma chère tante', 'Mon cher ami', 'Cher papa'], ['Au revoir', 'À bientôt'], 'Exercice du livre (p. 156).'),
              multi(2, 'Quelles sont des formules de prise de congé ?', ['Amicalement', 'Fraternellement', 'À très bientôt'], ['Mon cher Abdou', 'Ma chère Sylvie'], 'Corrigé (p. 177).')
            ]
          }
        ]
      },
      /* ============================ GRAMMAIRE ============================ */
      {
        id: 'grammaire', title: 'Grammaire', palier: '🧱 Grammaire', group: '🧱 Grammaire',
        lessons: [
          {
            id: 'phrases', title: 'Types et formes de phrases', pages: '17, 25, 33, 121, 129, 138',
            summary: ['La phrase simple contient un seul verbe conjugué ; la phrase complexe comprend plusieurs propositions.', 'Déclarative (se termine par un point), interrogative (point d\'interrogation), exclamative (point d\'exclamation), impérative (ordre, conseil, se termine par un point).', 'La forme négative encadre le verbe : ne… pas, ne… plus, ne… jamais, ne… rien.', 'Phrase impersonnelle : « Il faut + infinitif ». Phrase infinitive : le verbe est à l\'infinitif (Avaler le comprimé avec de l\'eau).'],
            questions: [
              rel(1, 'Donne le type de chaque phrase.', [['Comment résoudre ce problème ?', 'Interrogative'], ['Va dans ta chambre.', 'Impérative'], ['Tu n\'écoutes jamais.', 'Déclarative'], ['Quel vent glacial !', 'Exclamative']], 'Exercice du livre (p. 25).'),
              qcm(1, '« Maman prépare la fête de la Tabaski. » Cette phrase est…', 'simple', ['complexe'], 'Elle n\'a qu\'un verbe conjugué.'),
              qcm(2, '« Il appelle un enfant et lui demande son nom. » Cette phrase est…', 'complexe', ['simple'], 'Elle a deux verbes conjugués.'),
              qcm(1, 'Mets à la forme négative : « Le vent souffle fort. »', 'Le vent ne souffle pas fort.', ['Le vent souffle pas fort.', 'Le vent ne souffle fort.'], 'La négation encadre le verbe.'),
              multi(2, 'Quelles phrases sont impératives ?', ['N\'écoute jamais le flatteur.', 'Choisis un beau vêtement.', 'Prenons le chawarma avant qu\'il ne refroidisse.'], ['Tu ne le regretteras pas.'], 'Exercice du livre (p. 121).'),
              qcm(2, 'Transforme : « Dire la vérité. » en phrase impersonnelle.', 'Il faut dire la vérité.', ['Dis la vérité.', 'Je dis la vérité.'], 'Phrase impersonnelle : il faut + infinitif.'),
              multi(2, 'Quels sont des verbes impersonnels ?', ['falloir', 'pleuvoir', 'neiger'], ['manger', 'courir'], 'Je retiens de la page 129.'),
              qcm(3, 'Transforme « Il faut partir tôt. » en phrase infinitive.', 'Partir tôt.', ['Pars tôt.', 'Tu pars tôt.'], 'Corrigé de l\'autoévaluation (p. 160).'),
              qcm(3, 'Transforme « Épluche proprement les légumes. » en phrase impersonnelle.', 'Il faut éplucher proprement les légumes.', ['Éplucher proprement les légumes.', 'Tu épluches proprement les légumes.'], 'Techniques d\'expression (p. 141).')
            ]
          },
          {
            id: 'gn', title: 'Pronoms, déterminants, groupe sujet et groupe verbal', pages: '42, 50, 58, 69',
            summary: ['Les pronoms personnels sujets : je, tu, il, elle, nous, vous, ils, elles. Les pronoms compléments (le, la, les, l\', lui, leur…) se placent avant le verbe, sauf à l\'impératif affirmatif (Prenez-le).', 'Le groupe sujet peut être formé de plusieurs mots (Quelques vendeurs). Le groupe verbal comprend le verbe et ses compléments.', 'Adjectifs démonstratifs : ce, cet, cette, ces. Possessifs : mon, ton, son, notre, leur… Indéfinis : quelque(s), certains, plusieurs, chaque, tout, aucun.'],
            questions: [
              rel(1, 'Remplace par le bon pronom personnel (corrigé p. 53).', [['La directrice', 'elle'], ['Bira et Lala', 'ils'], ['L\'apprenti et moi', 'nous'], ['Sokhna et toi', 'vous'], ['Nafi et Awa', 'elles']], 'Corrigé de l\'autoévaluation.'),
              qcm(2, '« Les invités sont arrivés, maman les reçoit. » Quelle est la fonction de « les » ?', 'Complément d\'objet direct de « reçoit »', ['Sujet de « reçoit »', 'Complément du nom'], 'Je retiens de la page 50.'),
              qcm(2, '« Quelques vendeurs débarquent leurs marchandises. » Quel est le groupe sujet ?', 'Quelques vendeurs', ['débarquent', 'leurs marchandises'], 'Je retiens de la page 58.'),
              rel(2, 'Donne la nature de chaque déterminant (corrigé p. 45).', [['Certaines', 'Adjectif indéfini'], ['Leurs', 'Adjectif possessif'], ['Ce', 'Adjectif démonstratif'], ['Vos', 'Adjectif possessif']], 'Corrigé de l\'autoévaluation.'),
              comp(2, '___ homme est mon ami.', 'Cet', ['Ce', 'Cette', 'Ces'], 'Devant un nom masculin commençant par une voyelle, on écrit « cet ».'),
              comp(3, '___ école a une bonne réputation.', 'Cette', ['Ce', 'Cet', 'Ces'], 'École est un nom féminin.')
            ]
          },
          {
            id: 'adjectifs', title: 'Adjectif, attribut, complément du nom, apposition', pages: '77, 85, 94, 102',
            summary: ['L\'adjectif qualificatif est épithète s\'il est directement relié au nom (une route étroite), attribut s\'il est relié par un verbe d\'état (La mer semble calme), mis en apposition s\'il est séparé par une virgule (Fatiguées, les cultivatrices…).', 'Le nom attribut du sujet est introduit par un verbe d\'état (Rosalie est une athlète).', 'Le complément du nom complète un nom (le bureau de Coumba ; une machine à coudre). L\'apposition ajoute une précision (Dakar, la capitale du Sénégal, …).', 'Le complément de l\'adjectif est relié par une préposition ou par que (fier de sa fille ; sûr de réussir).'],
            questions: [
              rel(2, 'Donne la fonction de l\'adjectif souligné.', [['Une route étroite traverse le village.', 'Épithète'], ['La mer semble calme.', 'Attribut du sujet'], ['Fatiguées, les cultivatrices se reposent.', 'Mis en apposition']], 'Je retiens de la page 77.'),
              rel(3, 'Corrigé p. 77 : trouve les adjectifs mis en apposition.', [['…, le malfaiteur appréhendé tremble de tout son corps.', 'Inquiet'], ['…, Bineta a obtenu de brillants résultats.', 'Assidue'], ['…, la judoka a su éviter le piège.', 'Intelligente']], 'Corrigé de l\'autoévaluation.'),
              multi(2, 'Quels mots sont des noms attributs du sujet ?', ['une policière', 'un grand journaliste', 'une fermière'], ['discipliné'], 'Exercice du livre (p. 85).'),
              qcm(2, '« Le bureau de Coumba est propre. » Quelle est la fonction de « de Coumba » ?', 'Complément du nom', ['Apposition', 'Sujet'], 'Je retiens de la page 94.'),
              qcm(2, '« Dakar, la capitale du Sénégal, est une grande ville. » « la capitale du Sénégal » est…', 'une apposition', ['un complément du nom', 'un attribut'], 'Je retiens de la page 94.'),
              qcm(3, '« Le père est fier de sa fille. » Que représente « de sa fille » ?', 'Le complément de l\'adjectif « fier »', ['Le sujet', 'Un complément circonstanciel'], 'Je retiens de la page 102.')
            ]
          },
          {
            id: 'complements', title: 'COD, COI, compléments circonstanciels, adverbes', pages: '146, 157, 166',
            summary: ['Le COD est directement relié au verbe et répond à qui ? quoi ? (Le vendeur interpelle le client).', 'Le COI est relié par une préposition (à, de, pour) et répond à à qui ? à quoi ? de qui ? de quoi ? (Djiby s\'adresse à une militante).', 'Le complément circonstanciel de lieu répond à « où ? » ; celui de temps répond à « quand ? ».', 'L\'adverbe est invariable. Les adverbes de manière en -ment se forment souvent sur le féminin de l\'adjectif (heureuse → heureusement).'],
            questions: [
              rel(2, 'COD ou COI ?', [['Le vendeur interpelle le client.', 'COD'], ['Djiby s\'adresse à une militante.', 'COI'], ['Sadio rédige une lettre.', 'COD'], ['Les enfants parlent à leurs parents.', 'COI']], 'Je retiens de la page 157.'),
              comp(2, 'Les supportrices discutent ___ match.', 'du', ['au', 'aux'], 'Exercice du livre (p. 157).'),
              rel(2, 'CC de lieu ou CC de temps ?', [['Je travaillais dans les champs.', 'Lieu'], ['Ce soir, nous regarderons le film.', 'Temps'], ['Le troupeau se repose sous le manguier.', 'Lieu'], ['La semaine dernière, j\'avais reçu une visite.', 'Temps']], 'Je retiens et exercice (p. 166).'),
              rel(2, 'Remplace par un adverbe de manière.', [['avec vigueur', 'vigoureusement'], ['avec douceur', 'doucement'], ['avec soin', 'soigneusement'], ['avec difficulté', 'difficilement']], 'Exercice du livre (p. 146).'),
              trou(3, 'Quel adverbe de manière forme-t-on avec « patient » ?', ['patiemment'], 'patient → patiemment (p. 146).'),
              trou(3, 'Quel adverbe de manière forme-t-on avec « violent » ?', ['violemment'], 'violent → violemment.')
            ]
          },
          {
            id: 'propositions', title: 'Propositions, pronoms relatifs, accord verbe-sujet', pages: '110, 131, 175, 183',
            summary: ['Une phrase peut contenir une proposition indépendante ou plusieurs propositions (principale + subordonnée).', 'Le pronom relatif (qui, que, quoi, dont, où, lequel…) remplace un nom, son antécédent, pour éviter une répétition.', 'Un sujet peut être commun à plusieurs verbes ; un verbe peut avoir plusieurs sujets partiels.', 'Le verbe s\'accorde avec son sujet ; deux sujets au singulier valent un sujet au pluriel (Ali et Fatou sont…).'],
            questions: [
              qcm(2, '« La voiture que tu vois appartient à Célestine. » Quelle est la proposition subordonnée ?', 'que tu vois', ['La voiture appartient à Célestine', 'à Célestine'], 'Je retiens de la page 175.'),
              comp(2, 'Ne mange pas dans cette assiette ___ est sale.', 'qui', ['que', 'dont', 'où'], 'Je retiens de la page 110.'),
              rel(3, 'Complète avec lequel ou ses dérivés (corrigé p. 104).', [['J\'ai lu un livre dans … il y a beaucoup de contes.', 'lequel'], ['La chambre dans … dort mon ami est grande.', 'laquelle'], ['Les poupées … elle pense sont chères.', 'auxquelles'], ['La réunion à … j\'ai participé s\'est bien déroulée.', 'laquelle']], 'Corrigé de l\'autoévaluation.'),
              qcm(2, '« Fatou, Sali et Awa jouent à la marelle. » Combien de sujets partiels ?', '3', ['1', '2'], 'Je retiens de la page 131.'),
              qcm(2, '« Grand-mère allume la lampe, réunit les enfants et raconte des histoires. » « Grand-mère » est…', 'un sujet commun', ['un sujet partiel', 'un COD'], 'Je retiens de la page 131.'),
              comp(1, 'Joseph et moi ___ des amis.', 'sommes', ['est', 'êtes'], 'Deux sujets : le verbe se met au pluriel.'),
              comp(2, 'Sylvie et toi ___ au marché.', 'allez', ['va', 'allons'], 'Je retiens de la page 183.')
            ]
          }
        ]
      },
      /* ============================ CONJUGAISON ============================ */
      {
        id: 'conjugaison', title: 'Conjugaison', palier: '⏱️ Conjugaison', group: '⏱️ Conjugaison',
        lessons: [
          {
            id: 'indicatif', title: 'Présent, imparfait, futur de l\'indicatif', pages: '18, 34, 70, 86, 139',
            summary: ['Le présent exprime une action qui se déroule au moment où l\'on parle, une habitude ou une vérité générale.', 'L\'imparfait exprime une action qui se prolonge dans le passé. Terminaisons : -ais, -ais, -ait, -ions, -iez, -aient.', 'Le futur simple exprime une action à venir. Terminaisons : -ai, -as, -a, -ons, -ez, -ont. Venir → je viendrai ; aller → j\'irai ; voir → je verrai ; faire → je ferai.', 'Les verbes d\'état : être, paraître, rester, sembler, devenir, demeurer, passer pour, avoir l\'air.'],
            questions: [
              comp(1, 'Nous ___ nos affaires. (ranger, présent)', 'rangeons', ['rangons', 'rangeont'], 'Avec -ger, on garde le e devant -ons.'),
              comp(1, 'Nous ___ une bonne place. (choisir, présent)', 'choisissons', ['choisons', 'choisirons'], 'Choisir : nous choisissons.'),
              rel(2, 'Imparfait (corrigé p. 20).', [['tu (prier)', 'tu priais'], ['nous (prier)', 'nous priions'], ['nous (craindre)', 'nous craignions'], ['nous (bénir)', 'nous bénissions']], 'Corrigé de l\'autoévaluation.'),
              comp(2, 'Nous ___ sur la place. (placer, imparfait)', 'placions', ['plaçions', 'placons'], 'Devant -i, pas de cédille : nous placions.'),
              rel(2, 'Futur simple, 1re personne du singulier.', [['venir', 'je viendrai'], ['aller', 'j\'irai'], ['voir', 'je verrai'], ['faire', 'je ferai']], 'Je retiens de la page 139.'),
              multi(2, 'Quels verbes sont des verbes d\'état ?', ['paraître', 'sembler', 'devenir', 'demeurer'], ['courir', 'manger'], 'Je retiens de la page 70.'),
              rel(3, 'Relie chaque sujet au bon groupe verbal (p. 70).', [['Nafi et moi', 'devenons de bons coureurs'], ['Tu', 'sembles malheureux'], ['Vous', 'êtes contents de vous rencontrer'], ['Laïla', 'a l\'air d\'une grande magicienne']], 'Exercice du livre (p. 70).')
            ]
          },
          {
            id: 'passes', title: 'Passé composé, passé simple, plus-que-parfait', pages: '26, 43, 51, 78, 95, 103',
            summary: ['Le passé composé exprime une action déjà accomplie : auxiliaire avoir ou être au présent + participe passé.', 'Le passé simple indique une action passée complètement achevée (j\'eus, je fus, je déposai, je remplis, je compris, je pus).', 'Le plus-que-parfait exprime une action qui s\'est déroulée avant une autre au passé : auxiliaire à l\'imparfait + participe passé (j\'avais trouvé ; j\'étais monté).'],
            questions: [
              rel(2, 'Relie chaque sujet à son groupe verbal au passé composé.', [['Les conteurs', 'ont écrit une belle histoire'], ['Rama et toi', 'avez pris un repos mérité'], ['Lui et moi', 'sommes arrivés les premiers']], 'Exercice du livre (p. 26).'),
              rel(2, 'Passé simple (corrigé p. 72).', [['je (être) intéressé', 'je fus intéressé'], ['nous (devenir) grands', 'nous devînmes grands'], ['vous (paraître) émus', 'vous parûtes émus']], 'Corrigé de l\'autoévaluation.'),
              comp(2, 'Nous ___ les corbeilles de fruits. (remplir, passé simple)', 'remplîmes', ['remplissons', 'remplirent'], 'Remplir au passé simple : nous remplîmes.'),
              rel(3, 'Passé simple (corrigé p. 53).', [['je (faire)', 'je fis'], ['il (offrir)', 'il offrit'], ['il (peindre)', 'il peignit'], ['vous (suspendre)', 'vous suspendîtes']], 'Corrigé de l\'autoévaluation.'),
              rel(2, 'Relie au plus-que-parfait (p. 51).', [['Tu', 'avais eu des cadeaux'], ['Le capitaine', 'avait signé des autographes'], ['Vous', 'étiez montés les premiers'], ['Nous', 'étions allés à l\'île de Gorée']], 'Exercice du livre (p. 51).'),
              qcm(3, 'Comment se forme le plus-que-parfait ?', 'Auxiliaire avoir ou être à l\'imparfait + participe passé', ['Auxiliaire au présent + participe passé', 'Radical + -ai'], 'Je retiens de la page 51.')
            ]
          },
          {
            id: 'modes', title: 'Impératif, conditionnel, subjonctif', pages: '122, 130, 158, 176',
            summary: ['L\'impératif présent donne un ordre, un conseil ; il s\'emploie sans sujet, à 3 personnes : mange, mangeons, mangez ; choisis, choisissons, choisissez ; dors, dormons, dormez ; reçois, recevons, recevez.', 'Le conditionnel présent exprime une action soumise à une condition (Si tu étais là, Diatou te demanderait ton avis) ou une demande polie (Je voudrais…).', 'Le subjonctif exprime une action souhaitée, désirée ou douteuse ; le pronom est précédé de « que » (que je sois, que j\'aie, que je choisisse, que je parte).'],
            questions: [
              rel(1, 'Impératif présent de « choisir ».', [['2e personne du singulier', 'Choisis'], ['1re personne du pluriel', 'Choisissons'], ['2e personne du pluriel', 'Choisissez']], 'Je retiens de la page 122.'),
              comp(2, '___ le tableau. (peindre, 2e personne du singulier)', 'Peins', ['Peint', 'Peignes'], 'Peindre : peins, peignons, peignez.'),
              comp(2, '___ les cadeaux. (recevoir, 1re personne du pluriel)', 'Recevons', ['Reçevons', 'Recevez'], 'Recevoir : reçois, recevons, recevez.'),
              comp(2, 'Si Lala réussissait, madame Sall lui ___ un cadeau. (offrir)', 'offrirait', ['offrira', 'offre'], 'Condition à l\'imparfait → conditionnel présent.'),
              qcm(2, 'Quel temps utilise-t-on pour demander poliment ?', 'Le conditionnel présent : « Je voudrais… »', ['Le passé simple', 'L\'impératif'], 'Je retiens de la page 158.'),
              comp(2, 'Il faut que je ___ l\'examen. (réussir)', 'réussisse', ['réussis', 'réussirai'], 'Après « il faut que », on emploie le subjonctif.'),
              rel(3, 'Subjonctif présent.', [['être (nous)', 'que nous soyons'], ['avoir (nous)', 'que nous ayons'], ['choisir (nous)', 'que nous choisissions'], ['partir (ils)', 'qu\'ils partent']], 'Je retiens de la page 176.')
            ]
          }
        ]
      },
      /* ============================ ORTHOGRAPHE ============================ */
      {
        id: 'orthographe', title: 'Orthographe', palier: '✏️ Orthographe', group: '✏️ Orthographe',
        lessons: [
          {
            id: 'regles', title: 'Règles d\'écriture des mots', pages: '19, 35, 60, 140',
            summary: ['La ponctuation aide à lire un texte : point, virgule, point-virgule, deux points, points de suspension, tirets, guillemets, parenthèses…', 'Les noms féminins en « é » s\'écrivent « ée » (la tournée, la vallée), sauf ceux en « té / tié » (la qualité, l\'amitié). Attention : la dictée, la montée, la jetée. Lycée, musée, trophée sont masculins.', 'Devant m, b, p, on écrit m au lieu de n (timbre, combat, pompe). Attention : bonbon, néanmoins, embonpoint.', 'Les mots en ap-, af-, ac-, at- doublent souvent la consonne (appliquer, affirmer, accompagner, attention), sauf : après, apercevoir, afin, Afrique, acacia, académie, atelier, athlète, atlas…'],
            questions: [
              multi(2, 'Quels noms féminins s\'écrivent avec « ée » ?', ['la tournée', 'la vallée', 'la dictée'], ['la qualité', 'l\'amitié'], 'Je retiens de la page 35.'),
              qcm(2, 'Lequel de ces noms en « ée » est masculin ?', 'le musée', ['la pincée', 'la soirée'], 'Lycée, trophée, musée, mausolée sont masculins.'),
              rel(2, 'Forme le nom (p. 35).', [['entrer', 'entrée'], ['monter', 'montée'], ['cher', 'cherté'], ['clair', 'clarté']], 'Exercices du livre (p. 35).'),
              comp(1, 'Devant m, b, p, on écrit ___ au lieu de n.', 'm', ['n', 'nn'], 'Je retiens de la page 60.'),
              rel(2, 'Corrige les mots (corrigé p. 53).', [['senble', 'semble'], ['conpétition', 'compétition'], ['nonbreux', 'nombreux'], ['s\'enpressent', 's\'empressent']], 'Corrigé de l\'autoévaluation.'),
              multi(3, 'Quels mots ne doublent pas la consonne ?', ['après', 'afin', 'atelier', 'académie'], ['appliquer', 'affirmer', 'attention'], 'Je retiens de la page 140.')
            ]
          },
          {
            id: 'feminin', title: 'Le féminin des adjectifs', pages: '71, 79',
            summary: ['Les adjectifs en -f font -ve au féminin (neuf → neuve) ; en -eux font -euse (courageux → courageuse) ; en -er font -ère (léger → légère).', 'Certains adjectifs ont un féminin particulier : frais → fraîche ; doux → douce ; roux → rousse ; beau → belle ; favori → favorite ; faux → fausse ; sec → sèche ; mou → molle.'],
            questions: [
              rel(1, 'Donne le féminin.', [['neuf', 'neuve'], ['courageux', 'courageuse'], ['léger', 'légère'], ['routier', 'routière']], 'Je retiens de la page 71.'),
              rel(2, 'Donne le féminin particulier.', [['frais', 'fraîche'], ['doux', 'douce'], ['roux', 'rousse'], ['favori', 'favorite']], 'Je retiens et exercice (p. 79).'),
              rel(3, 'Donne le masculin.', [['franche', 'franc'], ['sèche', 'sec'], ['molle', 'mou'], ['fausse', 'faux']], 'Exercice du livre (p. 79).'),
              comp(2, 'Une chaleur vive → un regard ___.', 'vif', ['vive', 'vifs'], 'Corrigé (p. 97).'),
              comp(3, 'Une place publique → un crieur ___.', 'public', ['publique', 'publics'], 'Corrigé (p. 97).')
            ]
          },
          {
            id: 'homophones', title: 'Les homophones grammaticaux', pages: '87, 123',
            summary: ['J\'écris « ses » si je peux le remplacer par son, sa ; « ces » si je peux le remplacer par ce, cet, cette.', 'J\'écris « s\'est » si je peux dire « me suis » ; « c\'est » si je peux dire « cela est ».', 'On écrit « ce » devant un nom et « se » devant un verbe (Ce garçon se lave).', '« Où » indique un lieu ; « ou » sans accent signifie « ou bien ».'],
            questions: [
              comp(1, 'Aline cherche ___ moutons.', 'ses', ['ces', 's\'est', 'c\'est'], 'On peut dire « son mouton » : c\'est « ses ».'),
              comp(1, 'Range ___ photos.', 'ces', ['ses', 's\'est'], 'On peut dire « cette photo » : c\'est « ces ».'),
              comp(2, 'L\'ouvrier ___ reposé.', 's\'est', ['c\'est', 'ces', 'ses'], 'On peut dire « je me suis reposé ».'),
              comp(2, '___ vrai.', 'C\'est', ['S\'est', 'Ses', 'Ces'], 'On peut dire « cela est vrai ».'),
              comp(2, '___ garçon se lave dans ce fleuve.', 'Ce', ['Se'], '« Ce » devant un nom.'),
              comp(2, '___ passeras-tu tes vacances ?', 'Où', ['Ou'], '« Où » indique un lieu.'),
              comp(3, 'À Saint-Louis ___ à Louga ?', 'ou', ['où'], '« Ou » signifie « ou bien ».'),
              rel(3, 'Corrige (corrigé p. 97).', [['Lala range … affaires.', 'ses'], ['Bira … levé pour l\'aider.', 's\'est'], ['Je reconnais cette personne ; … le curé du village.', 'c\'est'], ['… braconniers sont sévèrement sanctionnés.', 'Ces']], 'Corrigé de l\'autoévaluation.')
            ]
          },
          {
            id: 'participe', title: 'Le participe passé et les adverbes', pages: '44, 52, 159, 168, 177',
            summary: ['Avec l\'auxiliaire être, le participe passé s\'accorde avec le sujet (Toutane est sortie ; des hommes sont sortis).', 'Avec avoir, il ne s\'accorde jamais avec le sujet, mais s\'accorde avec le COD placé avant le verbe (La joie qu\'il a ressentie est grande).', 'Adverbes en -ment : on ajoute -ment au féminin (lente → lentement) ou après i, é, u, e (joli → joliment ; absolu → absolument).', 'Adjectifs en -ant → -amment (abondant → abondamment) ; en -ent → -emment (violent → violemment).'],
            questions: [
              comp(1, 'Les fenêtres de la chambre sont ___.', 'fermées', ['fermé', 'fermés'], 'Avec être, accord avec le sujet féminin pluriel.'),
              comp(2, 'Les championnes sont ___ hier soir.', 'venues', ['venu', 'venus'], 'Sujet féminin pluriel.'),
              comp(2, 'Les élèves ont ___ l\'île de Gorée.', 'visité', ['visités', 'visitée'], 'Avec avoir, pas d\'accord avec le sujet.'),
              comp(3, 'La musique que j\'ai ___ est douce.', 'entendue', ['entendu', 'entendus'], 'Le COD « que » (la musique) est placé avant.'),
              comp(3, 'Les invités que maman a ___ sont dans le salon.', 'reçus', ['reçu', 'reçues'], 'COD « que » (les invités) placé avant le verbe.'),
              rel(2, 'Forme l\'adverbe en -ment (corrigé p. 181).', [['paisible', 'paisiblement'], ['bref', 'brièvement'], ['heureux', 'heureusement'], ['long', 'longuement']], 'Corrigé de l\'autoévaluation.'),
              rel(3, 'Forme l\'adverbe en -amment ou -emment.', [['abondant', 'abondamment'], ['méchant', 'méchamment'], ['fréquent', 'fréquemment'], ['prudent', 'prudemment']], 'Je retiens de la page 168.')
            ]
          }
        ]
      },
      /* ============================ POÉSIE ============================ */
      {
        id: 'poesie', title: 'Poésies et jeux de mots', palier: '🎵 Poésie', group: '🎵 Poésie et page récréative',
        lessons: [
          {
            id: 'poemes', title: 'Les poèmes du livre', pages: '37, 62, 89, 114, 133, 150, 170, 187',
            summary: ['« Écoliers du monde », « La drogue », « Vaillant soldat », « Sont-ils malades ? » (Régis Portfort), « La guerre », « Le SIDA », « L\'amitié », « La vie ».'],
            img: 'assets/books/cm1-lc/poeme-vie.jpg',
            questions: [
              comp(1, 'Hé ! Jeunes du Sénégal, disons non à la ___.', 'drogue', ['guerre', 'paix'], 'Poème « La drogue » (p. 62).'),
              comp(2, 'La santé, c\'est la paix ; la paix, c\'est la ___.', 'liberté', ['joie', 'vie'], 'Poème « La drogue » (p. 62).'),
              comp(2, 'Tu as défendu ta patrie, le peuple te dit ___.', 'merci', ['bravo', 'adieu'], 'Poème « Vaillant soldat » (p. 89).', I('poeme-soldat')),
              comp(2, 'Ma gomme est tombée dans les ___ !', 'pommes', ['commes', 'gommes'], 'Poème « Sont-ils malades ? » de Régis Portfort (p. 114).'),
              qcm(3, 'Dans « Sont-ils malades ? », pourquoi les fournitures sont-elles « malades » ?', 'C\'est la fin de l\'année, elles sont toutes fatiguées', ['Elles sont cassées', 'Elles ont la grippe'], 'Dernier vers du poème.'),
              comp(2, 'La vraie amitié est bien rare, comme l\'eau dans le ___.', 'désert', ['fleuve', 'puits'], 'Poème « L\'amitié » (p. 170).'),
              comp(1, 'La vie c\'est comme le ___.', 'soleil', ['vent', 'fleuve'], 'Poème « La vie » (p. 187).', I('poeme-vie')),
              qcm(3, 'Anagramme : ajoute une lettre à « chien » pour trouver l\'endroit où vit le chien.', 'la niche', ['la chienne', 'la cuisine'], 'Page récréative (p. 114).')
            ]
          }
        ]
      }
    ]
  });
})();

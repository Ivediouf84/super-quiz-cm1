/* =====================================================================
   CI — Langue et Communication (Éditions Didactikos, 2017)
   Questions tirées des textes de lecture, des exercices « Je m'exerce »,
   des poésies et comptines du manuel. Images : assets/books/ci-lc/
   ===================================================================== */
(function () {
  const { qcm, vf, multi, comp, trou, rel, ord } = QB;
  const I = (n) => ({ img: 'assets/books/ci-lc/' + n + '.jpg' });

  QB.book({
    classId: 'ci', domainId: 'lc',
    title: 'Langue et Communication CI', source: 'Langue et Communication CI — Éditions Didactikos (2017)',
    chapters: [
      /* ============================ PALIER 1 : L'ÉCOLE ============================ */
      {
        id: 'p1', title: 'Saluer, se présenter, prendre congé', palier: 1, group: '🏫 Palier 1 — L\'école',
        lessons: [
          {
            id: 'mots-ecole', title: 'Les mots de l\'école', pages: '13-19, 49-50',
            summary: ['À l\'école : la cour, la classe, le tableau, la table, la porte, la craie.', 'Les outils de l\'écolier : un sac, un livre, un cahier, une ardoise, un bic, un crayon.', 'L\'élève lit dans son livre. Rémi écrit sur son ardoise. Alima écrit avec son bic dans le cahier.', 'La bouteille est sur l\'armoire. Le ballon est sous la table.'],
            questions: [
              qcm(1, 'Qu\'est-ce que c\'est ?', 'un sac', ['un livre', 'une ardoise'], 'C\'est l\'image du sac.', I('mots-sac-livre')),
              multi(1, 'Quels sont les outils de l\'écolier ?', ['le livre', 'le cahier', 'l\'ardoise', 'le bic'], ['la table', 'le lit'], 'Exercice du livre (p. 49).'),
              qcm(1, 'Où est le ballon ?', 'sous la table', ['sur la table', 'sur l\'armoire'], 'Le ballon est sous la table.', I('sur-sous')),
              qcm(1, 'Où est la bouteille ?', 'sur l\'armoire', ['sous l\'armoire', 'sous la table'], 'La bouteille est posée sur l\'armoire.', I('sur-sous')),
              comp(1, 'L\'élève lit dans son ___.', 'livre', ['ardoise', 'sac'], 'Phrase du livre (p. 49).'),
              comp(2, 'Rémi écrit sur son ___.', 'ardoise', ['sac', 'livre'], 'Phrase du livre (p. 49).'),
              comp(2, 'Ali met ses bagages dans un ___.', 'sac', ['cahier', 'livre'], 'Phrase du livre (p. 49).'),
              qcm(2, 'Que veut dire « au-dessus » ?', 'plus haut que', ['plus bas que', 'à côté de'], 'L\'oiseau vole au-dessus de la mer : il est plus haut.', I('sur-sous')),
              trou(3, 'Complète : « Alima écrit avec son … dans le cahier. »', ['bic', 'stylo', 'crayon'], 'Phrase du livre : Alima écrit avec son bic dans le cahier.')
            ]
          },
          {
            id: 'saluer', title: 'Saluer et prendre congé', pages: '24-28, 54-66',
            summary: ['Le matin, on dit « Bonjour ». Le soir, on dit « Bonsoir ».', 'Comment ça va ? — Ça va bien.', 'Pour saluer un groupe : « Comment allez-vous ? » « Vous allez bien ? » — « Oui, nous allons bien. »', 'Pour prendre congé : au revoir, à demain, à bientôt, à tout à l\'heure.'],
            img: 'assets/books/ci-lc/bonjour-bonsoir.jpg',
            questions: [
              qcm(1, 'Que dis-tu à ta maman le matin ?', 'Bonjour maman !', ['Bonsoir maman !', 'Au revoir maman !'], 'Le matin, on dit bonjour.', I('bonjour-bonsoir')),
              qcm(1, 'Que dis-tu à ton papa le soir ?', 'Bonsoir papa !', ['Bonjour papa !', 'À demain papa !'], 'Le soir, on dit bonsoir.'),
              qcm(1, 'On te demande « Comment ça va ? ». Que réponds-tu ?', 'Ça va bien.', ['Je m\'appelle Bira.', 'Au revoir.'], 'Comment ça va ? — Ça va bien.'),
              multi(1, 'Quels mots servent à prendre congé ?', ['Au revoir', 'À demain', 'À bientôt'], ['Merci', 'Bonsoir', 'prénom'], 'Exercice du livre (p. 64).'),
              qcm(2, 'Quelle phrase sert à saluer un groupe ?', 'Comment allez-vous ?', ['Comment vas-tu ?', 'Tu vas bien ?'], 'Avec « vous », on salue plusieurs personnes.'),
              qcm(2, 'La directrice dit : « Comment allez-vous, chers élèves ? » Que répondent les élèves ?', 'Nous allons bien, madame la directrice.', ['Je vais bien, monsieur.', 'Au revoir, madame.'], 'Texte de lecture (p. 58).', I('vous-allez-bien')),
              qcm(2, 'Bira quitte sa maman. Que lui dit-il ?', 'Au revoir maman.', ['Bonjour maman.', 'Merci maman.'], 'Texte de lecture (p. 63).', I('au-revoir')),
              qcm(2, 'L\'agent dit « Au revoir les enfants ». Que répondent-ils ?', 'Merci, monsieur l\'agent.', ['Bonjour, monsieur.', 'Comment allez-vous ?'], 'Texte de lecture (p. 63).', I('au-revoir')),
              comp(3, 'Avec « bonjour », on se serre la ___.', 'main', ['tête', 'porte'], 'Poésie « De petits mots, bons mots ! » (p. 67).'),
              comp(3, '« Pardon » apaise la ___.', 'rancœur', ['main', 'joie'], 'Poésie « De petits mots, bons mots ! » (p. 67).'),
              multi(3, 'Quels sont les « petits mots-compagnons » de la poésie ?', ['Bonjour', 'Merci', 'Au revoir', 'Pardon'], ['Bonsoir'], 'Poésie « De petits mots, bons mots ! » (p. 67).')
            ]
          },
          {
            id: 'presenter', title: 'Se présenter et présenter quelqu\'un', pages: '33-48',
            summary: ['Comment t\'appelles-tu ? — Je m\'appelle Paul.', 'Mon nom est Bâ et mon prénom Fatou.', 'Où habites-tu ? — J\'habite derrière le forage. Quel âge as-tu ? — J\'ai 6 ans.', 'Je te présente Badara. Voici mon ami. Voilà sa sœur.'],
            questions: [
              qcm(1, 'Quelle question pose-t-on pour connaître le nom de quelqu\'un ?', 'Comment t\'appelles-tu ?', ['Où habites-tu ?', 'Quel âge as-tu ?'], 'Texte du livre (p. 33).'),
              qcm(1, '« Je m\'appelle Fatou Bâ. » Quel est son prénom ?', 'Fatou', ['Bâ'], 'Mon nom est Bâ et mon prénom Fatou.'),
              qcm(1, '« Je m\'appelle Fatou Bâ. » Quel est son nom ?', 'Bâ', ['Fatou'], 'Le nom de famille est Bâ.'),
              qcm(2, 'Paul a dit : « J\'ai six ans. » Quelle question lui a-t-on posée ?', 'Quel âge as-tu ?', ['Où habites-tu ?', 'Comment t\'appelles-tu ?'], 'Dialogue de Badara et Paul (p. 39).'),
              qcm(2, 'Où habite Paul ?', 'Derrière le forage', ['À Saré', 'À Podor'], 'Dialogue de Badara et Paul (p. 39).'),
              qcm(2, 'Badara présente sa femme. Comment s\'appelle-t-elle ?', 'Fatim', ['Lala', 'Aïda'], 'Je te présente ma femme. Elle s\'appelle Fatim (p. 48).'),
              ord(2, 'Remets la phrase dans l\'ordre.', ['Je', 'm\'appelle', 'Alima', 'Diba.'], 'Exercice du livre (p. 36).'),
              comp(3, 'Anna Sané a sept ans. Elle habite la ___.', 'Casamance', ['Gambie', 'ville'], 'Texte de révision (p. 69).'),
              trou(3, 'Complète : « Je te présente Badara. Lui, c\'est son fils. Il s\'appelle … »', ['bira'], 'Texte du livre (p. 45).')
            ]
          }
        ]
      },
      /* ============================ PALIER 2 : FÊTES ============================ */
      {
        id: 'p2', title: 'Les sons a, i, t, o, l', palier: 2, group: '🎉 Palier 2 — Fêtes et cérémonies',
        lessons: [
          {
            id: 'son-a', title: 'Le son a – A', pages: '75-77',
            summary: ['Baba porte un pantalon kaki et une chemise blanche. Il va à la fête de l\'école.', 'Mots avec a : madame, Adama, classe, tableau, Aminata.', 'Adama va à l\'école.'],
            img: 'assets/books/ci-lc/baba-fete.jpg',
            questions: [
              qcm(1, 'Qui va à la fête de l\'école ?', 'Baba', ['Paul', 'Lala'], 'Texte : Baba va à la fête de l\'école.', I('baba-fete')),
              qcm(1, 'Que porte Baba ?', 'Un pantalon kaki et une chemise blanche', ['Une robe bleue', 'Un boubou'], 'Texte de lecture (p. 75).', I('baba-fete')),
              multi(1, 'Quels mots contiennent le son a ?', ['madame', 'Adama', 'classe'], ['bic', 'lit'], 'Exercice du livre (p. 76).'),
              ord(2, 'Remets les syllabes dans l\'ordre pour écrire « Aminata ».', ['A', 'mi', 'na', 'ta'], 'A-mi-na-ta.'),
              comp(2, 'Adama va à l\'___.', 'école', ['marché', 'église'], 'Phrase à copier (p. 77).'),
              qcm(3, 'Combien de syllabes dans « tableau » ?', '2', ['1', '3'], 'ta-bleau.')
            ]
          },
          {
            id: 'son-i', title: 'Le son i – I', pages: '81-84',
            summary: ['C\'est aujourd\'hui la kermesse de l\'école. Nathalie vend des tickets.', 'Mots avec i : bic, Bira, livre, midi.', 'Ami pile le mil.'],
            img: 'assets/books/ci-lc/kermesse-nathalie.jpg',
            questions: [
              qcm(1, 'Que fait Nathalie à la kermesse ?', 'Elle vend des tickets.', ['Elle danse.', 'Elle pile le mil.'], 'Texte de lecture (p. 81).', I('kermesse-nathalie')),
              qcm(1, 'Qu\'organise-t-on à l\'école ?', 'La kermesse', ['Un mariage', 'Un baptême'], 'C\'est aujourd\'hui la kermesse de l\'école.', I('kermesse-nathalie')),
              multi(1, 'Quels mots contiennent le son i ?', ['bic', 'Bira', 'livre', 'midi'], ['table'], 'Exercice du livre (p. 82).'),
              qcm(2, 'Comment s\'appelle cet objet qui vole ?', 'un avion', ['un vélo', 'une voiture'], 'Exercice de vocabulaire (p. 82).', I('objets-i')),
              ord(2, 'Range les syllabes du prénom.', ['Na', 'tha', 'lie'], 'Na-tha-lie.'),
              comp(3, 'Ami pile le ___.', 'mil', ['riz', 'bic'], 'Phrase à copier (p. 83).'),
              ord(3, 'Remets dans l\'ordre les étapes pour que Fatim prépare le café.', ['Mettre du café dans le verre', 'Verser de l\'eau chaude', 'Mettre du sucre', 'Remuer le tout'], 'Exercice du livre (p. 84).', I('cafe-fatim'))
            ]
          },
          {
            id: 'son-t', title: 'Le son t – T', pages: '87-90',
            summary: ['Après la fête, Fatim retourne à la maison avec ses amies Aminata et Adama.', 'Mots avec t : voiture, Toutane, téléphone, moto.', 'Toumani et Tina vont au mariage de Tania.'],
            img: 'assets/books/ci-lc/fatim-fete.jpg',
            questions: [
              qcm(1, 'Qui revient de la fête ?', 'Fatim', ['Baba', 'Julie'], 'Texte de lecture (p. 87).', I('fatim-fete')),
              qcm(1, 'À quel moment Fatim rentre-t-elle ?', 'Après la fête', ['Avant la fête', 'Pendant la fête'], 'Fatim rentre après la fête.'),
              multi(2, 'Avec qui Fatim rentre-t-elle ?', ['Aminata', 'Adama'], ['Lala', 'Bira'], 'Elle est en compagnie de ses amies, Aminata et Adama.'),
              multi(1, 'Quels mots contiennent le son t ?', ['voiture', 'Toutane'], ['poule', 'roule'], 'Exercice du livre (p. 88).'),
              rel(2, 'Complète le nom de chaque objet.', [['mo…o', 'moto'], ['bicycle…e', 'bicyclette'], ['…éléphone', 'téléphone'], ['voi…ure', 'voiture']], 'Exercice de vocabulaire (p. 88).', I('objets-t')),
              qcm(3, 'Comment Fatim, Aminata et Adama rentrent-elles ?', 'En taxi', ['À pied', 'En bus'], 'Texte de fluidité (p. 88).'),
              qcm(3, 'Quelle phrase renseigne sur le moment de l\'ouverture des classes ?', 'C\'est aujourd\'hui l\'ouverture des classes.', ['Les élèves vont à Gorée.', 'Les maîtres sont dans la cour.'], 'Exercice du livre (p. 90).')
            ]
          },
          {
            id: 'son-o', title: 'Le son o – O', pages: '93-96',
            summary: ['À la veille de son mariage, Penda organise une séance de tam-tam devant la Case des Tout-Petits.', 'Mots avec o : moto, pot, robe, abricot.', 'Odile donne des pommes et des oranges aux invités.'],
            img: 'assets/books/ci-lc/tam-tam-penda.jpg',
            questions: [
              qcm(1, 'Qu\'est-ce que Penda organise ?', 'Une séance de tam-tam', ['Une kermesse', 'Un match'], 'Texte de lecture (p. 93).', I('tam-tam-penda')),
              qcm(2, 'Quand Penda organise-t-elle le tam-tam ?', 'La veille de son mariage', ['Après son mariage', 'Le jour de son mariage'], 'Exercice du livre (p. 94).'),
              qcm(2, 'Où se tient la séance de tam-tam ?', 'Devant la Case des Tout-Petits', ['Au terrain', 'À côté du marché'], 'Exercice du livre (p. 94).'),
              multi(1, 'Quels mots contiennent le son o ?', ['moto', 'pot', 'robe'], ['bic', 'lit'], 'Exercice du livre (p. 94).'),
              ord(2, 'Range les syllabes du mot « organise ».', ['or', 'ga', 'ni', 'se'], 'or-ga-ni-se.'),
              comp(3, 'Odile donne des pommes et des ___ aux invités.', 'oranges', ['tickets', 'robes'], 'Phrase à copier (p. 95).'),
              qcm(3, 'Que fait Bira sur l\'image ?', 'Bira conduit son vélo.', ['Bira répare son vélo.', 'Le vélo de Bira est en panne.'], 'Exercice du livre (p. 96).')
            ]
          },
          {
            id: 'son-l', title: 'Le son l – L', pages: '99-102',
            summary: ['Aujourd\'hui, c\'est l\'anniversaire de Paul. Son père lui offre un joli vélo.', 'Mots avec l : balle, lame, plume, allume.', 'Lala a un joli vélo.'],
            img: 'assets/books/ci-lc/paul-velo.jpg',
            questions: [
              qcm(1, 'Que fête Paul ?', 'Son anniversaire', ['Son mariage', 'La Tabaski'], 'Texte de lecture (p. 99).', I('paul-velo')),
              qcm(1, 'Que lui offre son père ?', 'Un joli vélo', ['Un joli sac', 'Une moto'], 'Son père lui offre un joli vélo.', I('paul-velo')),
              qcm(2, 'Quelle phrase parle du texte ?', 'Paul a un joli vélo.', ['Paul a un joli sac.', 'Paul n\'a pas de vélo.'], 'Exercice du livre (p. 100).'),
              qcm(2, 'Quel est le moment de l\'anniversaire de Paul ?', 'aujourd\'hui', ['demain', 'hier'], 'Aujourd\'hui, c\'est l\'anniversaire de Paul.'),
              multi(1, 'Quels mots contiennent le son l ?', ['balle', 'lame', 'plume', 'allume'], ['mouton'], 'Exercice du livre (p. 100).'),
              comp(2, 'Lala a un joli ___.', 'vélo', ['sac', 'chat'], 'Phrase à copier (p. 101).'),
              qcm(3, 'Que donne la maman de Paul ?', 'Un gâteau et un joli cadeau', ['Un ballon', 'Des tickets'], 'Texte de fluidité (p. 100).'),
              qcm(3, 'Pour demander un prix, on dit…', 'Combien coûte ce gâteau ?', ['Où se trouve l\'école ?', 'Quand est-ce la fête ?'], 'Exercice du livre (p. 102).')
            ]
          },
          {
            id: 'syll-p2', title: 'Révision : syllabes et mots', pages: '103-108',
            summary: ['On peut lire des syllabes : ta, to, ti, li, lo, la.', 'é-gli-se ; mos-quée ; é-co-le.', 'Après la cérémonie, les élèves retournent à la maison.'],
            questions: [
              rel(2, 'Range les syllabes pour écrire le nom de chaque bâtiment.', [['se - gli - é', 'église'], ['quée - mos', 'mosquée'], ['le - é - co', 'école']], 'Exercice de révision (p. 105).', I('syllabes-eglise')),
              qcm(2, 'Avec le code 2 = l, 3 = a, que donne « 2323 » ?', 'lala', ['lili', 'tata'], 'Exercice du livre (p. 104).'),
              qcm(3, 'On m\'utilise pour effacer le tableau. Qui suis-je ?', 'L\'éponge (le chiffon)', ['La craie', 'Le bic'], 'Devinette (p. 106).'),
              qcm(3, 'Je suis une cérémonie qu\'on organise pour donner un prénom au nouveau-né. Qui suis-je ?', 'Le baptême', ['Le mariage', 'La kermesse'], 'Devinette (p. 106).'),
              comp(3, 'Je vais à l\'école comme un grand ___.', 'garçon', ['chat', 'frère'], 'Poésie « Je vais à l\'école » (p. 103).')
            ]
          }
        ]
      },
      /* ============================ PALIER 3 : FAMILLE ============================ */
      {
        id: 'p3', title: 'Les sons n, e, p, d, m, b', palier: 3, group: '👨‍👩‍👧 Palier 3 — Famille et société',
        lessons: [
          {
            id: 'son-n', title: 'Le son n – N ; avoir faim, avoir soif', pages: '110-114',
            summary: ['Lamine aime bien les fruits. Aujourd\'hui, il mange une banane après le repas.', 'J\'ai faim. J\'ai soif. Il a faim. Il a soif.'],
            img: 'assets/books/ci-lc/lamine-banane.jpg',
            questions: [
              qcm(1, 'Qu\'est-ce que Lamine aime ?', 'Les fruits', ['Les légumes', 'La viande'], 'Texte de lecture (p. 111).', I('lamine-banane')),
              qcm(1, 'Quel fruit mange-t-il aujourd\'hui ?', 'Une banane', ['Un ananas', 'Une pomme'], 'Il mange une banane après le repas.', I('lamine-banane')),
              qcm(2, 'À quel moment Lamine mange-t-il la banane ?', 'après le repas', ['pendant le repas', 'avant le repas'], 'Exercice du livre (p. 112).'),
              rel(2, 'Range les syllabes pour écrire chaque mot.', [['ne - lu', 'lune'], ['ne - can', 'canne'], ['nue - te', 'tenue'], ['bon - net', 'bonnet']], 'Exercice de vocabulaire (p. 112).', I('syllabes-n')),
              qcm(1, 'Alassane est fatigué et veut boire. Que dit-il ?', 'J\'ai soif.', ['J\'ai faim.', 'J\'ai froid.'], 'Avoir soif = avoir besoin de boire.'),
              comp(2, 'Lamine aime la ___.', 'banane', ['robe', 'moto'], 'Phrase à copier (p. 113).'),
              ord(3, 'Remets la phrase dans l\'ordre.', ['J\'ai', 'faim.'], 'Exercice du livre (p. 114).')
            ]
          },
          {
            id: 'son-e', title: 'Le son e – E ; avoir mal, chaud, froid', pages: '116-120',
            summary: ['Ce matin, Paul est malade. Il a mal au ventre. Il est couché sur la table.', 'J\'ai mal. J\'ai chaud. J\'ai froid.', 'Émilie a une belle robe.'],
            img: 'assets/books/ci-lc/paul-malade.jpg',
            questions: [
              qcm(1, 'Qui a mal au ventre ?', 'Paul', ['Daouda', 'Marie', 'Lala'], 'Texte de lecture (p. 117).', I('paul-malade')),
              qcm(1, 'Où Paul est-il couché ?', 'Sur la table', ['Dans le lit', 'À côté de la table'], 'Il est couché sur la table.', I('paul-malade')),
              rel(2, 'Range les syllabes pour écrire chaque mot.', [['che - va', 'vache'], ['ro - be', 'robe'], ['ge - o - ran', 'orange']], 'Exercice de vocabulaire (p. 118).', I('syllabes-e')),
              qcm(2, 'Bira met un pull-over devant l\'armoire. Que dit-il ?', 'J\'ai froid, maman.', ['J\'ai chaud, maman.', 'J\'ai faim, maman.'], 'Exercice du livre (p. 120).'),
              qcm(2, 'Omar est sous le soleil. Que répond-il à Ansou ?', 'J\'ai chaud, Ansou.', ['J\'ai froid, Ansou.', 'J\'ai mal à la tête, Toutane.'], 'Exercice du livre (p. 120).'),
              comp(3, 'Bineta est malade. Elle a mal à la ___.', 'tête', ['robe', 'table'], 'Texte de fluidité (p. 118).'),
              comp(3, 'Émilie a une belle ___.', 'robe', ['vache', 'table'], 'Phrase à copier (p. 119).')
            ]
          },
          {
            id: 'son-pd', title: 'Les sons p – P et d – D ; donner son avis', pages: '122-126',
            summary: ['Daba n\'aime pas dormir sous une moustiquaire. Elle a le paludisme.', 'C\'est vrai = Je suis d\'accord. C\'est faux = Je ne suis pas d\'accord.', 'Le paludisme est une maladie grave.'],
            img: 'assets/books/ci-lc/daba-paludisme.jpg',
            questions: [
              qcm(1, 'Quelle maladie Daba a-t-elle ?', 'Le paludisme', ['Le choléra', 'La gale'], 'Texte de lecture (p. 123).', I('daba-paludisme')),
              qcm(2, 'Quelle phrase est tirée du texte ?', 'Daba n\'aime pas dormir sous une moustiquaire.', ['Daba dort sur une natte.', 'Daba dort sous une moustiquaire.'], 'Exercice du livre (p. 124).'),
              rel(2, 'Relie chaque expression à son sens.', [['C\'est vrai', 'Je suis d\'accord.'], ['C\'est faux', 'Je ne suis pas d\'accord.']], 'Exercice de vocabulaire (p. 124).'),
              ord(2, 'Range les syllabes du mot « paludisme ».', ['pa', 'lu', 'dis', 'me'], 'pa-lu-dis-me.'),
              vf(2, 'Le paludisme est une maladie grave.', true, 'Phrase à copier (p. 125).'),
              multi(3, 'Quelles phrases expriment un avis ?', ['Je suis d\'accord, on doit arroser les laitues.', 'Je ne suis pas d\'accord, la mer est dangereuse.'], ['Les enfants vont à la mer.'], 'Exercice du livre (p. 126).'),
              qcm(3, 'Je suis d\'accord : il ne faut pas…', 'jeter les ordures par terre', ['planter des arbres', 'acheter des fournitures'], 'Exercice du livre (p. 126).')
            ]
          },
          {
            id: 'son-mb', title: 'Les sons m – M et b – B ; exprimer ses préférences', pages: '128-132',
            summary: ['La fête de la Tabaski approche. Fatim emmène ses nièces au marché. Marame préfère la robe en basin. Mati prend un tissu bleu.', 'Moi, je préfère l\'avion. Je préfère le sac noir.'],
            img: 'assets/books/ci-lc/marame-basin.jpg',
            questions: [
              qcm(1, 'Que préfère Marame ?', 'La robe en basin', ['Le tissu bleu', 'Le tissu brodé'], 'Texte de lecture (p. 129).', I('marame-basin')),
              qcm(1, 'Où se trouvent Fatim et les filles ?', 'Au marché', ['À l\'école', 'À la plage'], 'Fatim emmène ses nièces au marché.', I('marame-basin')),
              qcm(2, 'Qui n\'aime pas la robe en basin ?', 'Mati', ['Marame', 'Lala'], 'Exercice du livre (p. 130).'),
              qcm(2, 'Quelle fête approche ?', 'La Tabaski', ['La kermesse', 'Le nouvel an'], 'La fête de la Tabaski approche.'),
              multi(2, 'Quelles phrases expriment une préférence ?', ['Je préfère le Yassa au poulet.', 'Tu préfères la voiture rouge.'], ['Dibor aime la mangue.'], 'Exercice du livre (p. 132).'),
              ord(3, 'Remets la phrase dans l\'ordre.', ['Je', 'préfère', 'le sac', 'noir.'], 'Exercice du livre (p. 132).'),
              comp(3, 'La pintade, avec son beau ___, participe au décor.', 'plumage', ['basin', 'manteau'], 'Comptine « La pintade » (p. 127).')
            ]
          },
          {
            id: 'rev-p3', title: 'Révision : mots, syllabes, devinettes', pages: '133-139',
            summary: ['Malamine aime les fruits. Après le repas, il mange une pomme.', 'Badara préfère le plus gros mouton. Il est tout blanc et a de belles cornes.'],
            questions: [
              rel(2, 'Range les syllabes pour écrire chaque mot.', [['to - mo', 'moto'], ['me - da - ma', 'madame'], ['be - bi - ron', 'biberon']], 'Exercice de révision (p. 135).', I('syllabes-images')),
              rel(2, 'Combien de syllabes ?', [['bol', '1'], ['nomme', '2'], ['balade', '3']], 'Exercice de révision (p. 135).'),
              qcm(2, 'Quel mouton Badara préfère-t-il ?', '3', ['1', '2'], 'Le plus gros, tout blanc, avec de belles cornes.', I('moutons-badara')),
              qcm(3, 'Avec le code 4 = m, 5 = o, 1 = e, que donne « 75441 » si 7 = p ?', 'pomme', ['madame', 'limonade'], 'Exercice du livre (p. 135).'),
              qcm(3, 'Je brûle tout ce qui me touche. Qui suis-je ?', 'Le feu', ['L\'eau', 'Le vent'], 'Devinette (p. 136).'),
              comp(3, 'Le chat dit : « Je bois du lait de ___. »', 'noix', ['vache', 'chèvre'], 'Comptine « Le chat ronronne » (p. 137).')
            ]
          }
        ]
      },
      /* ============================ PALIER 4 : HYGIÈNE ============================ */
      {
        id: 'p4', title: 'Les sons f, u, s, r, ou, é, è', palier: 4, group: '🧼 Palier 4 — Hygiène, santé et environnement',
        lessons: [
          {
            id: 'son-fusr', title: 'Les sons f, u, s, r ; demander la permission', pages: '140-144',
            summary: ['Après avoir discuté avec la directrice, Fari et Sali décident de lutter contre le dépôt d\'ordures aux abords de l\'école.', 'Est-ce que je peux… ? Est-ce que nous pouvons… ? S\'il vous plaît. Merci.'],
            img: 'assets/books/ci-lc/ecole-ordures.jpg',
            questions: [
              qcm(1, 'Qu\'y a-t-il aux abords de l\'école ?', 'Des ordures', ['Des élèves', 'Des boutiques'], 'Exercice du livre (p. 142).', I('ecole-ordures')),
              multi(1, 'Qui a discuté avec la directrice ?', ['Fari', 'Sali'], ['Lala', 'Bira'], 'Texte de lecture (p. 141).'),
              ord(2, 'Remets la phrase dans l\'ordre.', ['Fari', 'lutte', 'contre', 'les', 'ordures.'], 'Exercice du livre (p. 142).'),
              rel(2, 'Relie les mots qui ont la même signification.', [['permission', 'autorisation'], ['ordures', 'saletés'], ['écolier', 'élève'], ['partir', 'aller']], 'Exercice de vocabulaire (p. 142).'),
              qcm(2, 'Pour demander une permission, on dit…', 'Est-ce que je peux aller chez Kadia ?', ['Prête-moi ton balai.', 'J\'ai soif.'], 'Exercice du livre (p. 144).'),
              comp(3, 'Sali et Fari s\'engagent à lutter pour la ___ à l\'école.', 'propreté', ['fête', 'kermesse'], 'Texte de fluidité (p. 142).'),
              comp(3, 'Une poule sur un mur, qui picote du pain ___.', 'dur', ['mou', 'blanc'], 'Poésie « Une poule sur un mur » (p. 145).')
            ]
          },
          {
            id: 'son-ou', title: 'Les sons ou, au, eau, on, om', pages: '146-150',
            summary: ['Après la fête de la Tabaski, les rues sont sales. Les jeunes décident de les nettoyer. Ils demandent la permission au chef de quartier.', 'eau se lit comme au ; on se lit comme om.', 'Les rues de ce beau quartier sont propres.'],
            img: 'assets/books/ci-lc/rues-sales.jpg',
            questions: [
              qcm(1, 'Qui décide de nettoyer le quartier ?', 'Les jeunes', ['Les mamans', 'Le maître'], 'Exercice du livre (p. 148).', I('rues-sales')),
              qcm(1, 'Comment sont les rues après la Tabaski ?', 'Sales', ['Propres', 'Belles'], 'Texte de lecture (p. 147).'),
              qcm(2, 'À qui les jeunes demandent-ils la permission ?', 'Au chef de quartier', ['Au maître', 'À la directrice'], 'Texte de lecture (p. 147).'),
              multi(1, 'Quels mots contiennent le son ou ?', ['boubou', 'Atou', 'Cameroun', 'ouvre'], ['moto'], 'Exercice du livre (p. 148).'),
              rel(2, 'Associe chaque image à son nom.', [['a', 'taureau'], ['b', 'bateau'], ['c', 'montre'], ['d', 'bonbon']], 'Exercice de vocabulaire (p. 148).', I('taureau-bateau')),
              vf(2, '« eau » se lit comme « au ».', true, 'Je retiens : eau = au.'),
              comp(3, 'Les rues de ce beau quartier sont ___.', 'propres', ['sales', 'vides'], 'Phrase à copier (p. 149).'),
              comp(3, 'Une souris verte qui courait dans l\'___.', 'herbe', ['eau', 'école'], 'Comptine « Une souris verte » (p. 151).')
            ]
          },
          {
            id: 'son-e-et', title: 'Les sons é – et ; demander un service', pages: '152-156',
            summary: ['Pendant le nettoiement, les jeunes ramassent les déchets et les mettent dans des poubelles. Ils peignent le tronc des arbres. Le quartier devient propre et beau.', 'Prête-moi ton équerre. Prête-nous un râteau.'],
            img: 'assets/books/ci-lc/nettoiement.jpg',
            questions: [
              qcm(1, 'Que ramassent les jeunes ?', 'Les déchets', ['Les fruits', 'Les tickets'], 'Texte de lecture (p. 153).', I('nettoiement')),
              qcm(2, 'Qui ramasse les ordures ?', 'Ce sont les jeunes.', ['Ce sont les hommes.', 'Ce sont les femmes.'], 'Exercice du livre (p. 154).'),
              qcm(2, 'Où les jeunes mettent-ils les déchets ?', 'Dans des poubelles', ['Dans la rue', 'Dans la mer'], 'Texte de lecture (p. 153).'),
              multi(1, 'Quels mots contiennent le son é ou et ?', ['poupée', 'tabouret', 'filet', 'épée'], ['moto'], 'Exercice du livre (p. 154).'),
              rel(2, 'Range les syllabes pour écrire chaque mot.', [['net - bon', 'bonnet'], ['le - da - pé', 'pédale'], ['le - toi - é', 'étoile']], 'Exercice de vocabulaire (p. 154).', I('syllabes-et')),
              qcm(2, 'Paul veut emprunter une fourche à Bira. Que dit-il ?', 'Prête-moi ta fourche, s\'il te plaît.', ['Est-ce que je peux me baigner ?', 'J\'ai faim.'], 'Langage (p. 152).'),
              ord(3, 'Remets la phrase dans l\'ordre.', ['Les', 'jeunes', 'ramassent', 'les', 'déchets.'], 'Exercice du livre (p. 154).')
            ]
          },
          {
            id: 'son-ai', title: 'Les sons è = ê = ai = ei', pages: '158-163',
            summary: ['Le jour de la fête, Lala se lève tôt. Elle se baigne, puis se peigne les cheveux.', 'fê-te, lè-ve, bai-gne, pei-gne : è = ê = ai = ei.', 'Veux-tu m\'aider à arroser les fleurs, s\'il te plaît ?'],
            img: 'assets/books/ci-lc/lala-peigne.jpg',
            questions: [
              qcm(1, 'Que fait Lala devant le miroir ?', 'Elle se peigne les cheveux.', ['Elle mange.', 'Elle dort.'], 'Texte de lecture (p. 159).', I('lala-peigne')),
              qcm(2, 'Quelle phrase est liée au texte ?', 'Lala se lève, se baigne et se peigne.', ['Lala se lève et se peigne.', 'Lala se peigne, puis s\'en va.'], 'Exercice du livre (p. 160).'),
              ord(2, 'Remets dans l\'ordre ce que fait Lala.', ['Elle se lève tôt.', 'Elle se baigne.', 'Elle se peigne les cheveux.'], 'Texte de lecture (p. 159).'),
              multi(1, 'Quels mots ont le son è (è, ê, ai, ei) ?', ['fête', 'mairie', 'oseille', 'élève'], ['moto'], 'Exercice du livre (p. 160).'),
              qcm(2, 'Quelle phrase demande un service ?', 'Veux-tu m\'aider à arroser les fleurs, s\'il te plaît ?', ['J\'ai chaud.', 'Je préfère le train.'], 'Exercice du livre (p. 162).'),
              comp(3, 'Chaque matin, avant d\'aller à l\'école, Lala se lève et fait sa ___.', 'toilette', ['robe', 'fête'], 'Texte de fluidité (p. 160).'),
              rel(3, 'Trouve le nom de chaque image.', [['1', 'fenêtre'], ['2', 'bonnet'], ['3', 'baleine'], ['4', 'chat']], 'Mots à trouver (p. 166).', I('fenetre-baleine'))
            ]
          },
          {
            id: 'eval', title: 'Évaluation : lire et comprendre', pages: '165-171',
            summary: ['À midi, maman apporte le repas. C\'est un bon « mafé ». Toute la famille se régale. — Merci maman, nous avons bien mangé, dit Lamane.', 'Bira demande à sa sœur : « Veux-tu me prêter ta règle ? » — « Bien sûr ! »'],
            questions: [
              qcm(1, 'Quel repas maman apporte-t-elle à midi ?', 'Un bon mafé', ['Du riz au poisson', 'Du Yassa'], 'Texte d\'intégration (p. 168).'),
              qcm(2, 'Où se trouve la famille ?', 'À la maison', ['Au marché', 'À l\'école', 'À la mairie'], 'Texte d\'intégration (p. 168).'),
              qcm(2, 'Où doivent retourner les enfants après le repas ?', 'À l\'école', ['Au marché', 'À la maison'], 'Il faut aller vous reposer avant de retourner à l\'école.'),
              multi(2, 'Quels sont les personnages du texte ?', ['Lamane', 'Maman', 'Lala'], ['Julie'], 'Exercice d\'intégration (p. 168).'),
              rel(3, 'Relie les mots qui ont le même sens.', [['déjeuner', 'repas de midi'], ['mère', 'maman'], ['succulent', 'délicieux'], ['remplie', 'pleine']], 'Évaluation du niveau (p. 170).'),
              vf(3, 'Dans le texte d\'évaluation, maman a servi le dîner.', false, 'Elle a servi le déjeuner (riz au poisson).'),
              qcm(3, 'Je répare les voitures. Qui suis-je ?', 'Le mécanicien', ['Le maçon', 'Le boulanger'], 'Devinette (p. 167).'),
              qcm(3, 'Que ne doit-on pas faire ?', 'Courir sur la route sans regarder', ['Marcher sur le trottoir', 'Regarder avant de traverser'], 'Évaluation (p. 171).', I('traverser-route'))
            ]
          }
        ]
      }
    ]
  });
})();

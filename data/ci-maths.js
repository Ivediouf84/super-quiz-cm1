/* =====================================================================
   CI — Mathématiques (Éditions Didactikos)
   Questions tirées des « Je retiens » et des exercices « J'agis » du manuel.
   Les images viennent des exercices du livre (assets/books/ci-maths/).
   Mode d'emploi des fonctions : voir data/_core.js
   ===================================================================== */
(function () {
  const { qcm, vf, multi, comp, trou, rel, ord, calc } = QB;
  const I = (n) => ({ img: 'assets/books/ci-maths/' + n + '.jpg' });

  QB.book({
    classId: 'ci', domainId: 'maths',
    title: 'Mathématiques CI', source: 'Mathématiques CI — Éditions Didactikos',
    chapters: [
      /* ============================ PALIER 1 ============================ */
      {
        id: 'p1geo', title: 'Me situer dans l\'espace', palier: 1, group: '🧭 Palier 1',
        lessons: [
          {
            id: 'situer', title: 'Droite, gauche, devant, derrière, sur, sous', pages: '12-13, 20-21, 36-37',
            summary: ['Je mange avec la main droite. Je tire le ballon avec le pied gauche.', 'Le bébé porté sur le dos est derrière ; porté sur le ventre, il est devant.', 'Le seau est sous le tableau. Les livres sont sur l\'armoire. Le seau est devant les tables-bancs.'],
            img: 'assets/books/ci-maths/retiens-classe.jpg',
            questions: [
              qcm(1, 'Quel enfant parle : « Je suis sous la table » ?', 'Lala', ['Bira'], 'Lala est assise sous la table ; Bira est debout sur la table.', I('table')),
              qcm(1, 'Avec quelle main l\'élève de l\'image écrit-il ? (livre : « Je mange avec la main… »)', 'La main droite', ['La main gauche'], 'On mange et on écrit le plus souvent avec la main droite.'),
              qcm(1, 'Dans la classe, où est le seau ?', 'Sous le tableau', ['Sur l\'armoire', 'Sur le bureau'], 'Je retiens : le seau est sous le tableau.', I('retiens-classe')),
              qcm(1, 'Où sont les livres ?', 'Sur l\'armoire', ['Sous la table', 'Devant le bureau'], 'Je retiens : les livres sont sur l\'armoire.', I('retiens-classe')),
              qcm(2, 'Où est le ballon sur l\'étagère ?', 'En bas', ['En haut', 'Au milieu'], 'Le ballon est sur la dernière planche, en bas.', I('etagere')),
              qcm(2, 'Quel camion est loin de Julie ?', 'Image B', ['Image A'], 'Sur l\'image B, Julie est loin du camion des sapeurs-pompiers.', I('camions')),
              vf(1, 'Le bébé porté sur le dos de sa maman est derrière elle.', true, 'Sur le dos = derrière ; sur le ventre = devant.'),
              qcm(2, 'Quel enfant est devant ses camarades ?', 'Soda', ['Penda', 'Lala'], 'Soda marche en premier : elle est devant.', I('course3')),
              comp(1, 'Le seau est ___ le tableau.', 'sous', ['sur', 'loin'], 'Je retiens de la page 36.', I('retiens-classe')),
              qcm(3, 'Le bureau est situé… du tableau.', 'près', ['loin', 'derrière'], 'Je retiens : le bureau est près du tableau ; l\'armoire est au fond, loin du bureau.', I('retiens-classe'))
            ]
          },
          {
            id: 'pres-loin', title: 'Près de, loin de, au même niveau', pages: '28-33, 40-41',
            summary: ['Bira est près de l\'arbre ; Julie est loin de l\'arbre.', 'Le mouton 1 est plus près du plateau ; le mouton 3 est plus loin.'],
            img: 'assets/books/ci-maths/pres-loin.jpg',
            questions: [
              qcm(1, 'Qui est près de l\'arbre ?', 'Bira', ['Julie'], 'Bira est près de l\'arbre, Julie est loin.', I('pres-loin')),
              qcm(1, 'Quel enfant est près du drapeau ?', 'b', ['a'], 'L\'enfant b court juste à côté du drapeau.', I('drapeau')),
              qcm(1, 'Quelle souris est près du chat ?', '1', ['2'], 'La souris 1 est juste devant le chat.', I('souris')),
              qcm(2, 'Quel mouton est le plus près du plateau ?', 'Le mouton 1', ['Le mouton 3', 'Le mouton 2'], 'Je retiens : le mouton 1 est plus près du plateau.', I('moutons')),
              qcm(2, 'Quelle fille est la plus loin de la ligne d\'arrivée ?', '1', ['4', '3', '2'], 'La fille 1 est la dernière, la plus loin de l\'arrivée.', I('handisport')),
              qcm(2, 'Quel élève habite le plus loin de l\'école ?', 'Coura', ['Lala', 'Paul'], 'La maison de Coura est la plus éloignée de l\'école.', I('chez-qui')),
              qcm(2, 'Sur quelle image le cheval noir est-il près du cheval blanc ?', 'Image 2', ['Image 1'], 'Sur l\'image 1 il est loin ; sur l\'image 2 il est tout près.', I('chevaux-distance')),
              qcm(3, 'Sur l\'étagère, quels objets sont au même niveau ?', 'Le lait et la boîte', ['Le sac et le ballon', 'Le ballon et le lait'], 'Le lait et la boîte sont sur la même planche.', I('etagere')),
              vf(2, 'Les oiseaux rouges sont au même niveau dans l\'arbre.', true, 'Je retiens de la page 44.', I('retiens-arbre')),
              qcm(3, '« Lala vient après Bira. » Qui est devant ?', 'Bira', ['Lala'], 'Si Lala vient après Bira, Bira est devant elle.')
            ]
          }
        ]
      },
      {
        id: 'p1ens', title: 'Les ensembles', palier: 1, group: '🧭 Palier 1',
        lessons: [
          {
            id: 'ensembles', title: 'Ensemble, élément, sous-ensemble', pages: '14-15, 22-23, 38-39, 46-47',
            summary: ['Un ensemble est formé d\'éléments. Un élément appartient ou n\'appartient pas à un ensemble.', 'Un sous-ensemble est une partie d\'un ensemble.', 'On peut former un ensemble selon la couleur, la forme ou la taille des éléments.', 'Les bananes sont un sous-ensemble de l\'ensemble des fruits : elles sont incluses dedans.'],
            img: 'assets/books/ci-maths/partition.jpg',
            questions: [
              qcm(1, 'Quel est le sous-ensemble des citrons verts ?', '2', ['1'], 'L\'ensemble 2 contient les citrons verts ; le 1 contient des oranges.', I('citrons')),
              qcm(1, 'Quel ensemble est formé d\'oiseaux de grande taille ?', 'B', ['A'], 'L\'ensemble B contient les grands oiseaux (échassiers).', I('oiseaux')),
              qcm(1, 'Quel ensemble est formé d\'animaux à poils ?', '1', ['2'], 'L\'ensemble 1 : chèvre, âne, chien, tigre… ont des poils.', I('poils')),
              qcm(1, 'Quel ensemble est formé d\'animaux à plumes ?', '2', ['1'], 'La poule et les oiseaux ont des plumes.', I('plumes')),
              comp(1, 'Un sous-ensemble est une ___ d\'un ensemble.', 'partie', ['couleur', 'forme'], 'Je retiens de la page 22.'),
              multi(2, 'Selon quoi peut-on former un ensemble ?', ['La couleur', 'La forme', 'La taille'], ['Le nom de l\'élève'], 'Je retiens : selon la couleur, la forme ou la taille des éléments.', I('retiens-couleur-forme')),
              qcm(2, 'Combien d\'ensembles peut-on former selon la couleur ?', '3', ['2', '4'], 'Vert, bleu et rouge : 3 ensembles.', I('formes-couleurs')),
              qcm(2, 'Combien d\'ensembles peut-on former selon la forme ?', '2', ['3', '1'], 'Les ronds et les carrés : 2 ensembles.', I('formes-couleurs')),
              qcm(2, 'Quelle phrase est juste ?', 'L\'ensemble des garçons de la classe est inclus dans l\'ensemble des élèves.', ['L\'ensemble des élèves est un sous-ensemble des garçons.'], 'Les garçons sont une partie des élèves.'),
              rel(3, 'Relie chaque sous-ensemble à ses fruits.', [['B', 'Bananes'], ['C', 'Mangues'], ['D', 'Oranges']], 'Je retiens : la partition de A donne trois sous-ensembles B, C et D.', I('partition')),
              qcm(3, 'Dans les formes de Paul, quelle étiquette désigne l\'ensemble de tous les carrés ?', 'C', ['A', 'B', 'D'], 'C entoure tout ; A, B et D sont des sous-ensembles (bleus, rouges, verts).', I('formes-paul'))
            ]
          },
          {
            id: 'quantite', title: 'Beaucoup, peu, rien — plus que, moins que, autant que', pages: '30-31, 54-55',
            summary: ['Une poule qui a beaucoup de poussins, une poule qui a peu de poussins, une poule qui n\'a rien.', 'A contient plus d\'éléments que B ; B contient autant d\'éléments que C ; D contient moins d\'éléments que C.'],
            img: 'assets/books/ci-maths/poules.jpg',
            questions: [
              qcm(1, 'Qui a beaucoup de billes ?', 'Bira', ['Julie', 'Lala'], 'Bira a beaucoup de billes, Julie en a peu, Lala n\'a rien.', I('billes')),
              qcm(1, 'Qui n\'a rien ?', 'Lala', ['Bira', 'Julie'], 'La boîte de Lala est vide.', I('billes')),
              qcm(1, 'Dans quelle caisse y a-t-il beaucoup d\'or ?', 'La caisse X', ['La caisse O'], 'La caisse marquée X est pleine d\'or.', I('caisses')),
              qcm(1, 'Quel arbre n\'a rien (pas d\'oiseau) ?', '2', ['1', '3'], 'L\'arbre 2 n\'a aucun oiseau.', I('arbres-oiseaux')),
              rel(2, 'Associe chaque mot à la bonne tablette d\'œufs.', [['beaucoup', '1'], ['rien', '2'], ['peu', '3']], 'Tablette 1 pleine, tablette 2 vide, tablette 3 avec quelques œufs.', I('tablettes')),
              qcm(2, 'Quel enfant a colorié peu de carreaux ?', 'Coura', ['Lala', 'Julie'], 'Coura a colorié 3 carreaux, Lala aucun, Julie tous.', I('carreaux')),
              qcm(2, 'Quels ensembles ont autant d\'éléments ?', 'A et C', ['A et B', 'B et C'], 'A et C ont 4 éléments chacun ; B en a 5.', I('ensembles-autant')),
              vf(2, 'Il y a plus de bracelets que de boucles d\'oreilles.', true, '3 bracelets, 2 boucles d\'oreilles.', I('bijoux')),
              vf(2, 'Il y a plus de boucles d\'oreilles que de colliers.', false, 'Il y a 2 boucles et 2 colliers : il y en a autant.', I('bijoux')),
              comp(3, 'D contient ___ d\'éléments que C.', 'moins', ['plus', 'autant'], 'Je retiens de la page 54.', I('retiens-ensembles')),
              qcm(3, 'Quel ensemble de fraises a plus d\'éléments que l\'autre ?', 'L\'ensemble après le signe =', ['L\'ensemble après le signe +'], 'Le premier a 4 fraises, le second en a 5.', I('fraises'))
            ]
          }
        ]
      },
      {
        id: 'p1mes', title: 'Comparer des grandeurs', palier: 1, group: '🧭 Palier 1',
        lessons: [
          {
            id: 'longueurs', title: 'Long, court, grand, petit', pages: '16-17, 24-25',
            summary: ['Voici un petit arbre et un grand arbre. J\'ai une longue corde ; j\'ai une courte corde.', 'Le trait B est plus court que les autres traits. Le trait D est plus long.', 'Sidi est plus grand que Daba.'],
            img: 'assets/books/ci-maths/retiens-traits.jpg',
            questions: [
              qcm(1, 'Quel trait est le plus court ?', 'B', ['A', 'C', 'D'], 'Je retiens : le trait B est plus court que les autres.', I('retiens-traits')),
              qcm(1, 'Quel trait est le plus long ?', 'D', ['A', 'B', 'C'], 'Je retiens : le trait D est plus long que les autres.', I('retiens-traits')),
              qcm(1, 'Quelle est la plus petite lance ?', 'c', ['a', 'b', 'd'], 'La lance c est la plus courte.', I('lances')),
              qcm(1, 'Quel est le plus long serpent ?', 'c', ['a', 'b'], 'Le serpent c est le plus long.', I('serpents')),
              qcm(1, 'Quel est le plus grand panier ?', 'e', ['d'], 'Le panier e est plus grand que le panier d.', I('paniers')),
              qcm(1, 'Qui a tracé le trait long ?', 'Julie', ['Lala'], 'Le trait de Julie est plus long que celui de Lala.', I('traits')),
              qcm(2, 'Quel seau est le plus petit ?', '2', ['1'], 'Le seau 2 est petit, le seau 1 est grand.', I('seaux')),
              ord(2, 'Range les ballons du plus grand au plus petit.', ['2', '5', '3'], 'Le ballon 2 est le plus grand, puis le 5, puis le 3.', I('ballons')),
              vf(2, 'Sidi est plus grand que Daba.', true, 'Je retiens de la page 24.', I('retiens-traits')),
              qcm(3, 'Qui est la personne la plus grande ?', 'a', ['b', 'c'], 'L\'homme a est le plus grand.', I('tailles'))
            ]
          },
          {
            id: 'capacites', title: 'Capacités : beaucoup, peu, plus de, moins de, autant de', pages: '48-49, 56-57',
            summary: ['Voici une bouteille qui contient beaucoup d\'huile ; voici une bouteille qui contient peu d\'huile.', 'La bouteille 2 contient plus d\'eau que la bouteille 4. La bouteille 1 contient autant d\'eau que la bouteille 3.'],
            img: 'assets/books/ci-maths/retiens-bouteilles.jpg',
            questions: [
              qcm(1, 'Quelle bouteille contient peu d\'alcool ?', 'b', ['a'], 'La bouteille b n\'a qu\'un peu de liquide au fond.', I('bouteilles-alcool')),
              qcm(1, 'Quel verre contient beaucoup de jus d\'orange ?', 'c', ['d'], 'Le verre c est presque plein.', I('verres')),
              qcm(1, 'Quel biberon contient plus de lait que les autres ?', 'a', ['b', 'c'], 'Le biberon a est plein.', I('biberons')),
              qcm(2, 'Quelle bouteille a moins d\'huile que les autres ?', 'h', ['e', 'f', 'g'], 'La bouteille h a très peu d\'huile.', I('huiles')),
              qcm(2, 'Quel verre a autant de jus d\'orange que le verre A ?', 'C', ['B'], 'Les verres A et C ont la même quantité.', I('verres-jus')),
              qcm(2, 'Quelle équipe a gagné la course à la bouteille ?', 'L\'équipe A', ['L\'équipe B'], 'La bouteille de l\'équipe A contient plus d\'eau.', I('course-bouteille')),
              vf(2, 'La bouteille 1 contient autant d\'eau que la bouteille 3.', true, 'Je retiens de la page 56.', I('retiens-bouteilles')),
              comp(3, 'La bouteille 4 contient ___ d\'eau que la bouteille 2.', 'moins', ['plus', 'autant'], 'Je retiens de la page 56.', I('retiens-bouteilles'))
            ]
          }
        ]
      },
      {
        id: 'p1prob', title: 'Chercher des informations sur une image', palier: 1, group: '🧭 Palier 1',
        lessons: [
          {
            id: 'intrus', title: 'Indices, intrus, ce qui manque', pages: '18-19, 26-27, 34-35, 50-51',
            summary: ['Un indice est une information utile.', 'La souris n\'est pas un animal à plumes : c\'est un intrus dans cet ensemble.', 'Je peux retrouver une image à partir d\'un indice : un objet, une couleur, une forme ou un signe.'],
            img: 'assets/books/ci-maths/plumes.jpg',
            questions: [
              qcm(1, 'Quel est l\'intrus parmi ces animaux à plumes ?', 'La souris', ['Le canard', 'Le poussin', 'L\'autruche'], 'Je retiens : la souris n\'a pas de plumes.', I('plumes')),
              qcm(1, 'Quel est l\'intrus ?', 'Les ciseaux', ['Le lion', 'Le zèbre', 'Le canard'], 'Les ciseaux ne sont pas un animal.', I('intrus-animaux')),
              qcm(1, 'Quel est l\'intrus parmi les fruits ?', 'L\'oignon', ['La banane', 'La mangue', 'La pomme'], 'L\'oignon est un légume.', I('fruits')),
              qcm(1, 'Quel outil n\'est pas un outil d\'écolier ?', '2 (la truelle)', ['1 (le stylo)', '3 (la règle)', '4 (l\'ardoise)'], 'La truelle est un outil du maçon.', I('ecolier')),
              qcm(2, 'Pourquoi l\'arbitre arrête-t-il le match ?', 'Un animal est sur le terrain', ['Il pleut', 'Le ballon est crevé'], 'Le mouton sur le terrain est l\'intrus.', I('terrain')),
              multi(2, 'Quels sont les outils du maçon ?', ['a (la truelle)', 'c (la brouette)', 'd (la pelle)'], ['b (le micro)'], 'Le micro est l\'intrus.', I('outils-macon')),
              qcm(2, 'Indice : la poche verte. Quelle est ma chemise ?', 'C', ['A', 'B', 'D'], 'Seule la chemise C a des poches vertes.', I('chemises')),
              qcm(2, 'Indice : le carré vert. Quelle case ai-je décorée ?', '2', ['1', '3'], 'La case 2 a un carré vert.', I('cases')),
              qcm(3, 'Indice : le triangle. Quelle est la case de grand-père ?', 'c', ['a', 'b'], 'La case c porte un triangle.', I('cases-indice')),
              qcm(3, 'Quel élément manque sur l\'ordinateur B ?', 'La souris (2)', ['L\'écran (4)', 'Le clavier (3)'], 'Sur l\'image B, il n\'y a pas de souris.', I('ordinateurs')),
              qcm(3, 'Quelle pièce faut-il pour compléter l\'image de droite ?', '3', ['1', '2'], 'Il manque un rectangle orange.', I('pieces'))
            ]
          },
          {
            id: 'ordre-algo', title: 'Remettre en ordre, algorithmes, tableaux', pages: '42-43, 58-59, 64-67',
            summary: ['Les images se suivent dans un ordre logique.', 'Pour reproduire un modèle, j\'identifie les informations utiles : cases, lignes, formes, couleurs, taille.', 'Une répétition de couleurs est un algorithme répétitif ; une progression des couleurs est un algorithme récursif.', 'Un tableau à double entrée permet de trouver une information (ex. le fruit préféré de chaque enfant).'],
            img: 'assets/books/ci-maths/algorithmes.jpg',
            questions: [
              qcm(1, 'Quel est l\'algorithme répétitif ?', 'B', ['A'], 'En B, les couleurs bleu et jaune se répètent toujours de la même façon.', I('algo-repetitif')),
              qcm(2, 'Quel est l\'algorithme récursif ?', 'D', ['C'], 'En D, il y a 1 carré 1 rond, puis 2 carrés 2 ronds… : ça progresse.', I('algo-recursif')),
              ord(2, 'Remets les images du puits dans le bon ordre.', ['2', '4', '3', '1'], 'Je retiens : les images se suivent dans cet ordre : 2 ; 4 ; 3 ; 1.', I('puits')),
              ord(2, 'Remets dans l\'ordre les étapes pour dessiner la voiture.', ['c', 'a', 'd', 'b'], 'D\'abord la caisse (c), une roue (a), deux roues (d), puis le toit (b).', I('voiture')),
              qcm(1, 'Dans le tableau, quel enfant préfère la couleur bleue ?', 'Lala', ['Julie', 'Coura'], 'La croix de Lala est dans la colonne bleue.', I('tableau-couleurs')),
              qcm(1, 'Quel enfant a une poupée ?', 'Lala', ['Bira', 'Julie'], 'Bira a un vélo, Julie une voiture, Lala une poupée.', I('tableau-cadeaux')),
              rel(2, 'Relie chaque enfant à son sport favori.', [['Bira', 'La course'], ['Paul', 'Le football'], ['Badou', 'La lutte']], 'On lit les croix dans le tableau.', I('tableau-sport')),
              vf(2, 'Pour reproduire la case, la lune est une information utile.', false, 'Je retiens : la lune est une information inutile.', I('retiens-modele')),
              qcm(3, 'Quel est l\'intrus parmi les parures ?', '3 (les ciseaux)', ['1 (le collier)', '4 (la boucle)', '5 (le bracelet)'], 'Les ciseaux ne sont pas un bijou.', I('bijoux-corps'))
            ]
          }
        ]
      },
      /* ============================ PALIER 2 ============================ */
      {
        id: 'p2geo', title: 'Solides et figures planes', palier: 2, group: '🔷 Palier 2',
        lessons: [
          {
            id: 'solides', title: 'Cylindre, cube, pavé droit', pages: '72-73, 82-83, 108-109',
            summary: ['Le pavé droit a 6 faces égales 2 à 2.', 'Le cube a 6 faces égales.', 'Le cylindre a une face arrondie et 2 faces planes.', 'On peut décomposer un solide en patron et recomposer le solide à partir du patron.'],
            img: 'assets/books/ci-maths/retiens-solides.jpg',
            questions: [
              qcm(1, 'Quel solide a une forme arrondie ?', 'Le cylindre', ['Le cube', 'Le pavé droit'], 'Le cylindre a une face arrondie.', I('solides-arrondi')),
              qcm(1, 'Quelle lettre correspond au pavé droit ?', 'b', ['a', 'c', 'd'], 'b est un long pavé droit ; a cylindre, c cube, d carré.', I('solides-pave')),
              comp(1, 'Le cube a 6 faces ___.', 'égales', ['rondes', 'arrondies'], 'Je retiens de la page 72.'),
              qcm(2, 'Combien de faces a un cube ?', '6', ['4', '3', '8'], 'Le cube a 6 faces égales.'),
              vf(2, 'Le pavé droit a 6 faces égales 2 à 2.', true, 'Je retiens de la page 72.'),
              rel(2, 'Corrige ton ami : relie chaque lettre au bon nom.', [['a', 'pavé droit'], ['b', 'cube'], ['c', 'cylindre']], 'a est un pavé droit rose, b un cube bleu, c un cylindre.', I('solides-noms')),
              rel(2, 'Relie chaque objet à son solide.', [['Le dé', 'Cube'], ['La boîte en carton', 'Pavé droit'], ['La boîte de conserve', 'Cylindre']], 'Ce sont les exemples du livre.'),
              qcm(3, 'Quelle lettre correspond au patron du pavé droit ?', 'a', ['b', 'c'], 'b est le patron du cube, c celui du cylindre.', I('patrons-choix')),
              comp(3, 'Passer du solide au patron s\'appelle la ___.', 'décomposition', ['recomposition', 'addition'], 'Je retiens de la page 108.', I('patrons'))
            ]
          },
          {
            id: 'figures', title: 'Carré, rectangle, triangle, rond', pages: '92-93, 100-101',
            summary: ['Le rectangle, le carré, le triangle et le rond sont des figures planes.', 'Le carré a 4 côtés égaux. Le rectangle a 4 côtés égaux 2 à 2.', 'Le triangle a 3 côtés. Le rond n\'a ni côté ni sommet.'],
            img: 'assets/books/ci-maths/retiens-figures.jpg',
            questions: [
              qcm(1, 'Combien de côtés a un triangle ?', '3', ['4', '2', '0'], 'Je retiens : le triangle a 3 côtés.'),
              qcm(1, 'Quelle figure n\'a ni côté ni sommet ?', 'Le rond', ['Le carré', 'Le triangle'], 'Je retiens de la page 100.'),
              qcm(1, 'Quel numéro correspond au carré ?', '3', ['1', '2'], '1 est un triangle, 2 un rectangle, 3 un carré.', I('carre')),
              rel(1, 'Relie chaque panneau à sa forme.', [['1', 'Rectangle'], ['2', 'Rond'], ['3', 'Triangle'], ['4', 'Carré']], 'Observe bien la forme de chaque panneau.', I('panneaux')),
              multi(2, 'Quelles sont les figures planes ?', ['a (triangle)', 'b (rectangle)'], ['c (cube)', 'd (cylindre)'], 'Le cube et le cylindre sont des solides.', I('figures-planes')),
              multi(2, 'Relève les numéros des rectangles.', ['2', '5'], ['1', '3', '4', '6'], 'Les rectangles sont plus longs que larges.', I('rectangles')),
              comp(2, 'Le carré a 4 côtés ___.', 'égaux', ['inégaux', 'ronds'], 'Je retiens de la page 100.'),
              multi(3, 'Quelles réponses sont justes ?', ['Le rond n\'a pas de côté (Lala)', 'Le rond n\'est pas un solide (Paul)'], ['Le rond n\'est pas une figure plane (Bira)'], 'Le rond EST une figure plane.'),
              vf(3, 'Le rectangle a 4 côtés égaux.', false, 'Le rectangle a 4 côtés égaux 2 à 2 ; c\'est le carré qui a 4 côtés égaux.')
            ]
          }
        ]
      },
      {
        id: 'p2num', title: 'Les nombres de 0 à 10', palier: 2, group: '🔷 Palier 2',
        lessons: [
          {
            id: 'n0-5', title: 'Les nombres 0, 1, 2, 3, 4, 5', pages: '74-77, 84-85',
            summary: ['1 (un) < 2 (deux) < 3 (trois). Le signe < se lit « inférieur à ».', '4 (quatre) ; 5 (cinq).', 'Aby a 3 œufs, Daba a 4 œufs, Fama a 0 œuf : zéro = 0.'],
            img: 'assets/books/ci-maths/oeufs-zero.jpg',
            questions: [
              calc(1, 'Combien de bonbons dans l\'ensemble A ?', 3, 'Compte : 1, 2, 3.', I('bonbons')),
              qcm(1, 'Combien de poussins dans l\'ensemble A ? (en lettres)', 'trois', ['deux', 'un', 'quatre'], 'Il y a 3 poussins : trois.', I('poussins')),
              qcm(1, 'Quel ensemble compte trois kolas ?', 'c', ['d'], 'L\'ensemble c a 3 kolas, d en a 2.', I('kolas')),
              qcm(1, 'Quel ensemble a un seul élément ?', '2', ['1'], 'L\'ensemble 2 a une seule sucette.', I('sucettes')),
              qcm(1, 'Combien de billes a Bira ?', '0', ['1', '3', '4'], 'Le cercle de Bira est vide : zéro.', I('billes-zero')),
              qcm(1, 'Combien d\'œufs a Fama ?', '0 (zéro)', ['3', '4'], 'Je retiens : Fama a 0 œuf.', I('oeufs-zero')),
              rel(2, 'Relie chaque nombre à son écriture en lettres.', [['1', 'un'], ['2', 'deux'], ['3', 'trois'], ['4', 'quatre'], ['5', 'cinq']], 'Je retiens des pages 74 et 76.'),
              calc(2, 'Combien de pommes dans l\'ensemble B ?', 5, 'Il y a 5 pommes dans B.', I('pommes')),
              comp(2, '3 ___ 4', '<', ['>', '='], '3 est plus petit que 4 : 3 < 4.'),
              comp(2, '5 ___ 4', '>', ['<', '='], '5 est plus grand que 4 : 5 > 4.'),
              ord(2, 'Remets les nombres dans l\'ordre, du plus petit au plus grand.', ['0', '1', '2', '3', '4', '5'], 'C\'est la bande numérique.'),
              rel(3, 'Indique le rang de chaque fille dans la course.', [['Lala', '1re'], ['Julie', '2e'], ['Coura', '3e']], 'Lala est la plus près du drapeau.', I('course-rangs'))
            ]
          },
          {
            id: 'n6-10', title: 'Les nombres 6, 7, 8, 9, 10 et la dizaine', pages: '86-87, 102-103, 116-119',
            summary: ['4 + 2 = 6 (six) ; 7 = 4 + 3 (sept). 7 est supérieur à 6 (7 > 6).', 'Samedi est le 6e jour de la semaine. Dimanche est le 7e jour.', '8 (huit) ; 9 (neuf). Août est le 8e mois, septembre le 9e mois.', '10 unités = 1 dizaine. 10 = 4 + 3 + 3 = 5 + 5.'],
            img: 'assets/books/ci-maths/dizaine.jpg',
            questions: [
              qcm(1, 'Quel ensemble a 6 éléments ?', 'B', ['A', 'C'], 'B a 6 bonbons ; A et C en ont 5.', I('six-elements')),
              qcm(1, 'Quelle est l\'écriture en lettres de 9 ?', 'neuf', ['sept', 'huit'], '9 = neuf.'),
              calc(1, '4 + 2 = ?', 6, 'Je retiens : 4 + 2 = 6.', I('six-sept')),
              calc(1, '5 + 5 = ?', 10, '10 = 5 + 5.', I('dix')),
              multi(2, 'Quelles étiquettes font 6 ?', ['2 + 3 + 1', '4 + 1 + 1'], ['3 + 4'], '3 + 4 fait 7.'),
              multi(2, 'Quelles étiquettes font 7 ?', ['2 + 1 + 4', '0 + 7'], ['1 + 2 + 3'], '1 + 2 + 3 fait 6.'),
              qcm(2, 'En partant de la gauche, quel est le rang du cheval marqué d\'une croix ?', '8e', ['7e', '9e', '1er'], 'Il y a 8 chevaux : le marqué est le dernier, le 8e.', I('chevaux-rang')),
              qcm(2, 'Quel est le 7e jour de la semaine ?', 'Dimanche', ['Samedi', 'Lundi'], 'Je retiens : dimanche est le 7e jour.'),
              comp(2, '10 unités = 1 ___.', 'dizaine', ['centaine', 'unité'], 'Je retiens de la page 116.', I('dizaine')),
              calc(2, 'Lala : 4 + 2 + 2 = ?', 8, 'Le collier de Lala a 8 perles : huit.', I('huit-neuf')),
              multi(3, 'Quels couples font 10 ?', ['5 et 5', '7 et 3', '6 et 4'], ['3 et 5'], '3 + 5 = 8.', I('couples-dix')),
              trou(3, '9 = 6 + … (écris le nombre)', ['3'], '6 + 3 = 9.'),
              trou(3, '10 = 9 + … (écris le nombre)', ['1'], '9 + 1 = 10.'),
              calc(3, 'Combien de tasses ? (7 en haut, 7 en bas)', 14, '7 + 7 = 14.', I('tasses'))
            ]
          },
          {
            id: 'op-0-10', title: 'Addition, soustraction, double et moitié', pages: '94-95, 104-105, 110-111',
            summary: ['Je fais une addition pour trouver le tout, le total, la somme. Le signe de l\'addition est + (plus).', 'Pour trouver le reste, ce qui manque ou la différence, je fais une soustraction. Le signe est – (moins).', 'Double = 2 fois. Moitié = diviser en 2 parts égales. 8 est le double de 4 ; 3 est la moitié de 6.'],
            img: 'assets/books/ci-maths/double-moitie.jpg',
            questions: [
              calc(1, '4 + 3 = ?', 7, 'Je retiens : 4 + 3 = 7.', I('addition')),
              qcm(1, 'Quel est le signe de l\'addition ?', '+ (plus)', ['– (moins)', '= (égal)'], 'Je retiens de la page 94.'),
              qcm(1, 'Quel est le signe de la soustraction ?', '– (moins)', ['+ (plus)', '< (inférieur)'], 'Je retiens de la page 104.'),
              calc(1, 'Satou a 7 oranges. Elle en vend 3. Combien lui en reste-t-il ?', 4, '7 – 3 = 4 oranges.'),
              qcm(2, 'Lala a 4 oranges. Sa maman lui en donne 3. Quelle est la bonne opération ?', '4 + 3', ['4 – 3'], 'On ajoute : c\'est une addition.'),
              calc(2, 'Bira doit colorier 8 triangles. Il en colorie 5. Combien n\'en a-t-il pas coloriés ?', 3, '8 – 5 = 3.', I('triangles-colories')),
              qcm(2, 'Maman Satou achète 9 poissons. Elle en vend 5. Quelle est la bonne opération ?', '9 poissons – 5 poissons', ['9 poissons + 5 poissons'], 'Elle vend : on enlève. 9 – 5 = 4.'),
              calc(2, 'Combien de fruits en tout ? (4 bananes et 3 pommes)', 7, '4 + 3 = 7 fruits. Les stylos ne sont pas des fruits.', I('fruits-total')),
              calc(2, 'Quel est le double de 4 ?', 8, 'Double = 2 fois : 4 + 4 = 8.', I('double-moitie')),
              calc(2, 'Quelle est la moitié de 6 ?', 3, '6 partagé en 2 parts égales : 3 et 3.'),
              comp(3, '10 est le ___ de 5.', 'double', ['moitié', 'reste'], 'Je retiens : 10 est le double de 5 ; 5 est la moitié de 10.'),
              calc(3, 'Quelle est la moitié de 8 bananes ?', 4, '8 = 4 + 4.', I('bananes-moitie')),
              calc(3, 'Pour trouver l\'âge de Bira, ajoute 3 à la moitié de 6. Quel est son âge ?', 6, 'La moitié de 6 est 3 ; 3 + 3 = 6 ans.'),
              rel(3, 'Relie chaque nombre à son double.', [['1', '2'], ['3', '6'], ['5', '10']], 'Double = 2 fois le nombre.')
            ]
          }
        ]
      },
      {
        id: 'p2mes', title: 'Les masses', palier: 2, group: '🔷 Palier 2',
        lessons: [
          {
            id: 'masses', title: 'Lourd, léger, plus lourd que, aussi léger que', pages: '78-79, 88-89',
            summary: ['Le sac est lourd. La plume est légère.', 'Le ballon jaune est plus lourd que le ballon rouge. Le ballon rouge est plus léger que le ballon jaune.', 'La bouteille orange est aussi légère que la boîte verte.'],
            img: 'assets/books/ci-maths/lourd-leger.jpg',
            questions: [
              qcm(1, 'Quel objet est lourd ?', '2 (la bonbonne de gaz)', ['1 (le crayon)', '3 (la tasse)'], 'La bonbonne de gaz est lourde.', I('objets-lourd')),
              qcm(1, 'Quel animal est léger ?', 'La poule', ['L\'éléphant', 'La vache'], 'La poule est beaucoup plus légère.', I('animaux-poids')),
              qcm(1, 'Quel objet Bira peut-il prendre facilement ?', '1 (la plume)', ['2 (le tonneau)'], 'La plume est légère.', I('plume-tonneau')),
              comp(1, 'La plume est ___.', 'légère', ['lourde', 'longue'], 'Je retiens de la page 78.', I('lourd-leger')),
              qcm(2, 'Sur la balançoire, quel enfant est lourd ?', 'b', ['a'], 'Le côté de b descend : b est plus lourd.', I('balancoire')),
              vf(2, 'Le ballon jaune est plus lourd que le ballon rouge.', true, 'Je retiens de la page 88 : le plateau du ballon jaune descend.', I('masses-balance')),
              comp(3, 'La bouteille orange est ___ légère que la boîte verte.', 'aussi', ['plus', 'moins'], 'La balance est en équilibre.', I('masses-balance')),
              ord(3, 'Range du plus léger au plus lourd.', ['La feuille', 'La tasse', 'Le seau', 'Le camion'], 'Une feuille ne pèse presque rien, un camion est très lourd.')
            ]
          }
        ]
      },
      {
        id: 'p2prob', title: 'Le problème mathématique', palier: 2, group: '🔷 Palier 2',
        lessons: [
          {
            id: 'probleme', title: 'Énoncé, données, question et consigne', pages: '80-81, 90-91, 98-99, 106-107',
            summary: ['Un énoncé qui me permet de réfléchir, d\'utiliser les données et de faire des calculs est un problème mathématique.', 'Pour mieux comprendre un problème, je peux le dramatiser (le jouer).', 'Les données indiquent des quantités, des longueurs, des prix.', 'La question fait appel à une réponse ; la consigne fait appel à une tâche.'],
            img: 'assets/books/ci-maths/donnees.jpg',
            questions: [
              qcm(1, 'Quel énoncé est un problème mathématique ?', 'Julie a 2 billes noires, 3 bleues et 1 rouge. Trouve le nombre total de billes.', ['Lala a une bague, un bracelet et un collier.'], 'On peut calculer : 2 + 3 + 1 = 6 billes.'),
              qcm(1, 'Quel énoncé est un problème mathématique ?', 'Bira a 4 billes. Il en perd 3. Combien lui en reste-t-il ?', ['Bira va à l\'école à 8 heures. C\'est un bon élève.'], 'Il y a une question et un calcul : 4 – 3 = 1.'),
              vf(1, '« Tante Satou avait 5 bananes. Elle en a vendu 2. Combien lui en reste-t-il ? » est un problème mathématique.', true, 'On calcule : 5 – 2 = 3.', I('probleme-bananes')),
              multi(2, 'Quelles sont les données du problème de maman ?', ['3 poules', '2 coqs', '3 pintades', '4 canards'], ['le poulailler'], 'Je retiens : ce sont les données du problème.', I('donnees')),
              calc(2, 'Maman élève 3 poules, 2 coqs, 3 pintades et 4 canards. Combien d\'animaux élève-t-elle ?', 12, '3 + 2 + 3 + 4 = 12.'),
              calc(2, 'Lala a 7 citrons. Elle en donne 3 à Julie et 2 à Bira. Combien lui en reste-t-il ?', 2, '3 + 2 = 5 donnés ; 7 – 5 = 2.'),
              qcm(2, 'L\'usine de Rose a 5 grands camions et 2 petits camions. Quelle est la 2e donnée ?', '2 petits camions', ['5 grands camions', 'Rose'], 'La 2e donnée est « 2 petits camions ».'),
              qcm(3, '« Calcule le nombre total de stylos. » Est-ce une question ou une consigne ?', 'Une consigne', ['Une question'], 'Une consigne demande une tâche à faire.', I('question-consigne')),
              qcm(3, '« Combien de stylos bleus a-t-il en tout ? » Est-ce une question ou une consigne ?', 'Une question', ['Une consigne'], 'Une question appelle une réponse.', I('question-consigne')),
              calc(3, 'Un poste de police a 7 agents. 3 sortent pour une ronde. Combien restent au poste ?', 4, '7 – 3 = 4 agents.')
            ]
          }
        ]
      },
      /* ============================ PALIER 3 ============================ */
      {
        id: 'p3num', title: 'Les nombres de 11 à 20', palier: 3, group: '⭐ Palier 3',
        lessons: [
          {
            id: 'n11-20', title: 'Les nombres de 11 à 20', pages: '126-127, 134-135, 144-145, 152-153, 158-159',
            summary: ['5 + 6 = 11 (onze) : 1 dizaine 1 unité. 12 = 6 + 6 (douze).', '13 (treize) ; 14 = 6 + 4 + 4 (quatorze).', '15 = 10 + 5 (quinze) ; 16 = 10 + 6 (seize).', '17 (dix-sept) < 18 (dix-huit) < 19 (dix-neuf).', '20 (vingt) = 2 dizaines 0 unité.'],
            img: 'assets/books/ci-maths/vingt.jpg',
            questions: [
              calc(1, '5 + 6 = ?', 11, 'Je retiens : 5 + 6 = 11 (onze).', I('onze-douze')),
              calc(1, '6 + 6 = ?', 12, 'Je retiens : 12 = 6 + 6 (douze).', I('onze-douze')),
              calc(1, 'Combien de cailloux ?', 11, '5 en haut et 6 en bas : 11 cailloux, onze.', I('cailloux')),
              rel(1, 'Relie chaque nombre à son écriture en lettres.', [['11', 'onze'], ['13', 'treize'], ['15', 'quinze'], ['17', 'dix-sept'], ['20', 'vingt']], 'Je retiens des pages 126 à 158.'),
              qcm(2, 'Quel ensemble a 17 éléments ?', 'C', ['A', 'B'], 'Compte les points rouges : il y en a 17.', I('dix-sept-elements')),
              qcm(2, 'Quel ensemble compte 20 éléments ?', 'A', ['B'], 'A a 4 rangées de 5 oiseaux : 20.', I('vingt-elements')),
              calc(2, 'Bira a 7 billes dans un pot et 5 dans l\'autre. Combien en tout ?', 12, '7 + 5 = 12.'),
              calc(2, 'Paul a mis ses capsules dans 3 pots : 4, 3 et 4. Combien en tout ?', 11, '4 + 3 + 4 = 11.'),
              trou(2, '20 = … dizaines + 0 unité', ['2', 'deux'], 'Je retiens : 20 = 2 dizaines 0 unité.', I('vingt')),
              ord(2, 'Range du plus grand au plus petit.', ['16', '15', '12', '11', '9', '7'], 'Le plus grand est 16.'),
              multi(3, 'Quelles égalités font 20 ?', ['8 + 5 + 7', '9 + 2 + 9'], ['10 + 5 + 3', '4 + 7 + 8'], '10 + 5 + 3 = 18 et 4 + 7 + 8 = 19.'),
              calc(3, 'Julie a 13 citrons. Combien doit-elle encore en cueillir pour en avoir 19 ?', 6, '13 + 6 = 19.'),
              comp(3, '17 ___ 19', '<', ['>', '='], '17 est plus petit que 19.'),
              trou(3, '15 + … = 20', ['5'], '15 + 5 = 20.')
            ]
          },
          {
            id: 'op-0-20', title: 'Additions et soustractions jusqu\'à 20', pages: '136-137',
            summary: ['J\'ai en tout : 6 billes + 4 billes = 10 billes. Je compte 6, j\'ajoute 4, puis je compte le tout.', 'Il me reste : 12 mangues – 4 mangues = 8 mangues. Je compte 12, j\'enlève 4, puis je compte le reste.'],
            questions: [
              calc(1, '9 + 5 = ?', 14, '9 + 5 = 14.'),
              calc(1, '13 – 10 = ?', 3, '13 – 10 = 3.'),
              calc(1, 'Paul a 6 billes. Il joue et en gagne 4. Combien en a-t-il ?', 10, '6 + 4 = 10 billes.'),
              calc(2, 'Julie a cueilli 12 mangues. Elle en mange 4. Combien lui en reste-t-il ?', 8, '12 – 4 = 8 mangues.'),
              multi(2, 'Quelles additions font 13 ?', ['7 + 6', '5 + 8'], ['3 + 9'], '3 + 9 = 12.'),
              calc(2, '8 + 6 = ?', 14, '8 + 6 = 14.'),
              calc(2, '14 – 8 = ?', 6, '14 – 8 = 6.'),
              calc(3, '13 – 5 = ?', 8, '13 – 5 = 8.'),
              calc(3, 'Moussa a 12 moutons. Il en vend 5. Combien lui en reste-t-il ?', 7, '12 – 5 = 7.'),
              calc(3, 'Salif a 7 billes vertes et 9 rouges. Il en perd 6. Combien lui en reste-t-il ?', 10, '7 + 9 = 16 ; 16 – 6 = 10.')
            ]
          }
        ]
      },
      {
        id: 'p3geo', title: 'Lignes, quadrillages et parcours', palier: 3, group: '⭐ Palier 3',
        lessons: [
          {
            id: 'lignes', title: 'Lignes ouvertes, fermées, intérieur, extérieur', pages: '124-125, 132-133, 142-143',
            summary: ['Une ligne fermée n\'a pas d\'ouverture. Une ligne ouverte a une ouverture.', 'Je peux construire des rythmes graphiques en combinant des lignes fermées et ouvertes.', 'Je suis à l\'intérieur de la ligne fermée, à l\'extérieur, ou sur la frontière.'],
            img: 'assets/books/ci-maths/lignes.jpg',
            questions: [
              qcm(1, 'Une ligne qui n\'a pas d\'ouverture est une ligne…', 'fermée', ['ouverte'], 'Je retiens de la page 124.', I('lignes')),
              multi(2, 'Quelles lignes sont fermées ?', ['a', 'c'], ['b', 'd'], 'a et c n\'ont pas d\'ouverture ; b et d sont ouvertes.', I('lignes-fermees')),
              calc(1, 'Combien de fruits y a-t-il à l\'intérieur de la ligne ?', 3, 'Trois mangues sont dans la ligne.', I('fruits-ligne')),
              calc(1, 'Combien de ballons sont à l\'extérieur de la ligne ?', 2, 'Deux ballons sont dehors, un est dedans.', I('ballons-ligne')),
              rel(2, 'Où est chaque enfant ?', [['Le garçon à gauche', 'Sur la frontière'], ['Le garçon au milieu', 'À l\'intérieur'], ['Le garçon à droite', 'À l\'extérieur']], 'Je retiens de la page 142.', I('interieur-exterieur')),
              vf(2, 'Le rond est une ligne fermée.', true, 'Le rond n\'a pas d\'ouverture.'),
              qcm(3, 'Bira a tracé des lignes fermées. Qu\'a tracé Paul ?', 'Des lignes ouvertes', ['Des lignes fermées', 'Des quadrillages'], 'Je retiens de la page 132.')
            ]
          },
          {
            id: 'quadrillage', title: 'Quadrillage, case, nœud, parcours', pages: '150-151, 156-157, 162-163',
            summary: ['Voici un quadrillage, une case, un nœud. Le code du point se lit lettre puis chiffre, par exemple (B, 2).', 'Un parcours a un point de départ et un point d\'arrivée.', 'L\'itinéraire, c\'est le chemin parcouru.'],
            img: 'assets/books/ci-maths/quadrillage.jpg',
            questions: [
              qcm(1, 'Comment s\'appelle le petit carré d\'un quadrillage ?', 'Une case', ['Un nœud', 'Une ligne'], 'Je retiens de la page 150.', I('quadrillage')),
              qcm(1, 'Comment s\'appelle le point où deux lignes se croisent ?', 'Un nœud', ['Une case', 'Un sommet de case'], 'Je retiens de la page 150.', I('quadrillage')),
              calc(2, 'Un quadrillage a 3 lignes de 3 cases. Combien de cases en tout ?', 9, '3 + 3 + 3 = 9 cases.'),
              rel(2, 'Donne le code du fruit préféré de chaque enfant.', [['Julie (pomme)', '(c, 1)'], ['Lala (banane)', '(d, 3)'], ['Bira (mangue)', '(a, 2)']], 'On lit la lettre de la ligne, puis le chiffre de la colonne.', I('fruits-codes')),
              comp(2, 'L\'endroit d\'où l\'on part est le point de ___.', 'départ', ['arrivée', 'frontière'], 'Je retiens de la page 156.'),
              ord(3, 'Remets dans l\'ordre le parcours de l\'agent.', ['Chez Bira (départ)', 'La boulangerie', 'Chez Paul', 'L\'école (arrivée)'], 'Je retiens de la page 162.', I('etapes-parcours')),
              qcm(3, 'Paul quitte la case de santé (B), passe par la pharmacie (A) et va à l\'école (C). Quel est son parcours ?', 'B → A → C', ['B → A → D'], 'B puis A puis C.')
            ]
          }
        ]
      },
      {
        id: 'p3mes', title: 'Le temps qui passe', palier: 3, group: '⭐ Palier 3',
        lessons: [
          {
            id: 'duree', title: 'Long, court, lent, rapide', pages: '128-129, 138-139',
            summary: ['La voiture est rapide ; le vélo est lent pour le voyage.', 'Le travail de classe est long ; la récréation est courte.', 'Préparer le repas est plus long que laver la vaisselle. Le coureur 1 est aussi rapide que le coureur 2.'],
            img: 'assets/books/ci-maths/duree.jpg',
            questions: [
              qcm(1, 'Quel est le moyen de transport le plus rapide ?', 'La voiture', ['Le vélo'], 'Je retiens : la voiture est rapide, le vélo est lent.', I('duree')),
              qcm(1, 'Qu\'est-ce qui est court ?', 'La récréation', ['Le travail de classe'], 'Je retiens : la récréation est courte.', I('duree')),
              qcm(1, 'Quelle personne est lente ?', 'L\'homme âgé', ['L\'athlète'], 'L\'homme âgé marche avec une canne.'),
              qcm(1, 'Quel animal est rapide ?', 'Le lapin (1)', ['Le caméléon (2)'], 'Le caméléon est très lent.', I('lapin-cameleon')),
              qcm(2, 'Quelle activité prend moins de temps ?', 'La course de vitesse', ['Le match de football'], 'Une course de vitesse dure quelques secondes.', I('vitesse-football')),
              comp(2, 'La moto est plus ___ que la charrette.', 'rapide', ['lente', 'longue'], 'La moto roule plus vite.', I('moto-charrette')),
              qcm(2, 'Quel moyen de transport est plus lent ?', 'La pirogue', ['La chaloupe'], 'La chaloupe a un moteur puissant.', I('pirogue-chaloupe')),
              vf(3, 'Préparer le repas est plus long que laver la vaisselle.', true, 'Je retiens de la page 138.', I('repas-coureurs'))
            ]
          },
          {
            id: 'moments', title: 'Matin, midi, soir et jours de la semaine', pages: '146-147, 154-155',
            summary: ['Maman prend son petit déjeuner : c\'est le matin. Il est midi : la famille prend le déjeuner. Bira dort sous une moustiquaire : c\'est le soir.', 'Les 7 jours de la semaine sont : lundi, mardi, mercredi, jeudi, vendredi, samedi, dimanche.'],
            img: 'assets/books/ci-maths/matin-midi-soir.jpg',
            questions: [
              rel(1, 'Relie chaque image à son moment.', [['1 (petit déjeuner)', 'Matin'], ['2 (déjeuner en famille)', 'Midi'], ['3 (dormir)', 'Soir']], 'Je retiens de la page 146.', I('matin-midi-soir')),
              rel(1, 'Relie chaque image au bon moment.', [['Le soleil', 'Le jour'], ['La lune', 'La nuit']], 'On voit la lune la nuit.', I('soleil-lune')),
              ord(1, 'Remets les jours de la semaine dans l\'ordre.', ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'], 'Je retiens de la page 154.', I('jours')),
              calc(1, 'Combien de jours y a-t-il dans une semaine ?', 7, 'Lundi, mardi, mercredi, jeudi, vendredi, samedi, dimanche.'),
              qcm(2, 'Aujourd\'hui c\'est mercredi. Quel jour était hier ?', 'Mardi', ['Jeudi', 'Lundi'], 'Mardi vient juste avant mercredi.'),
              qcm(2, 'Aujourd\'hui c\'est mercredi. Quel jour sera demain ?', 'Jeudi', ['Mardi', 'Vendredi'], 'Jeudi vient juste après mercredi.'),
              qcm(2, 'Quel est le 1er jour de la semaine ?', 'Lundi', ['Dimanche', 'Samedi'], 'La semaine commence le lundi.'),
              qcm(3, 'Le maçon travaille 3 jours de suite à partir du mercredi. Quel est son dernier jour de travail ?', 'Vendredi', ['Jeudi', 'Samedi'], 'Mercredi, jeudi, vendredi.'),
              multi(3, 'Tante Fatim va à l\'usine mardi, mercredi, jeudi et vendredi. Quels sont ses jours de repos ?', ['lundi', 'samedi', 'dimanche'], ['mardi', 'jeudi'], 'Ce sont les jours où elle ne travaille pas.')
            ]
          }
        ]
      },
      {
        id: 'p3prob', title: 'Données et questions d\'un problème', palier: 3, group: '⭐ Palier 3',
        lessons: [
          {
            id: 'donnees', title: 'Données utiles, données inutiles, questions', pages: '130-131, 140-141',
            summary: ['5 crayons + 3 crayons = 8 crayons : 5 et 3 sont des données utiles. 2 stylos ne sont pas utilisés : c\'est une donnée inutile.', '« Combien d\'anacardes a-t-il donnés ? » est la question intermédiaire : on la trouve d\'abord. « Combien lui en reste-t-il ? » est la question finale.'],
            img: 'assets/books/ci-maths/donnees-inutiles.jpg',
            questions: [
              qcm(1, 'Lala a 5 crayons bleus, 3 crayons verts et 2 stylos. Combien de crayons a-t-elle ?', '8 crayons', ['10 crayons', '5 crayons'], '5 + 3 = 8. Les stylos ne sont pas des crayons.', I('donnees-inutiles')),
              qcm(1, 'Dans ce problème, « 2 stylos » est une donnée…', 'inutile', ['utile'], 'Je retiens : 2 stylos n\'est pas utilisé.', I('donnees-inutiles')),
              qcm(2, 'Grand-mère a 4 oranges, 5 mangues et 3 oignons. On cherche le nombre de fruits. Quelle est la donnée inutile ?', '3 oignons', ['4 oranges', '5 mangues'], 'Les oignons ne sont pas des fruits.'),
              calc(2, 'Grand-mère a 4 oranges, 5 mangues et 3 oignons. Combien de fruits a-t-elle ?', 9, '4 + 5 = 9 fruits.'),
              multi(2, 'Le 15 mai, Lala invite 8 garçons et 4 filles. Quelles sont les données utiles pour trouver le nombre d\'invités ?', ['8 garçons', '4 filles'], ['15 mai'], '8 + 4 = 12 invités.'),
              calc(3, 'Bira a 14 anacardes. Il en donne 4 à Lala, 3 à Paul et 2 à Abdou. Combien en a-t-il donnés ?', 9, '4 + 3 + 2 = 9 : c\'est la question intermédiaire.'),
              calc(3, 'Bira avait 14 anacardes et en a donné 9. Combien lui en reste-t-il ?', 5, '14 – 9 = 5 : c\'est la question finale.'),
              qcm(3, 'Papa achète 14 stylos. Il en donne 5 aux garçons et 8 aux filles. Quelle est la question finale ?', 'Combien de stylos lui reste-t-il ?', ['Combien de stylos a-t-il distribués ?'], 'On trouve d\'abord les stylos distribués (13), puis le reste (1).'),
              calc(3, 'Une classe a 8 filles et 8 garçons. 7 élèves n\'ont pas la moyenne. Combien l\'ont obtenue ?', 9, '8 + 8 = 16 élèves ; 16 – 7 = 9.')
            ]
          }
        ]
      }
    ]
  });
})();

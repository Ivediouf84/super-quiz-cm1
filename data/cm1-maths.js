/* =====================================================================
   CM1 — Mathématiques (Éditions Didactikos, 2022)
   Activités numériques · Activités de mesure · Activités géométriques ·
   Résolution de problèmes. Questions tirées des « Je retiens », des
   exercices « J'agis » et des corrigés d'autoévaluation (p. 222-231).
   Les réponses des calculs ont été vérifiées une à une.
   ===================================================================== */
(function () {
  const { qcm, vf, multi, comp, trou, rel, ord, calc } = QB;
  const I = (n) => ({ img: 'assets/books/cm1-maths/' + n + '.jpg' });

  QB.book({
    classId: 'cm1', domainId: 'maths',
    title: 'Mathématiques CM1', source: 'Mathématiques CM1 — Éditions Didactikos (2022)',
    missing: ['Pages 12-13 du manuel (droites perpendiculaires) : scan illisible, aucune question.'],
    chapters: [
      /* ============================ NUMÉRIQUES ============================ */
      {
        id: 'nombres', title: 'Les grands nombres et la divisibilité', palier: 1, group: '🔢 Activités numériques',
        lessons: [
          {
            id: 'numeration', title: 'Lire et écrire les grands nombres', pages: '14-17',
            summary: ['Les nombres se lisent par classes, en commençant par la plus élevée (à gauche). Chaque classe est subdivisée en unités, dizaines, centaines.', '904 107 = 9 centaines de mille, 4 unités de mille, 1 centaine, 7 unités.', 'Pour faciliter la lecture des millions, on sépare les classes par un point en partant de la droite : 3.540.000.'],
            questions: [
              qcm(1, 'Quel est le plus grand nombre qu\'on peut écrire avec les chiffres 5, 2, 0, 4, 6, 8 ?', '865 420', ['856 420', '204 568', '865 042'], 'On range les chiffres du plus grand au plus petit.'),
              ord(2, 'Range ces nombres par ordre croissant.', ['10 416', '14 600', '41 600', '64 100', '164 000', '614 000'], 'Exercice du livre (p. 15).'),
              qcm(2, '13 652 = ?', '10 000 + 3 000 + 600 + 50 + 2', ['1 000 + 3 000 + 600 + 52', '10 000 + 300 + 60 + 52'], 'Décomposition du nombre (p. 15).'),
              comp(1, 'Le nombre 1 087 s\'écrit : mille ___.', 'quatre-vingt-sept', ['soixante-dix-sept', 'cent huit'], 'Corrigé de l\'autoévaluation.'),
              calc(2, 'Tante Dado épargne 400 000 F par mois pendant 10 mois. Combien a-t-elle épargné (en F) ?', 4000000, '400 000 × 10 = 4 000 000 F (p. 16).'),
              calc(2, 'Combien de billets de 5 000 F faut-il pour faire 1 000 000 F ?', 200, '1 000 000 : 5 000 = 200 billets.'),
              calc(3, 'Un avion vole à 700 km/h. Une fusée va 40 fois plus vite. Quelle est la vitesse de la fusée (en km/h) ?', 28000, '700 × 40 = 28 000 km/h.')
            ]
          },
          {
            id: 'divisibilite', title: 'Les caractères de divisibilité', pages: '26-29',
            summary: ['Un nombre est divisible par 2 s\'il est pair, c\'est-à-dire s\'il est terminé par 0, 2, 4, 6 ou 8.', 'Un nombre est divisible par 5 s\'il est terminé par 0 ou 5.', 'Un nombre est divisible par 3 si la somme de ses chiffres est 3 ou un multiple de 3.', 'Un nombre est divisible par 9 si la somme de ses chiffres est 9 ou un multiple de 9.'],
            questions: [
              multi(1, 'Quels nombres sont divisibles par 2 ?', ['70', '64 870', '5 300'], ['35', '9 501'], 'Ils sont terminés par un chiffre pair.'),
              multi(1, 'Quels nombres sont divisibles par 5 ?', ['35', '70', '5 300'], ['64', '9 501'], 'Ils sont terminés par 0 ou 5.'),
              multi(2, 'Quels nombres sont divisibles par 3 ?', ['27', '405', '753', '71 787'], ['38', '109'], '2+7=9 ; 4+0+5=9 ; 7+5+3=15 ; 7+1+7+8+7=30.'),
              multi(2, 'Quels nombres sont divisibles par 9 ?', ['342', '702', '18 909'], ['6 009', '56'], '3+4+2=9 ; 7+0+2=9 ; 1+8+9+0+9=27.'),
              vf(2, '93 est divisible par 9.', false, '9+3 = 12 : divisible par 3 mais pas par 9.'),
              qcm(3, 'Un marchand a 35 daurades. Peut-il faire des tas de 2 sans reste ?', 'Non, mais il peut faire 7 tas de 5', ['Oui, 17 tas de 2', 'Oui, 10 tas de 2'], '35 est impair, mais il finit par 5.'),
              calc(1, 'Calcul mental : 143 + 9 = ? (ajoute 10 puis enlève 1)', 152, '143 + 10 – 1 = 152.')
            ]
          }
        ]
      },
      {
        id: 'operations', title: 'Les quatre opérations', palier: 1, group: '🔢 Activités numériques',
        lessons: [
          {
            id: 'add-sous', title: 'Addition et soustraction', pages: '38-41',
            summary: ['L\'addition permet de trouver la somme de plusieurs grandeurs de même nature. On place les unités sous les unités…', 'La soustraction permet de calculer un reste, une différence, un manque ou le terme inconnu d\'une somme. Le plus grand nombre est placé au début.', 'Soustraire 9 = retrancher 10 puis ajouter 1. Ajouter 11 = ajouter une dizaine et une unité.'],
            questions: [
              calc(1, '2 574 + 856 = ?', 3430, '2 574 + 856 = 3 430.'),
              calc(1, '6 874 – 3 988 = ?', 2886, '6 874 – 3 988 = 2 886.'),
              calc(2, 'Diourbel compte 1 420 082 habitants et Sédhiou 434 877. Combien en tout ?', 1854959, '1 420 082 + 434 877 = 1 854 959.'),
              calc(2, 'Un autobus parcourt 273 km, puis 321 km, puis 360 km. Quelle distance totale ?', 954, '273 + 321 + 360 = 954 km.'),
              calc(2, 'Une étoffe mesure 36 m. On en utilise 12 m puis 9 m. Combien reste-t-il de mètres ?', 15, '36 – (12 + 9) = 15 m.'),
              calc(3, 'Astou a 50 000 F. Elle dépense 28 500 F et 13 750 F. Combien lui reste-t-il ?', 7750, '50 000 – 42 250 = 7 750 F.'),
              calc(1, 'Calcul mental : 583 – 9 = ?', 574, '583 – 10 + 1 = 574.'),
              calc(1, 'Calcul mental : 742 + 11 = ?', 753, '742 + 10 + 1 = 753.')
            ]
          },
          {
            id: 'multiplication', title: 'La multiplication', pages: '50-55, 62-63',
            summary: ['On multiplie le chiffre des unités du multiplicateur par chaque chiffre du multiplicande, puis on décale d\'un rang pour les dizaines, et on fait le total.', 'Quand le multiplicande et le multiplicateur sont terminés par des zéros, on fait la multiplication sans en tenir compte, puis on ajoute autant de zéros à droite du produit.', 'La multiplication est commutative : 25 × 30 = 30 × 25.'],
            questions: [
              calc(1, '75 × 15 = ?', 1125, '75 mangues × 15 = 1 125 mangues (p. 54).'),
              calc(2, '235 × 67 = ?', 15745, '235 × 67 = 15 745.'),
              calc(2, '472 × 231 = ?', 109032, '472 × 231 = 109 032.'),
              calc(1, '50 kg × 20 = ? (en kg)', 1000, '5 × 2 = 10, puis on ajoute 2 zéros : 1 000 kg.'),
              calc(1, '2 500 F × 50 = ? (en F)', 125000, '25 × 5 = 125, puis 3 zéros : 125 000 F.'),
              calc(2, '540 × 70 = ?', 37800, '54 × 7 = 378, puis 2 zéros : 37 800.'),
              calc(2, 'Une plantation compte 870 citronniers. Chacun donne 20 kg de fruits. Quelle masse totale (en kg) ?', 17400, '870 × 20 = 17 400 kg.'),
              calc(3, 'Une boulangerie utilise 300 kg de farine par jour. Elle est fermée 12 jours dans l\'année (365 jours). Combien de kg utilise-t-elle ?', 105900, '365 – 12 = 353 jours ; 353 × 300 = 105 900 kg.'),
              calc(3, '63 ouvriers gagnent 2 250 F par jour et 7 chefs 4 750 F. Combien l\'usine paie-t-elle par jour ?', 175000, '141 750 + 33 250 = 175 000 F.')
            ]
          },
          {
            id: 'division', title: 'La division', pages: '92-93',
            summary: ['La division est l\'opération inverse de la multiplication. Elle permet de trouver, à partir d\'une grandeur totale, la valeur d\'une part ou le nombre de parts.', 'Valeur d\'une part = valeur totale : nombre de parts. Nombre de parts = valeur totale : valeur d\'une part.', 'Quotient = dividende : diviseur. Dividende = (diviseur × quotient) + reste.'],
            questions: [
              rel(1, 'Relie chaque terme de la division.', [['Le nombre qu\'on partage', 'Le dividende'], ['Le nombre par lequel on divise', 'Le diviseur'], ['Le résultat', 'Le quotient']], 'Je retiens de la page 92.'),
              calc(1, 'Un boutiquier achète 5 sacs d\'oignons à 32 500 F. Quel est le prix d\'un sac ?', 6500, '32 500 : 5 = 6 500 F.'),
              calc(1, '540 œufs sont rangés dans des tablettes de 30. Combien de tablettes ?', 18, '540 : 30 = 18 tablettes.'),
              qcm(2, 'Un chauffeur achète 50 l de gasoil à 39 600 F. Quelle opération donne le prix du litre ?', '39 600 F : 50', ['39 600 F × 50', '39 600 F – 50', '39 600 F + 50'], 'Exercice du livre (p. 93).'),
              calc(2, 'Mère Coumba a acheté 7 m de tissu pour 9 100 F. Prix d\'un mètre ?', 1300, '9 100 : 7 = 1 300 F.'),
              calc(2, 'Une couturière a 675 perles. Il faut 25 perles par robe. Combien de robes ?', 27, '675 : 25 = 27 robes.'),
              calc(3, '100 000 comprimés sont mis en sachets de 100, partagés entre 5 districts. Combien de sachets par district ?', 200, '100 000 : 100 = 1 000 sachets ; 1 000 : 5 = 200.'),
              calc(2, '1 175 : 25 = ?', 47, 'Exemple du « Je retiens » (p. 92).')
            ]
          }
        ]
      },
      {
        id: 'decimaux', title: 'Les nombres décimaux', palier: 2, group: '🔢 Activités numériques',
        lessons: [
          {
            id: 'dec-decouvrir', title: 'Découvrir les nombres décimaux', pages: '102-103',
            summary: ['8 m et 75 cm = 8,75 m. 1 kg et 500 g = 1,500 kg ou 1,5 kg.', 'Un nombre décimal contient une partie entière et une partie décimale séparées par une virgule. Dans 8,75 : 8 est la partie entière, 75 la partie décimale.'],
            questions: [
              qcm(1, 'Dans 8,75, quelle est la partie entière ?', '8', ['75', '875'], 'Je retiens de la page 102.'),
              qcm(1, 'Comment écrire 8 m et 75 cm en mètres ?', '8,75 m', ['87,5 m', '0,875 m'], 'Je retiens de la page 102.'),
              trou(2, '2 m 2 dm = … m', ['2,2'], 'Exercice du livre (p. 103).'),
              ord(2, 'Range par ordre décroissant.', ['8,6 m', '8,503 m', '8,16 m', '8,061 m', '8,048 m', '8,006 m'], 'Exercice du livre (p. 103).'),
              ord(2, 'Range par ordre croissant.', ['0,43', '1,894', '5,6', '7,56', '15,07', '32,8'], 'Exercice du livre (p. 103).'),
              rel(3, 'Arrondis au dixième le plus proche.', [['4,58', '4,6'], ['0,327', '0,3'], ['9,17', '9,2'], ['236,42', '236,4']], 'Exercice du livre (p. 103).')
            ]
          },
          {
            id: 'dec-operations', title: 'Opérations sur les nombres décimaux', pages: '112-113, 124-125, 136-137',
            summary: ['Pour additionner ou soustraire, on place les parties entières sous les parties entières, les décimales sous les décimales, les virgules sous les virgules.', 'Pour multiplier, on compte le nombre total de chiffres décimaux des deux facteurs et on place la virgule au produit en comptant autant de chiffres à partir de la droite.', 'Pour diviser par un nombre décimal, on rend le diviseur entier en multipliant les deux termes par 10, 100 ou 1 000.', 'Multiplier par 10, 100, 1 000 : ajouter 1, 2, 3 zéros (nombre entier). Diviser par 10, 100, 1 000 : placer la virgule à 1, 2, 3 chiffres de la droite.'],
            questions: [
              calc(1, '16,25 l + 8,75 l = ? (en l)', 25, 'Exemple du livre : capacité du fût = 25 l.'),
              calc(1, '30 m – 4,5 m = ?', 25.5, 'Longueur de tissu restante (p. 112).'),
              calc(2, '47,36 + 36,8 = ?', 84.16, 'On aligne les virgules.'),
              calc(2, 'D\'un fût de 200 l, on vend 18,25 l puis 49,5 l. Combien reste-t-il de litres ?', 132.25, '200 – 67,75 = 132,25 l.'),
              calc(2, 'Bira pèse 47,100 kg. Paul pèse 2,25 kg de plus. Poids de Paul ?', 49.35, '47,1 + 2,25 = 49,35 kg.'),
              calc(2, '1 800 F × 2,5 = ?', 4500, 'Exemple du livre : prix du tissu = 4 500 F.'),
              calc(2, '0,75 × 3,5 = ?', 2.625, '3 chiffres décimaux au total : 2,625.'),
              calc(3, 'Une barre de fer de 3,80 m ; un mètre pèse 2,03 kg. Masse de la barre (kg) ?', 7.714, '3,80 × 2,03 = 7,714 kg.'),
              calc(2, '25,4 kg : 4 = ? (en kg)', 6.35, 'Masse d\'une barre (p. 136).'),
              calc(3, '2,75 kg : 0,250 kg = ? (nombre de sachets)', 11, 'On rend le diviseur entier : 2 750 : 250 = 11.'),
              calc(3, 'Des oiseaux volent à 180,5 km/h et parcourent 3 610 km. Combien d\'heures volent-ils ?', 20, '3 610 : 180,5 = 20 h.'),
              calc(1, '607 : 100 = ?', 6.07, 'On place la virgule à 2 chiffres de la droite.')
            ]
          }
        ]
      },
      {
        id: 'fractions', title: 'Les fractions', palier: 3, group: '🔢 Activités numériques',
        lessons: [
          {
            id: 'frac-decouvrir', title: 'Découvrir et simplifier les fractions', pages: '168-169, 174-175',
            summary: ['Une fraction représente une ou plusieurs parties égales de l\'unité. Le numérateur indique le nombre de parties prises ; le dénominateur en combien de parties l\'unité a été partagée.', 'Une fraction est décimale quand le dénominateur est 10, 100 ou 1 000. 1/2 un demi ; 1/3 un tiers ; 1/4 un quart.', 'Simplifier une fraction : diviser le numérateur et le dénominateur par un même nombre. Une fraction est irréductible quand on ne peut plus la simplifier.'],
            questions: [
              qcm(1, 'Dans 3/4, que représente 4 ?', 'Le dénominateur : l\'unité est partagée en 4', ['Le numérateur', 'Le nombre de parts prises'], 'Je retiens de la page 168.'),
              rel(1, 'Relie chaque durée à la fraction de l\'heure.', [['30 mn', '1/2 h'], ['15 mn', '1/4 h'], ['45 mn', '3/4 h']], 'Exercice du livre (p. 169).'),
              rel(2, 'Relie chaque longueur à la fraction du mètre.', [['25 cm', '1/4 m'], ['50 cm', '1/2 m'], ['75 cm', '3/4 m']], 'Exercice du livre (p. 169).'),
              rel(2, 'Simplifie chaque fraction.', [['9/12', '3/4'], ['10/25', '2/5'], ['12/48', '1/4'], ['36/60', '3/5']], 'Exercice du livre (p. 175).'),
              vf(2, 'Paul a reçu 4/6 du melon et Julie 2/3 : ils ont reçu des parts égales.', true, '4/6 = 2/3 en divisant par 2.'),
              multi(3, 'Quelles fractions sont irréductibles ?', ['5/4', '3/7', '7/8', '3/5'], ['6/12', '2/10', '15/100', '7/21'], 'Exercice du livre (p. 175).'),
              trou(3, '5/7 = …/35', ['25'], '5/7 = 25/35 (on multiplie par 5).')
            ]
          },
          {
            id: 'frac-comparer', title: 'Comparer, additionner et soustraire des fractions', pages: '180-181, 188-189, 194-195',
            summary: ['Même dénominateur : la plus grande fraction a le plus grand numérateur (6/4 > 4/4 > 1/4).', 'Même numérateur : la plus grande fraction a le plus petit dénominateur (2/5 > 2/7).', 'Sinon, on réduit au même dénominateur : on multiplie les deux termes de chaque fraction par le dénominateur de l\'autre (2/3 = 8/12 ; 3/4 = 9/12).', 'Pour additionner ou soustraire des fractions de même dénominateur, on additionne ou soustrait les numérateurs et on garde le dénominateur.'],
            questions: [
              comp(1, '2/5 ___ 2/7', '>', ['<', '='], 'Même numérateur : le plus petit dénominateur l\'emporte.'),
              comp(1, '3/7 ___ 4/7', '<', ['>', '='], 'Même dénominateur : on compare les numérateurs.'),
              comp(2, '2/3 ___ 3/4', '<', ['>', '='], '8/12 < 9/12 : Yvonne a la plus grande part.'),
              comp(2, '7/9 ___ 42/54', '=', ['<', '>'], '42/54 se simplifie par 6 : 7/9.'),
              qcm(2, 'Fatou a parcouru 2/3 de 1 200 m, Amy 2/5 et Anna 2/4. Qui est en tête ?', 'Fatou', ['Amy', 'Anna'], 'Fatou : 800 m ; Anna : 600 m ; Amy : 480 m.'),
              trou(2, '1/4 + 2/4 = … (écris la fraction)', ['3/4'], 'Je retiens de la page 194.'),
              trou(2, '10/15 – 7/15 = …', ['3/15', '1/5'], 'On soustrait les numérateurs.'),
              trou(3, '2/3 + 1/5 = …', ['13/15'], '10/15 + 3/15 = 13/15.'),
              trou(3, 'Une voiture consomme 2/3 du gasoil. Quelle fraction reste-t-il ?', ['1/3'], '3/3 – 2/3 = 1/3.'),
              qcm(3, 'Bamba a examiné 2/3 de ses 90 patients et Maguette 2/4. Qui en a examiné le plus ?', 'Bamba (60 patients)', ['Maguette (45 patients)', 'Ils en ont examiné autant'], '2/3 de 90 = 60 ; 2/4 de 90 = 45.')
            ]
          },
          {
            id: 'frac-grandeur', title: 'Fraction d\'une grandeur', pages: '200-203',
            summary: ['Pour prendre la fraction d\'une grandeur, on divise la grandeur par le dénominateur puis on multiplie par le numérateur : 2/3 de 15 000 l = 15 000 : 3 × 2 = 10 000 l.', 'Pour trouver une grandeur dont on connaît une fraction, on multiplie cette valeur par l\'inverse de la fraction : 90 000 = 2/3 du total → 90 000 × 3 : 2 = 135 000.'],
            questions: [
              calc(1, 'Quels sont les 2/5 de 15 000 F ?', 6000, '15 000 : 5 × 2 = 6 000 F.'),
              calc(1, 'Quel est le quart de 156 ?', 39, '156 : 4 = 39.'),
              calc(2, 'Quels sont les 3/5 de 225 ?', 135, '225 : 5 × 3 = 135.'),
              calc(2, 'Un aviculteur achète 513 poussins ; 1/9 meurent. Combien sont perdus ?', 57, '513 : 9 = 57.'),
              calc(2, 'Un ouvrier gagne 96 500 F. Il dépense les 3/5. Combien lui reste-t-il ?', 38600, 'Il dépense 57 900 F ; reste 38 600 F.'),
              calc(3, 'Mon père utilise 2/7 de son salaire de 171 500 F pour les factures. Montant des factures ?', 49000, 'Corrigé : 171 500 : 7 × 2 = 49 000 F.'),
              calc(2, 'Les 2/3 d\'une récolte font 12 t. Quelle est la masse de la récolte (t) ?', 18, '12 × 3 : 2 = 18 t.'),
              calc(2, 'Les 3/4 d\'une dette s\'élèvent à 42 000 F. Montant de la dette ?', 56000, '42 000 × 4 : 3 = 56 000 F.'),
              calc(3, 'Mon oncle donne 58 500 F, soit les 2/5 de son salaire. Quel est son salaire ?', 146250, 'Corrigé : 58 500 × 5 : 2 = 146 250 F.'),
              calc(3, 'Après 14 km, un cycliste a fait 1/5 du trajet Thiès–Dakar. Longueur du trajet (km) ?', 70, '14 × 5 = 70 km.')
            ]
          }
        ]
      },
      /* ============================ MESURES ============================ */
      {
        id: 'mesures', title: 'Longueurs, capacités, masses', palier: 1, group: '📏 Activités de mesure',
        lessons: [
          {
            id: 'longueurs', title: 'Les mesures de longueur', pages: '18-21',
            summary: ['1 dam = 10 m ; 1 hm = 10 dam = 100 m ; 1 km = 10 hm = 100 dam = 1 000 m.', '1 m = 10 dm = 100 cm = 1 000 mm ; 1 dm = 10 cm = 100 mm ; 1 cm = 10 mm.', 'La chaîne d\'arpenteur mesure 10 m, c\'est-à-dire 1 dam.'],
            questions: [
              rel(1, 'Convertis en mètres.', [['1 dam', '10 m'], ['1 hm', '100 m'], ['1 km', '1 000 m']], 'Je retiens de la page 18.'),
              calc(1, '4 hm = ? m', 400, '4 × 100 = 400 m.'),
              calc(1, '34 dm = ? cm', 340, '1 dm = 10 cm.'),
              calc(2, '2 600 cm = ? m', 26, '100 cm = 1 m.'),
              calc(2, '9 000 mm = ? cm', 900, '10 mm = 1 cm.'),
              calc(2, '52 albums de 2 cm d\'épaisseur sont empilés. Hauteur de la pile (en dm) ?', 10.4, '52 × 2 = 104 cm = 10,4 dm.'),
              calc(3, 'Combien de mm y a-t-il dans 1 km ?', 1000000, 'Solution de l\'énigme : 1 km = 1 000 000 mm.'),
              calc(3, 'Baba doit parcourir 12 km : 45 hm, puis 500 dam, puis le reste. Distance de la 3e étape (km) ?', 2.5, 'Corrigé : 4,5 + 5 = 9,5 km ; 12 – 9,5 = 2,5 km.')
            ]
          },
          {
            id: 'capacites', title: 'Les mesures de capacité', pages: '56-59',
            summary: ['Le litre (l) est l\'unité principale. Multiples : le décalitre (1 dal = 10 l) et l\'hectolitre (1 hl = 10 dal = 100 l).', 'Sous-multiples : 1 l = 10 dl = 100 cl = 1 000 ml.'],
            questions: [
              rel(1, 'Convertis en litres.', [['1 dal', '10 l'], ['1 hl', '100 l'], ['10 dl', '1 l']], 'Je retiens des pages 56 et 58.'),
              calc(1, '7 dal 4 l = ? l', 74, '70 + 4 = 74 l.'),
              calc(2, '490 dl = ? l', 49, '10 dl = 1 l.'),
              calc(2, 'Un fût de 210 l ; on retire 1 hl puis 5 dal. Combien reste-t-il de litres ?', 60, '210 – 100 – 50 = 60 l.'),
              calc(3, '2 hl + 3 hl 2 dal = ? l', 520, 'Corrigé : 200 + 320 = 520 l.'),
              calc(3, '3 hl 2 dal – 2 hl 4 dal = ? l', 80, '320 – 240 = 80 l.')
            ]
          },
          {
            id: 'masses', title: 'Les mesures de masse', pages: '68-73, 76-77',
            summary: ['La tonne (t) et le quintal (q) sont des multiples du kilogramme : 1 t = 10 q = 1 000 kg ; 1 q = 100 kg.', '1 kg = 1 000 g ; 1 hg = 100 g ; 1 dag = 10 g. Sous-multiples : hg, dag, g, dg, cg, mg.', 'Masse brute = masse nette + tare. Masse nette = masse brute – tare. Tare = masse brute – masse nette.', 'Sur un camion : PV (poids vide), CU (charge utile), PTC (poids total en charge).'],
            img: 'assets/books/cm1-maths/camion-charge.jpg',
            questions: [
              rel(1, 'Convertis.', [['1 t', '1 000 kg'], ['1 q', '100 kg'], ['1 kg', '1 000 g']], 'Je retiens des pages 68 et 70.'),
              calc(1, '400 sacs de 50 kg : combien de tonnes ?', 20, '20 000 kg = 20 t.'),
              calc(2, 'Un paysan récolte 8 t d\'arachides. Après le tri, il reste 75 q. Masse des déchets (en q) ?', 5, '8 t = 80 q ; 80 – 75 = 5 q.'),
              comp(2, 'Masse brute = masse nette + ___.', 'tare', ['charge', 'volume'], 'Je retiens de la page 76.'),
              calc(2, 'Un pot vide pèse 75 g. Le lait pèse 925 g. Masse brute (g) ?', 1000, '75 + 925 = 1 000 g.'),
              calc(2, 'Un mouton pèse 38,85 kg. La viande pèse 29,1 kg. Masse des déchets (kg) ?', 9.75, '38,85 – 29,1 = 9,75 kg.'),
              qcm(2, 'Un camion a une CU de 2 800 kg. Peut-il transporter 30 sacs de 100 kg en un voyage ?', 'Non, 3 000 kg dépassent la charge utile', ['Oui', 'Oui, avec 200 kg de marge'], 'Je retiens de la page 76.', I('camion-charge')),
              calc(3, 'Le boucher pose 2 masses de 1 kg et 4 masses de 500 g. Masse de viande (kg) ?', 4, 'Corrigé : 2 + 2 = 4 kg.'),
              calc(3, 'Une commerçante achète 15 t de riz et les met en sacs de 50 kg. Combien de sacs ?', 300, '15 000 : 50 = 300 sacs.')
            ]
          },
          {
            id: 'durees', title: 'Les mesures de durée', pages: '130-131, 138-141',
            summary: ['Un an = 12 mois = 52 semaines = 365 jours. 7 mois de 31 jours, 4 mois de 30 jours (avril, juin, septembre, novembre), février a 28 ou 29 jours.', '1 j = 24 h ; 1 h = 60 mn = 3 600 s ; 1 mn = 60 s. Une année bissextile (divisible par 4) a 366 jours.', 'Pour additionner des durées, on additionne séparément et on convertit (si les minutes dépassent 60). Pour soustraire, on emprunte 1 h = 60 mn si nécessaire.'],
            questions: [
              calc(1, 'Combien de jours compte une année non bissextile ?', 365, 'Je retiens de la page 130.'),
              multi(1, 'Quels mois ont 30 jours ?', ['avril', 'juin', 'septembre', 'novembre'], ['janvier', 'août'], 'Je retiens de la page 130.'),
              vf(2, '2016 est une année bissextile.', true, '2016 est divisible par 4 : 366 jours.'),
              calc(1, '4 h = ? s', 14400, '4 × 3 600 = 14 400 s.'),
              trou(2, '7 h 37 mn + 3 h 52 mn = ? (ex : 11 h 29 mn)', ['11 h 29 mn', '11h29', '11 h 29', '11h29mn', '11 h 29 min'], '10 h 89 mn = 11 h 29 mn.'),
              trou(2, 'Un match commence à 15 h 45 et finit à 17 h 35. Durée ? (ex : 1 h 50 mn)', ['1 h 50 mn', '1h50', '1 h 50', '1h50mn', '1 h 50 min'], '16 h 95 mn – 15 h 45 mn = 1 h 50 mn.'),
              calc(2, 'Bira part à 9 h 52 et arrive à 10 h 05. Combien de minutes a-t-il mis ?', 13, '8 mn jusqu\'à 10 h, puis 5 mn.'),
              trou(3, 'Un match débute à 17 h 30 et dure 1 h 50. Heure de fin ?', ['19 h 20', '19h20', '19 h 20 mn', '19h20mn'], '17 h 30 + 1 h 50 = 18 h 80 = 19 h 20.')
            ]
          },
          {
            id: 'vitesse', title: 'Vitesse, distance, durée', pages: '142-143, 154-157',
            summary: ['Vitesse moyenne (km/h) = distance (km) : temps (h), ou distance × 60 : temps (mn).', 'Distance (km) = vitesse (km/h) × temps (h).', 'Durée (h) = distance (km) : vitesse (km/h). Si la division n\'est pas exacte, on multiplie le reste par 60 pour trouver les minutes.'],
            questions: [
              calc(1, 'Un bus parcourt 160 km en 2 h. Vitesse moyenne (km/h) ?', 80, '160 : 2 = 80 km/h.'),
              calc(2, 'Une 4×4 parcourt 300 km en 2 h 30 mn. Vitesse (km/h) ?', 120, '300 × 60 : 150 = 120 km/h.'),
              calc(2, 'Une automobile parcourt 252 km en 5 h 15 mn. Vitesse (km/h) ?', 48, '252 × 60 : 315 = 48 km/h.'),
              calc(1, 'Une voiture roule à 70 km/h pendant 2 h. Distance (km) ?', 140, '70 × 2 = 140 km.'),
              calc(2, 'Un train roule 5 h à 70 km/h. Distance (km) ?', 350, '70 × 5 = 350 km.'),
              trou(2, 'Un avion vole à 750 km/h sur 1 875 km. Durée du vol ? (ex : 2 h 30 mn)', ['2 h 30 mn', '2h30', '2 h 30', '2h30mn', '2 h 30 min'], '1 875 : 750 = 2,5 h = 2 h 30 mn.'),
              calc(3, 'Paul habite à 800 m de l\'école et met 15 mn. Vitesse (km/h) ?', 3.2, '0,8 × 60 : 15 = 3,2 km/h.'),
              calc(3, 'Un cycliste fait 24 km en 1 h 36 mn. Vitesse (km/h) ?', 15, '24 × 60 : 96 = 15 km/h.')
            ]
          }
        ]
      },
      {
        id: 'perimetres', title: 'Périmètres, aires et volumes', palier: 2, group: '📏 Activités de mesure',
        lessons: [
          {
            id: 'perimetre', title: 'Périmètre du carré, du rectangle et du cercle', pages: '30-33, 42-43',
            summary: ['Périmètre du carré = côté × 4 ; côté = périmètre : 4.', 'Périmètre du rectangle = (longueur + largeur) × 2 ; demi-périmètre = L + l.', 'Périmètre du cercle = diamètre × 3,14 ; diamètre = rayon × 2.'],
            questions: [
              calc(1, 'Périmètre d\'un enclos carré de 40 m de côté (m) ?', 160, '40 × 4 = 160 m.'),
              calc(1, 'Périmètre d\'un verger de 25 m sur 15 m (m) ?', 80, '(25 + 15) × 2 = 80 m.'),
              calc(2, 'Un carré a 72 mm de périmètre. Son côté (mm) ?', 18, '72 : 4 = 18 mm.'),
              calc(2, 'Un rectangle a 64 cm de périmètre et 20 cm de long. Sa largeur (cm) ?', 12, 'DP = 32 ; 32 – 20 = 12 cm.'),
              calc(2, 'Un champ de 67 m sur 46 m ; on laisse une porte de 5 m. Longueur de clôture (m) ?', 221, '(67 + 46) × 2 = 226 ; 226 – 5 = 221 m.'),
              calc(2, 'Périmètre d\'une margelle de 2,20 m de diamètre (m) ?', 6.908, '2,20 × 3,14 = 6,908 m.'),
              calc(3, 'Un cercle a 25,12 cm de périmètre. Son diamètre (cm) ?', 8, '25,12 : 3,14 = 8 cm.'),
              calc(3, 'Un champ carré de 90 m de côté est entouré de 3 rangées de fil barbelé, porte de 3 m. Longueur de fil (m) ?', 1071, '(360 – 3) × 3 = 1 071 m.')
            ]
          },
          {
            id: 'aires', title: 'Unités et calcul d\'aires', pages: '94-97, 104-107, 114-117',
            summary: ['Le m² est l\'unité principale. Les unités d\'aire vont de 100 en 100 : 1 m² = 100 dm² = 10 000 cm². 1 dam² = 100 m² ; 1 hm² = 100 dam² ; 1 km² = 100 hm².', 'Aire du carré = côté × côté. Aire du rectangle = L × l.', 'Aire du triangle = (base × hauteur) : 2. Aire du parallélogramme = base × hauteur.', 'Aire du disque = rayon × rayon × 3,14.'],
            questions: [
              rel(1, 'Relie chaque figure à la formule de son aire.', [['Carré', 'côté × côté'], ['Rectangle', 'longueur × largeur'], ['Parallélogramme', 'base × hauteur'], ['Disque', 'rayon × rayon × 3,14']], 'Corrigé de l\'autoévaluation (p. 228).'),
              calc(1, '5 m² = ? dm²', 500, '1 m² = 100 dm².'),
              calc(1, 'Aire d\'un carré de 7 cm de côté (cm²) ?', 49, '7 × 7 = 49 cm².'),
              calc(1, 'Aire d\'un rectangle de 15 m sur 8 m (m²) ?', 120, '15 × 8 = 120 m².'),
              calc(2, 'Un champ rectangulaire a 48 750 m² d\'aire et 250 m de long. Largeur (m) ?', 195, '48 750 : 250 = 195 m.'),
              calc(2, 'Aire d\'un triangle de 5 cm de base et 3 cm de hauteur (cm²) ?', 7.5, '(5 × 3) : 2 = 7,5 cm².'),
              calc(2, 'Un verger triangulaire a 23 m de base et 18 m de hauteur. Aire (m²) ?', 207, '(23 × 18) : 2 = 207 m².'),
              calc(2, 'Aire d\'un parallélogramme de 40 m de base et 23 m de hauteur (m²) ?', 920, '40 × 23 = 920 m².'),
              calc(2, 'Aire d\'une table ronde de 12 m de diamètre (m²) ?', 113.04, 'r = 6 ; 6 × 6 × 3,14 = 113,04 m².'),
              calc(3, 'Une salle de 7 m sur 5 m est carrelée avec des carreaux de 30 cm de côté. Combien de carreaux faut-il (par excès) ?', 389, '35 m² = 350 000 cm² ; 350 000 : 900 ≈ 388,9 → 389 carreaux.'),
              calc(3, 'Un terrain carré a coûté 787 500 F à 3 500 F le m². Son côté (m) ?', 15, '787 500 : 3 500 = 225 m² ; côté 15 m.'),
              calc(3, 'Un horticulteur échange un terrain de 180 m × 125 m contre un parallélogramme de 120 m de base et 200 m de hauteur. Combien de m² gagne-t-il ?', 1500, '24 000 – 22 500 = 1 500 m².')
            ]
          },
          {
            id: 'volumes', title: 'Volumes, capacités et masse volumique', pages: '118-119, 126-129',
            summary: ['Le m³ est le volume d\'un cube d\'1 m d\'arête. Les unités vont de 1 000 en 1 000 : 1 m³ = 1 000 dm³ ; 1 dm³ = 1 000 cm³. Le m³ n\'a pas de multiples.', 'Pour l\'eau : 1 dm³ = 1 l = 1 kg ; 1 m³ = 1 000 l = 1 t ; 1 cm³ = 1 ml = 1 g.', 'Masse volumique = masse : volume (en kg/dm³, g/cm³ ou t/m³). Masse = masse volumique × volume.'],
            questions: [
              rel(1, 'Convertis (pour l\'eau).', [['1 dm³ d\'eau', '1 litre'], ['1 m³ d\'eau', '1 tonne'], ['1 cm³ d\'eau', '1 gramme']], 'Je retiens de la page 126.'),
              calc(1, '2 m³ = ? dm³', 2000, '1 m³ = 1 000 dm³.'),
              calc(2, '0,50 m³ d\'eau = ? litres', 500, '1 m³ = 1 000 l.'),
              calc(2, 'Une classe a un volume de 432 m³. Chaque élève doit avoir 8 m³ d\'air. Combien d\'élèves ?', 54, '432 : 8 = 54 élèves.'),
              calc(2, 'Une charrette transporte 0,75 m³ par voyage. Combien de voyages pour 15 m³ ?', 20, '15 : 0,75 = 20 voyages.'),
              calc(3, 'Un bocal vide pèse 650 g ; à moitié rempli d\'eau, il pèse 3 400 g. Capacité du bocal (en l) ?', 5.5, 'Eau : 2 750 g = 2,75 l ; capacité 5,5 l.'),
              rel(2, 'Masse volumique (exemples du livre).', [['Aluminium', '2,5 g/cm³'], ['Fer', '7,8 g/cm³'], ['Plomb', '11,3 g/cm³'], ['Eau', '1 kg/dm³']], 'Je retiens de la page 128.'),
              calc(3, '5 m³ de zinc pèsent 32,5 t. Masse volumique (t/m³) ?', 6.5, '32,5 : 5 = 6,5 t/m³.')
            ]
          }
        ]
      },
      {
        id: 'monnaie', title: 'La monnaie : budgets, prix, partages', palier: 3, group: '📏 Activités de mesure',
        lessons: [
          {
            id: 'budget-prix', title: 'Budget, prix de revient, bénéfice et perte', pages: '170-171, 176-177, 182-183',
            summary: ['Gain – dépenses = économie (ou dette si les dépenses dépassent le gain).', 'Prix de revient = prix d\'achat + frais (PR = PA + F). Prix d\'achat = PR – F. Frais = PR – PA.', 'Prix de vente = prix d\'achat + bénéfice ; ou = prix d\'achat – perte. Bénéfice = PV – PA. Perte = PA – PV.'],
            questions: [
              calc(1, 'Un mouton coûte 52 000 F. On paie 300 F de corde et 2 000 F de taxi. Prix de revient ?', 54300, '52 000 + 2 300 = 54 300 F.'),
              comp(1, 'Prix de revient = prix d\'achat + ___.', 'frais', ['bénéfice', 'perte'], 'Je retiens de la page 176.'),
              calc(2, 'Le prix de revient d\'une chèvre est 37 500 F. Le transport a coûté 1 500 F. Prix d\'achat ?', 36000, '37 500 – 1 500 = 36 000 F.'),
              calc(2, 'Tante Diatou achète 10 paires de chaussures à 25 000 F et les revend 3 000 F la paire. Bénéfice ?', 5000, '30 000 – 25 000 = 5 000 F.'),
              calc(2, 'Elle achète des poissons à 37 500 F et les revend 33 500 F. Perte ?', 4000, '37 500 – 33 500 = 4 000 F.'),
              calc(2, 'Un ouvrier gagne 85 000 F et économise 7 500 F. Ses dépenses ?', 77500, '85 000 – 7 500 = 77 500 F.'),
              calc(3, 'Tante Soda travaille 26 jours à 3 500 F. Elle dépense 25 000 + 38 500 + 10 000 F. Économie ?', 17500, '91 000 – 73 500 = 17 500 F.'),
              calc(3, 'Un boucher achète un bœuf 375 000 F, vend 164 kg de viande à 2 500 F et la tête 3 500 F. Bénéfice ?', 38500, '410 000 + 3 500 – 375 000 = 38 500 F.'),
              calc(3, 'Un poissonnier vend à 450 F le kg en perdant 150 F par kg. Prix d\'achat du kg ?', 600, 'PA = PV + perte = 600 F.')
            ]
          },
          {
            id: 'partages', title: 'Partages en parts égales et inégales', pages: '190-191, 196-197, 204-205',
            summary: ['Valeur d\'une part = valeur totale : nombre de parts.', 'Dans un partage en parts inégales, il faut toujours faire un graphique et chercher la plus petite part.', 'Tant de plus : on enlève les différences du total, puis on divise. Part multiple (le double, le triple…) : on compte le nombre total de petites parts.'],
            questions: [
              calc(1, 'Un héritage de 24 400 000 F est partagé entre 4 fils. Part de chacun ?', 6100000, '24 400 000 : 4 = 6 100 000 F.'),
              calc(1, 'Quatre femmes se partagent 28 000 F. Part de chacune ?', 7000, '28 000 : 4 = 7 000 F.'),
              calc(2, 'Aminata et Fatou se partagent 1 200 F. Fatou a 200 F de plus. Part d\'Aminata ?', 500, '(1 200 – 200) : 2 = 500 F.'),
              calc(2, 'Deux frères ont ensemble 19 ans ; l\'aîné a 5 ans de plus. Âge du cadet ?', 7, '(19 – 5) : 2 = 7 ans.'),
              calc(3, '57 000 cahiers pour 3 écoles : la 2e a 7 500 de plus que la 3e, la 1re 12 000 de plus que la 2e. Part de la 3e école ?', 10000, '57 000 – 27 000 = 30 000 ; 30 000 : 3 = 10 000.'),
              calc(2, 'Un père laisse 7 290 000 F ; le fils reçoit le double de la fille. Part de la fille ?', 2430000, '7 290 000 : 3 = 2 430 000 F.'),
              calc(2, 'Niouma et Abou se partagent 45 biscuits ; Niouma en reçoit deux fois plus. Part d\'Abou ?', 15, '45 : 3 = 15.'),
              calc(3, 'Partage 21 000 F : Paul a le double de Lala et la moitié de Bira. Part de Lala ?', 3000, 'Lala 1 part, Paul 2, Bira 4 : 21 000 : 7 = 3 000 F.')
            ]
          }
        ]
      },
      /* ============================ GÉOMÉTRIE ============================ */
      {
        id: 'geometrie', title: 'Figures, solides et transformations', palier: 2, group: '📐 Activités géométriques',
        lessons: [
          {
            id: 'droites-angles', title: 'Droites parallèles et angles', pages: '24-25, 36-37, 78-79',
            summary: ['Deux droites perpendiculaires à une même droite sont parallèles. Deux droites parallèles ne se rencontrent jamais.', 'Deux demi-droites partant d\'un même point forment un angle. Angle droit, angle aigu (plus petit), angle obtus (plus grand).', 'On utilise le rapporteur pour mesurer les angles ; l\'unité est le degré (°). L\'équerre sert à vérifier l\'angle droit.'],
            questions: [
              vf(1, 'Deux droites parallèles ne se rencontrent jamais.', true, 'Je retiens de la page 24.'),
              qcm(1, 'Quel instrument sert à mesurer un angle ?', 'Le rapporteur', ['L\'équerre', 'Le compas'], 'Je retiens de la page 78.'),
              qcm(1, 'Quelle est l\'unité de mesure des angles ?', 'Le degré (°)', ['Le mètre', 'Le litre'], 'Je retiens de la page 78.'),
              rel(2, 'Relie chaque angle à son nom.', [['35°', 'Angle aigu'], ['90°', 'Angle droit'], ['105°', 'Angle obtus']], 'Corrigé de l\'autoévaluation (p. 222).'),
              qcm(2, 'À quoi sert l\'équerre ?', 'À vérifier l\'angle droit', ['À tracer un cercle', 'À mesurer une masse'], 'Je retiens de la page 78.')
            ]
          },
          {
            id: 'figures', title: 'Carré, rectangle, triangle, parallélogramme, cercle', pages: '90-91, 100-101, 110-111, 122-123, 134-135',
            summary: ['Le carré a 4 côtés égaux et 4 angles droits ; ses diagonales sont égales et se coupent en leur milieu.', 'Le rectangle a ses côtés opposés parallèles et égaux deux à deux, et 4 angles droits.', 'Le triangle a 3 côtés, 3 sommets, 3 angles dont la somme fait 180°. Types : rectangle, isocèle, équilatéral, quelconque.', 'Le parallélogramme a ses côtés opposés parallèles et égaux deux à deux ; ses angles ne sont pas droits.', 'Le cercle est une ligne courbe dont tous les points sont à égale distance du centre. Le disque est la surface limitée par le cercle.'],
            img: 'assets/books/cm1-maths/types-triangles.jpg',
            questions: [
              qcm(1, 'Combien d\'angles droits a un carré ?', '4', ['2', '0', '3'], 'Je retiens de la page 90.', I('carre-construction')),
              calc(1, 'Quelle est la somme des 3 angles d\'un triangle (en degrés) ?', 180, 'Je retiens de la page 110.'),
              rel(2, 'Relie chaque triangle à sa caractéristique.', [['Triangle rectangle', '1 angle droit'], ['Triangle isocèle', '2 côtés égaux'], ['Triangle équilatéral', '3 côtés égaux'], ['Triangle quelconque', 'côtés inégaux']], 'Je retiens de la page 110.', I('types-triangles')),
              qcm(2, 'Un triangle ABC a AB = BC = 4 cm. Quelle est sa nature ?', 'Isocèle', ['Équilatéral', 'Rectangle'], 'Exercice du livre (p. 111).'),
              vf(2, 'Le parallélogramme a 4 angles droits.', false, 'Ses angles ne sont pas droits.'),
              qcm(3, 'Un cercle a 5 cm de rayon. Le point C est à 6 cm du centre. Où est-il ?', 'À l\'extérieur du cercle', ['Sur le cercle', 'À l\'intérieur du cercle'], 'Exercice du livre (p. 135).'),
              comp(2, 'La surface limitée par le cercle s\'appelle le ___.', 'disque', ['rayon', 'diamètre'], 'Je retiens de la page 134.')
            ]
          },
          {
            id: 'solides', title: 'Le cube, le pavé droit et le cylindre', pages: '166-167, 172-173, 178-179',
            summary: ['Le cube a 6 faces carrées de mêmes dimensions, 12 arêtes et 8 sommets. La face sur laquelle il repose est la base.', 'Le pavé droit a 3 dimensions (longueur, largeur, hauteur) et 6 faces rectangulaires égales 2 à 2.', 'Le cylindre est limité par deux surfaces planes circulaires superposables (les bases) et une aire latérale rectangulaire.'],
            img: 'assets/books/cm1-maths/cube-patron.jpg',
            questions: [
              rel(1, 'Combien en compte le cube ?', [['Faces', '6'], ['Arêtes', '12'], ['Sommets', '8']], 'Je retiens de la page 166.', I('cube-patron')),
              rel(2, 'Relie chaque définition au solide.', [['Limité par deux surfaces planes circulaires et une aire latérale', 'Le cylindre'], ['6 faces rectangulaires égales 2 à 2', 'Le pavé droit'], ['6 faces carrées de même côté', 'Le cube']], 'Corrigé de l\'autoévaluation (p. 223).'),
              calc(3, 'Combien d\'angles droits y a-t-il sur un cube ?', 24, '6 faces × 4 angles droits = 24.'),
              qcm(2, 'Comment s\'appelle le dessin à plat d\'un solide qu\'on peut plier ?', 'Le patron (développement)', ['La base', 'L\'arête'], 'Je retiens de la page 166.')
            ]
          },
          {
            id: 'transformations', title: 'Symétrie et translation', pages: '192-193, 198-199, 207',
            summary: ['Deux figures sont symétriques par rapport à une droite quand elles se superposent exactement par pliage le long de cet axe. La symétrie conserve les distances.', 'Si D et D\' sont symétriques par rapport à la droite T, alors T est la médiatrice du segment DD\'.', 'La translation est le déplacement d\'une figure vers la droite, la gauche, le haut ou le bas ; elle conserve formes, dimensions et orientation. Code (D10, B4) : 10 carreaux à droite, 4 vers le bas. On donne toujours le déplacement horizontal en premier.'],
            questions: [
              vf(1, 'La symétrie conserve les distances.', true, 'Je retiens de la page 192.'),
              qcm(2, 'Que signifie le code de translation (D10, B4) ?', '10 carreaux vers la droite, puis 4 vers le bas', ['10 vers le bas, puis 4 vers la droite', '4 vers la droite, puis 10 vers le bas'], 'Je retiens de la page 198.'),
              qcm(2, 'Dans un code de translation, quel déplacement donne-t-on en premier ?', 'Le déplacement horizontal', ['Le déplacement vertical', 'Peu importe'], 'Je retiens de la page 198.'),
              multi(2, 'Qu\'est-ce que la translation conserve ?', ['Les formes', 'Les dimensions', 'L\'orientation'], ['La position'], 'Je retiens de la page 198.'),
              comp(3, 'Si D et D\' sont symétriques par rapport à T, T est la ___ du segment DD\'.', 'médiatrice', ['diagonale', 'médiane'], 'Je retiens de la page 192.')
            ]
          }
        ]
      },
      /* ============================ PROBLÈMES ============================ */
      {
        id: 'problemes', title: 'Résolution de problèmes', palier: 1, group: '🧩 Résolution de problèmes',
        lessons: [
          {
            id: 'donnees', title: 'Données, questions et consignes', pages: '22-23, 34-35, 46-47, 60-61, 72-73',
            summary: ['Données utiles (utilisées pour résoudre), inutiles (non utilisées), manquantes (non indiquées mais nécessaires).', 'Les questions sont des phrases interrogatives (combien, quel…). La consigne est un ordre à exécuter.', 'Les questions intermédiaires doivent être résolues obligatoirement pour aboutir à la question finale.'],
            questions: [
              rel(1, 'Relie chaque type de donnée à sa définition.', [['Donnée utile', 'Elle sert à résoudre le problème'], ['Donnée inutile', 'Elle n\'est pas utilisée'], ['Donnée manquante', 'Elle est nécessaire mais non indiquée']], 'Je retiens de la page 22.'),
              qcm(2, '« Une voiture L200 quitte Dakar à 10 h 30 et arrive à Podor à 16 h. Le réservoir contient 65 l. » Quelle donnée est utile pour trouver le temps mis ?', '10 h 30 et 16 h', ['L200', '65 l'], 'Exercice du livre (p. 23). Temps mis : 5 h 30 mn.'),
              qcm(2, 'Bira a 10 000 F. Il achète 4 pots de lait à 500 F et 2 paquets de sucre à 750 F. Quelle est une question intermédiaire ?', 'Combien a-t-il dépensé ?', ['Combien lui reste-t-il ?', 'Où habite Bira ?'], 'La question finale est : combien lui reste-t-il ?'),
              calc(2, 'Bira a 10 000 F. Il achète 4 pots de lait à 500 F et 2 paquets de sucre à 750 F. Combien lui reste-t-il ?', 6500, '10 000 – (2 000 + 1 500) = 6 500 F.'),
              calc(2, 'Un troupeau de 78 animaux compte 40 moutons, 10 vaches et des chèvres. Combien de chèvres ?', 28, '78 – 50 = 28.'),
              calc(3, 'Une maman achète 2,5 kg de farine à 300 F, 0,5 kg de lait à 2 400 F, 1,25 kg de sucre à 600 F, 3 tablettes de beurre à 500 F et 24 œufs à 65 F. Dépense totale ?', 5760, '750 + 1 200 + 750 + 1 500 + 1 560 = 5 760 F.'),
              calc(3, 'Grand-mère achète 25 kg de poisson à 500 F et paie 200 F au chauffeur. Prix de revient ?', 12700, '12 500 + 200 = 12 700 F.')
            ]
          },
          {
            id: 'demarches', title: 'Démarches, erreurs et énoncés', pages: '98-99, 108-109, 120-121, 132-133, 144-145',
            summary: ['Construire un énoncé à partir de données, c\'est mettre les données dans des phrases et ajouter des questions ou des consignes.', 'Pour trouver une erreur dans une résolution, je vérifie chaque étape du raisonnement à partir des données.', 'Démarche progressive : partir des données vers la question finale. Démarche régressive : commencer par la question finale.'],
            questions: [
              qcm(2, 'Raisonner en commençant par la question finale, c\'est la démarche…', 'régressive', ['progressive', 'aléatoire'], 'Je retiens de la page 144.'),
              qcm(2, 'Mère Fatim achète 2 kg de viande à 2 500 F le kg, 1 500 F de légumes et 3 l d\'huile à 900 F. Elle avait 10 000 F. Alimatou trouve 5 100 F. Quelle est la bonne réponse ?', '800 F', ['5 100 F', '4 900 F'], 'Corrigé : 5 000 + 1 500 + 2 700 = 9 200 ; reste 800 F.'),
              vf(2, 'Pierre dit qu\'il a dépensé 15 000 F pour 3 chemises à 4 000 F. Il a raison.', false, '3 × 4 000 = 12 000 F.'),
              qcm(3, 'Un bœuf pèse 180 kg ; les déchets 15,25 kg. Un élève trouve 195,25 kg de viande. Quelle est son erreur ?', 'Il a additionné au lieu de soustraire (164,75 kg)', ['Aucune erreur', 'Il a multiplié'], 'Exercice du livre (p. 121).'),
              calc(2, 'Un taxi roule à 90 km/h pendant 3 h. Distance (km) ? (l\'élève avait divisé)', 270, '90 × 3 = 270 km.'),
              calc(3, 'Philomène a 45 000 F. Elle dépense 2 550 + 2 500 + 2 475 + 5 200 + 6 000 + 16 000 F. Prix des chaussures avec le reste ?', 10275, '45 000 – 34 725 = 10 275 F.'),
              calc(3, 'Adji Ngoné achète pour Victorine 1 kg de viande à 2 500 F, 2 kg de riz à 300 F et 1 l d\'huile à 900 F. Victorine avait donné 5 000 F. Somme à lui rendre ?', 1000, '5 000 – 4 000 = 1 000 F.')
            ]
          }
        ]
      },
      /* ============================ CALCUL MENTAL ============================ */
      {
        id: 'mental', title: 'Calcul mental', palier: '⚡', group: '⚡ Calcul mental',
        lessons: [
          {
            id: 'astuces', title: 'Les astuces de calcul mental du livre', pages: 'rubriques « Calcul mental »',
            summary: ['Multiplier par 10, 100, 1 000 : ajouter 1, 2 ou 3 zéros.', 'Multiplier par 11 un nombre de 2 chiffres : écrire la somme des chiffres au milieu (32 × 11 = 352).', 'Multiplier par 25 : diviser par 4 puis multiplier par 100. Multiplier par 50 : multiplier par 100 puis diviser par 2.', 'Diviser par 5 : prendre le double puis diviser par 10. Carré d\'un nombre : le multiplier par lui-même.'],
            questions: [
              calc(1, '573 × 10 = ?', 5730, 'On ajoute un zéro.'),
              calc(1, '89 × 1 000 = ?', 89000, 'On ajoute trois zéros.'),
              calc(2, '25 × 11 = ?', 275, '2 + 5 = 7 au milieu : 275.'),
              calc(2, '53 × 11 = ?', 583, '5 + 3 = 8 au milieu : 583.'),
              calc(2, '24 × 25 = ?', 600, '24 : 4 = 6 ; 6 × 100 = 600.'),
              calc(2, '26 × 50 = ?', 1300, '26 × 100 = 2 600 ; 2 600 : 2 = 1 300.'),
              calc(2, '63 : 5 = ?', 12.6, '63 × 2 = 126 ; 126 : 10 = 12,6.'),
              calc(1, 'Le carré de 9 = ?', 81, '9 × 9 = 81.'),
              calc(2, 'Le carré de 15 = ?', 225, '15 × 15 = 225.'),
              calc(1, '8 × 7 = ?', 56, 'Table de 8.'),
              calc(1, '9 × 8 = ?', 72, 'Table de 9.')
            ]
          }
        ]
      }
    ]
  });
})();

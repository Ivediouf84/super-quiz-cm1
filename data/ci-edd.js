/* =====================================================================
   CI — Éducation au Développement Durable (Éditions Didactikos, 2022)
   Questions tirées des « Je retiens » et des exercices « J'agis ».
   Images : assets/books/ci-edd/
   ===================================================================== */
(function () {
  const { qcm, vf, multi, comp, rel, ord } = QB;
  const I = (n) => ({ img: 'assets/books/ci-edd/' + n + '.jpg' });

  QB.book({
    classId: 'ci', domainId: 'edd',
    title: 'Éducation au Développement Durable CI', source: 'Éducation au Développement Durable CI — Éditions Didactikos (2022)',
    chapters: [
      /* ============================ PALIER 1 ============================ */
      {
        id: 'maladies', title: 'Les maladies du milieu : paludisme, sida, choléra', palier: 1, group: '🌿 Palier 1 — Vivre dans son milieu',
        lessons: [
          {
            id: 'palu', title: 'Le paludisme', pages: '10-13',
            summary: ['La piqûre du moustique peut donner le paludisme.', 'Les symptômes du paludisme sont : fièvre, maux de tête, vomissement…', 'Pour éviter le paludisme : je dors sous une moustiquaire, je tue les moustiques, j\'évite les eaux stagnantes.'],
            img: 'assets/books/ci-edd/palu-retiens.jpg',
            questions: [
              qcm(1, 'Quel animal transmet le paludisme ?', 'Le moustique', ['Le rat', 'Le cafard', 'La mouche'], 'Je retiens : la piqûre du moustique peut donner le paludisme.', I('palu-animaux')),
              multi(1, 'Quels sont des symptômes du paludisme ?', ['La fièvre', 'Les maux de tête', 'Le vomissement'], ['La faim'], 'Je retiens de la page 10.'),
              qcm(1, 'Pour éviter le paludisme, je dors…', 'sous une moustiquaire', ['sans moustiquaire', 'dehors'], 'Je retiens de la page 12.', I('palu-retiens')),
              qcm(2, 'Quel enfant risque d\'avoir le paludisme ?', '× (il dort sans moustiquaire)', ['○ (elle mange un fruit)', '— (il marche)'], 'Les moustiques peuvent le piquer pendant son sommeil.', I('palu-risque')),
              multi(2, 'Quelles actions permettent d\'éviter le paludisme ?', ['Dormir sous une moustiquaire', 'Tuer les moustiques', 'Éviter les eaux stagnantes'], ['Jeter les ordures dans la rue'], 'Je retiens de la page 12.'),
              vf(2, 'Les eaux stagnantes favorisent les moustiques.', true, 'Il faut éviter les eaux stagnantes.'),
              qcm(3, 'Quel fait favorise le paludisme ?', 'Les ordures et l\'eau sale dans la rue', ['Jeter les ordures dans la poubelle'], 'Les moustiques se multiplient dans l\'eau sale.', I('palu-favorise'))
            ]
          },
          {
            id: 'sida', title: 'Le sida', pages: '16-19',
            summary: ['Si je me coupe avec des objets tranchants ou pointus qui ont déjà servi, je peux avoir le sida.', 'Je ne joue pas avec les objets tranchants ou pointus usagés.', 'Je ne partage pas les objets tranchants ou pointus usagés.'],
            img: 'assets/books/ci-edd/sida-retiens.jpg',
            questions: [
              qcm(1, 'Comment peut-on attraper le sida ?', 'En se coupant avec un objet tranchant déjà utilisé', ['En serrant la main', 'En s\'asseyant à côté de quelqu\'un'], 'Je retiens de la page 16.'),
              qcm(2, 'Quel comportement favorise le sida ?', '○ (la fille joue avec une seringue)', ['× (deux enfants se passent une brosse)', '— (l\'homme creuse un trou)'], 'Il ne faut jamais jouer avec des objets pointus usagés.', I('sida-favorise')),
              qcm(2, 'Dans quelle image risque-t-on d\'attraper le sida ?', 'Partager un coupe-ongle', ['S\'asseoir à côté de quelqu\'un', 'Partager des vêtements', 'Partager des toilettes'], 'Le coupe-ongle est un objet tranchant.', I('sida-coupe-ongle')),
              vf(1, 'Je peux partager une lame de rasoir avec mon ami.', false, 'Je retiens : je ne partage pas les objets tranchants ou pointus usagés.'),
              vf(2, 'On peut attraper le sida en serrant la main d\'un camarade.', false, 'Serrer la main ne transmet pas le sida.'),
              qcm(3, 'Quel comportement permet d\'éviter le sida ?', '○ (brûler les déchets médicaux)', ['• (ramasser des lames par terre)'], 'Les objets usagés doivent être détruits.', I('sida-lame'))
            ]
          },
          {
            id: 'cholera', title: 'Le choléra', pages: '22-25',
            summary: ['Le choléra est la maladie des mains sales.', 'Pour éviter le choléra : je me lave les mains aux moments critiques, je bois de l\'eau potable, j\'utilise les toilettes.'],
            img: 'assets/books/ci-edd/cholera-retiens.jpg',
            questions: [
              comp(1, 'Le choléra est la maladie des mains ___.', 'sales', ['propres', 'froides'], 'Je retiens de la page 22.'),
              multi(1, 'Comment éviter le choléra ?', ['Se laver les mains aux moments critiques', 'Boire de l\'eau potable', 'Utiliser les toilettes'], ['Manger avec les mains sales'], 'Je retiens de la page 24.', I('cholera-retiens')),
              qcm(2, 'Quel comportement favorise le choléra ?', '○ (faire ses besoins sous l\'arbre)', ['• (aller aux toilettes)'], 'Il faut toujours utiliser les toilettes.', I('cholera-favorise')),
              qcm(2, 'Qu\'est-ce qui favorise le choléra ?', '• (le fruit entamé couvert de mouches)', ['× (le poulet bien cuit)', '○ (le canari couvert)'], 'Les mouches transportent des microbes.', I('cholera-fruit')),
              multi(3, 'Quels comportements permettent d\'éviter le choléra ?', ['• (laver les fruits)', '× (se laver les mains au savon)'], ['○ (dormir par terre)'], 'Exercice du livre (p. 25).', I('cholera-eviter')),
              vf(2, 'Je peux boire n\'importe quelle eau.', false, 'Je bois de l\'eau potable.')
            ]
          }
        ]
      },
      {
        id: 'hygiene', title: 'L\'hygiène et l\'alimentation', palier: 1, group: '🌿 Palier 1 — Vivre dans son milieu',
        lessons: [
          {
            id: 'hyg-corps', title: 'Hygiène corporelle et vestimentaire', pages: '28-29',
            summary: ['Pour une bonne hygiène corporelle et vestimentaire : je me lave régulièrement le corps, je porte des habits propres, je me peigne soigneusement les cheveux, je dois avoir un mouchoir propre.'],
            img: 'assets/books/ci-edd/hygiene-retiens.jpg',
            questions: [
              multi(1, 'Que dois-je faire pour une bonne hygiène corporelle ?', ['Me laver régulièrement le corps', 'Me peigner les cheveux', 'Avoir un mouchoir propre'], ['Porter des habits sales'], 'Je retiens de la page 28.', I('hygiene-retiens')),
              qcm(1, 'Dans quelle image l\'enfant respecte-t-il les règles d\'hygiène corporelle ?', '× (il se douche)', ['○ (il joue dans le sable)'], 'Se laver le corps régulièrement.', I('hygiene-corps')),
              multi(2, 'Quels objets permettent d\'avoir une bonne hygiène corporelle ?', ['○ (la brosse à dents)', '+ (l\'éponge)'], ['× (le marteau)', '□ (le stylo)'], 'Exercice du livre (p. 29).', I('hygiene-objets')),
              qcm(2, 'Quelle image est une solution pour l\'hygiène vestimentaire ?', '□ (laver les habits)', ['× (se brosser les dents)', '○ (couper les ongles)'], 'Laver ses habits = hygiène vestimentaire.', I('hygiene-vetement')),
              vf(1, 'Je dois porter des habits propres.', true, 'Je retiens de la page 28.')
            ]
          },
          {
            id: 'hyg-alim', title: 'Hygiène alimentaire et intoxications', pages: '30-31, 42-43, 46-49',
            summary: ['Pour une bonne hygiène alimentaire, il faut : bien protéger, bien laver, bien cuire, bien conserver les aliments, et bien se laver les mains avant de manger.', 'Il ne faut pas manger : un aliment pourri, un aliment périmé, un fruit non mûr.', 'Il ne faut pas manger un aliment touché par les mouches ni un aliment non protégé de la poussière.'],
            img: 'assets/books/ci-edd/alimentaire-retiens.jpg',
            questions: [
              multi(1, 'Que faut-il pour une bonne hygiène alimentaire ?', ['Bien laver les aliments', 'Bien cuire les aliments', 'Se laver les mains avant de manger'], ['Laisser les aliments à l\'air libre'], 'Je retiens de la page 30.', I('alimentaire-retiens')),
              multi(1, 'Quels aliments ne faut-il pas manger ?', ['Un aliment pourri', 'Un aliment périmé', 'Un fruit non mûr'], ['Un fruit bien lavé'], 'Je retiens de la page 42.', I('intoxication-retiens')),
              qcm(1, 'Dans quelle image respecte-t-on les règles d\'hygiène alimentaire ?', 'A (les gâteaux sont protégés)', ['B', 'C'], 'Les gâteaux sont sous une vitre.', I('aliments-proteges')),
              qcm(2, 'Quel enfant respecte les règles d\'hygiène alimentaire ?', 'D (il se lave les mains avant de manger)', ['E (il mange près de la poubelle)'], 'Exercice du livre (p. 31).', I('mains-avant-manger')),
              qcm(2, 'Quel aliment peut-on manger sans danger ?', '× (la viande bien grillée)', ['○ (la viande avariée)'], 'Exercice du livre (p. 43).', I('viande')),
              qcm(2, 'Quel aliment peut-on manger sans risque ?', '— (la mangue mûre)', ['○ (la mangue verte)'], 'Un fruit non mûr peut rendre malade.', I('mangues')),
              qcm(2, 'Quelle eau peut-on boire sans danger ?', 'A (la carafe propre)', ['B (la carafe sale)'], 'Exercice du livre (p. 47).', I('carafes')),
              qcm(3, 'Quelle image présente un danger ?', 'C (elle mange un fruit couvert de mouches)', ['D (il lave le fruit)'], 'Je retiens : ne pas manger un aliment touché par les mouches.', I('danger-fruit')),
              multi(3, 'Quels aliments faut-il protéger et conserver ?', ['Ceux exposés à la poussière', 'Ceux exposés aux mouches'], ['Aucun'], 'Je retiens de la page 46.', I('exposes-retiens'))
            ]
          },
          {
            id: 'conserver', title: 'Bien protéger et conserver les aliments', pages: '48-49',
            summary: ['Pour éviter les risques d\'intoxication alimentaire, il faut bien protéger les aliments et bien les conserver (bocaux, réfrigérateur).'],
            img: 'assets/books/ci-edd/conserver-retiens.jpg',
            questions: [
              qcm(1, 'Quelle marchande protège ses aliments ?', '× (les aliments sont dans une vitrine)', ['○ (les aliments sont dans la poussière)'], 'Exercice du livre (p. 49).', I('marchande-vitrine')),
              qcm(1, 'Quel aliment ne faut-il pas manger ?', '× (la pastèque couverte de mouches)', ['○ (la pastèque sous un couvercle)'], 'Exercice du livre (p. 49).', I('pasteque')),
              qcm(2, 'Quelle image montre une bonne conservation de la viande ?', '○ (dans le réfrigérateur)', ['× (dans le placard)'], 'Exercice du livre (p. 49).', I('refrigerateur')),
              vf(2, 'On conserve la viande dans le réfrigérateur.', true, 'Je retiens de la page 48.')
            ]
          },
          {
            id: 'proprete', title: 'Propreté de la classe, des toilettes et gestion des déchets', pages: '34-37, 40-41',
            summary: ['Je veux être en bonne santé. Ma classe, mon école et ma maison sont toujours propres.', 'Nous devons nous laver les mains au sortir des toilettes, utiliser et tenir les toilettes propres.', 'Pour une bonne gestion des déchets : balayer régulièrement ; ramasser, puis évacuer les ordures.'],
            img: 'assets/books/ci-edd/dechets-retiens.jpg',
            questions: [
              qcm(1, 'Que dois-je faire en sortant des toilettes ?', 'Me laver les mains', ['Courir jouer', 'Manger tout de suite'], 'Je retiens de la page 36.', I('peril-fecal')),
              qcm(1, 'Dans quelle image la personne se protège-t-elle du péril fécal ?', 'W (elle utilise les toilettes)', ['◇ (il fait ses besoins dans les herbes)'], 'Exercice du livre (p. 37).', I('peril-fecal')),
              qcm(2, 'Dans quelle image respecte-t-on les règles d\'hygiène du milieu ?', 'B (les toilettes sont propres)', ['A (les toilettes sont sales)'], 'Exercice du livre (p. 37).', I('toilettes-propres')),
              multi(2, 'Quels produits servent à l\'entretien des toilettes ?', ['+ (le vinaigre)', '□ (l\'eau de javel)'], ['○ (la peinture)'], 'Exercice du livre (p. 37).', I('produits-toilettes')),
              multi(1, 'Pour bien gérer les déchets, je dois…', ['balayer régulièrement', 'ramasser puis évacuer les ordures'], ['jeter les ordures dans la rue'], 'Je retiens de la page 40.', I('dechets-retiens')),
              qcm(2, 'Quelle image montre une mauvaise gestion des déchets ?', 'C (jeter les ordures sous l\'arbre)', ['A (mettre les déchets dans la poubelle)'], 'Exercice du livre (p. 41).', I('mauvaise-gestion')),
              vf(1, 'Ma classe, mon école et ma maison doivent toujours être propres.', true, 'Je retiens de la page 34.', I('proprete-retiens'))
            ]
          }
        ]
      },
      {
        id: 've1', title: 'Se respecter et respecter les autres', palier: 1, group: '🤝 Palier 1 — Vivre ensemble',
        lessons: [
          {
            id: 'respect-soi', title: 'Se respecter soi-même', pages: '14-15, 20-21',
            summary: ['Je suis propre. Je suis bien habillé et bien coiffé. Je prends soin de mon matériel. Je me respecte.', 'Je n\'insulte jamais. J\'évite d\'être grossier.'],
            img: 'assets/books/ci-edd/soin-retiens.jpg',
            questions: [
              qcm(1, 'Quel enfant prend soin de son corps ?', '□ (il se douche)', ['+ (il marche)', '○ (il joue dans la boue)'], 'Exercice du livre (p. 15).', I('corps-soin')),
              qcm(2, 'Quel enfant prend soin de ses vêtements ?', '× (il range ses habits dans l\'armoire)', ['○ (ses habits traînent par terre)'], 'Exercice du livre (p. 15).', I('vetements-soin')),
              multi(1, 'Quelles phrases montrent que je me respecte ?', ['Je suis propre.', 'Je suis bien coiffé.', 'Je prends soin de mon matériel.'], ['J\'insulte mes camarades.'], 'Je retiens de la page 14.'),
              multi(2, 'Quelles phrases montrent un langage correct ?', ['Entrez, s\'il vous plaît !', 'Bonjour, mes enfants !'], ['Sors, dégage !', 'N\'entre pas dans la classe !'], 'Exercice du livre (p. 21).'),
              multi(2, 'Quand je blesse quelqu\'un, je dois lui dire :', ['Pardon !', 'Excuse-moi !'], ['C\'est ton problème !', 'Ôte-toi de là !'], 'Exercice du livre (p. 21).'),
              qcm(2, 'Dans quelle image les enfants ont-ils un langage correct ?', '× (« Merci ! » — « De rien ! »)', ['○ (« Singe ! » — « Tortue ! »)'], 'Évaluation (p. 50).', I('langage-merci')),
              comp(3, 'Je n\'insulte jamais. J\'évite d\'être ___.', 'grossier', ['poli', 'propre'], 'Je retiens de la page 20.')
            ]
          },
          {
            id: 'respect-autres', title: 'Respecter les autres et rendre service', pages: '26-27, 38-39',
            summary: ['Je salue tout le monde. Je respecte tout le monde.', 'J\'aide une personne en difficulté. Je partage ce que j\'ai avec les autres. Je suis toujours prêt à rendre service. J\'aide mes parents à la maison. Je suis solidaire et généreux.'],
            img: 'assets/books/ci-edd/entraide-retiens.jpg',
            questions: [
              qcm(1, 'Quel enfant respecte l\'adulte ?', '○ (il serre la main poliment)', ['× (elle se moque du vieil homme)'], 'Exercice du livre (p. 27).', I('respect-adulte')),
              qcm(2, 'Dans quelle image l\'enfant ne respecte-t-il pas son camarade ?', '• (il se moque de la fille en fauteuil roulant)', ['○ (il dit merci)'], 'Exercice du livre (p. 27).', I('respect-camarade')),
              qcm(1, 'Quelle image montre un bon comportement ?', '□ (il aide son camarade tombé)', ['△ (ils se disputent le ballon)'], 'J\'aide une personne en difficulté.', I('aider-camarade')),
              multi(2, 'Quelles phrases sont de bons comportements ?', ['Je salue les enseignants de l\'école.', 'Je n\'insulte jamais les personnes.', 'Je fais les commissions de mes parents.'], ['Je ne salue que mes parents.'], 'Exercice du livre (p. 27).'),
              multi(2, 'Quelles phrases montrent l\'entraide ?', ['Je partage ce que j\'ai.', 'J\'aide mes parents à la maison.'], ['Je garde tout pour moi.'], 'Je retiens de la page 38.', I('entraide-retiens')),
              vf(3, 'Être solidaire et généreux est un bon comportement.', true, 'Je retiens de la page 38.')
            ]
          },
          {
            id: 'ponctuel', title: 'Être ponctuel, assidu et dire la vérité', pages: '32-33, 44-45',
            summary: ['Je viens toujours à l\'heure : je suis ponctuel. Je ne m\'absente jamais : je suis assidu.', 'Je ne dois jamais mentir. Je dois toujours dire la vérité.'],
            img: 'assets/books/ci-edd/ponctuel-retiens.jpg',
            questions: [
              rel(1, 'Relie chaque mot à sa définition.', [['ponctuel', 'Je viens toujours à l\'heure.'], ['assidu', 'Je ne m\'absente jamais.']], 'Je retiens de la page 32.', I('ponctuel-retiens')),
              qcm(2, 'Quel élève a un bon comportement ?', '○ (Lala est déjà en classe)', ['□ (Bira arrive en retard)'], 'Exercice du livre (p. 33).', I('ponctuel-lala')),
              qcm(2, 'Dans quelle image l\'élève risque-t-il d\'arriver en retard ?', '○ (il joue aux billes en chemin)', ['× (il marche vers l\'école)'], 'Exercice du livre (p. 33).', I('retard-billes')),
              multi(2, 'Quelles phrases sont bien ?', ['Je viens à l\'école avant huit heures.', 'Je ne m\'absente jamais.'], ['Je viens à l\'école quand je veux.', 'Je viens à l\'école lundi et vendredi seulement.'], 'Exercice du livre (p. 33).'),
              qcm(1, 'Bira a cassé la règle et a accusé Lala. Que devait-il faire ?', 'Dire la vérité', ['Se cacher', 'Accuser un autre élève'], 'Je retiens : je dois toujours dire la vérité.', I('verite-retiens')),
              qcm(2, 'Quelle image montre un bon comportement ?', '□ (« Madame, j\'ai ramassé une pièce de monnaie. »)', ['○ (l\'enfant prend en cachette dans le frigo)'], 'Exercice du livre (p. 45).', I('piece-monnaie')),
              rel(3, 'Écris B pour un bon comportement et M pour un mauvais.', [['« Non maman, j\'ai pas vu ta pièce. »', 'M'], ['« Pardon maman, j\'ai cassé ton miroir. »', 'B']], 'Exercice du livre (p. 45).', I('verite-maman')),
              qcm(3, 'Quel propos traduit un bon comportement ?', 'Je ramasse de l\'argent en classe, je le remets à ma maîtresse.', ['Quand je ramasse de l\'argent, j\'achète des beignets.'], 'Exercice du livre (p. 45).')
            ]
          }
        ]
      },
      /* ============================ PALIER 2 ============================ */
      {
        id: 'p2env', title: 'Protéger les plantes, les animaux et l\'environnement', palier: 2, group: '🌳 Palier 2 — Vivre dans son milieu',
        lessons: [
          {
            id: 'plantes', title: 'Protéger les plantes', pages: '62-63',
            summary: ['Pour l\'entretien des plantes, je dois : les arroser régulièrement ; mettre du fumier ; remuer le sol régulièrement ; les protéger.'],
            img: 'assets/books/ci-edd/plantes-retiens.jpg',
            questions: [
              multi(1, 'Pour entretenir les plantes, je dois…', ['les arroser régulièrement', 'mettre du fumier', 'remuer le sol', 'les protéger'], ['casser les branches'], 'Je retiens de la page 62.', I('plantes-retiens')),
              qcm(1, 'Quelle image montre une protection de la plante ?', '2 (le grillage autour de la plante)', ['1 (la chèvre mange la plante)'], 'Exercice du livre (p. 63).', I('grillage')),
              multi(2, 'Quelles images montrent une protection de la plante ?', ['C (arroser)', 'F (planter)'], ['D (piétiner les fleurs)', 'E (grimper à l\'arbre)'], 'Exercice du livre (p. 63).', I('proteger-plante')),
              qcm(2, 'Quelle image montre un bon comportement ?', 'B (planter et entretenir)', ['A (couper l\'arbre)'], 'Exercice du livre (p. 63).', I('planter-couper'))
            ]
          },
          {
            id: 'animaux', title: 'Protéger les animaux domestiques', pages: '66-67',
            summary: ['Les animaux vivent avec nous. Nous devons : les soigner ; les abriter et les nourrir ; bien nous occuper de leur propreté.'],
            img: 'assets/books/ci-edd/animaux-retiens.jpg',
            questions: [
              multi(1, 'Que devons-nous faire pour les animaux ?', ['Les soigner', 'Les abriter et les nourrir', 'Nous occuper de leur propreté'], ['Les maltraiter'], 'Je retiens de la page 66.', I('animaux-retiens')),
              qcm(2, 'Quelle image montre une protection de l\'animal ?', '1 (on nettoie l\'enclos du mouton)', ['2 (il frappe l\'âne)'], 'Exercice du livre (p. 67).', I('animal-protection')),
              qcm(2, 'Dans quelle image prend-on soin de l\'animal ?', '1 (on soigne le chien)', ['3 (l\'âne est trop chargé)'], 'Exercice du livre (p. 67).', I('animal-soin')),
              vf(1, 'On ne doit pas maltraiter les animaux.', true, 'Les animaux vivent avec nous.')
            ]
          },
          {
            id: 'environnement', title: 'Ne pas salir, ne pas polluer, ne pas gaspiller', pages: '70-71, 74-75',
            summary: ['Pour préserver l\'environnement : il ne faut pas le salir ; il ne faut pas le polluer.', 'Je ne détériore pas les objets. Je ne gaspille pas. Je ne jette pas d\'objets dans les toilettes.'],
            img: 'assets/books/ci-edd/environnement-retiens.jpg',
            questions: [
              multi(1, 'Pour préserver l\'environnement, il ne faut pas…', ['le salir', 'le polluer'], ['le nettoyer'], 'Je retiens de la page 70.', I('environnement-retiens')),
              qcm(1, 'Quel comportement faut-il éviter ?', '1 (salir la classe)', ['2 (la classe est rangée)'], 'Exercice du livre (p. 71).', I('classe-sale')),
              qcm(2, 'Quelle situation participe à la dégradation de l\'environnement ?', '5 (le dépôt d\'ordures)', ['6 (le nettoyage du quartier)'], 'Exercice du livre (p. 71).', I('degradation')),
              multi(2, 'Quelles phrases sont de bonnes règles ?', ['Je ne détériore pas les objets.', 'Je ne gaspille pas.', 'Je ne jette pas d\'objets dans les toilettes.'], ['Je laisse le robinet ouvert.'], 'Je retiens de la page 74.', I('gaspiller-retiens')),
              qcm(2, 'Quelle personne ne gaspille pas ?', '3 (la télé est éteinte quand personne ne la regarde)', ['4 (la télé reste allumée)'], 'Exercice du livre (p. 75).', I('tele-eteinte')),
              qcm(3, 'Quel comportement faut-il éviter ?', '1 (monter sur la table et casser la fenêtre)', ['2 (nettoyer la table)'], 'Exercice du livre (p. 75).', I('monter-table'))
            ]
          },
          {
            id: 'biens-publics', title: 'Sauvegarder les biens et édifices publics', pages: '78-79, 82-83',
            summary: ['Je respecte les biens publics : je participe à leur nettoyage, à leur entretien.', 'Nous devons préserver nos édifices publics par des actions régulières de réparation, de nettoyage et d\'entretien.'],
            img: 'assets/books/ci-edd/biens-publics-retiens.jpg',
            questions: [
              qcm(1, 'Quel élève entretient le bien public ?', '2 (elle repeint le tableau)', ['1 (il écrit sur le mur)'], 'Exercice du livre (p. 79).', I('bien-public-mur')),
              qcm(2, 'Dans quelle image le bien public n\'est-il pas respecté ?', '3 (le bus incendié)', ['4 (les élèves nettoient les tables)'], 'Exercice du livre (p. 79).', I('bus-incendie')),
              qcm(2, 'Quel comportement faut-il éviter ?', '6 (uriner contre le mur)', ['5 (nettoyer les toilettes)'], 'Exercice du livre (p. 79).', I('uriner-mur')),
              multi(2, 'Comment préserver les édifices publics ?', ['Les réparer', 'Les nettoyer', 'Les entretenir'], ['Les dégrader'], 'Je retiens de la page 82.', I('edifices-retiens'))
            ]
          }
        ]
      },
      {
        id: 'p2ve', title: 'Règlements, code de la route et responsabilités', palier: 2, group: '🚸 Palier 2 — Vivre ensemble',
        lessons: [
          {
            id: 'reglement', title: 'Le règlement intérieur de la classe et de l\'école', pages: '60-61, 64-65',
            summary: ['Règlement de la classe : ne jette pas les papiers par terre ; ne monte pas sur les tables ; n\'écris pas sur les tables ou sur les murs ; n\'amène pas d\'objets dangereux en classe ; ne mange pas en classe.', 'À l\'école : je viens à l\'heure ; je respecte tout le monde ; j\'évite les jeux dangereux ; je porte des habits propres ; je n\'escalade jamais le mur ; je n\'apporte jamais d\'objets dangereux.'],
            img: 'assets/books/ci-edd/reglement-retiens.jpg',
            questions: [
              multi(1, 'Qu\'interdit le règlement intérieur de la classe ?', ['Jeter les papiers par terre', 'Monter sur les tables', 'Manger en classe'], ['Jeter les papiers dans la corbeille'], 'Je retiens de la page 60.', I('reglement-retiens')),
              qcm(1, 'Dans quelle image l\'élève respecte-t-il le règlement intérieur ?', '1 (il jette le papier dans la corbeille)', ['2 (il fouille dans son sac)'], 'Exercice du livre (p. 61).', I('corbeille')),
              qcm(2, 'Quel comportement ne respecte pas le règlement de la classe ?', '1 (elle mange en classe)', ['2 (elles balayent la classe)'], 'Exercice du livre (p. 61).', I('manger-classe')),
              multi(2, 'Quelles sont des règles de l\'école ?', ['Je viens à l\'heure.', 'J\'évite les jeux dangereux.', 'Je n\'escalade jamais le mur.'], ['J\'apporte des objets dangereux.'], 'Je retiens de la page 64.', I('ecole-retiens')),
              qcm(3, 'Quelle image montre un interdit du règlement de l\'école ?', 'A (escalader le mur de l\'école)', ['B (arroser les arbres)'], 'Exercice du livre (p. 65).', I('ecole-interdit'))
            ]
          },
          {
            id: 'route', title: 'Le code de la route', pages: '68-69, 72-73',
            summary: ['Pour traverser la route, je dois : regarder à gauche et à droite ; emprunter le passage pour piéton ou la passerelle.', 'Je suis un piéton : je marche sur le trottoir gauche. Je respecte les consignes de celui ou celle qui me fait traverser la chaussée.'],
            img: 'assets/books/ci-edd/route-retiens.jpg',
            questions: [
              ord(1, 'Range les étapes pour traverser la route.', ['Regarder à gauche', 'Regarder à droite', 'Traverser sur le passage pour piéton'], 'Je retiens de la page 68.'),
              qcm(1, 'Quel enfant traverse correctement la chaussée ?', '1 (sur le passage pour piéton)', ['2 (hors du passage)'], 'Exercice du livre (p. 69).', I('passage-pieton')),
              qcm(2, 'Quel enfant ne respecte pas la règle ?', '2 (il court sur la route)', ['1 (il prend la passerelle)'], 'Exercice du livre (p. 69).', I('passerelle')),
              multi(2, 'Pour traverser la route, je dois :', ['passer par la passerelle', 'emprunter le passage pour piéton'], ['courir vite sans regarder'], 'Exercice du livre (p. 69).'),
              comp(2, 'Je suis un piéton : je marche sur le ___.', 'trottoir', ['milieu de la route', 'mur'], 'Je retiens de la page 72.', I('trottoir-retiens')),
              qcm(2, 'Qui respecte le code de la route ?', 'Les enfants que le policier fait traverser (3 et 4)', ['L\'enfant qui marche au milieu de la route'], 'Exercice du livre (p. 73).', I('policier')),
              qcm(3, 'Quelle situation empêche la circulation des piétons ?', '5 (la voiture garée sur le trottoir)', ['6 (la voiture garée sur la route)'], 'Exercice du livre (p. 73).', I('voiture-trottoir'))
            ]
          },
          {
            id: 'responsabilites', title: 'Prendre des responsabilités', pages: '76-77, 80-81',
            summary: ['Je participe à la prise en charge des problèmes de la classe, de l\'école et de la maison.', 'Ma classe, mon école et ma maison sont mes cadres de vie : je dois toujours y prendre des responsabilités et les assumer.'],
            img: 'assets/books/ci-edd/participer-retiens.jpg',
            questions: [
              qcm(1, 'Quelle image montre un bon comportement ?', '1 (il nettoie la classe)', ['2 (il jette des papiers)'], 'Exercice du livre (p. 77).', I('nettoyer-classe')),
              multi(2, 'Quels élèves ont une responsabilité ?', ['Abdou : « Je suis le responsable de ma classe. »', 'Rama : « Je suis la présidente du gouvernement scolaire. »'], ['Badou : « Je suis le fils du directeur. »'], 'Exercice du livre (p. 81).'),
              qcm(2, 'Dans quelle image l\'élève n\'a pas de comportement responsable ?', '2 (il écrit sur le mur)', ['1 (il arrose la plante)'], 'Exercice du livre (p. 81).', I('ecrit-mur')),
              vf(3, 'Ma classe, mon école et ma maison sont mes cadres de vie.', true, 'Je retiens de la page 80.', I('responsabilite-retiens'))
            ]
          }
        ]
      }
    ]
  });
})();

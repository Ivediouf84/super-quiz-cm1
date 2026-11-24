/* =====================================================================
   CM2 — Découverte du Monde
   Pour l'instant : une leçon « Les plantes » tirée de 10 cartes mémoire
   (pas encore du manuel Didactikos CM2 — à fusionner quand ce livre sera fait).
   Mode d'emploi des fonctions : voir data/_core.js
   ===================================================================== */
(function () {
  const { qcm, vf, multi, comp, trou, rel, ord } = QB;

  QB.book({
    classId: 'cm2', domainId: 'dm',
    title: 'Découverte du Monde CM2', source: 'Cartes mémoire « Les plantes » (CM2)',
    chapters: [
      {
        id: 's-plantes', title: 'Les plantes', group: '🔬 Sciences et Technologie',
        lessons: [
          {
            id: 'plantes', title: 'La vie des plantes', pages: 'Cartes mémoire',
            summary: [
              "Une plante a trois grandes parties : les racines, la tige et les feuilles. Les plantes à fleurs ont aussi des fleurs.",
              "Les racines fixent la plante dans le sol et absorbent l'eau et les sels minéraux.",
              "La tige soutient la plante et transporte l'eau et les sels minéraux vers les feuilles.",
              "Pour vivre, une plante a besoin d'eau, de lumière, d'air (dioxyde de carbone) et de sels minéraux.",
              "La photosynthèse : les feuilles fabriquent la nourriture de la plante à partir d'eau, de dioxyde de carbone et de lumière. Elles rejettent de l'oxygène.",
              "La germination est le début de la vie d'une plante : la graine commence à se développer. Pour germer, elle a besoin d'eau, de chaleur et d'air.",
              "La fleur donne le fruit, et le fruit contient les graines.",
              "Les graines sont dispersées par le vent (le pissenlit), par les animaux ou par l'eau."
            ],
            questions: [
              multi(1, "Quelles sont les trois grandes parties d'une plante ?", ["Les racines", "La tige", "Les feuilles"], ["Les graines", "Le fruit"], "Carte 1 : racines, tige et feuilles. La fleur s'ajoute chez les plantes à fleurs."),
              rel(1, "Relie chaque partie de la plante à son rôle.", [["Les racines", "Fixent la plante et absorbent l'eau"], ["La tige", "Soutient la plante et transporte l'eau"], ["Les feuilles", "Fabriquent la nourriture"], ["La fleur", "Donne le fruit et les graines"]], "Cartes 2, 3, 4 et 9."),
              qcm(1, "Quelle partie de la plante absorbe l'eau et les sels minéraux du sol ?", "Les racines", ["La tige", "Les feuilles", "La fleur"], "Carte 2 : les racines fixent la plante et absorbent l'eau et les sels minéraux."),
              vf(1, "La tige transporte l'eau et les sels minéraux vers les feuilles.", true, "Carte 3 : elle soutient la plante et fait monter l'eau vers les feuilles."),
              multi(2, "De quoi une plante a-t-elle besoin pour vivre ?", ["D'eau", "De lumière", "D'air (dioxyde de carbone)", "De sels minéraux"], ["De sucre", "De lait"], "Carte 5 : eau, lumière, air et sels minéraux."),
              qcm(1, "Quel gaz les plantes rejettent-elles pendant la photosynthèse ?", "L'oxygène", ["Le dioxyde de carbone", "La fumée", "La vapeur d'essence"], "Carte 6 : les feuilles rejettent de l'oxygène."),
              qcm(2, "Qu'est-ce que la photosynthèse ?", "La fabrication de nourriture par les feuilles grâce à la lumière", ["La chute des feuilles en saison sèche", "Le transport de l'eau par les racines", "La dispersion des graines par le vent"], "Carte 4 : avec l'eau, le dioxyde de carbone et la lumière, les feuilles fabriquent la nourriture de la plante."),
              comp(2, "Pendant la photosynthèse, les feuilles utilisent l'eau, le dioxyde de carbone et la ___.", "lumière", ["nuit", "pluie", "terre"], "Carte 4 : sans lumière, pas de photosynthèse."),
              vf(2, "Une plante placée longtemps dans le noir complet peut faire la photosynthèse.", false, "La photosynthèse a besoin de lumière (cartes 4 et 5)."),
              qcm(1, "Comment appelle-t-on le début de la vie d'une plante, quand la graine commence à se développer ?", "La germination", ["La photosynthèse", "La floraison", "La respiration"], "Carte 7."),
              multi(2, "De quoi une graine a-t-elle besoin pour germer ?", ["D'eau", "De chaleur", "D'air"], ["D'engrais chimique", "De froid"], "Carte 8 : eau, chaleur et air."),
              vf(3, "Une graine posée sur du coton sec, sans jamais être arrosée, va germer.", false, "Sans eau, la graine ne germe pas (carte 8)."),
              ord(2, "Range ces étapes de la vie d'une plante dans l'ordre.", ["La graine germe", "La plante grandit", "La plante fleurit", "La fleur donne un fruit avec des graines"], "Cartes 7 et 9 : la germination, puis la croissance, la fleur, le fruit et les nouvelles graines."),
              comp(2, "La fleur donne le ___, qui contient les graines.", "fruit", ["racine", "tige", "feuille"], "Carte 9."),
              rel(3, "Relie chaque graine à son moyen de dispersion.", [["Le pissenlit", "Le vent"], ["La noix de coco", "L'eau"], ["Les graines mangées par les oiseaux", "Les animaux"]], "Carte 10 : le vent, l'eau ou les animaux transportent les graines."),
              trou(3, "Par quoi les graines du pissenlit sont-elles dispersées ?", ["le vent", "vent", "par le vent"], "Carte 10 : ses graines légères s'envolent.")
            ]
          }
        ]
      }
    ]
  });
})();

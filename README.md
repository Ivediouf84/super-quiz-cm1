# MON SUPER QUIZ CM1

Jeu éducatif interactif tiré du manuel **« Découverte du monde CM1 »** (Éditions Didactikos, 2022).

## Lancer le jeu
Double-clique sur **`index.html`**. Le jeu s'ouvre dans le navigateur (Chrome, Edge, Firefox…).
Il fonctionne sans Internet, sans serveur, sans base de données et sans inscription.
La progression est enregistrée automatiquement dans le navigateur (LocalStorage).

## Fichiers
| Fichier | Rôle |
|---|---|
| `index.html` | Structure des écrans |
| `style.css` | Design (couleurs, animations, version mobile, impression) |
| `script.js` | Moteur du jeu : quiz, examen, points, badges, sauvegarde |
| `questions.js` | Banque de questions classées par matière, chapitre, leçon et niveau |
| `assets/` | Logo et illustration (SVG) |

## Analyse du manuel (143 pages scannées)
Le manuel contient **3 matières** organisées en 2 paliers :

- **Histoire** (5 chapitres, 15 leçons, 173 questions) : préhistoire ; royaumes du Sénégal avant et après l'arrivée des Blancs ; contacts avec les Arabes et les Européens ; résistants (El Hadji Omar, Fodé Kaba, Maba Diakhou, Lat Dior, Alboury) ; marche vers l'indépendance et résistance spirituelle.
- **Géographie** (3 chapitres, 14 leçons, 136 questions) : situation, relief, climat, sols, végétation, découpage administratif ; population et activités économiques ; habitat et ressources du milieu.
- **Sciences et Technologie (IST)** (3 chapitres, 14 leçons, 137 questions) : levier, lampe de poche, brouette, ordinateur, moteur à explosion, démontage/assemblage ; air, états de la matière, cycle de l'eau, combustions, sols ; respiration, circulation, reproduction, locomotion.

**Total : 446 questions**, toutes tirées des leçons « Je retiens », des exercices « J'agis », des documents, du lexique et des corrigés du manuel. Chaque question indique les pages du manuel.

### Pages manquantes ou difficiles
- **Pages 104-105** (leçon « L'appareil digestif / la digestion ») : absentes du PDF. Aucune question n'a été inventée sur cette leçon.
- **Page 128** (début de la leçon sur la locomotion) : absente du PDF ; la leçon est construite à partir de la page 129.
- **Page 103** : scan flou mais lisible.
- Le manuel ne contient ni mathématiques ni grammaire : le **Calcul rapide** utilise les nombres du manuel (dates, distances, populations) et le complète par des opérations d'entraînement signalées « hors manuel ».

## Types de jeux
QCM · Vrai ou faux · Trouve les bonnes réponses · Complète la phrase · Questions à trous · Relie les éléments · Remets dans l'ordre · Calcul rapide · Défi chrono.

## Fonctionnalités
Mode examen (note sur 20, appréciation, correction détaillée) · Défis du jour · Quiz aléatoire · Révision par chapitre (fiches « Je retiens ») · Révision des erreurs · 3 niveaux (Débutant, Intermédiaire, Expert) · Points, bonus de série, étoiles, 15 badges, 6 niveaux de progression · Tableau de bord · Trophées et classement personnel · Sons activables · Plein écran · Impression des résultats · Remise à zéro.

## Ajouter des questions
Ouvre `questions.js`, trouve la leçon voulue et ajoute une ligne dans `questions: [...]`.
La bonne réponse s'écrit toujours en premier : le jeu mélange les propositions tout seul.

```js
qcm(1, "Quelle est la capitale du Sénégal ?", "Dakar", ["Thiès", "Kaolack", "Louga"], "Explication affichée après la réponse."),
vf(2, "Le lac de Guiers contient de l'eau douce.", true, "Explication."),
trou(3, "Quel fleuve coule au Sud ?", ["casamance", "la casamance"], "Explication."),
```
Le premier nombre est le niveau : 1 = Débutant, 2 = Intermédiaire, 3 = Expert.

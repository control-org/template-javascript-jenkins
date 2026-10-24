# template-javascript-jenkins

# Template JavaScript - Pipeline CI/CD

## Français

Ce dépôt est un template de projet JavaScript configuré pour être analysé automatiquement par le pipeline Jenkins central de l'organisation `control-org`.

Il fournit une base de travail avec les outils de test et de couverture déjà configurés. L'utilisateur n'a pas à modifier la configuration de l'infrastructure.

### Prérequis

- Node.js 18 ou supérieur
- npm (inclus avec Node.js)

### Structure du projet
├── Jenkinsfile # Appel du pipeline central (ne pas modifier)
├── package.json # Dépendances et scripts
├── sonar-project.properties # Configuration SonarQube
├── src/ # Code source de l'application
│ └── Greeter.js
└── tests/ # Tests unitaires
└── Greeter.test.js


### Installation des dépendances

Avant de lancer les tests, installez les dépendances déclarées dans `package.json` :

```bash
npm install
# execute les tests en local
npm run test:coverage
# ❌⭕ Jeu de Morpion (Tic Tac Toe)

Un jeu de morpion moderne et interactif construit avec React, Vite et Bootstrap 5. Propose les modes Joueur contre Joueur et Joueur contre IA avec trois niveaux de difficulté et un système de score complet.

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=flat&logo=react)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?style=flat&logo=vite)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5-7952B3?style=flat&logo=bootstrap)
![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?style=flat&logo=docker)

## ✨ Fonctionnalités

### 🎯 Modes de Jeu
- **👥 Joueur vs Joueur** - Jouez localement avec un ami sur le même appareil
- **🤖 Joueur vs IA** - Affrontez une IA intelligente avec 3 niveaux de difficulté

### 🧠 Niveaux de Difficulté de l'IA
- **😊 Facile** - Mouvements aléatoires, parfait pour les débutants
- **🤔 Moyen** - Gameplay équilibré avec 50% de coups optimaux
- **😈 Difficile** - IA imbattable utilisant l'algorithme Minimax

### 🎨 Interface Utilisateur Moderne
- Design épuré et minimaliste avec la police Inter
- Animations et transitions fluides
- Mise en page responsive pour tous les écrans (mobile, tablette, desktop)
- Arrière-plans dégradés et effets glassmorphism
- Système de suivi des scores en temps réel
- Retour visuel pour les combinaisons gagnantes
- Interface enrichie avec des emojis

### ⚡ Performance & Architecture
- Rechargement rapide avec Vite HMR (Hot Module Replacement)
- Architecture de composants optimisée avec séparation des préoccupations
- Hooks React personnalisés pour la gestion d'état
- Structure de code modulaire pour une maintenance facile

## 🚀 Démarrage Rapide

### Prérequis

- Node.js 16+ installé
- Gestionnaire de paquets npm ou yarn
- Docker (optionnel, pour le déploiement conteneurisé)

### Développement Local

```bash
# Cloner le dépôt
git clone https://github.com/acinox-it/tictactoe.git
cd tictactoe

# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev

# Construire pour la production
npm run build

# Prévisualiser la version de production
npm run preview
```

L'application sera disponible sur `http://localhost:5173`

### Déploiement Docker

```bash
# Construire et exécuter avec Docker Compose
docker-compose up --build

# Exécuter en arrière-plan
docker-compose up -d

# Arrêter le conteneur
docker-compose down
```

L'application sera disponible sur `http://localhost:8081`

## 📂 Structure du Projet

```
tictactoe/
├── src/
│   ├── components/          # Composants React
│   │   ├── Board.jsx       # Plateau de jeu avec grille 3x3
│   │   ├── Square.jsx      # Composant case individuelle
│   │   ├── GameStatus.jsx  # Affichage du statut et des scores
│   │   ├── Menu.jsx        # Menu principal avec sélection du mode
│   │   └── GameControls.jsx # Boutons de contrôle (reset, retour)
│   ├── hooks/              # Hooks React personnalisés
│   │   └── useGame.js      # Hook de gestion d'état du jeu
│   ├── utils/              # Fonctions utilitaires
│   │   └── gameLogic.js    # Logique du jeu et algorithmes IA
│   ├── App.jsx             # Composant principal de l'application
│   ├── App.css             # Styles et animations
│   ├── index.css           # Styles globaux
│   └── main.jsx            # Point d'entrée de l'application
├── public/                 # Ressources statiques
│   └── favicon.png         # Icône de l'application
├── docker-compose.yml      # Configuration Docker Compose
├── Dockerfile.prod         # Dockerfile de production
├── nginx.conf             # Configuration du serveur Nginx
├── index.html             # Template HTML
├── package.json           # Dépendances et scripts
└── vite.config.js        # Configuration Vite
```

## 🎮 Comment Jouer

1. **Choisir le Mode de Jeu** : Sélectionnez "Joueur vs Joueur" ou "Joueur vs IA" depuis le menu principal
2. **Sélectionner la Difficulté** (mode IA uniquement) : Choisissez Facile, Moyen ou Difficile
3. **Faire Votre Coup** : Cliquez sur n'importe quelle case vide pour placer votre marque (X ou O)
4. **Condition de Victoire** : Obtenez trois marques alignées (horizontale, verticale ou diagonale)
5. **Suivi des Scores** : Les scores sont suivis sur plusieurs manches
6. **Nouvelle Manche** : Cliquez sur "Nouvelle Manche" pour rejouer avec le même mode
7. **Réinitialiser les Scores** : Cliquez sur "Réinitialiser les Scores" pour effacer le tableau
8. **Changer de Mode** : Cliquez sur "Menu" pour retourner à la sélection du mode

## 🛠️ Technologies Utilisées

- **React 19.2.0** - Bibliothèque UI moderne avec hooks
- **Vite 7.2.4** - Outil de build de nouvelle génération avec HMR ultra-rapide
- **Bootstrap 5** - Framework CSS responsive
- **ESLint** - Qualité et cohérence du code
- **SWC** - Compilateur JavaScript/TypeScript super rapide
- **Docker** - Conteneurisation pour un déploiement facile
- **Nginx** - Serveur web haute performance pour la production

## 🎨 Caractéristiques de Design

### Typographie
- **Police** : Inter - Police sans-serif moderne et épurée
- **Graisses** : 400 (Regular), 500 (Medium), 600 (Semi-bold), 700 (Bold)

### Palette de Couleurs
- **Primaire** : Bleu (#007bff) pour le joueur X
- **Secondaire** : Violet (#6610f2) pour le joueur O
- **Succès** : Vert pour les victoires
- **Avertissement** : Jaune pour les égalités
- **Dégradé** : Thème dégradé violet (667eea → 764ba2)

### Animations
- **Scale-in** : Animation d'entrée pour le placement des coups
- **Pulse** : Effet de pulsation pour le badge du joueur actuel et les cases gagnantes
- **Bounce** : Animation de célébration de victoire
- **Slide-in** : Entrée fluide pour les éléments UI
- **Effets de survol** : Transitions douces sur tous les éléments interactifs
- **Shimmer** : Effet de brillance subtil au survol

### Composants UI
- **Glassmorphism** : Conteneurs semi-transparents avec flou d'arrière-plan
- **Coins arrondis** : Rayon de bordure moderne de 0.75rem
- **Ombres portées** : Effets de profondeur multi-couches
- **Superpositions dégradées** : Transitions de couleurs fluides
- **Cartes de score** : Système de suivi codé par couleur

## 🧩 Architecture des Composants

Le projet suit les meilleures pratiques React :

- **Séparation des Préoccupations** : Composants, hooks et utilitaires dans des dossiers séparés
- **Principe de Responsabilité Unique** : Chaque composant a un objectif clair
- **Réutilisabilité** : Composants conçus pour être réutilisés
- **Hooks Personnalisés** : Logique métier séparée des composants UI
- **Validation des Props** : Vérification de type et valeurs par défaut
- **Code Propre** : Conventions de nommage et style de code cohérents

## 🤖 Implémentation de l'IA

### Algorithme Minimax (Mode Difficile)
L'IA utilise l'**algorithme Minimax** classique avec les caractéristiques suivantes :
- Évalue tous les états de jeu possibles de manière récursive
- Attribue des scores : Victoire (+10), Défaite (-10), Égalité (0)
- Choisit le coup qui maximise les chances de l'IA
- Garantie de ne jamais perdre (seulement gagner ou faire match nul)
- Complexité computationnelle : O(9!)

### Mode Moyen
- 50% de chance de coup optimal (Minimax)
- 50% de chance de coup aléatoire
- Offre un défi équilibré pour les joueurs intermédiaires

### Mode Facile
- Sélection de coup complètement aléatoire
- Parfait pour les débutants et l'entraînement

## 📝 Scripts Disponibles

```bash
npm run dev      # Démarrer le serveur de développement (port 5173)
npm run build    # Construire pour la production
npm run preview  # Prévisualiser la version de production
npm run lint     # Exécuter ESLint pour la qualité du code
```

## 🐳 Commandes Docker

```bash
# Construire l'image Docker
docker-compose build

# Démarrer le conteneur
docker-compose up

# Démarrer en arrière-plan
docker-compose up -d

# Voir les logs
docker-compose logs -f

# Arrêter le conteneur
docker-compose down

# Reconstruire et redémarrer
docker-compose up --build
```

## 🌐 Compatibilité Navigateurs

- **Chrome/Edge** : Dernière version (recommandé)
- **Firefox** : Dernière version
- **Safari** : Dernière version
- **Navigateurs mobiles** : iOS Safari, Chrome Mobile

## 🔧 Configuration

### Configuration du Port
Le port par défaut est `8081`. Pour le modifier, éditez `docker-compose.yml` :

```yaml
ports:
  - "VOTRE_PORT:80"
```

### Configuration Nginx
Les paramètres du serveur peuvent être modifiés dans `nginx.conf` :
- Compression Gzip
- En-têtes de sécurité
- Paramètres de cache
- Types MIME

## 📊 Système de Score

- **Score Joueur X** : Suit les victoires de X
- **Score Joueur O** : Suit les victoires de O
- **Égalités** : Suit les parties nulles
- **Persistant** : Les scores persistent entre les manches jusqu'à réinitialisation
- **Design Visuel** : Cartes codées par couleur avec effets de survol

## 🎯 Améliorations Futures

Fonctionnalités potentielles pour les futures versions :
- Multijoueur en ligne avec WebSockets
- Historique et replay des parties
- Effets sonores et musique de fond
- Différentes tailles de plateau (4x4, 5x5)
- Thèmes et schémas de couleurs personnalisés
- Profils utilisateurs et statistiques
- Mode tournoi
- Système de classement

## 📄 Licence

Ce projet est open source et disponible sous licence MIT.

## 👨‍💻 Développement

Construit avec React + Vite pour une expérience de développement optimale :
- **Hot Module Replacement (HMR)** : Mises à jour instantanées sans rechargement complet
- **Fast refresh** : Préserve l'état des composants pendant l'édition
- **Démarrage instantané du serveur** : Le serveur de développement démarre en millisecondes
- **Builds optimisés** : Builds de production avec code splitting et minification
- **Outillage moderne** : ESLint, SWC et dernières fonctionnalités JavaScript

## 🤝 Contribution

Les contributions, problèmes et demandes de fonctionnalités sont les bienvenus !

### Comment Contribuer
1. Forker le projet
2. Créer votre branche de fonctionnalité (`git checkout -b feature/NouvelleFonctionnalite`)
3. Commiter vos changements (`git commit -m 'Ajout d'une nouvelle fonctionnalité'`)
4. Pousser vers la branche (`git push origin feature/NouvelleFonctionnalite`)
5. Ouvrir une Pull Request

## 🙏 Remerciements

- L'équipe React pour la bibliothèque incroyable
- L'équipe Vite pour l'outil de build ultra-rapide
- L'équipe Bootstrap pour le framework responsive
- Tous les contributeurs et joueurs

---

Fait avec ❤️ en utilisant React, Vite et Bootstrap

**Démo en Direct** : Accédez au jeu sur `http://localhost:8081` après déploiement

**Dernière Mise à Jour** : Novembre 2025

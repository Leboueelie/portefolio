# 🎨 Portfolio - Elie

Un portfolio web moderne et interactif construit avec React, Vite et Three.js. Showcase de compétences en développement frontend avec animations fluides et design contemporain.

🔗 **[Voir la démo live](https://portefolio-elie2.vercel.app)**

---

## ✨ Caractéristiques

- 🚀 **Performance optimale** - Vite pour un build ultra-rapide
- 🎭 **Animations fluides** - Framer Motion pour des transitions élégantes
- 🌍 **Scènes 3D** - Three.js pour des visuels immersifs
- 📧 **Formulaire de contact** - Intégration EmailJS
- 📱 **Responsive design** - Adaptation parfaite sur tous les appareils
- ⚡ **HMR** - Hot Module Replacement pour une excellente DX
- 🎯 **Parallaxe et effets** - React Parallax Tilt et animations au scroll
- 🎨 **Styling moderne** - Tailwind CSS pour une personnalisation rapide

---

## 🛠️ Stack Technologique

### Frontend
- **React** `19.2.6` - Bibliothèque UI
- **Vite** `8.0.12` - Build tool ultra-rapide
- **Three.js** `0.184.0` - Graphiques 3D
- **Framer Motion** `12.38.0` - Animations
- **Tailwind CSS** `3.4.19` - Styling utilitaire

### Librairies UI & UX
- `react-icons` - Icônes SVG
- `react-parallax-tilt` - Effet de parallaxe 3D
- `react-type-animation` - Animation de texte
- `react-tsparticles` - Particules animées
- `lenis` - Smooth scrolling
- `@react-three/fiber` - React pour Three.js
- `@react-three/drei` - Utilitaires Three.js

### Email & Export
- `@emailjs/browser` - Service d'email côté client
- `@react-pdf/renderer` - Génération de PDF

### Développement
- **ESLint** `10.3.0` - Linting JavaScript
- **Tailwind CSS** - CSS framework utilitaire
- **PostCSS** - Outils CSS avancés

---

## 🚀 Installation & Démarrage

### Prérequis
- Node.js `16+` et npm/yarn

### Étapes d'installation

```bash
# Cloner le projet
git clone https://github.com/Leboueelie/portefolio.git
cd portefolio

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible à `http://localhost:5173`

---

## 📦 Scripts Disponibles

```bash
# Démarrer le serveur de développement avec HMR
npm run dev

# Compiler pour la production
npm run build

# Prévisualiser la build production localement
npm run preview

# Vérifier les erreurs de linting
npm run lint
```

---

## 📁 Structure du Projet

```
portefolio/
├── src/
│   ├── components/       # Composants React réutilisables
│   ├── pages/            # Pages principales
│   ├── styles/           # Styles globaux & Tailwind
│   ├── assets/           # Images, fonts, ressources
│   ├── App.jsx
│   └── main.jsx
├── public/               # Ressources statiques
├── vite.config.js        # Configuration Vite
├── tailwind.config.js    # Configuration Tailwind CSS
├── eslint.config.js      # Configuration ESLint
├── package.json
└── README.md
```

---

## ⚙️ Configuration

### Vite
Configuré avec le plugin React officiel pour un support optimal de l'HMR.

### Tailwind CSS
Utilisé pour le styling utility-first. Configuration personnalisable dans `tailwind.config.js`

### ESLint
Configuration ESLint avancée avec support React et React Hooks. Peut être étendu avec TypeScript si souhaité.

---

## 📧 Configuration EmailJS

Pour activer le formulaire de contact :

1. Créer un compte sur [EmailJS](https://www.emailjs.com/)
2. Configurer vos templates d'email
3. Ajouter vos identifiants dans le fichier d'environnement:

```javascript
// Dans votre composant de contact
emailjs.init("YOUR_PUBLIC_KEY");
```

Consultez la [documentation EmailJS](https://www.emailjs.com/docs/) pour plus de détails.

---

## 🌍 Déploiement

Le projet est déployé sur **Vercel** et se met à jour automatiquement à chaque push sur `main`.

- URL de production : https://portefolio-elie2.vercel.app
- Buildpack : Node.js
- Command : `npm run build`
- Output : `dist`

---

## 📊 Performance

- **Lighthouse Score** : Optimisé pour les performances
- **Bundle Size** : Optimisé avec Vite
- **Code Splitting** : Automatique avec Vite

---

## 🤝 Contribution

Les contributions sont les bienvenues ! Pour contribuer :

1. Fork le projet
2. Créer une branche (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

---

## 📄 Licence

Ce projet est sous licence **MIT**. Consultez le fichier [LICENSE](LICENSE) pour plus de détails.

---

## 👤 Auteur

**Elie** - Développeur Frontend

- GitHub : [@Leboueelie](https://github.com/Leboueelie)
- Portfolio : [portefolio-elie2.vercel.app](https://portefolio-elie2.vercel.app)

---

## 🙏 Remerciements

- [React](https://react.dev)
- [Vite](https://vitejs.dev)
- [Three.js](https://threejs.org)
- [Framer Motion](https://www.framer.com/motion)
- [Tailwind CSS](https://tailwindcss.com)
- [Vercel](https://vercel.com)

---

**Dernière mise à jour :** 14 mai 2026

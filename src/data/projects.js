export const projects = [
  {
    id: 1,
    title: "CV Builder",
    shortDescription:
      "Generateur de CV intelligent permettant de creer, personnaliser et exporter des CV professionnels en quelques clics.",
    longDescription:
      "Application web complete de creation de CV. L'utilisateur saisit ses informations via un formulaire intuitif, choisit un template, previsualise en temps reel et exporte le CV en PDF. Le back-end gere l'authentification et le stockage des CV crees.",
    features: [
      "Formulaires dynamiques (experiences, formations)",
      "Previsualisation en temps reel",
      "Export PDF",
      "Authentification JWT",
      "Dashboard utilisateur",
    ],
    challenges:
      "Gerer la mise en page PDF fidele a la previsualisation web, synchronisation temps reel.",
    role: "Developpeur full stack",
    technos: ["Next.js", "Tailwind CSS", "TypeScript", "Prisma", "PostgreSQL"],
    image: "/projects/cv-builder.png",
    github: "https://github.com/Leboueelie/cvbuilder",
    demo: "https://cvbuilder-alpha.vercel.app/",
    date: "2026",
  },
  {
    id: 2,
    title: "Roc Lie",
    shortDescription:
      "Plateforme de gestion de lieux et d'evenements avec API REST robuste et interface reactive.",
    longDescription:
      "Application de gestion de lieux (salles, espaces) et d'evenements associes. API REST avec Django REST Framework, interface React. Possibilite de reserver, filtrer par disponibilite, gerer les utilisateurs.",
    features: [
      "CRUD Lieux & Evenements",
      "Filtres de disponibilite",
      "Authentification",
      "Deploiement Docker",
    ],
    challenges:
      "Conception d'une API modulaire, gestion des conflits de reservation.",
    role: "Developpeur full stack, conception API",
    technos: ["Django DRF", "React", "Vite", "PostgreSQL", "Docker"],
    image: "/projects/roc-lie.png",
    github: "https://github.com/Leboueelie/task-manager-v1",
    demo: null,
    date: "2025",
  },
  {
    id: 3,
    title: "AfriCode",
    shortDescription:
      "Plateforme d'apprentissage collaboratif pour developpeurs africains avec editeur de code en ligne.",
    longDescription:
      "Espace d'apprentissage et de partage pour developpeurs. Editeur de code integre (Monaco Editor), exercices, forums, suivi de progression.",
    features: [
      "Editeur de code live",
      "Exercices interactifs",
      "Forum communautaire",
      "Classements",
    ],
    challenges:
      "Execution securisee du code utilisateur, performance de l'editeur.",
    role: "Developpeur full stack, responsable backend",
    technos: ["NestJS", "React", "PostgreSQL", "Docker"],
    image: "/projects/africode.png",
    github: null,
    demo: null,
    date: "2026",
  },
  {
    id: 4,
    title: "The IT Foundation",
    shortDescription:
      "Site institutionnel avec blog integre pour une organisation a but non lucratif axee sur la formation IT.",
    longDescription:
      "Refonte complete du site de la fondation : design moderne, blog avec articles, espace donateur, newsletter. Amelioration du SEO et des performances.",
    features: [
      "Blog avec CMS",
      "Espace donateur",
      "Newsletter",
      "Optimisation SEO",
    ],
    challenges: "Migration de l'ancien site, integration d'un CMS headless.",
    role: "Developpeur frontend principal",
    technos: ["NestJS", "Axios", "React", "Tailwind CSS"],
    image: "/projects/it-foundation.png",
    github: null,
    demo: "https://bo.the-itf.com/",
    date: "2026",
  },
  {
    id: 5,
    title: "Dashboard Admin",
    shortDescription:
      "Tableau de bord administratif moderne avec visualisation de donnees en temps reel.",
    longDescription:
      "Dashboard pour la gestion interne d'une administration publique fictive : statistiques, graphiques dynamiques, gestion des utilisateurs, exports de rapports.",
    features: [
      "Graphiques Chart.js",
      "Gestion des roles",
      "Export PDF/Excel",
      "Temps reel",
    ],
    challenges:
      "Mise en place des WebSockets pour les donnees en direct, securisation des acces.",
    role: "Developpeur full stack",
    technos: ["Vite", "React", "Node.js", "Socket.io", "PostgreSQL"],
    image: "/projects/dashboard.jpg",
    github: "https://github.com/Leboueelie/dashboard",
    demo: null,
    date: "2026",
  },

  {
    id: 6,
    title: "Portfolio LBT",
    shortDescription:
      "Portfolio professionnel immersif avec animations avancées, mode sombre et accent personnalisable.",
    longDescription:
      "Site portfolio développé avec Vite et React, mettant en avant mes compétences full stack et mon parcours en E-administration. Interface moderne avec curseur personnalisé, particules animées, modale de projet détaillée, et CV PDF téléchargeable. Le site propose un mode sombre, un mode éco et un changement dynamique de la couleur d'accent.",
    features: [
      "Design immersif avec glassmorphism et vagues SVG",
      "Curseur personnalisé avec texte contextuel",
      "Mode sombre / clair avec persistance",
      "Mode éco réduisant les animations",
      "Changement d'accent dynamique (orange, vert, bleu)",
      "Modale détaillée pour chaque projet",
      "Particules animées interactives au canvas",
      "CV PDF généré dynamiquement",
      "Timeline de parcours",
      "Easter egg Konami",
    ],
    challenges:
      "Gestion du scroll lorsque la modale est ouverte, création d'un curseur personnalisé cross-browser, adaptation du mode sombre à tous les composants, optimisation des animations.",
    role: "Développeur full stack, designer UI/UX",
    technos: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "Three.js",
      "EmailJS",
      "react-pdf",
    ],
    image: "/projects/portfolio-lbt.png",
    github: "https://github.com/Leboueelie/portefolio",
    demo: "https://portefolio-neon-gamma.vercel.app/",
    date: "2026",
  },
];

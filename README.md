# 🌍 KitokoCSS — v1.0.0

**KitokoCSS** est un framework UI moderne, ultra-léger et modulaire conçu pour créer des interfaces élégantes et rapides. 

> *"Kitoko"* signifie "Beau" ou "Joli" en Lingala. Ce framework porte cette philosophie dans son code épuré et son rendu visuel moderne.

---

## 🚀 Pourquoi KitokoCSS ?

- **Poids Plume** : Uniquement l'essentiel. Pas de surcharge inutile.
- **Modulaire** : Construit avec Sass (`@use`), importez uniquement les modules dont vous avez besoin.
- **Grille Intelligente** : Un système de 12 colonnes responsive et flexible.
- **JS Natif** : Une interactivité fluide sans dépendances (pas de jQuery).
- **Prêt pour le futur** : Zéro avertissement de dépréciation Sass.

---

## 📂 Structure du Framework

```text
kitokocss/
├── dist/               # Fichiers compilés (CSS & JS minifiés)
├── js/                 # Logique JavaScript (kitoko.js)
├── scss/               # Sources Sass
│   ├── base/           # Reset, Typographie
│   ├── components/     # Buttons, Cards, Navbar
│   ├── core/           # Variables, Mixins
│   ├── layout/         # Grid, Container
│   └── utilities/      # Classes utilitaires (marge, padding)
└── index.html          # Page de test/démo
```

## 🛠 Installation
1. **Utilisation directe**
Pour une installation rapide, liez les ressources via le CDN jsDelivr :
```bash
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/fomadev/kitokocss@1.0.0/dist/css/kitoko.css">

<script src="https://cdn.jsdelivr.net/gh/fomadev/kitokocss@1.0.0/dist/js/kitoko.js" defer></script>
```

2. **Pour le développement (Sass)**
Clonez le dépôt et installez les outils de compilation :
```bash
npm install
npm run watch   # Surveille et compile vos changements en direct
npm run build   # Génère la version minifiée pour la production
```

## 🧩 Guide Rapide des Composants
**La Grille (Responsive)**
```html
<div class="k-row">
  <div class="k-col-md-6">Colonne 1 (50%)</div>
  <div class="k-col-md-6">Colonne 2 (50%)</div>
</div>
```

**Les Boutons**
```html
<button class="k-btn k-btn-primary">Bouton Principal</button>
<button class="k-btn k-btn-outline k-btn-lg">Grand Bouton Outline</button>
```

**Les Utilitaires**

Utilisez les classes rapides pour l'espacement :

* `.k-mt-4` : Margin Top 1.5rem

* `.k-p-2` : Padding 0.5rem

* `.k-d-flex` : Display Flex

## 🤝 Contribution
KitokoCSS est un projet open-source. Les suggestions de nouveaux composants (Modales, Badges, Forms) sont les bienvenues !

1. Forkez le projet.

2. Créez votre branche de fonctionnalité (git checkout -b feature/NomDuModule).

3. Proposez une Pull Request.
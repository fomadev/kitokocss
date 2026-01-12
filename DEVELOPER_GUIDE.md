# KitokoCSS v1.1.0 - Guide du Développeur

## 📚 Architecture du Projet

```
kitokocss/
├── src/                          # Code source SCSS
│   ├── main.scss                # Fichier principal
│   ├── config/                  # Configuration
│   │   ├── _variables.scss      # Variables CSS
│   │   └── _breakpoints.scss    # Breakpoints responsive
│   ├── base/                    # Styles de base
│   │   ├── _reset.scss          # Reset CSS
│   │   └── _typography.scss     # Typographie de base
│   ├── layout/                  # Layouts
│   │   └── _grid.scss           # Système de grille
│   ├── components/              # Composants
│   │   ├── _button.scss         # Boutons (v1.0)
│   │   ├── _card.scss           # Cartes (v1.0)
│   │   ├── _alert.scss          # Alertes (v1.0)
│   │   ├── _badge.scss          # Badges (v1.0)
│   │   ├── _form.scss           # Formulaires (v1.0)
│   │   ├── _navbar.scss         # Navigation (v1.0)
│   │   ├── _modal.scss          # Modales (v1.0)
│   │   ├── _table.scss          # Tableaux (v1.0)
│   │   ├── _pagination.scss     # Pagination (v1.0)
│   │   ├── _carousel.scss       # Carrousels (v1.0)
│   │   ├── _toast.scss          # Toasts (v1.0)
│   │   ├── _tabs.scss           # Tabs (v1.1) ✨ NEW
│   │   ├── _accordion.scss      # Accordion (v1.1) ✨ NEW
│   │   ├── _breadcrumb.scss     # Breadcrumb (v1.1) ✨ NEW
│   │   ├── _spinner.scss        # Spinner (v1.1) ✨ NEW
│   │   ├── _skeleton.scss       # Skeleton (v1.1) ✨ NEW
│   │   └── _tooltip.scss        # Tooltip (v1.1) ✨ NEW
│   ├── utilities/               # Classes utilitaires
│   │   ├── _spacing.scss        # Marges et paddings (v1.0)
│   │   ├── _display.scss        # Display (v1.0)
│   │   ├── _flexbox.scss        # Flexbox (v1.0)
│   │   ├── _colors.scss         # Couleurs (v1.0)
│   │   ├── _borders.scss        # Bordures (v1.0)
│   │   ├── _shadows.scss        # Ombres (v1.0)
│   │   ├── _animations.scss     # Animations (v1.1) ✨ NEW
│   │   ├── _transitions.scss    # Transitions (v1.1) ✨ NEW
│   │   ├── _typography-advanced.scss  # Typography avancée (v1.1) ✨ NEW
│   │   ├── _gradients.scss      # Gradients (v1.1) ✨ NEW
│   │   ├── _opacity.scss        # Opacité (v1.1) ✨ NEW
│   │   └── _hover-effects.scss  # Effets hover (v1.1) ✨ NEW
│   └── mixins/                  # Mixins SCSS
│       ├── _utilities.scss      # Mixins utilitaires
│       └── _button.scss         # Mixins boutons
├── dist/                        # Fichiers compilés
│   ├── kitoko.css               # CSS compilé
│   ├── kitoko.min.css           # CSS minifié
│   └── kitoko.bundle.min.js     # JavaScript minifié
├── docs/                        # Documentation
│   ├── index.html               # Doc HTML principale
│   ├── GUIDE_V1_1.md            # Guide complet v1.1 (v1.1) ✨ NEW
│   └── v1-1-documentation.html  # Doc HTML v1.1 (v1.1) ✨ NEW
├── examples/                    # Exemples
│   ├── index.html               # Accueil des exemples
│   ├── dashboard.html           # Dashboard (v1.0)
│   ├── landing-page.html        # Landing page (v1.0)
│   ├── blog-article.html        # Article blog (v1.0)
│   ├── e-commerce-product.html  # Produit e-commerce (v1.0)
│   ├── portfolio.html           # Portfolio (v1.0)
│   ├── contact.html             # Contact (v1.0)
│   ├── v1-1-showcase.html       # Showcase v1.1 (v1.1) ✨ NEW
│   └── animations-transitions.html # Animations (v1.1) ✨ NEW
├── js/                          # JavaScript
│   └── kitoko.bundle.js         # Bundle JavaScript
├── package.json                 # Configuration npm
├── VERSION                      # Fichier version
├── README.md                    # Documentation principale
├── CHANGELOG.md                 # Historique des versions
├── LICENSE                      # Licence MIT
├── UPDATE_SUMMARY_V1_1.md       # Résumé des mises à jour (v1.1) ✨ NEW
└── DEPLOYMENT_CHECKLIST.md      # Check-list déploiement (v1.1) ✨ NEW
```

---

## 🛠️ Setup du Développement

### Installation
```bash
# Cloner le repository
git clone https://github.com/fomadev/kitokocss.git
cd kitokocss

# Installer les dépendances
npm install

# Compiler les SCSS
npm run build
```

### Scripts Disponibles
```bash
# Compiler tous les fichiers
npm run build

# Compiler uniquement le CSS
npm run build:css

# Compiler uniquement le JS
npm run build:js

# Mode watch (surveillance)
npm run watch
# ou
npm run dev
```

---

## 📝 Guide de Développement

### Structure SCSS

#### Ordre d'Importation
1. **Config** - Variables et breakpoints
2. **Mixins** - Fonctions SCSS réutilisables
3. **Base** - Styles de base (reset, typography)
4. **Layout** - Grilles et layouts
5. **Components** - Composants UI
6. **Utilities** - Classes utilitaires

#### Naming Convention
- **Classes** : Préfixe `kt-` + kebab-case
  ```scss
  .kt-btn { }
  .kt-btn-primary { }
  .kt-text-center { }
  ```

- **Variables** : Préfixe `$kt-` + kebab-case
  ```scss
  $kt-primary: #007bff;
  $kt-border-color: #dee2e6;
  ```

- **Mixins** : Verbe + nom en kebab-case
  ```scss
  @mixin responsive-font { }
  @mixin flex-center { }
  ```

### Ajouter un Nouveau Composant

#### 1. Créer le fichier SCSS
Créer `src/components/_new-component.scss`

```scss
// ============================================
// KitokoCSS v1.x - New Component
// ============================================

.kt-new-component {
  // Styles principaux
  
  &.kt-variant {
    // Variantes
  }
}
```

#### 2. Importer dans main.scss
```scss
// À ajouter à la section Components
@import 'components/new-component';
```

#### 3. Compiler
```bash
npm run build
```

#### 4. Créer des exemples
Ajouter des exemples HTML dans `examples/`

---

### Ajouter un Nouvel Utilitaire

#### 1. Créer le fichier SCSS
Créer `src/utilities/_new-utility.scss`

```scss
// ============================================
// KitokoCSS v1.x - New Utility
// ============================================

.kt-new-utility {
  // Propriété : valeur
}

.kt-new-utility-sm {
  // Variante small
}

.kt-new-utility-lg {
  // Variante large
}
```

#### 2. Importer dans main.scss
```scss
// À ajouter à la section Utilities
@import 'utilities/new-utility';
```

#### 3. Compiler et tester
```bash
npm run build
# Tester dans les exemples
```

---

## 🎨 Variables Personnalisables

Modifier `src/config/_variables.scss` pour personnaliser :

```scss
// Couleurs
$kt-primary: #007bff;
$kt-secondary: #6c757d;
$kt-success: #28a745;
$kt-danger: #dc3545;
$kt-warning: #ffc107;
$kt-info: #17a2b8;

// Typographie
$kt-font-family-base: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto;
$kt-font-size-base: 1rem;
$kt-font-weight-bold: 700;

// Espacements
$kt-spacer: 1rem;
$kt-spacers: (
  1: $kt-spacer * 0.25,  // 0.25rem
  2: $kt-spacer * 0.5,   // 0.5rem
  3: $kt-spacer,         // 1rem
  // ...
);

// Bordures
$kt-border-width: 1px;
$kt-border-radius: 4px;
```

---

## 🔄 Responsive Design

### Breakpoints Disponibles
```scss
// Définis dans src/config/_breakpoints.scss
$kt-breakpoints: (
  'xs': 0,       // Extra small
  'sm': 576px,   // Small
  'md': 768px,   // Medium
  'lg': 992px,   // Large
  'xl': 1200px,  // Extra large
  'xxl': 1400px  // XXL
)
```

### Utiliser les Breakpoints
```scss
// Utiliser le mixin @media
@media (min-width: 768px) {
  .kt-component {
    // Styles pour medium et plus
  }
}

// Ou avec SCSS
.kt-col-md-6 {
  @media (min-width: 768px) {
    width: 50%;
  }
}
```

---

## 🧪 Testing

### Tests Manuels Recommandés
1. **Tous les composants** - Vérifier rendu visuel
2. **Responsivité** - Tester sur mobile, tablet, desktop
3. **Compatibilité navigateurs** - Chrome, Firefox, Safari, Edge
4. **Mode sombre** - Vérifier `prefers-color-scheme`
5. **Accessibilité** - A11Y avec lecteurs d'écran

### Navigateurs Supportés
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

---

## 📚 Ressources

### Documentation Interne
- [README.md](../README.md) - Documentation principale
- [CHANGELOG.md](../CHANGELOG.md) - Historique des versions
- [docs/GUIDE_V1_1.md](../docs/GUIDE_V1_1.md) - Guide complet v1.1

### Documentation Externe
- [MDN - SCSS/SASS](https://sass-lang.com/documentation)
- [MDN - CSS Transitions](https://developer.mozilla.org/docs/Web/CSS/CSS_Transitions)
- [MDN - CSS Animations](https://developer.mozilla.org/docs/Web/CSS/CSS_Animations)

---

## 🤝 Contribuer

### Avant de Contribuer
1. Forker le repository
2. Créer une branche : `git checkout -b feature/ma-feature`
3. Suivre les conventions de nommage
4. Tester complètement
5. Créer une pull request

### Conventions de Commit
```bash
git commit -m "feat: ajouter nouveau composant"
git commit -m "fix: corriger le bug du bouton"
git commit -m "docs: mettre à jour la documentation"
git commit -m "style: formater le code SCSS"
```

---

## 🐛 Debugging

### SCSS Compilation
```bash
# Activer le watch mode
npm run dev

# Vérifier les erreurs de compilation
npm run build 2>&1 | grep -i error
```

### CSS Issues
- Vérifier l'ordre des imports dans `main.scss`
- Vérifier les conflits de noms de classes
- Utiliser les DevTools du navigateur

### JavaScript Issues
- Vérifier la console du navigateur
- Utiliser `console.log()` pour déboguer
- Vérifier que `kitoko.bundle.js` est inclus

---

## 📈 Performance

### Optimisations Appliquées
- **Minification CSS** : `kitoko.min.css`
- **Minification JS** : `kitoko.bundle.min.js`
- **Structure modulaire** : Importer seulement ce qui est nécessaire
- **Pas de dépendances externes** : Framework indépendant

### Tips de Performance
- Utiliser `kitoko.min.css` en production
- Utiliser les classes utilitaires plutôt que du CSS custom
- Minifier le JavaScript côté client
- Utiliser le CDN jsDelivr pour cache global

---

## 🎯 Vision Future

### Idées pour les Prochaines Versions
- [ ] Composant Dropdown/Select avancé
- [ ] Composant Popover
- [ ] Composant Stepper
- [ ] Plus de thèmes prédefinis
- [ ] Framework agnostique (Vue, React, Angular)
- [ ] Plus d'animations
- [ ] Support du Mode sombre avancé

---

## 📞 Support

Pour toute question ou problème :
1. Consulter la documentation
2. Vérifier les issues existantes
3. Créer une nouvelle issue
4. Rejoindre la communauté GitHub

---

**Créé par FomaDev - 12 janvier 2026**

Bon développement ! 🚀

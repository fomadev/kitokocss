# Changelog

Tous les changements notables de ce projet seront documentés dans ce fichier.

Le format est basé sur [Keep a Changelog](https://keepachangelog.com/fr/1.0.0/),
et ce projet adhère à [Semantic Versioning](https://semver.org/lang/fr/).

## [1.1.0] - 2026-01-12

### Ajouté

#### Nouveaux Composants
- **Tabs** - Navigation par onglets avec variantes (default, vertical, pills)
- **Accordion** - Contenu dépliable avec support des états expanded/collapsed
- **Breadcrumb** - Fil d'Ariane pour la navigation hiérarchique
- **Spinner** - Indicateurs de chargement (border, grow) avec tailles (sm, base, lg)
- **Skeleton** - Placeholders de chargement avec animations fluides
- **Tooltip** - Infobulles positionnables (top, bottom, left, right) avec variantes couleur

#### Nouveaux Utilitaires
- **Animations** - 10 animations CSS (fadeIn, slideIn, zoomIn, bounce, pulse, heartbeat, etc.)
- **Transitions** - Classes de transition fluides avec timing functions et durées
- **Hover Effects** - Effets au survol avancés (lift, glow, scale, rotate, opacity, etc.)
- **Typography Advanced** - Clamp de texte, lettrage, hauteur de ligne, tailles étendues
- **Gradients** - Dégradés directionnels, radiaux et variantes sémantiques
- **Opacity** - Contrôle fin de l'opacité (0 à 100%)

#### Améliorations
- Architecture SCSS complètement modulaire et extensible
- Support complet des CSS Variables pour personnalisation
- Animations fluides sur tous les composants interactifs
- Effets hover uniformes et élégants
- Classes d'utilitaire supplémentaires pour plus de flexibilité
- Documentation des codes améliorée

### Modifications

- Titre principal README passe de v1.0 à v1.1
- Description du framework mise à jour (mention de l'extensibilité)
- Version dans package.json et VERSION file mise à jour à 1.1.0
- Tous les liens CDN mis à jour vers v1.1.0

### Documentation
- Guide amélioré avec exemples des nouveaux composants
- Exemples HTML mises à jour pour utiliser les nouvelles fonctionnalités
- Documentation complète des nouvelles classes d'utilitaire

## [1.0.0] - 2025-11-27

### Ajouté
- Framework CSS complet avec préfixe `kt-`
- Système de grille responsive avec 12 colonnes et 6 breakpoints (xs, sm, md, lg, xl, xxl)
- Composants UI complets :
  - Boutons (primary, secondary, success, danger, warning, info, light, dark) avec variantes outline
  - Cartes avec header, body et footer
  - Alertes avec support dismissible
  - Badges avec variantes pill
  - Formulaires avec états de validation
  - Navigation avec toggler mobile
  - Modales
  - Tableaux (striped, bordered, hoverable)
  - Pagination
  - Carrousels
  - Toasts/Snackbars
- Classes utilitaires :
  - Espacement (marges et paddings)
  - Display (none, block, flex, etc.)
  - Flexbox (justify, align, gap, etc.)
  - Couleurs (texte et fond)
  - Bordures et coins arrondis
  - Ombres
- JavaScript compagnon léger (Vanilla JS) pour composants interactifs
- Documentation complète avec exemples
- Guide rapide pour démarrage
- Templates d'exemple :
  - Dashboard
  - Landing Page
  - Blog Article
  - E-commerce Product
  - Portfolio
  - Contact
- Support du mode sombre via `prefers-color-scheme`
- Architecture modulaire SCSS pour personnalisation facile
- CDN via jsDelivr
- Système de couleurs sémantiques avec palette complète

### Documentation
- Documentation complète dans `docs/index.html`
- Guide rapide dans `guide.html`
- README avec instructions d'installation
- Exemples fonctionnels dans `examples/`

### Technique
- Code source modulaire en SCSS
- Compilation via Sass
- Support des variables CSS personnalisables
- Accessibilité (A11Y) avec attributs ARIA
- Compatible avec tous les navigateurs modernes


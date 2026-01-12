# KitokoCSS v1.1

**KitokoCSS** est un framework CSS moderne, esthétique, hautement performant et hautement extensible, conçu pour accélérer le développement front-end sans compromettre le design. Fini les interfaces banales, créez des applications véritablement "Kitoko" (belles).

## 🚀 Nouveautés v1.1.0

Découvrez les nouvelles fonctionnalités de cette version :

- **6 nouveaux composants** : Tabs, Accordion, Breadcrumb, Spinner, Skeleton, Tooltip
- **Animations fluides** : 10+ animations CSS prêtes à l'emploi
- **Transitions élégantes** : Classes de transition et effets au survol avancés
- **Gradients modernes** : Support des dégradés directionnels et radiaux
- **Typographie avancée** : Clamp de texte, lettrage, et bien plus
- **Utilitaires d'opacité** : Contrôle fin de la transparence
- **Effets hover** : Transformation, zoom, ombre, et effets visuels

## Philosophie

- **Design-First & Esthétique** : Tous les composants ont un design par défaut moderne, épuré et attrayant
- **Facilité d'Utilisation** : Syntaxe simple et intuitive avec le préfixe `kt-`
- **Performance** : Code léger, optimisé et modulaire
- **Responsivité Universelle** : Gestion de tous les breakpoints, du mobile aux écrans 8K
- **Extensibilité** : Architecture modulaire pour personnalisation facile

## Installation

### Via CDN (Recommandé)

```html
<!-- CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/fomadev/kitokocss@v1.1.0/dist/kitoko.min.css">

<!-- JavaScript (optionnel, pour les composants interactifs) -->
<script src="https://cdn.jsdelivr.net/gh/fomadev/kitokocss@v1.1.0/dist/kitoko.bundle.min.js"></script>
```

## Démarrage Rapide

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>KitokoCSS v1.1 - Démarrage</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/fomadev/kitokocss@v1.1.0/dist/kitoko.min.css">
</head>
<body>
    <div class="kt-container">
        <h1 class="kt-animate-fade-in">Bienvenue dans KitokoCSS v1.1</h1>
        <button class="kt-btn kt-btn-primary kt-hover-lift">Commencer</button>
        
        <!-- Nouvel exemple Tabs -->
        <div class="kt-tabs kt-mt-5">
            <ul class="kt-tabs-nav">
                <li><button class="kt-tab-link kt-active">Accueil</button></li>
                <li><button class="kt-tab-link">Fonctionnalités</button></li>
                <li><button class="kt-tab-link">Contact</button></li>
            </ul>
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/gh/fomadev/kitokocss@v1.1.0/dist/kitoko.bundle.min.js"></script>
</body>
</html>
```
mis à jour le 12 janvier 2026 pour la version 1.1.0
## Documentation

- **[Documentation Complète](https://kitokocss.wuaze.com/docs/index.html)** - Apprenez à utiliser KitokoCSS du début à la fin
- **[Guide Rapide](https://kitokocss.wuaze.com/guide.html)** - Démarrage rapide avec liens CDN
- **[Exemples](./examples/index.html)** - Templates prêts à l'emploi

## Développement

Ce framework est développé par l'équipe **FomaDev** et publié le 27 novembre 2025.

## Licence

Ce projet est sous licence [MIT](./LICENSE).

## Changelog

Consultez le [CHANGELOG.md](./CHANGELOG.md) pour voir l'historique des versions.

## Contribution

Les contributions sont les bienvenues ! KitokoCSS est un projet ouvert : proposez vos idées,
signalez un bug ou soumettez une pull request pour améliorer le framework, la documentation ou
les exemples. Rejoignez la discussion sur GitHub : https://github.com/fomadev/kitokocss

## Support

Pour toute question ou problème, consultez la [documentation complète](https://kitokocss.wuaze.com/docs/index.html) ou le [guide rapide](https://kitokocss.wuaze.com/guide.html).

## Rejoindre la communauté

- ⭐ Donnez une étoile sur GitHub pour soutenir le projet
- 🐛 Ouvrez des issues pour remonter bugs ou idées
- 🔀 Soumettez des pull requests pour améliorer composants, docs ou exemples
- 💬 Rejoignez la discussion sur https://github.com/fomadev/kitokocss et aidez KitokoCSS à grandir


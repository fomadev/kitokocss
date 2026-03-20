# KitokoCSS v2.0.0

KitokoCSS n'est pas qu'un framework UI. C'est un écosystème conçu pour la performance et la beauté (Kitoko). Basé sur une architecture de micro-modules, il vous permet d'installer uniquement ce dont vous avez besoin.

---

## Pourquoi KitokoCSS ?

* **Architecture Modulaire :** Importez le `core` et ajoutez des extensions (`navbar`, `cards`, `buttons`) via notre CLI.
* **Design "Kitoko" :** Un ADN visuel basé sur le Glassmorphism, des ombres colorées et une typographie fluide.
* **Performance Absolute :** Pas de runtime lourd. Juste du CSS moderne optimisé (Sass + CleanCSS).
* **Responsive Révolutionnaire :** Un système de grille intelligent qui s'adapte sans Media Queries complexes.
* **Mode Sombre Natif :** Support automatique basé sur les préférences système.

---

## 🛠 Installation & Setup

### 1. Cloner le projet
```bash
git clone https://github.com/fomadev/kitokocss.git
cd kitokocss
```

### 2. Installer les dépendances (Workspaces)
```bash
npm install
```

### 3. Compiler le framework
```bash
npm run build
```

## Structure du Framework
KitokoCSS utilise une structure **Monorepo** pour une modularité maximale :

`packages/kitoko-core` : Les fondations (Variables, Grid, Reset, Typography).

`packages/kitoko-cli` : L'outil de ligne de commande pour gérer vos modules.

`packages/kitoko-components` : Bibliothèque de composants premium.

## Utilisation Rapide
Voici comment créer une interface magnifique en quelques classes :

```html
<div class="ktk-grid">
  <div class="ktk-card ktk-glass">
    <h3 class="ktk-h3">Innovation</h3>
    <p>Le futur du design web est ici.</p>
    <button class="ktk-btn">Découvrir</button>
  </div>
</div>
```

## Développement (Scripts)
`npm run dev` : Lancer le mode watch pour le SCSS.

`npm run build` : Compiler et minifier tout l'écosystème.

`npm run clean` : Nettoyer les dossiers de production.

## 👨‍💻 Auteur
<a href="https://github.com/fordimalanda">MOLENGO MALANDA FORDI</a> - Initial work - <a href="https://github.com/fomadev">fomadev</a>

# 📄 Licence
Ce projet est sous licence <a href="LICENCE">MIT</a> - voir le fichier LICENSE pour plus de détails.
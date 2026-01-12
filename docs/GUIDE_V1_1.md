# KitokoCSS v1.1.0 - Guide Complet

## 📋 Table des Matières

1. [Nouveaux Composants](#nouveaux-composants)
2. [Nouveaux Utilitaires](#nouveaux-utilitaires)
3. [Exemples Détaillés](#exemples-détaillés)
4. [Changelog](#changelog)

---

## 🎁 Nouveaux Composants

### 1. Tabs (Onglets)

Les tabs permettent de naviguer entre plusieurs sections de contenu de manière élégante.

#### Syntaxe de Base

```html
<div class="kt-tabs">
    <ul class="kt-tabs-nav">
        <li><button class="kt-tab-link kt-active">Onglet 1</button></li>
        <li><button class="kt-tab-link">Onglet 2</button></li>
        <li><button class="kt-tab-link">Onglet 3</button></li>
    </ul>
    <div class="kt-tabs-content">
        <div class="kt-tab-pane kt-active">Contenu 1</div>
        <div class="kt-tab-pane">Contenu 2</div>
        <div class="kt-tab-pane">Contenu 3</div>
    </div>
</div>
```

#### Variantes

- **Tabs Verticaux** : Ajoutez la classe `kt-tabs-vertical`
- **Pills** : Ajoutez la classe `kt-tabs-pills`

#### Exemple JavaScript

```javascript
function switchTab(event, tabId) {
    document.querySelectorAll('.kt-tab-pane').forEach(tab => {
        tab.classList.remove('kt-active');
    });
    document.querySelectorAll('.kt-tab-link').forEach(link => {
        link.classList.remove('kt-active');
    });
    
    document.getElementById(tabId).classList.add('kt-active');
    event.target.classList.add('kt-active');
}
```

---

### 2. Accordion (Accordéon)

L'accordéon permet d'afficher/masquer du contenu de manière structurée.

#### Syntaxe de Base

```html
<div class="kt-accordion">
    <div class="kt-accordion-item">
        <button class="kt-accordion-header">
            <span>Titre de l'élément</span>
            <span class="kt-accordion-toggle">▼</span>
        </button>
        <div class="kt-accordion-body">Contenu caché</div>
    </div>
</div>
```

#### Variante Flush

Supprimez les bordures avec `kt-accordion-flush`

#### Exemple JavaScript

```javascript
function toggleAccordion(event) {
    const item = event.target.closest('.kt-accordion-item');
    const body = item.querySelector('.kt-accordion-body');
    
    body.classList.toggle('kt-active');
    item.classList.toggle('kt-active');
}
```

---

### 3. Breadcrumb (Fil d'Ariane)

Montrez le chemin de navigation à vos utilisateurs.

#### Syntaxe de Base

```html
<nav>
    <ul class="kt-breadcrumb">
        <li class="kt-breadcrumb-item"><a href="#">Accueil</a></li>
        <li class="kt-breadcrumb-item"><a href="#">Catégorie</a></li>
        <li class="kt-breadcrumb-item kt-active">Page Actuelle</li>
    </ul>
</nav>
```

#### Variante Icônes

Ajoutez la classe `kt-breadcrumb-icon` pour une version avec icônes

---

### 4. Spinner (Indicateur de Chargement)

Montrez un indicateur de chargement à vos utilisateurs.

#### Syntaxe de Base

```html
<!-- Spinner par défaut -->
<div class="kt-spinner"></div>

<!-- Petit spinner -->
<div class="kt-spinner kt-spinner-sm"></div>

<!-- Grand spinner -->
<div class="kt-spinner kt-spinner-lg"></div>

<!-- Spinner growing -->
<div class="kt-spinner kt-spinner-grow"></div>
```

#### Couleurs Sémantiques

Ajoutez les classes : `kt-spinner-primary`, `kt-spinner-success`, `kt-spinner-danger`, etc.

---

### 5. Skeleton (Placeholder de Chargement)

Créez un effet de chargement élégant.

#### Syntaxe de Base

```html
<!-- Texte -->
<div class="kt-skeleton kt-skeleton-text"></div>

<!-- Avatar -->
<div class="kt-skeleton kt-skeleton-avatar"></div>

<!-- Image -->
<div class="kt-skeleton kt-skeleton-image"></div>

<!-- Bouton -->
<div class="kt-skeleton kt-skeleton-button"></div>
```

#### Groupes de Skeleton

```html
<div class="kt-skeleton-group kt-skeleton-list">
    <div class="kt-skeleton-item">
        <div class="kt-skeleton kt-skeleton-avatar"></div>
        <div class="kt-skeleton-content">
            <div class="kt-skeleton kt-skeleton-text"></div>
        </div>
    </div>
</div>
```

---

### 6. Tooltip (Infobulle)

Ajoutez des infobulles pour clarifier les éléments.

#### Syntaxe de Base

```html
<span class="kt-tooltip kt-tooltip-top" data-tooltip="Texte de l'infobulle">
    <button class="kt-btn">Survolez-moi</button>
</span>
```

#### Positions

- `kt-tooltip-top` : En haut (défaut)
- `kt-tooltip-bottom` : En bas
- `kt-tooltip-left` : À gauche
- `kt-tooltip-right` : À droite

#### Couleurs

Ajoutez les classes : `kt-tooltip-primary`, `kt-tooltip-success`, `kt-tooltip-danger`, etc.

---

## 🎨 Nouveaux Utilitaires

### 1. Animations

Classes d'animation CSS prêtes à l'emploi.

#### Animations Disponibles

```html
<!-- Fade -->
<div class="kt-animate-fade-in">Fade In</div>
<div class="kt-animate-fade-out">Fade Out</div>

<!-- Slide -->
<div class="kt-animate-slide-in-left">Slide In Left</div>
<div class="kt-animate-slide-in-right">Slide In Right</div>
<div class="kt-animate-slide-in-up">Slide In Up</div>
<div class="kt-animate-slide-in-down">Slide In Down</div>

<!-- Zoom & Bounce -->
<div class="kt-animate-zoom-in">Zoom In</div>
<div class="kt-animate-bounce">Bounce</div>

<!-- Pulse & Heartbeat -->
<div class="kt-animate-pulse">Pulse</div>
<div class="kt-animate-heartbeat">Heartbeat</div>
```

#### Délais et Durées

```html
<!-- Délai -->
<div class="kt-animate-fade-in kt-animate-delay-100">Délai 0.1s</div>
<div class="kt-animate-fade-in kt-animate-delay-200">Délai 0.2s</div>

<!-- Durée -->
<div class="kt-animate-fade-in kt-animate-duration-300">Durée 0.3s</div>
<div class="kt-animate-fade-in kt-animate-duration-1000">Durée 1s</div>
```

---

### 2. Transitions

Contrôlez les transitions CSS facilement.

#### Classes Principales

```html
<!-- Transition complète -->
<div class="kt-transition-all">Tout change</div>

<!-- Transitions spécifiques -->
<div class="kt-transition-colors">Couleurs</div>
<div class="kt-transition-transform">Transform</div>
<div class="kt-transition-opacity">Opacité</div>
<div class="kt-transition-shadow">Ombre</div>
```

#### Durées

```html
<div class="kt-transition-fast">Rapide</div>
<div class="kt-transition-slow">Lent</div>
```

#### Timing Functions

```html
<div class="kt-transition-ease-in">Ease In</div>
<div class="kt-transition-ease-out">Ease Out</div>
<div class="kt-transition-ease-in-out">Ease In Out</div>
<div class="kt-transition-linear">Linear</div>
```

#### Hover Effects Combinés

```html
<!-- Liftoff -->
<div class="kt-hover-lift">Levez-moi ↑</div>

<!-- Glow -->
<div class="kt-hover-glow">Brillez ✨</div>

<!-- Scale -->
<div class="kt-hover-scale">Agrandissez-moi</div>

<!-- Rotate -->
<div class="kt-hover-rotate">Tournez</div>

<!-- Opacity -->
<div class="kt-hover-opacity">Transparence</div>
```

---

### 3. Typography Advanced

Contrôle fin de la typographie.

#### Troncature de Texte

```html
<!-- Texte tronqué sur une ligne -->
<p class="kt-text-truncate">Texte très long...</p>

<!-- Clamp 2 lignes -->
<p class="kt-text-clamp-2">Texte...</p>

<!-- Clamp 3 lignes -->
<p class="kt-text-clamp-3">Texte...</p>
```

#### Cas du Texte

```html
<p class="kt-text-uppercase">MAJUSCULES</p>
<p class="kt-text-lowercase">minuscules</p>
<p class="kt-text-capitalize">Capitaliser</p>
```

#### Alignement

```html
<p class="kt-text-left">Alignement à gauche</p>
<p class="kt-text-center">Centré</p>
<p class="kt-text-right">Alignement à droite</p>
<p class="kt-text-justify">Justifié</p>
```

#### Poids du Texte

```html
<p class="kt-text-light">Léger</p>
<p class="kt-text-normal">Normal</p>
<p class="kt-text-semibold">Semi-gras</p>
<p class="kt-text-bold">Gras</p>
```

#### Tailles Extended

```html
<p class="kt-text-xs">Extra petit</p>
<p class="kt-text-sm">Petit</p>
<p class="kt-text-base">Normal</p>
<p class="kt-text-lg">Grand</p>
<p class="kt-text-xl">Extra grand</p>
<p class="kt-text-2xl">XXL</p>
<p class="kt-text-3xl">3XL</p>
<p class="kt-text-4xl">4XL</p>
```

---

### 4. Gradients

Dégradés modernes et élégants.

#### Gradients Sémantiques

```html
<div class="kt-bg-gradient-primary">Gradient Primary</div>
<div class="kt-bg-gradient-success">Gradient Success</div>
<div class="kt-bg-gradient-danger">Gradient Danger</div>
<div class="kt-bg-gradient-warning">Gradient Warning</div>
<div class="kt-bg-gradient-info">Gradient Info</div>
```

#### Gradients Directionnels

```html
<div class="kt-gradient-to-right" style="--gradient-from: #007bff; --gradient-to: #0056b3;">
    To Right
</div>

<div class="kt-gradient-to-br" style="--gradient-from: #28a745; --gradient-to: #1e7e34;">
    To Bottom Right
</div>
```

#### Gradients Radiaux

```html
<div class="kt-gradient-radial" style="--gradient-from: #ffc107; --gradient-to: #ff6c00;">
    Radial Gradient
</div>
```

---

### 5. Opacity (Opacité)

Contrôlez la transparence.

#### Classes d'Opacité

```html
<div class="kt-opacity-0">Transparent</div>
<div class="kt-opacity-10">10%</div>
<div class="kt-opacity-30">30%</div>
<div class="kt-opacity-50">50%</div>
<div class="kt-opacity-70">70%</div>
<div class="kt-opacity-100">Opaque</div>
```

#### Hover Opacity

```html
<div class="kt-hover-opacity-50">Survolez pour 50%</div>
<div class="kt-hover-opacity-75">Survolez pour 75%</div>
```

---

### 6. Hover Effects

Effets au survol avancés.

#### Ombres

```html
<div class="kt-hover-shadow">Ombre normale</div>
<div class="kt-hover-shadow-sm">Petite ombre</div>
<div class="kt-hover-shadow-lg">Grande ombre</div>
<div class="kt-hover-shadow-xl">Très grande ombre</div>
```

#### Transformations

```html
<div class="kt-hover-translate-y-1">Liftoff léger</div>
<div class="kt-hover-translate-y-2">Liftoff fort</div>
<div class="kt-hover-zoom">Zoom</div>
<div class="kt-hover-zoom-sm">Zoom léger</div>
<div class="kt-hover-zoom-out">Zoom out</div>
<div class="kt-hover-rotate-1">Rotate</div>
```

#### Filtres

```html
<div class="kt-hover-brightness">Plus clair</div>
<div class="kt-hover-brightness-less">Plus sombre</div>
<div class="kt-hover-grayscale">Noir & Blanc</div>
```

---

## 💻 Exemples Détaillés

### Exemple 1 : Dashboard avec Tabs et Cards

```html
<div class="kt-container kt-my-5">
    <h1 class="kt-mb-4">Mon Dashboard</h1>
    
    <div class="kt-tabs">
        <ul class="kt-tabs-nav">
            <li><button class="kt-tab-link kt-active" onclick="switchTab(event, 'stats')">Statistiques</button></li>
            <li><button class="kt-tab-link" onclick="switchTab(event, 'users')">Utilisateurs</button></li>
        </ul>
        
        <div class="kt-tabs-content">
            <div id="stats" class="kt-tab-pane kt-active">
                <div class="kt-grid">
                    <div class="kt-col-md-6 kt-col-lg-3">
                        <div class="kt-card kt-hover-lift">
                            <div class="kt-card-body">
                                <h3>Ventes</h3>
                                <p class="kt-text-2xl kt-text-primary">$1,234</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
```

### Exemple 2 : FAQ avec Accordion

```html
<div class="kt-container kt-my-5">
    <h2>Questions Fréquemment Posées</h2>
    
    <div class="kt-accordion kt-accordion-flush">
        <div class="kt-accordion-item">
            <button class="kt-accordion-header" onclick="toggleAccordion(event)">
                <span>Comment installer KitokoCSS ?</span>
                <span class="kt-accordion-toggle">▼</span>
            </button>
            <div class="kt-accordion-body">
                <p>Incluez simplement le CDN dans votre HTML...</p>
            </div>
        </div>
    </div>
</div>
```

### Exemple 3 : Page de Produit avec Skeleton

```html
<div class="kt-container kt-my-5">
    <h2>Produit</h2>
    
    <!-- Pendant le chargement -->
    <div class="kt-skeleton-group kt-skeleton-list">
        <div class="kt-skeleton-item">
            <div class="kt-skeleton kt-skeleton-image"></div>
            <div class="kt-skeleton-content">
                <div class="kt-skeleton kt-skeleton-text"></div>
                <div class="kt-skeleton kt-skeleton-text kt-skeleton-text-sm"></div>
            </div>
        </div>
    </div>
</div>
```

---

## 📋 Changelog v1.1.0

- ✨ **6 nouveaux composants** (Tabs, Accordion, Breadcrumb, Spinner, Skeleton, Tooltip)
- 🎨 **10+ animations CSS**
- 🔄 **Transitions élégantes**
- 🌈 **Support des gradients**
- 📝 **Typographie avancée**
- 👻 **Contrôle d'opacité**
- ✋ **Effets hover sophistiqués**
- 🎯 **Architecture modulaire améliorée**

---

**Créé par FomaDev - 12 janvier 2026**

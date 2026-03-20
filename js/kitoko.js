/**
 * KITOKO ENGINE v2.0.0
 * La logique derrière la beauté.
 */

document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.ktk-navbar');
    
    // 1. Gestion du Scroll pour la Navbar
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            // On ajoute la classe de scroll définie dans notre SCSS
            navbar.classList.add('ktk-navbar-scrolled');
        } else {
            // On revient à l'état transparent/glass initial
            navbar.classList.remove('ktk-navbar-scrolled');
        }
    });

    // 2. Initialisation des composants (Tooltips, Toggles, etc. dans le futur)
    console.log('Kitoko Engine est prêt !');
});
/**
 * KITOKO JS Core v1.0.0
 * Framework léger et modulaire
 */
const Kitoko = (() => {
  const init = () => {
    document.addEventListener('click', (e) => {
      // On cherche si l'élément cliqué (ou son parent) a un attribut data-kitoko
      const trigger = e.target.closest('[data-kitoko]');
      
      if (!trigger) return;

      const action = trigger.dataset.kitoko;
      const targetId = trigger.dataset.target;
      const targetElement = document.querySelector(targetId);

      // Sécurité : si l'attribut target est vide ou l'élément introuvable
      if (!targetElement) {
        console.warn(`Kitoko: Target "${targetId}" not found for action "${action}".`);
        return;
      }

      // --- LOGIQUE DES ACTIONS ---

      // 1. Action Toggle (Affiche/Masque avec la classe k-d-none)
      if (action === 'toggle') {
        targetElement.classList.toggle('k-d-none');
      }

      // 2. Action Burger (Menu de navigation mobile)
      if (action === 'burger') {
        targetElement.classList.toggle('k-active');
        
        // Optionnel : change l'icône du burger si besoin
        const isExpanded = targetElement.classList.contains('k-active');
        trigger.setAttribute('aria-expanded', isExpanded);
      }
      
    });
    
    console.log('Kitoko Framework v1.0.0 initialized 🚀');
  };

  return { init };
})();

// Lancement automatique au chargement du DOM
window.Kitoko = Kitoko;
document.addEventListener('DOMContentLoaded', Kitoko.init);
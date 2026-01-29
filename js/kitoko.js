/**
 * KITOKO JS Core v1.0.0
 */
const Kitoko = (() => {
  const init = () => {
    document.addEventListener('click', (e) => {
      // On cherche si l'élément cliqué a un attribut data-kitoko
      const trigger = e.target.closest('[data-kitoko]');
      if (!trigger) return;

      const action = trigger.dataset.kitoko;
      const targetId = trigger.dataset.target;
      const targetElement = document.querySelector(targetId);

      if (action === 'toggle' && targetElement) {
        targetElement.classList.toggle('k-d-none');
      }
    });
    
    console.log('Kitoko Framework initialisé 🚀');
  };

  return { init };
})();

// Lancement automatique ou manuel
window.Kitoko = Kitoko;
document.addEventListener('DOMContentLoaded', Kitoko.init);
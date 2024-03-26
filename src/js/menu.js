// document.addEventListener('DOMContentLoaded', function() {
//   var menu = document.querySelector('.menu');
//   var menuTrigger = document.querySelector('.menu-trigger');

//   menuTrigger.addEventListener('click', function() {
//     menu.classList.toggle('is-open');
//   });

//   document.addEventListener('click', function(event) {
//     if (!menu.contains(event.target) && event.target !== menuTrigger) {
//       menu.classList.remove('is-open');
//     }
//   });
// });
// (() => {
//   const refs = {
//     // Додати атрибут data-modal-open на кнопку відкриття
//     openMenuBtn: document.querySelector("[data-menu-open]"),
//     // Додати атрибут data-modal-close на кнопку закриття
//     closeMenuBtn: document.querySelector("[data-menu-close]"),
//     // Додати атрибут data-modal на бекдроп модалки
//     menu: document.querySelector("[data-menu]"),
//   };

//   refs.openMenuBtn.addEventListener("click", toggleMenu);
//   refs.closeMenuBtn.addEventListener("click", toggleMenu);

//   function toggleMenu() {
//     // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
//     refs.menu.classList.toggle("is-open");
//   }
  
// })();
(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');

  const toggleMenu = () => {
    const anchors = mobileMenu.querySelectorAll('a[href*="#"]');
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');
    

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
    
    if(anchors.length === 0) return;
    
    if(!isMenuOpen) {
      anchors.forEach(anchor => {
        anchor.addEventListener("click", toggleMenu)
      })
      return;
    }
    
    anchors.forEach(anchor => {
        anchor.removeEventListener("click", toggleMenu)
      })
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  // Вказати брейкпоінт після якого повинна зачинятися
  window.matchMedia('(min-width: 375px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();
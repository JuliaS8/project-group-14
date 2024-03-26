document.addEventListener('DOMContentLoaded', function() {
  var sections = document.querySelectorAll('section');
  var navLinks = document.querySelectorAll('nav ul a');

  function setActiveLink() {
    var fromTop = window.scrollY + 90; 
    sections.forEach(function(section) {
      if (
        section.offsetTop <= fromTop &&
        section.offsetTop + section.offsetHeight > fromTop
      ) {
        navLinks.forEach(function(link) {
          link.classList.remove('nav-active');
          if (section.id === link.getAttribute('href').substring(1)) {
            link.classList.add('nav-active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', setActiveLink);
});

const navbar = document.querySelector(".navbar");
let lastScrollTop = 0;

window.addEventListener(
    "scroll",
    () => {
        var scrollY = window.scrollY || window.pageYOffset;
        if (scrollY > lastScrollTop && scrollY > 732) {
            // downward scroll beyond 732px
            navbar.classList.remove("visible");
        } else if (scrollY < lastScrollTop || scrollY <= 732) {
            navbar.classList.add("visible");
        }
        lastScrollTop = scrollY <= 0 ? 0 : scrollY;
    },
    { passive: true }
);

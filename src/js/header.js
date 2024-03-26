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
const navbar =
    document.querySelector(".navbar");

let lastScrollTop = 0;

window.addEventListener(
"scroll",
    () => {
        console.log("scroll");
        var { scrollY } = window;
        if (scrollY > lastScrollTop) {
            // downward scroll
            navbar.classList.remove("visible");
        } else if (scrollY < lastScrollTop) {
            // upward scroll
            navbar.classList.add("visible");
        } // else was horizontal scroll
        lastScrollTop =
            scrollY <= 0 ? 0 : scrollY;
    },
{passive: true }
) ;
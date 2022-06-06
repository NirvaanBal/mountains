const header = document.querySelector('header');
const sections = document.querySelectorAll('section');
const footer = document.querySelector('footer');

function observation(style, options) {
  return new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if ([...entry.target.classList].includes('hero')) {
        header.classList.toggle('unscrolled');
        options.threshold = 1;
      }
      entry.target.classList.toggle(style, entry.isIntersecting);
    });
  }, options);
}

sections.forEach((section) => {
  observation('reveal', { threshold: 0.2 }).observe(section);
});

observation('reveal', { threshold: 0.5 }).observe(footer);

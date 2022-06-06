const header = document.querySelector('header');
const sections = document.querySelectorAll('section');
const footer = document.querySelector('footer');
const mountainNavItems = document.querySelectorAll('.climb nav li');

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

mountainNavItems.forEach((item) => {
  item.addEventListener('click', (e) => {
    const mountainToShow = e.target.dataset.id === 'm1' ? 'm1' : 'm2';
    const mountainToHide = e.target.dataset.id === 'm1' ? 'm2' : 'm1';

    document.getElementById(mountainToShow).classList.remove('hide');
    document.getElementById(mountainToHide).classList.add('hide');

    if (mountainToShow === 'm1') {
      document.querySelector(`li[data-id='m1']`).classList.add('active');
      document.querySelector(`li[data-id='m2']`).classList.remove('active');
    } else {
      document.querySelector(`li[data-id='m2']`).classList.add('active');
      document.querySelector(`li[data-id='m1']`).classList.remove('active');
    }
  });
});

function carvan(duration) {
  let initial = 0,
    begin = 0;
  let allImages = document.querySelectorAll('.images img').length;
  const carousel = document.querySelector('.carousel .images');

  setInterval(() => {
    if (begin === allImages - 3) {
      initial = 0;
      begin = 0;
    }
    carousel.style.transform = `translateX(-${initial}px)`;
    initial += 960 / 4;
    begin++;
  }, duration);
}

carvan(1000);

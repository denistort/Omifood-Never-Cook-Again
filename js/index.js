document.querySelector('.mobile-nav-button').addEventListener('click', () => {
    console.log('ya rabotau')
    document.querySelector('.header-nav').classList.toggle('nav--open')
    if (document.querySelector('.header-nav')
        .classList
        .contains('nav--open')) {
        document.querySelector('.close-outline').style.display = 'block';
        document.querySelector('.menu-outline').style.display = 'none';

    } else {
        document.querySelector('.close-outline').style.display = 'none';
        document.querySelector('.menu-outline').style.display = 'block';
    }
})

const sectionHero = document.querySelector('.section-hero')
const observer = new IntersectionObserver(function(entries) {
    const ent = entries[0];
    console.log(ent)
    if (!ent.isIntersecting) {
        document.querySelector('.header').classList.add('sticky')
    } else {
        document.querySelector('.header').classList.remove('sticky')
    }

}, {
    root: null,
    threshold: 0
})
observer.observe(sectionHero)
let menuToggle = document.querySelector('.main-nav__toggle');
let menu = document.querySelector('.main-nav');
console.log(menuToggle);

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('main-nav--is-open');
    menu.classList.toggle('main-nav--is-close');
})

window.addEventListener('resize', () => {
    console.log(window.innerWidth);
    if (window.innerWidth >= 1920) {
        menu.classList.add('main-nav--is-close');
        menu.classList.remove('main-nav--is-open');
        console.log('123');        
    }
})

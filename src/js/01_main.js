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
    }
})


document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.swiper', {
        // Опциональные параметры
        direction: 'horizontal',
        loop: true,
        speed: 500,
        
        // Адаптивные настройки
        breakpoints: {
            // при ширине окна >= 640px
            390: {
                slidesPerView: 2,
                spaceBetween: 230
            },
            // при ширине окна >= 1024px
            1920: {
                slidesPerView: 3,
                spaceBetween: 20
            }
        }
    });
});

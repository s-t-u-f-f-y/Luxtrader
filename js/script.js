
new Swiper('.main-slider__body',{

    navigation: {
        prevEl: '.conrol-main-slider-arrow__prev',
        nextEl: '.conrol-main-slider-arrow__next'
    },

    keyboard: {
        enabled: true,
        onlyInViewport: true
    },

    slidesPerView: 1,
    
    loop: true,

    speed: 800,
});

new Swiper('.lots__slider',{

    navigation: {
        prevEl: '.control-slider-lots-arrow__prev',
        nextEl: '.control-slider-lots-arrow__next'
    },
    
    observer: true,

    observeParents: true,

    spaceBetween: 0,

    keyboard: {
        enabled: true,
        onlyInViewport: true
    },

    slidesPerView: 3,
    
    loop: true,

    speed: 800,

    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        550: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        }
    },
});


let userIcon = document.querySelector('.user-header__icon');

userIcon.addEventListener("click", function (e){

    let userMenu = document.querySelector('.user-header__list');
    userMenu.classList.toggle('_active');

});

document.documentElement.addEventListener("click", function (e){
    if(!e.target.closest('.user-header')) {
        let userMenu = document.querySelector('.user-header__list');
        userMenu.classList.remove('_active');
    }
});

const iconMenu = document.querySelector('.menu__icon');
if(iconMenu){
    const menuBody = document.querySelector('.menu__list')
    iconMenu.addEventListener("click", function(e){
        document.body.classList.toggle('_lock')
        iconMenu.classList.toggle('_active')
        menuBody.classList.toggle('_active')
    });
}

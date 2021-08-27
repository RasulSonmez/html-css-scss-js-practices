var swiper = new Swiper('.component--recipe-6 .swiper-container', {
    slidesPerView: 5,
    spaceBetween: 10,
    breakpoints: {     
        // when window width is <= 999px
        1009: {
            slidesPerView: 5,
            spaceBetweenSlides: 40
        },

        490: {
            slidesPerView: 2,
            spaceBetweenSlides: 40
        }
    },
    navigation: {
        nextEl: '.component--recipe-6 .next-btn',
        prevEl: '.component--recipe-6 .prev-btn',
    }

 
});
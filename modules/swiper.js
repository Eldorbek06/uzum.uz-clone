import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

export function swiperJs() {
    new Swiper('.swiper', {
        loop: true,
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 1.1,

        breakpoints: {
            960: {
                loop: true,
                slidesPerView: 1,
                spaceBetween: 0
            }
        },
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 4000,
        },
    });
}
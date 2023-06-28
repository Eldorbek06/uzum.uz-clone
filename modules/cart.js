import './standard'
import '../scss/cart.scss'
import { getData } from './reqs'
import { reloadProductCards } from './ui'
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';


getData('/goods').then(({ data }) => {
    let popularProductsSliderWrapper = document.querySelector('.popular-products-slider__wrapper')
    let totalRating = 0
    data.forEach(el => totalRating = totalRating + el.rating)
    let averageRating = Math.round(totalRating / data.length)
    let popularProducts = data.filter(el => el.rating >= averageRating)

    reloadProductCards(popularProducts, popularProductsSliderWrapper)

    let goToProductPageBtns = document.querySelectorAll('[data-product-id]')

    goToProductPageBtns.forEach(btn => btn.onclick = () => {
        localStorage.setItem('product-id', btn.dataset.productId)
    })

    new Swiper('.popular-products-slider', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        spaceBetween: 40,
        slidesPerView: 2,

        breakpoints: {
            1200: {
                slidesPerView: 5,
            },
            768: {
                slidesPerView: 4,
            },
            590: {
                slidesPerView: 3,
            }
        }
    })
})
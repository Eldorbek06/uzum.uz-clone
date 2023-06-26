import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import './standard'
import '../scss/product.scss'
import '../scss/product-blocks.scss'
import { getData } from './reqs';
import { reloadProductCards } from './ui';

let productId = localStorage.getItem('product-id')

getData('/goods/' + productId).then(({ data }) => {
    let creditSum = Math.round((data.price / 100 * 44 + data.price) / 12),
        salePrice = Math.round(data.price - data.price / 100 * 44) / 1000,
        price = data.price / 1000,
        sliderWrappers = document.querySelectorAll('[data-main-swipers]'),
        colorsContainer = document.querySelector('.product-info__color'),
        priceBlock = document.querySelector('.product-info__price-block'),
        title = document.querySelector('.product-info__title'),
        productDescr = document.querySelector('.product-description__text'),
        creditSumView = document.querySelector('.product-info__credit-item_yellow')

    title.innerHTML = data.title
    creditSumView.innerHTML = `От ${creditSum} &#8381;/мес`
    productDescr.innerHTML = data.description

    if (data.salePercentage) {
        priceBlock.innerHTML = `
        <span class="name">Цена:</span>
        <span class="product-info__sale-price">${salePrice} &#8381;</span>
        <span>/</span>
        <span class="product-info__real-price">${price} &#8381;</span>
        `
    } else {
        priceBlock.innerHTML = `
            <span class="name">Цена:</span>
            <span class="product-info__sale-price">${price} &#8381;</span>
        `
    }

    data.colors.forEach(color => {
        colorsContainer.innerHTML += `
            <div class="product-info__color-item">
                <div class="product-info__color-card" style="background-color: ${color};"></div>
            </div>
        `
    })

    sliderWrappers.forEach(wrapper => {
        wrapper.innerHTML = ''
        for (let item of data.media) {
            if (wrapper.classList.contains('main-slider__wrapper')) {
                wrapper.innerHTML += `
                    <div class="main-slider__slide swiper-slide">
                        <img class="main-slider__image" src="${item}"
                            alt="image">
                    </div>
                `
            } else {
                wrapper.innerHTML += `
                    <div class="thumb-slider__slide swiper-slide">
                        <img class="thumb-slider__image" src="${item}"
                            alt="image">
                    </div>
                `
            }
        }
    })


    new Swiper('.thumb-slider', {
        slidesPerView: 3,
        freeMode: true,
        watchSlidesProgress: true,
        direction: "vertical",
        spaceBetween: 6
    });

    new Swiper('.main-slider', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: '.thumb-slider'
        }
    })

    getData('/goods?type=' + data.type).then(({ data }) => {
        let sameProductsSliderWrapper = document.querySelector('.same-products-slider__wrapper')

        reloadProductCards(data, sameProductsSliderWrapper)
        
        let goToProductPageBtns = document.querySelectorAll('[data-product-id]')

        goToProductPageBtns.forEach(btn => btn.onclick = () => {
            localStorage.setItem('product-id', btn.dataset.productId)
        })
    })

    new Swiper('.same-products-slider', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        slidesPerView: 5,
        spaceBetween: 40
    })
})
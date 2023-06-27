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
        salePrice = Math.round(data.price - data.price / 100 * 44),
        price = data.price,
        sliderWrappers = document.querySelectorAll('[data-main-swipers]'),
        colorsContainer = document.querySelector('.product-info__color'),
        priceBlock = document.querySelector('.product-info__price-block'),
        title = document.querySelector('.product-info__title'),
        productDescr = document.querySelector('.product-description__text'),
        creditSumView = document.querySelector('.product-info__credit-item_yellow'),
        siteTitle = document.querySelector('title')

    title.innerHTML = data.title
    creditSumView.innerHTML = `От ${creditSum} &#8381;/мес`
    productDescr.innerHTML = data.description
    siteTitle.innerHTML = 'Купить ' + data.title

    if (data.salePercentage) {
        priceBlock.innerHTML = `
        <span class="name">Цена:</span>
        <span class="product-info__sale-price" id="sale-price-view">${salePrice} &#8381; /</span>
        <span class="product-info__real-price" id="real-price-view">${price} &#8381;</span>
        `
    } else {
        priceBlock.innerHTML = `
            <span class="name">Цена:</span>
            <span class="product-info__sale-price" id="real-price-view">${price} &#8381;</span>
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


    let maximumNumber = 10,
        counter = 1,
        realPriceView = document.querySelector('#real-price-view'),
        salePriceView = document.querySelector('#sale-price-view'),
        counterElement = document.querySelector(".product-counter__num"),
        increaseButton = document.querySelector(".product-counter__plus"),
        decreaseButton = document.querySelector(".product-counter__minus"),
        counterBlock = counterElement.parentElement,
        maximumNumberView = document.querySelector('.product-counter__maximum')


    maximumNumberView.innerHTML = 'В наличии всего ' + maximumNumber + ' штук'
    checkAvailability(counter)

    increaseButton.onclick = () => {
        if (counter < maximumNumber) {
            counter++;
            calculatePrice(counter)
            displayPrice(counter)
        }
        if (counter == maximumNumber) {
            setTimeout(() => {
                alert('В наличии только ' + maximumNumber + ' штук')
            }, 100);
        }
    };

    decreaseButton.onclick = () => {
        if (counter > 1) {
            counter--;
            calculatePrice(counter)
            displayPrice(counter)
        }
    };

    function calculatePrice(counter) {
        return price * counter;
    }

    function calculateSalePrice(counter) {
        return salePrice * counter;
    }

    function displayPrice(counter) {
        let calculatedPrice = calculatePrice(counter);
        let calculatedSalePrice = calculateSalePrice(counter);
        if (counter === 1) {
            realPriceView.innerHTML = calculatedPrice + '&#8381;'
            salePriceView.innerHTML = calculatedSalePrice + '&#8381 /'
        } else {
            realPriceView.innerHTML = ''
            salePriceView.innerHTML = calculatedSalePrice + '&#8381'
        }
        counterElement.innerHTML = counter
        checkAvailability(counter)
    }

    function checkAvailability(number) {
        if (number == 1) {
            counterBlock.classList.add('not-available-minus')
        } else if (number == 10) {
            counterBlock.classList.add('not-available-plus')
        } else {
            counterBlock.classList.remove('not-available-minus')
            counterBlock.classList.remove('not-available-plus')
        }
    }
})
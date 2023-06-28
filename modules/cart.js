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


const userName = localStorage.getItem('user-name')

getData(`/cart?userName=${userName}`).then(({ data }) => {
    let neededProducts = data,
        counter = 1

    getData('/goods').then(({ data }) => {
        let cartProductsData = data.filter(el => {
            for (let item of neededProducts) {
                if (el.id == item.id) {
                    return el
                }
            }
        })

        let cartProductsContainer = document.querySelector('.cart-products__container')
        cartProductsContainer.innerHTML = ''

        for (let item of cartProductsData) {
            let salePrice = Math.round(item.price - item.price / 100 * item.salePercentage),
                price = item.price

            cartProductsContainer.innerHTML += `
                <div class="cart-product">
                    <div class="cart-product__left">
                        <div class="cart-product__left-box">
                        <label class="cart-product__checkbox checkbox-container">
                        <input type="checkbox">
                        <svg viewBox="0 0 64 64" height="2em" width="2em">
                            <path
                                d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                                pathLength="575.0541381835938" class="path"></path>
                        </svg>
                    </label>
                    <div class="cart-product__info">
                        <div class="cart-product__image-box">
                            <img class="cart-product__image"
                                src="${item.media[0]}" alt="image">
                        </div>
                        <div class="cart-product__info-inner">
                            <h3 class="cart-product__title">${item.title}</h3>
                        </div>
                    </div>
                        </div>
                        <div class="product-counter">
                            <span class="product-counter__minus">&minus;</span>
                            <span class="product-counter__num">1</span>
                            <span class="product-counter__plus">&plus;</span>
                            <span class="product-counter__price-for-one">5000 сум/ед.</span>
                            <span class="product-counter__maximum"></span>
                        </div>
                    </div>
                    <div class="cart-product__right">
                        <div class="cart-product__delete">
                            <img class="cart-product__delete-icon" src="/public/icons/cart/trash.svg"
                                alt="icon">
                            <span>Удалить</span>
                        </div>
                        <div class="cart-product__price-block">
                            <span class="cart-product__sale-price" data-sale-price="${salePrice}">${!item.salePercentage ? price : salePrice} &#8381;</span>
                            <span class="cart-product__real-price" data-real-price="${price}">${!item.salePercentage ? '' : price + ' &#8381;'}</span>
                        </div>
                    </div>
                </div>
            `
        }

        let counterBlocks = document.querySelectorAll('.product-counter')

        counterBlocks.forEach(counterBlock => {
            let maximumNumber = 10,
                counter = 1,
                realPriceView = counterBlock.parentElement.nextElementSibling.lastElementChild.lastElementChild,
                salePriceView = counterBlock.parentElement.nextElementSibling.lastElementChild.firstElementChild,
                counterElement = counterBlock.querySelector(".product-counter__num"),
                increaseButton = counterBlock.querySelector(".product-counter__plus"),
                decreaseButton = counterBlock.querySelector(".product-counter__minus"),
                maximumNumberView = counterBlock.querySelector('.product-counter__maximum'),
                price = realPriceView.dataset.realPrice,
                salePrice = salePriceView.dataset.salePrice,
                priceForOneView = counterBlock.querySelector('.product-counter__price-for-one')

            if (price == salePrice) {
                priceForOneView.innerHTML = price + ' &#8381;/ед.'
            } else {
                priceForOneView.innerHTML = salePrice + ' &#8381;/ед.'
            }
            maximumNumberView.innerHTML = 'В наличии всего ' + maximumNumber + ' штук'
            checkAvailability(counter)

            increaseButton.onclick = () => {
                if (counter < maximumNumber) {
                    counter = counter + 1;
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
                    counter = counter - 1;
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
                    if (price != salePrice) {
                        realPriceView.innerHTML = calculatedPrice + '&#8381;'
                    }
                    salePriceView.innerHTML = calculatedSalePrice + '&#8381'
                    priceForOneView.classList.remove('price-for-one-active')
                } else {
                    if (price != salePrice) {
                        realPriceView.innerHTML = calculatedPrice + '&#8381;'
                    }
                    salePriceView.innerHTML = calculatedSalePrice + '&#8381'
                    priceForOneView.classList.add('price-for-one-active')
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

            let allSelect = document.querySelector('.cart-products__select-all input'),
                allCheckboxes = document.querySelectorAll('.cart-product__checkbox input')

            allCheckboxes.forEach(checkbox => {
                checkbox.onchange = (e) => {
                    let isCheckboxChecked = e.target.checked,
                        count = 0

                    if (!isCheckboxChecked) {
                        allSelect.checked = false
                    } else {
                        allCheckboxes.forEach(checkbox => checkbox.checked ? count++ : '')
                        count == allCheckboxes.length ? allSelect.checked = true : ''
                    }
                }
            })

            allSelect.onchange = (e) => {
                let isChecked = e.target.checked
                allSelect.parentElement.lastElementChild.innerHTML = isChecked ? 'Снять всё' : 'Выбрать всё'

                allCheckboxes.forEach(checkbox => {
                    if (isChecked) {
                        checkbox.checked = true
                    } else {
                        checkbox.checked = false
                    }
                })
            }
        })
    })

})
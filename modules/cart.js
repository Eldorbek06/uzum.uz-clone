import './standard'
import '../scss/cart.scss'
import { getData } from './reqs'
import { reloadCartProducts, reloadProductCards } from './ui'
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
    let neededProducts = data

    getData('/goods').then(({ data }) => {
        let cartProductsData = data.filter(el => {
            for (let item of neededProducts) {
                if (el.id == item.id) {
                    el.count = item.quantity
                    return el
                }
            }
        })

        let cartProductsContainer = document.querySelector('.cart-products__container')
        let counterBlocks = document.querySelectorAll('.product-counter')

        reloadCartProducts(cartProductsData, cartProductsContainer)

        counterBlocks.forEach(counterBlock => {
            let maximumNumber = 10,
                counter = +counterBlock.querySelector('.product-counter__num').dataset.counterNum,
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
        })

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
                allSelect.parentElement.lastElementChild.innerHTML = allSelect.checked ? 'Снять всё' : 'Выбрать всё'
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

        let deliveryDateView = document.querySelector('.cart-products__delivery-date-view'),
            months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
            deliveryDate = (new Date().getDate() + 1) + ' ' + months[new Date().getMonth()]

        deliveryDateView.innerHTML = deliveryDate


        let goToProductPageBtns = document.querySelectorAll('[data-product-id]')

        goToProductPageBtns.forEach(btn => btn.onclick = () => {
            localStorage.setItem('product-id', btn.dataset.productId)
        })


        let cartProductDeleteBtns = document.querySelectorAll('.cart-product__delete')

        cartProductDeleteBtns.forEach(btn => {
            btn.onclick = () => {

            }
        })
    })
})
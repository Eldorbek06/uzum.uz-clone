import './standard'
import '../scss/favorites.scss'
import { getData } from './reqs'
import { reloadProductCards } from './ui'
import { addToCartBtnsReload, reloadFavBtns } from './product-blocks'

let sortMainItem = document.querySelector('.sort__item_main'),
    sortElem = document.querySelector('.sort'),
    userName = localStorage.getItem('user-name')

sortMainItem.onclick = () => sortElem.classList.toggle('sort_active')

getData(`/favorites?userName=${userName}`).then(({ data }) => {
    const neededProducts = data

    if (data.length != 0) {
        getData('/goods').then(({ data }) => {
            let productsContainer = document.querySelector('.products-type__grid-block'),
                productsData = data.filter(el => {
                    for (let item of neededProducts) {
                        if (el.id == item.id) {
                            return el
                        }
                    }
                })

            reloadProductCards(productsData, productsContainer)
            reloadFavBtns()
            addToCartBtnsReload()
        })
    } else {
        document.querySelector('.main').classList.add('no-product_active')
    }
}).catch(() => { })
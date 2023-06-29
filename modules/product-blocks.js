import { getData, postData } from "./reqs";
import { realoadProductTypeBlocks, reloadProductCards } from "./ui";

function productSetByWindowWidth(products, productsBlock) {
    if (window.innerWidth <= 640) {
        reloadProductCards(products.slice(0, 4), productsBlock)
    }
    if (window.innerWidth >= 640) {
        reloadProductCards(products.slice(0, 6), productsBlock)
    }
    if (window.innerWidth >= 960) {
        reloadProductCards(products.slice(0, 4), productsBlock)
    }
    if (window.innerWidth >= 1280) {
        reloadProductCards(products.slice(0, 5), productsBlock)
    }
}

export function productBlocksJs() {
    getData('/goods').then(({ data }) => {
        let types = []
        data.forEach(el => types.push(el.type))

        let uniqTypes = [...new Set(types)],
            productsWrapper = document.querySelector('.products-wrapper')

        realoadProductTypeBlocks(uniqTypes, productsWrapper)

        let productTypeBlocks = document.querySelectorAll('[data-product-type]')

        productTypeBlocks.forEach(el => {
            let blockType = el.dataset.productType
            let сertainProducts = data.filter(product => product.type == blockType)

            productSetByWindowWidth(сertainProducts, el)
        })

        window.onresize = () => {
            productTypeBlocks.forEach(el => {
                let blockType = el.dataset.productType
                let сertainProducts = data.filter(product => product.type == blockType)

                productSetByWindowWidth(сertainProducts, el)
            })
        }

        let showMoreBtns = document.querySelectorAll('.products-type__show-more')

        showMoreBtns.forEach(btn => {
            let productsBlock = btn.previousElementSibling
            let blockType = productsBlock.dataset.productType
            let сertainProducts = data.filter(product => product.type == blockType)

            btn.onclick = () => {
                if (btn.dataset.isShown == "false") {
                    reloadProductCards(сertainProducts, productsBlock)
                    btn.innerHTML = 'Скрыть'
                    btn.dataset.isShown = "true"
                } else {
                    productSetByWindowWidth(сertainProducts, productsBlock)
                    btn.innerHTML = 'Показать ещё'
                    btn.dataset.isShown = "false"
                }
                addToCartBtnsReload()
            }
        })

        let goToProductPageBtns = document.querySelectorAll('[data-product-id]')

        goToProductPageBtns.forEach(btn => btn.onclick = () => {
            localStorage.setItem('product-id', btn.dataset.productId)
        })

        addToCartBtnsReload()
    })
}

export function addToCartBtnsReload() {
    let addToCartBtns = document.querySelectorAll('[data-add-to-cart]'),
        name = localStorage.getItem('user-name')


    addToCartBtns.forEach(btn => {
        let productId = btn.dataset.addToCart

        getData(`/cart?userName=${name}`).then(({ data }) => data.forEach(el => {
            if (el.id == productId) {
                btn.classList.add('in-the-cart')
            }
        }))

        btn.onclick = () => {
            getData(`/cart/${productId}`)
                .then(() => {
                    alert('Это товар есть в корзине')
                }).catch(() => {
                    postData('/cart', { id: productId, userName: name, quantity: 1 })
                        .then(res => {
                            if (res.statusText == "Created") {
                                alert('Товар добавлен в корзину')
                                btn.classList.add('in-the-cart')
                            }
                        })
                })
        }
    })
}
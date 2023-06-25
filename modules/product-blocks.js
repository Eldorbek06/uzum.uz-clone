import { getData } from "./reqs";
import { realoadProductTypeBlocks, reloadProductCards } from "./ui";

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

            if(blockType != "PC"){
                reloadProductCards(сertainProducts, el)
            }
        })
    })
}
import { headerFooterJs } from "./header-footer"
import { popupJs } from "./popup"
import { footerCreate, headerCreate, popupCreate } from "./ui"

headerCreate(document.querySelector('.header'))
footerCreate(document.querySelector('.footer'))
headerFooterJs()
popupCreate(document.querySelector('.popup'))
popupJs(document.querySelector('.popup'))
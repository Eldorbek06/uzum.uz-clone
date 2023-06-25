import '../scss/normalize.scss';
import '../scss/style.scss';
import '../scss/footer.scss';
import '../scss/header.scss';
import '../scss/popup.scss';
import '../scss/swiper.scss';
import '../scss/product-blocks.scss';
import { headerFooterJs } from "./header-footer"
import { popupJs } from "./popup"
import { swiperJs } from "./swiper"
import { footerCreate, headerCreate, popupCreate } from "./ui"
import { productBlocksJs } from './product-blocks';

headerCreate(document.querySelector('.header'))
footerCreate(document.querySelector('.footer'))
headerFooterJs()
popupCreate(document.querySelector('.popup'))
popupJs(document.querySelector('.popup'))
swiperJs()
productBlocksJs()
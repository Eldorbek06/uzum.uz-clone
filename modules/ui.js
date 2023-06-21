export function headerCreate(place) {
    place.innerHTML = `
    <div class="header__top">
    <div class="container">
        <div class="header__top-inner">
            <div class="header__top-left">
                <div class="header__location">
                    <img class="header__location-icon" src="/icons/header/place-marker.svg" alt="icon">
                    <p class="header__location-text">
                        <span class="header__location-text_thin">Город:</span>
                        <span class="header__location-text_bold">Ташкент</span>
                    </p>
                </div>
                <div class="header__pick-points">Пункты выдачи</div>
            </div>
            <div class="header__top-centre">
                Доставим ваш заказ бесплатно — всего за 1 день!
            </div>
            <div class="header__top-right">
                <a class="header__top-link" href="#">Продавайте на Uzum</a>
                <a class="header__top-link" href="#">Вопрос-ответ</a>
                <a class="header__top-link" href="#">Мои заказы</a>
                <div class="header__langs">
                    <div data-lang class="header__langs-area"></div>
                    <div data-lang="ru" class="header__langs-chosen">
                        <img class="header__lang-icon" src="/icons/header/ru.svg" alt="icon">
                        <span>Русский</span>
                    </div>
                    <div class="header__langs-list">
                        <div data-lang="uz" class="header__lang">
                            <img class="header__lang-icon" src="/icons/header/uzb.svg"
                                alt="icon">
                            <span>O'zbekcha</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="header__center">
    <div class="catalog-list__area"></div>
    <div class="container">
        <div class="header__center-inner">
        <div class="catalog-list header__center-catalog-list">
                <div class="catalog-list__inner">
                    <div class="catalog-list__item header__center-catalog-list-item">
                        <div class="catalog-list__left">
                            <img class="catalog-list__icon" src="/public/icons/header/catalog-icon.svg"
                                alt="icon">
                            <p class="catalog-list__txt">Lorem, ipsum.</p>
                        </div>
                        <img class="catalog-list__arrow" src="/icons/arrow.svg" alt="icon">
                    </div>
                    <div class="catalog-list__item header__center-catalog-list-item">
                        <div class="catalog-list__left">
                            <img class="catalog-list__icon" src="/public/icons/header/catalog-icon.svg"
                                alt="icon">
                            <p class="catalog-list__txt">Lorem, ipsum.</p>
                        </div>
                        <img class="catalog-list__arrow" src="/icons/arrow.svg" alt="icon">
                    </div>
                </div>
            </div>
            <img class="header__menu-icon" src="/icons/header/menu-icon.svg" alt="icon">
            <img class="header__logo_sm" src="/icons/header/uzum-logo-sm.svg" alt="logo">
            <img class="header__logo_lg" src="/icons/header/uzum-logo.svg" alt="logo">
            <div class="header__search">
                <div class="header__catalog" id="catal-btn">
                    <img class="header__catalog-icon catal-visible" src="/icons/header/catalog-icon.svg"
                        alt="icon">
                    <img class="header__catalog-icon" src="/icons/header/close.svg" alt="icon">
                    <span class="header__catalog-txt">Каталог</span>
                </div>
                <div class="header__search-inner">
                    <button class="header__search-btn">
                        <img class="header__search-icon" src="/icons/header/search.svg" alt="icon">
                    </button>
                    <input class="header__search-inp" type="text" placeholder="Искать товары и категории">
                    <button class="header__search-btn">
                        <img class="header__search-icon" src="/icons/header/search.svg" alt="icon">
                    </button>
                </div>
            </div>
            <div class="header__center-items">
                <div class="header__center-item" data-popup-open>
                    <img class="header__center-icon" src="/icons/header/user.svg" alt="icon">
                    <span class="header__ceter-item-txt" data-reg>${localStorage.getItem('user-name') == null ? 'Войти' : localStorage.getItem('user-name')}</span>
                </div>
                <div class="header__center-item">
                    <img class="header__center-icon" src="/icons/header/fav.svg" alt="icon">
                    <span class="header__ceter-item-txt">Избранное</span>
                </div>
                <div class="header__center-item">
                    <img class="header__center-icon" src="/icons/header/shop-bag.svg" alt="icon">
                    <span class="header__ceter-item-txt">Корзина</span>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="header__menu">
    <div class="header__menu-item header__menu-item_reg">
        <svg id="menu-close" height="24" viewBox="0 0 48 48" width="24" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M38 12.83l-2.83-2.83-11.17 11.17-11.17-11.17-2.83 2.83 11.17 11.17-11.17 11.17 2.83 2.83 11.17-11.17 11.17 11.17 2.83-2.83-11.17-11.17z" />
            <path d="M0 0h48v48h-48z" fill="none" />
        </svg>
        <u class="header__menu-txt">Войти / Зарегистрироваться</u>
    </div>
    <div class="header__menu-catal-item-wrapper">
        <div class="header__menu-item header__menu-item_drop-down header__menu-item_catal" id="catal-btn">
            <img src="/icons/header/catalog-icon.svg" alt="icon">
            <div class="header__menu-txt">Каталог</div>
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                class="ui-icon toggle-icon">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M5.21967 9.21967C5.51256 8.92678 5.98744 8.92678 6.28033 9.21967L12 14.9393L17.7197 9.21967C18.0126 8.92678 18.4874 8.92678 18.7803 9.21967C19.0732 9.51256 19.0732 9.98744 18.7803 10.2803L12.5303 16.5303C12.2374 16.8232 11.7626 16.8232 11.4697 16.5303L5.21967 10.2803C4.92678 9.98744 4.92678 9.51256 5.21967 9.21967Z"
                    fill="#3333CC"></path>
            </svg>
        </div>
        <div class="catalog-list">
            <div class="divider"></div>
            <div class="catalog-list__inner">
                <div class="catalog-list__item">
                    <div class="catalog-list__left">
                        <img class="catalog-list__icon" src="/public/icons/header/catalog-icon.svg"
                            alt="icon">
                        <p class="catalog-list__txt">Lorem, ipsum.</p>
                    </div>
                    <img class="catalog-list__arrow" src="/icons/arrow.svg" alt="icon">
                </div>
                <div class="catalog-list__item">
                    <div class="catalog-list__left">
                        <img class="catalog-list__icon" src="/public/icons/header/catalog-icon.svg"
                            alt="icon">
                        <p class="catalog-list__txt">Lorem, ipsum.</p>
                    </div>
                    <img class="catalog-list__arrow" src="/icons/arrow.svg" alt="icon">
                </div>
            </div>
        </div>
    </div>
    <div class="header__menu-item">
        <img src="/icons/header/shop-bag.svg" alt="icon">
        <div class="header__menu-txt">Мои заказы</div>
    </div>
    <div class="header__menu-item">
        <img src="/icons/header/fav.svg" alt="icon">
        <div class="header__menu-txt">Избранное</div>
    </div>
    <div class="header__menu-item">
        <img style="width: 16px;" src="/icons/header/place-marker.svg" alt="icon">
        <div class="header__menu-txt">Город: Ташкент</div>
    </div>
    <div class="header__menu-item">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#000" xmlns="http://www.w3.org/2000/svg"
            class="ui-icon ">
            <path fill-rule="evenodd" clip-rule="evenodd"
                d="M4.5 18.6644V8.01852L8.25 6.14352V16.7964C8.20123 16.8162 8.15305 16.8379 8.10558 16.8616L4.5 18.6644ZM9.75 16.7964V6.14352L14.1056 8.3213C14.153 8.34504 14.2012 8.36678 14.25 8.38651V19.0394L9.89443 16.8616C9.84695 16.8379 9.79877 16.8162 9.75 16.7964ZM15.75 19.0394L19.5 17.1644V6.51852L15.8944 8.32131C15.847 8.34504 15.7988 8.36678 15.75 8.38651V19.0394ZM8.77639 18.2033C8.91716 18.1329 9.08284 18.1329 9.22361 18.2033L14.6646 20.9238C14.8757 21.0293 15.1243 21.0293 15.3354 20.9238L20.5854 18.2988C20.8395 18.1717 21 17.912 21 17.6279V5.30499C21 4.74746 20.4133 4.38483 19.9146 4.63417L15.2236 6.97966C15.0828 7.05005 14.9172 7.05005 14.7764 6.97966L9.33541 4.25917C9.12426 4.1536 8.87574 4.1536 8.66459 4.25917L3.41459 6.88417C3.1605 7.01122 3 7.27091 3 7.55499V19.8779C3 20.4355 3.58673 20.7981 4.08541 20.5488L8.77639 18.2033Z"
                fill="black"></path>
        </svg>
        <div class="header__menu-txt">Пункты выдачи</div>
    </div>
    <div class="divider"></div>
    <div class="header__menu-item">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#000" xmlns="http://www.w3.org/2000/svg"
            class="ui-icon ">
            <path fill-rule="evenodd" clip-rule="evenodd"
                d="M12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5C16.6944 20.5 20.5 16.6944 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM13 16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16C11 15.4477 11.4477 15 12 15C12.5523 15 13 15.4477 13 16ZM10.4908 9.36697C10.6002 8.67414 11.1635 8 12 8C12.823 8 13.3815 8.65255 13.5035 9.33344C13.5246 9.75954 13.4341 10.0331 13.3139 10.238C13.1791 10.4678 12.9791 10.661 12.6984 10.8964C12.6531 10.9345 12.6037 10.9746 12.5515 11.017L12.5514 11.017C12.0385 11.4332 11.25 12.073 11.25 13.25C11.25 13.6642 11.5858 14 12 14C12.4142 14 12.75 13.6642 12.75 13.25C12.75 12.8099 12.9721 12.6239 13.5817 12.1133L13.6625 12.0456C13.9628 11.7937 14.3345 11.4627 14.6077 10.997C14.8922 10.5121 15.0443 9.92852 14.9985 9.20281L14.9963 9.16774L14.9908 9.13303C14.8002 7.92587 13.7728 6.5 12 6.5C10.2272 6.5 9.19978 7.92587 9.00918 9.13303C8.94458 9.54217 9.22388 9.92622 9.63303 9.99082C10.0422 10.0554 10.4262 9.77612 10.4908 9.36697Z"
                fill="black"></path>
        </svg>
        <div class="header__menu-txt">Часто задаваемые вопросы</div>
    </div>
    <div class="header__menu-item">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#000" xmlns="http://www.w3.org/2000/svg"
            class="ui-icon ">
            <path fill-rule="evenodd" clip-rule="evenodd"
                d="M5.56066 7H18.4393L12.8839 12.5555C12.3957 13.0436 11.6043 13.0436 11.1161 12.5555L5.56066 7ZM4.5 15.9393V8.06066L8.43934 12L4.5 15.9393ZM5.56066 17H18.4393L14.5 13.0607L13.9445 13.6161C12.8706 14.6901 11.1294 14.6901 10.0555 13.6161L9.5 13.0607L5.56066 17ZM15.5607 12L19.5 15.9393V8.06066L15.5607 12ZM5 5.5C3.89543 5.5 3 6.39543 3 7.5V16.5C3 17.6046 3.89543 18.5 5 18.5H19C20.1046 18.5 21 17.6046 21 16.5V7.5C21 6.39543 20.1046 5.5 19 5.5H5Z"
                fill="black"></path>
        </svg>
        <div class="header__menu-txt">Связаться с нами</div>
    </div>
    <div class="header__menu-item">
        <img src="data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath fill-rule='evenodd' clip-rule='evenodd' d='M8.25 2C7.00736 2 6 3.00736 6 4.25V11.0189C6.16502 11.0064 6.33176 11 6.5 11C6.84007 11 7.17403 11.0261 7.5 11.0764V4.25C7.5 3.83579 7.83579 3.5 8.25 3.5H15.75C16.1642 3.5 16.5 3.83579 16.5 4.25V19.75C16.5 20.1642 16.1642 20.5 15.75 20.5H12.2678C11.9806 21.051 11.6168 21.5557 11.1904 22H15.75C16.9926 22 18 20.9926 18 19.75V4.25C18 3.00736 16.9926 2 15.75 2H8.25ZM13 17.5C13 18.0163 12.9398 18.5185 12.8261 19H14.5C14.9142 19 15.25 18.6642 15.25 18.25C15.25 17.8358 14.9142 17.5 14.5 17.5H13ZM12 17.5C12 20.5376 9.53757 23 6.5 23C3.46243 23 1 20.5376 1 17.5C1 14.4624 3.46243 12 6.5 12C9.53757 12 12 14.4624 12 17.5ZM7 14.5C7 14.2239 6.77614 14 6.5 14C6.22386 14 6 14.2239 6 14.5V19.2929L4.35355 17.6464C4.15829 17.4512 3.84171 17.4512 3.64645 17.6464C3.45118 17.8417 3.45118 18.1583 3.64645 18.3536L6.14645 20.8536C6.34171 21.0488 6.65829 21.0488 6.85355 20.8536L9.35355 18.3536C9.54882 18.1583 9.54882 17.8417 9.35355 17.6464C9.15829 17.4512 8.84171 17.4512 8.64645 17.6464L7 19.2929V14.5Z' fill='%23141415'/%3e %3c/svg%3e"
            class="noselect" data-v-41ba8b3e="" style="width: 24px;">
        <div class="header__menu-txt">Приложения Uzum</div>
    </div>
    <div class="header__menu-item">
        <div class="header__langs header__menu-langs">
            <div data-lang class="header__langs-area"></div>
            <div data-lang="ru" class="header__langs-chosen">
                <img class="header__lang-icon" src="/icons/header/ru.svg" alt="icon">
                <span>Русский</span>
            </div>
            <div class="header__langs-list">
                <div data-lang="uz" class="header__lang">
                    <img class="header__lang-icon" src="/icons/header/uzb.svg" alt="icon">
                    <span>Узбекский</span>
                </div>
            </div>
        </div>
    </div>
    <div class="divider"></div>
    <div class="header__menu-item header__menu-item_drop-down" data-list-num="1">
        <div class="header__menu-txt">О нас</div>
        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
            class="ui-icon toggle-icon">
            <path fill-rule="evenodd" clip-rule="evenodd"
                d="M5.21967 9.21967C5.51256 8.92678 5.98744 8.92678 6.28033 9.21967L12 14.9393L17.7197 9.21967C18.0126 8.92678 18.4874 8.92678 18.7803 9.21967C19.0732 9.51256 19.0732 9.98744 18.7803 10.2803L12.5303 16.5303C12.2374 16.8232 11.7626 16.8232 11.4697 16.5303L5.21967 10.2803C4.92678 9.98744 4.92678 9.51256 5.21967 9.21967Z"
                fill="black"></path>
        </svg>
    </div>
    <div class="header__menu-list" data-list-num="1">
        <div class="header__menu-list-item">Пункты выдачи</div>
        <div class="header__menu-list-item">Вакансии</div>
    </div>
    <div class="divider"></div>
    <div class="header__menu-item header__menu-item_drop-down" data-list-num="2">
        <div class="header__menu-txt">Партнёрам</div>
        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
            class="ui-icon toggle-icon">
            <path fill-rule="evenodd" clip-rule="evenodd"
                d="M5.21967 9.21967C5.51256 8.92678 5.98744 8.92678 6.28033 9.21967L12 14.9393L17.7197 9.21967C18.0126 8.92678 18.4874 8.92678 18.7803 9.21967C19.0732 9.51256 19.0732 9.98744 18.7803 10.2803L12.5303 16.5303C12.2374 16.8232 11.7626 16.8232 11.4697 16.5303L5.21967 10.2803C4.92678 9.98744 4.92678 9.51256 5.21967 9.21967Z"
                fill="black"></path>
        </svg>
    </div>
    <div class="header__menu-list" data-list-num="2">
        <div class="header__menu-list-item">Продавайте на Uzum</div>
        <div class="header__menu-list-item">Вход для продавцов</div>
    </div>
</div>
<div class="header__floor">
    <div class="container">
        <div class="header__floor-inner">
            <div class="header__floor-flex-box"></div>
            <div class="header__floor-more" id="catal-btn">
                <span>Ещё</span>
                <img class="header__floor-more-icon" src="/icons/arrow.svg" alt="icon">
            </div>
        </div>
    </div>
</div>
    `
}

export function footerCreate(place) {
    place.innerHTML = `
        <div class="container">
			<div class="footer__inner">
				<div class="footer__big-block">
					<div class="footer__info">
						<div class="footer__info-item">
							<div id="acc-item" class="footer__txt_bold">
								<span>О нас</span>
								<img class="footer__arrow" src="/icons/arrow.svg" alt="icon">
							</div>
							<div class="footer__info-list">
								<div class="footer__txt_thin">Пункты выдачи</div>
								<div class="footer__txt_thin">Вакансии</div>
							</div>
						</div>
						<div class="footer__info-item">
							<div id="acc-item" class="footer__txt_bold">
								<span>Пользователям</span>
								<img class="footer__arrow" src="/icons/arrow.svg" alt="icon">
							</div>
							<div class="footer__info-list">
								<div class="footer__txt_thin">Связаться с нами</div>
								<div class="footer__txt_thin">Вопрос - Ответ</div>
							</div>
						</div>
						<div class="footer__info-item">
							<div id="acc-item" class="footer__txt_bold">
								<span>Для предпринимателей</span>
								<img class="footer__arrow" src="/icons/arrow.svg" alt="icon">
							</div>
							<div class="footer__info-list">
								<div class="footer__txt_thin">Продавайте на Uzum</div>
								<div class="footer__txt_thin">Вход для продавцов</div>
							</div>
						</div>
					</div>
					<div class="footer__app-and-sm">
						<div class="footer__app">
							<div class="footer__txt_bold">Скачать приложение</div>
							<div class="footer__app-wrapper">
                                <div class="footer__app-wrapper-item">
                                    <img class="footer__app-logo"
                                        src="/icons/footer/app-store.svg" alt="logo">
                                        <span class="footer__app-wrapper-text">App Store</span>
                                </div>
                                <div class="footer__app-wrapper-item">
								<img class="footer__app-logo"
									src="/icons/footer/google-play.svg" alt="logo">
                                    <span class="footer__app-wrapper-text">Google Play</span>
                                </div>
							</div>
						</div>
						<div class="footer__sm">
							<div class="footer__txt_bold">Uzum в соцсетях</div>
							<div class="footer__sm-wrapper">
								<img class="footer__app-logo_sm" src="/icons/footer/instagram.svg"
									alt="logo">
								<img class="footer__app-logo_sm" src="/icons/footer/telegram.svg" alt="logo">
								<img class="footer__app-logo_sm" src="/icons/footer/youtube.svg" alt="logo">
								<img class="footer__app-logo_sm" src="/icons/footer/facebook.svg" alt="logo">
							</div>
						</div>
					</div>
				</div>
				<div class="footer__rights">
					<div class="footer__rights-item">
						<div class="footer__txt_bold">Соглашение о конфиденциальности</div>
						<div class="footer__txt_bold">Пользовательское соглашение</div>
					</div>
					<div class="footer__rights-item">
						<div class="footer__txt_thin">
							«2023© ИП ООО «UZUM MARKET». ИНН 309376127. Все права защищены»
						</div>
					</div>
				</div>
			</div>
		</div>
    `
}

export function popupCreate(place) {
    place.innerHTML = `
        <div class="popup__body">
            <div class="popup__area" data-popup-close></div>
            <div class="popup__content">
                <div class="popup__inner">
                    <div class="popup__close-btn" data-popup-close>&times;</div>
                    <h1 class="popup__title">Зарегистрироваться</h1>
                    <form name="sign-up" class="popup__form">
                        <input class="popup__inp" type="text" name="name" placeholder="Имя">
                        <input class="popup__inp" type="text" name="password" placeholder="Пароль">
                        <button class="popup__btn" type="submit">Зарегистрироваться</button>
                    </form>
                    <p class="popup__sign-in" data-popup-type="sign-in">Войти</p>
                    <p class="popup__text">
                        Авторизуясь, вы соглашаетесь c <span class="popup__text_blue">политикой обработки
                            персональных данных</span>
                    </p>
                </div>
            </div>
        </div>
        <div class="popup__body">
            <div class="popup__area" data-popup-close></div>
            <div class="popup__content">
                <div class="popup__inner">
                    <div class="popup__close-btn" data-popup-close>&times;</div>
                    <h1 class="popup__title">Войти</h1>
                    <form name="sign-in" class="popup__form">
                        <input class="popup__inp" type="text" name="name" placeholder="Имя">
                        <input class="popup__inp" type="text" name="password" placeholder="Пароль">
                        <button class="popup__btn" type="submit">Войти</button>
                    </form>
                    <p class="popup__sign-in" data-popup-type="sign-up">Зарегестрироваться</p>
                    <p class="popup__text">
                        Авторизуясь, вы соглашаетесь c <span class="popup__text_blue">политикой обработки
                            персональных данных</span>
                    </p>
                </div>
            </div>
        </div>
    `
}
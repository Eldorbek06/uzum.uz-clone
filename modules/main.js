let langsBlocks = document.querySelectorAll('#languages'),
    langsItems = document.querySelectorAll('[data-lang-item]'),
    autoLangSet = localStorage.getItem('lang')

langsBlocks.forEach(el => {
    if (autoLangSet != null) {
        if (autoLangSet == 'uz') {
            el.classList.add('langs-uz')
        } else {
            el.classList.remove('langs-uz')
        }
    }

    el.onclick = () => { classNameToggle(el, 'languages-active') }
})

langsItems.forEach(el => {
    el.onclick = () => {
        langsBlocks.forEach(item => {
            if (el.dataset.langItem == 'ru') {
                item.classList.remove('langs-uz')
                localStorage.setItem('lang', 'ru')
            } else {
                item.classList.add('langs-uz')
                localStorage.setItem('lang', 'uz')
            }
        })
    }
})

function classNameToggle(htmlElem, className) { htmlElem.classList.contains(className) ? htmlElem.classList.remove(className) : htmlElem.classList.add(className) }
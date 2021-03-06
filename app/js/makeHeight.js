function editBackgroundImage() {
    let blc = document.querySelector('.header__top')
    let set = blc.dataset.srcSet.split(',')
    let desk =  set[0]
    let mob = set[1]
    let width = document.documentElement.clientWidth

    if (width >= 577) {
        blc.style.backgroundImage = `url('${desk}')`
    } else {
        blc.style.backgroundImage = `url('${mob}')`
    }
    makeHeight()
}

function makeHeight() {
    let blc2 = document.querySelector('.header__container')
    let width = document.documentElement.clientWidth;
    if(!blc2.classList.contains('collapsed')) {
        if (width >= 577) {
            if(!blc2.classList.contains('collapsed')) {
                let heightOfImg = Math.ceil((width / 2000) * 220);
                blc2.style.height = `${heightOfImg}px`
            }
        } else {
            if(!blc2.classList.contains('collapsed')) {
                let heightOfImg = Math.ceil((width / 576) * 100);
                blc2.style.height = `${heightOfImg}px`
            }
        }
    }
}

editBackgroundImage()

window.addEventListener("orientationchange", function () {
    setTimeout(editBackgroundImage, 100)
    setTimeout(makeHeight, 150)
});
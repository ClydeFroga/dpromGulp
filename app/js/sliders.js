function slider() {
    var sliderBigOne = new Swiper('.sliderBigOne', {
        spaceBetween: 20,
        slidesPerView: 1.3,

        breakpoints: {
            768: {
                slidesPerColumnFill: 'row',
                slidesPerColumn: 2,
                slidesPerView: 3,
            },
            1201: {
                slidesPerView: 5,
            },
        },
        scrollbar: {
            el: '#sliderBigOne-scrollbar',
            draggable: true,
            hide: false,
        },
    });
    var sliderBigTwo = new Swiper('.sliderBigTwo', {
        spaceBetween: 20,
        slidesPerView: 1.3,

        breakpoints: {
            768: {
                slidesPerView: 4,
            },
            1024: {
                slidesPerView: 5,
            },
        },
        scrollbar: {
            el: '#sliderBigTwo-scrollbar',
            draggable: true,
            hide: false,
        },
    });
    var sliderDouble = new Swiper('#sliderMini', {
        spaceBetween: 15,
        slidesPerView: 1.3,
        breakpoints: {
            576: {
                slidesPerView: 3,
            },
            768: {
                slidesPerColumnFill: 'row',
                slidesPerView: 2,
                allowTouchMove: false,
                slidesPerColumn: 2,
            },
        },
    });
    var sliderTriple = new Swiper('#sliderThreeBlock', {
        spaceBetween: 15,
        slidesPerView: 1.3,
        breakpoints: {
            768: {
                allowTouchMove: false,
                slidesPerView: 3,
            },
        },
    });
    var sliderFourth = new Swiper('#sliderFourthBlock', {
        spaceBetween: 8,
        slidesPerView: 1.3,

        breakpoints: {
            768: {
                slidesPerView: 4,
            },
        },
        scrollbar: {
            el: '#sliderFourth-slider',
            draggable: true,
            hide: false,
        },
    });
    var sliderFive = new Swiper('#sliderFiveBlock', {
        spaceBetween: 10,
        slidesPerView: 1.3,

        breakpoints: {
            768: {
                spaceBetween: 25,
                slidesPerColumnFill: 'row',
                slidesPerView: 3,
                allowTouchMove: false,
                slidesPerColumn: 2,
            },
        },
    });
    let minerSlider = document.getElementById('minerSlider');
    var minerSliderC = new Swiper(minerSlider, {
        spaceBetween: 0,
        slidesPerView: 1,
        pagination: {
            el: "#minerSlider__buttonsPag",
            clickable: false,
            type: 'custom',
            renderCustom: function (minerSlider, current, total) {
                return `<span>${current}</span> из <span>${total}</span>`
            }
        },
        navigation: {
            prevEl: '#minerSlider__buttonsPrev',
            nextEl: '#minerSlider__buttonsNext',
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
    });
}
document.addEventListener('DOMContentLoaded', slider)
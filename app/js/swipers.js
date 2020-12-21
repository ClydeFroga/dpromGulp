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
      1280: {
        slidesPerView: 5,
      },
    },
    scrollbar: {
      el: '#sliderBigOne-scrollbar',
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
}
document.addEventListener('DOMContentLoaded', slider)

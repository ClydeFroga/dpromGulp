
function slider() {
  var sliderBigOne = new Swiper('.sliderBigOne', {
    spaceBetween: 20,
    slidesPerView: 1.5,

    breakpoints: {
      320: {
        slidesPerColumnFill: 'row',
        slidesPerColumn: 2,
        slidesPerView: 3,
      },
      1280: {
        slidesPerView: 5,
      },
    },
    scrollbar: {
      el: '.sliderBigOne-scrollbar',
      draggable: true,
      hide: false,
    },
  });

}
document.addEventListener('DOMContentLoaded', slider)

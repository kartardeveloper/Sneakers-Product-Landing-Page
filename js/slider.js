// ------------------------------------------ MAIN PRODUCT SLIDER  ------------------------------------------
var swiper = new Swiper(".product__images-thumbs-slider", {
    spaceBetween: 30,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".product__images-slider", {
    loop: true,
    spaceBetween: 10,
    effect: "fade",
    navigation: {
      nextEl: ".mobile-swiper-button-next",
      prevEl: ".mobile-swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    }
  });

// ------------------------------------------  OVERLAY SLIDER  ------------------------------------------
  var overlaySwiper = new Swiper(".product-overlay__images-thumbs-slider", {
    spaceBetween: 30,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var overlaySwiper2 = new Swiper(".product-overlay__images-slider", {
    loop: true,
    spaceBetween: 10,
    effect: "fade",
    navigation: {
      nextEl: ".overlay-swiper-button-next",
      prevEl: ".overlay-swiper-button-prev",
    },
    thumbs: {
      swiper: overlaySwiper,
    },
  });
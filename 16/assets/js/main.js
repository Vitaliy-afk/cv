jQuery( document ).ready(function() {
  initBurgerMenu();
  initSlickSlider();
});

function initBurgerMenu() {
  jQuery('.burger').on('click', function(e){
      e.preventDefault()
      jQuery(this).toggleClass('open');
      jQuery('body').toggleClass('burger-active');
  });
}



function initSlickSlider() {
  jQuery('.hero-slider').slick({
    adaptiveHeight: true,
    fade: true,
    arrows: false,
    dots: true,
    rows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    easing:'ease',
    infinity:true,
    // prevArrow: '<button class="slick-prev"><i class="fa-solid fa-chevron-left"></i></button>',
    // nextArrow: '<button class="slick-next"><i class="fa-solid fa-chevron-right"></i></button>'
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            adaptiveHeight: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
            breakpoint: 768,
            settings: {
              adaptiveHeight: true,
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          }
      ]
});

  jQuery('.about-slider').slick({
  infinite: true,
  speed: 1000,
  slidesToShow: 6,
  slidesToScroll: 1,
  arrows: true,
    responsive: [
      {
        breakpoint: 2560,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
})};







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
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
})};


const offset = 100;
const scrollUp = document.querySelector('.scroll-up');
const scrollUpSvgPath = document.querySelector('.scroll-up__svg-path');
const pathLength = scrollUpSvgPath.getTotalLength();

scrollUpSvgPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
scrollUpSvgPath.style.transition = 'stroke-dashoffset 20ms';


const getTop = () => window.pageYOffset || document.documentElement.scrollTop;

// update dash offset
const updateDashoffset = () => {
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const dashoffset = pathLength - (getTop() * pathLength / height);

  scrollUpSvgPath.style.strokeDashoffset = dashoffset;
};

// onscroll
window.addEventListener('scroll', () => {
  updateDashoffset();

  if (getTop() > offset) {
    scrollUp.classList.add('scroll-up--active');
  } else {
    scrollUp.classList.remove('scroll-up--active');
  }
});

// click
scrollUp.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
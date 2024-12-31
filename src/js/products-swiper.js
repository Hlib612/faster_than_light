// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';
'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'
    const swiper = new Swiper(".productsSwiper", {
        // slidesPerView: 1,
      //відстань між слайдами
        spaceBetween: 18,
      //якщо хочеш, щоб можна було керувати стрілками на клавіатурі
        keyboard: {
          enabled: true,
        },
      // кількість слайдів та відстань між ними в пікселяк на кожний перелом
        breakpoints: {
          375: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          //  >= 768px
          768: {
            slidesPerView: 2.5,
            spaceBetween: 18,
          },
          // >= 1200px
          1200: {
            slidesPerView: 4,
            spaceBetween: 18,
          },
        },
      // пагінація внизу налаштування для клікабельності
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
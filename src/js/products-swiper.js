// import Swiper JS
import Swiper from 'swiper';
import {  Pagination } from 'swiper/modules';
// import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

    const swiper = new Swiper(".productsSwiper", {
      modules: [ Pagination],
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
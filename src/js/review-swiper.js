import Swiper from 'swiper';
import {Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
export const swiper = new Swiper('.reviewSwiper', {
  modules: [Pagination],
  grabCursor: true,
  // spaceBetween: 18,
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      375: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 28,
      },
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
});
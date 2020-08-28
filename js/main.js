window.addEventListener('DOMContentLoaded', () => {
  window.onload = function () {
  // swiper
    let swiperBanner = new Swiper('.slider-banner', {
      loop: true,
      autoplay: {
        delay: 5000,
      },
      pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });


    // sliderCategory
    const sliderCategory = document.querySelector('.category .cards-categories');

    let mySwiperCategory;

    function mobileSliderCategory() {
        if (window.innerWidth <= 1200 && sliderCategory.dataset.mobile == 'false') {
            mySwiperCategory = new Swiper(sliderCategory, {
                slidesPerView: 3,
                slideClass: 'swiper-slide',
                pagination: {
                    el: '.category .swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.category .swiper-button-next',
                    prevEl: '.category .swiper-button-prev',
                },
                breakpoints: {
                    0: {
                      slidesPerView: 1,
                      spaceBetween: 10,
                    },
                    520: {
                      slidesPerView: 2,
                      spaceBetween: 5,
                    },
                    991: {
                      slidesPerView: 3
                    }
                }
            });

            sliderCategory.dataset.mobile = 'true';
        }
        if (window.innerWidth > 1200) {
            sliderCategory.dataset.mobile = 'false';
            if (sliderCategory.classList.contains('swiper-container-initialized')) {
                slidesPerView: 3
                // mySwiperCategory.destroy();
            }
        }
    }
    // запускаем слайдер если он есть на странице
    if (sliderCategory) {
        mobileSliderCategory();

        window.addEventListener('resize', () => {
            mobileSliderCategory();
        });
    }


    // card team
    let swiperTrener = new Swiper('.cards-team', {
        slidesPerView: 2,
        spaceBetween: 15,
        // loop: true,
        autoplay: {
          delay: 8000,
        },
        pagination: {
                el: '.swiper-pagination_team',
                clickable: true,
              },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          breakpoints: {
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              520: {
                slidesPerView: 1.3,
                spaceBetween: 5,
              },
              991: {
                slidesPerView: 2
              }
          }
    });


    // reviews
    let swiperReviews = new Swiper('.cards-reviews', {
        slidesPerView: 3,
        spaceBetween: 30,
          loop: true,
          autoplay: {
            delay: 5000,
          },
          pagination: {
                el: '.swiper-pagination_rev',
                clickable: true,
              },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          breakpoints: {
                0: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                720: {
                  slidesPerView: 1.6,
                  spaceBetween: 5,
                },
                991: {
                  slidesPerView: 3
                }
            }
    });
  }
})
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 50,
    grabCursor: true,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-btn-next",
      prevEl: ".swiper-btn-prev",
    },
  });


  $(document).ready(function () {
    $(window).scroll(function () {
      if(scrollY> 500) {
        $("header .nav_bottom").addClass("nav_bottom_active")
      }
      else {
        $("header .nav_bottom").removeClass("nav_bottom_active")
      }
      
    } )
  } )
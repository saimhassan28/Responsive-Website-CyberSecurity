    // FOR SWIPER SLIDER

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    centeredSlides: true,
    slidesPerView: 1,
    grabCursor: true,
    freeMode: false,
    loop: true,
    mousewheel: false,

    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    // If we need pagination
   
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {


      640: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });

      // FOR LOGO SLIDER

  var copy = document.querySelector(".logos-slide").cloneNode(true);
      document.querySelector(".logos").appendChild(copy);


  for (let i = 0; i < elements.length; i++) {
    clampText(elements[i]);
}

const clampText = (element) => {
    let lineHeight = parseFloat(window.getComputedStyle(element).lineHeight);
    let maxHeight = parseFloat(window.getComputedStyle(element).maxHeight);
    let lines = maxHeight / lineHeight;
    element.style.maxHeight = lineHeight * lines + "px";
    element.style.overflow = "hidden";
  }
      
let menu = document.querySelector('.menu-icon');

menu.onclick = () => {
    menu.classList.toggle('move')
}

let header = document.querySelector("header")

window.addEventListener("scroll", () => {
    header.classList.toggle("header-active", window.scrollY > 0);
});  

//  Swiper
var swiper = new Swiper(".projects-content", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
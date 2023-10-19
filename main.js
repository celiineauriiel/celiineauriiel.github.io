function scrollHeader() {
    const header = document.getElementById('header')
    //saat scroll lebih dari 50 viewport, tambahkan ini ke headerr tag
    if(this.scrollY >= 50) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


document.addEventListener("DOMContentLoaded", function () {
  var swiperExperiences = new Swiper(".experiences-container", {
    spaceBetween: 32,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 3,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});

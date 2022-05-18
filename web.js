var swiper = new Swiper(".mySwiper", {
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    effect: "coverflow",
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 1,
        depth: 150,
        modifier: 3,
        slideShadows: true,
    },


});
let navbar = document.querySelector("#navbar1");
let col1 = document.querySelector(".col1");
let col2 = document.querySelector(".col2");
let animate__animated = document.querySelector(".animate__animated");
let animate__slideInLeft = document.querySelector(".animate__slideInLeft");
let scrollToTop = document.querySelector("#scrollToTop");
let col3 = document.querySelector(".col3");
let col4 = document.querySelector(".col4");
let col5 = document.querySelector(".col5");
let row1 = document.querySelector(".row1");
let row2 = document.querySelector(".row2");
let animate__zoomInRight = document.querySelector(".animate__zoomInRight")
let animate__fadeInTopRight = document.querySelector(".animate__fadeInTopRight")
let animate__fadeInTopLeft = document.querySelector(".animate__fadeInTopLeft")

window.onscroll = () => {
    let scrollDown = window.scrollY;

    if (scrollDown > 350) {
        navbar.classList.add("changeNav");
        col1.classList.add("animate__slideInLeft");
        col2.classList.add("animate__slideInDown");
        col3.classList.add("animate__zoomInRight");
        scrollToTop.classList.add("showScroll");
        scrollToTop.classList.remove("hideScroll");
    } else {
        navbar.classList.remove("changeNav");
        col1.classList.remove("animate__slideInLeft");
        col2.classList.remove("animate__slideInDown");
        col3.classList.remove("animate__zoomInRight");
        scrollToTop.classList.remove("showScroll");
        scrollToTop.classList.add("hideScroll");
    }
    if (scrollDown > 750) {
        col3.classList.add("animate__zoomInRight");

    } else {
        col3.classList.remove("animate__zoomInRight");

    }
    if (scrollDown > 1300) {
        row1.classList.add("animate__slideInDown");
        row2.classList.add("animate__slideInDown");

    } else {
        row1.classList.remove("animate__slideInDown");
        row2.classList.remove("animate__slideInDownt");

    }
    if (scrollDown > 2700) {
        col4.classList.add("animate__slideInLeft");
        col5.classList.add("animate__slideInRight");
    } else {
        col4.classList.remove("animate__slideInLeft");
        col5.classList.remove("animate__slideInRight");
    }
}
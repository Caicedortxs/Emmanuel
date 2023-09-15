let iconChevronRight = document.getElementById("iconChevronRight");
let boxCarousel = document.getElementById("boxCarousel");

iconChevronRight.addEventListener("click", function() {
    if (boxCarousel.classList.contains("box-carousel-1")) {
        boxCarousel.classList.remove("box-carousel-1");
        boxCarousel.classList.add("box-carousel-2");
    }
    else if (boxCarousel.classList.contains("box-carousel-2")) {
        boxCarousel.classList.remove("box-carousel-2");
        boxCarousel.classList.add("box-carousel-3");
    }
});
const carousel = document.querySelector(".carousel");
const slidesContainer = carousel.querySelector(".carousel__slides");
const slides = carousel.querySelectorAll(".carousel__slide");
const prevButton = carousel.querySelector(".carousel__prev");
const nextButton = carousel.querySelector(".carousel__next");
const slideWidth = slides[0].offsetWidth;
let currentIndex = 0;

nextButton.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
  updateSlidePosition();
});

prevButton.addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }
  updateSlidePosition();
});

function updateSlidePosition() {
  slidesContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

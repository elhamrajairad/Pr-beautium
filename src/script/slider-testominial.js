const slideEl = document.querySelectorAll(".slide");
const maxSlide = slideEl.length - 1;
let currentSlide = 0;
slideEl.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));

document.querySelector(".arrow-right").addEventListener("click", () => {
  if (currentSlide === maxSlide) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  slideEl.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - currentSlide)}%)`)
  );
});
document.querySelector(".arrow-left").addEventListener("click", () => {
  if (currentSlide == 0) {
    currentSlide = 0;
  } else {
    currentSlide--;
  }
  slideEl.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - currentSlide)}%)`)
  );
});

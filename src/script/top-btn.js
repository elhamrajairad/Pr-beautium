const sliderEl = document.getElementById("header");
const btnEl = document.getElementById("top-btn");

function scrollTop(entries) {
  let [entriy] = entries;
  if (!entriy) return;
  console.log(entriy);
  if (entriy.isIntersecting == false) {
    btnEl.style.opacity = "1";
    btnEl.style.bottom = "3rem";
  } else {
    btnEl.style.opacity = "0";
    btnEl.style.bottom = "0";
  }
}

const obsTop = new IntersectionObserver(scrollTop, {
  root: null,
  tresher: 2.5,
});
obsTop.observe(sliderEl);

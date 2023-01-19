const containerBtnEl = document.querySelector(".features__tabs__tabs__btns");
const btnsEl = document.querySelectorAll(".features__tabs__tabs__btns__btn");
const contentsEl = document.querySelectorAll(".features__tabs__tabs__content");

containerBtnEl.addEventListener("click", (e) => {
  let clickTab = e.target.closest(".features__tabs__tabs__btns__btn");
  if (!clickTab) return;

  contentsEl.forEach((c) => c.classList.remove("active"));
  btnsEl.forEach((el) => {
    el.style.color = "var(--first-color-text)";
    el.style.fontWeight = "400";
  });
  clickTab.style.color = "var(--second-color)";
  clickTab.style.fontWeight = "600";
  document
    .querySelector(`.tab-${clickTab.dataset.tab}`)
    .classList.add("active");
});

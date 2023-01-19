const titlePageEl = document.querySelector(".title__page");
// title page:
function loadTitle() {
  let html = `<h1 class="text-white sm:text-4xl lg:text-8xl font-extralight Playfair-Display py-12">${document.title}</h1>`;
  titlePageEl.insertAdjacentHTML("afterbegin", html);
}
loadTitle();

const url =
  "https://makeup-api.herokuapp.com/api/v1/products.json?product_tags=Canadian&product_type=mascara";
const productFetch = [];
const containerProductEl = document.querySelector(".products");
const headerEl = document.getElementById("header");
function renderProduct(productFetch) {
  productFetch.map((item) => {
    let html = `<a href="#" class="products__product flex flex-col justify-center align-middle items-center gap-3 ">
        <section class="products__product__img relative">
            <img src="${item.image_link}"
                alt="${item.name}">
                <span
                                class="absolute block bottom-0 right-0 bg-black text-white hover:text-orange-600 py-2 px-3 shop-basket-btn cursor-pointer"><i
                                    class="ri-shopping-cart-line "></i></span>
        </section>
        <h4 class="products__product__title">${item.name}</h4>
        <span class="products__product__price block">$${Number(
          item.price
        ).toFixed(2)}</span>
        <span class="products__product__rate block">
            <i class="ri-star-line"></i>
            <i class="ri-star-line"></i>
            <i class="ri-star-line"></i>
            <i class="ri-star-line"></i>
            <i class="ri-star-line"></i>
        </span>
    </a>`;
    containerProductEl.insertAdjacentHTML("afterbegin", html);
  });
}
async function fetchApi() {
  const res = await fetch(url);
  try {
    const data = await res.json();
    data.map((product) => productFetch.push(product));
    productFetch.splice(4);
    renderProduct(productFetch);
  } catch (error) {
    console.log("please on vpn:)");
  }
}
fetchApi();

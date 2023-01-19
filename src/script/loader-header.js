// header section:
const headerEl = document.getElementById("header");
loadHeader();
function loadHeader() {
  let html = `<nav id="navbar">
      <div class="mx-auto px-4 2xl:container">
          <section class="navbar flex flex-wrap flex-row justify-between align-middle items-center gap-2">
              <section class="navbar__icon  mx-1 cursor-pointer">
                  <i class="ri-more-line"></i>
              </section>
              <section class="navbar__logo Playfair-Display mx-1 font-thin">
                  <h1 class="uppercase text-lg ">Béautium</h1>
              </section>
              <section class="navbar__menu mx-auto ">
                  <ul class="flex flex-wrap flex-row justify-between align-middle items-center gap-10 w-full ">
                      <li><a href="../src/index.html" class="capitalize text-sm font-normal">home</a>
                      </li>
                      <li><a href="./services.html" class="capitalize text-sm font-normal">service</a>
                      </li>
                      <li><a href="./team.html" class="capitalize text-sm font-normal">team</a>
                      </li>
                      <li><a href="./contact.html" class="capitalize text-sm font-normal">contact</a>
                      </li>
                  </ul>
              </section>
              <section class="navbar__shop">
             <a href="./account.html"><i class="ri-logout-circle-r-line mx-1 hover:text-gray-500 cursor-pointer"></i></a>
              <i class="ri-search-2-line mx-1 hover:text-gray-500 cursor-pointer"></i>
              </section>
          </section>
      </div>
  </nav>`;
  headerEl.insertAdjacentHTML("afterbegin", html);
}

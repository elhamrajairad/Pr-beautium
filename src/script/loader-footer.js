// loade footer
let footerEl = document.querySelector(".footer-el");
// footer section:
function loadFooter() {
  let html = `<div class="mx-auto px-4 2xl:container">
    <section class="footer text-center flex flex-col items-center justify-center gap-10">
        <h1 class="uppercase text-lg ">Béautium</h1>
        <span class="text-orange-600 footer__social">
            <a href="#" class="hover:text-black text-sm mx-2">Fb</a>
            <a href="#" class="hover:text-black text-sm mx-2">Tw</a>
            <a href="#" class="hover:text-black text-sm mx-2">Ln</a>
            <a href="#" class="hover:text-black text-sm mx-2">In</a>
        </span>
        <form>
            <input type="email" name="email" class="bg-transparent outline-none border-bottom" placeholder="Email">
            <button type="submit">Subscrib</button>
        </form>
        <ul class="flex flex-row gap-12">
            <li><a href="../src/index.html" class="capitalize text-sm font-normal hover:text-gray-400">Home</a></li>
            <li><a href="./services.html" class="capitalize text-sm font-normal hover:text-gray-400">Service</a></li>
            <li><a href="./team.html" class="capitalize text-sm font-normal hover:text-gray-400">Team</a></li>
            <li><a href="./contact.html" class="capitalize text-sm font-normal hover:text-gray-400">Contact</a></li>
        </ul>
        <small>2023 Beautium. All rights reserved by Artureanec</small>
    </section>
</div>`;
  footerEl.insertAdjacentHTML("afterbegin", html);
}
loadFooter();

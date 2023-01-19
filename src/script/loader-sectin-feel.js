// loade footer and header:
const feelSectionEl = document.getElementById("feel");
// section feel:
function loadeFeelSection() {
  let html = `<div class="mx-auto px-4 2xl:container">
    <section class="feel">
        <section>
            <h3
                class="Playfair-Display sm:text-3xl lg:text-5xl 2xl:text-6xl font-normal text-white leading-normal relative">
                <span class="corinthia absolute subtitle right-0 left-0" id="span">Beautium</span>
                FEEL BETTER <br>
                WITH BEATIUM STUDIO</h2>
                <button class="btn-secondary mt-4 transition-s">Explore more</button>
        </section>
    </section>
</div>`;
  feelSectionEl.insertAdjacentHTML("afterbegin", html);
}
loadeFeelSection();

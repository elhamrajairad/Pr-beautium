const teamEl = document.getElementById("team");
function loadTeam() {
  let html = `<div class="mx-auto px-4 2xl:container">
    <section class="team">
        <section class="team__title relative">
            <h3 class="Playfair-Display sm:text-3xl lg:text-5xl 2xl:text-6xl font-normal leading-normal ">
                MEET THE BEST <br> TEAM EVER</h3>
            <section class="team__title__members grid mt-12 gap-6">
                <div class="team__title__members__member overflow-hidden relative">
                    <a href="#" class="overflow-hidden block rounded-50">
                        <img src="./accetes/team/team-1.jpg" alt="team"
                            class="hover:scale-105 transition-s">
                    </a>
                    <div class="team__title__members__member__title text-center mt-7">
                        <h2 class="cursor-pointer hover:text-orange-600">Samanta Edwards</h2>
                        <span class="text-orange-600 ">
                            <a href="#" class="hover:text-black">Fb</a>
                            <a href="#" class="hover:text-black">Tw</a>
                            <a href="#" class="hover:text-black">Ln</a>
                            <a href="#" class="hover:text-black">In</a>
                        </span>
                    </div>
                </div>
                <div class="team__title__members__member overflow-hidden relative">
                    <a href="#" class="overflow-hidden block rounded-50">
                        <img src="./accetes/team/team-2.jpg" alt="team"
                            class="hover:scale-105 transition-s">
                    </a>
                    <div class="team__title__members__member__title text-center mt-7">
                        <h2 class="cursor-pointer hover:text-orange-600">Helen Miller</h2>
                        <span class="text-orange-600 ">
                            <a href="#" class="hover:text-black">Fb</a>
                            <a href="#" class="hover:text-black">Tw</a>
                            <a href="#" class="hover:text-black">Ln</a>
                            <a href="#" class="hover:text-black">In</a>
                        </span>
                    </div>
                </div>
                <div class="team__title__members__member overflow-hidden relative">
                    <a href="#" class="overflow-hidden block rounded-50">
                        <img src="./accetes/team/team-3.jpg" alt="team"
                            class="hover:scale-105 transition-s">
                    </a>
                    <div class="team__title__members__member__title text-center mt-7">
                        <h2 class="cursor-pointer hover:text-orange-600">Helen Miller</h2>
                        <span class="text-orange-600 ">
                            <a href="#" class="hover:text-black">Fb</a>
                            <a href="#" class="hover:text-black">Tw</a>
                            <a href="#" class="hover:text-black">Ln</a>
                            <a href="#" class="hover:text-black">In</a>
                        </span>
                    </div>
                </div>
                <div class="team__title__members__member overflow-hidden relative">
                    <a href="#" class="overflow-hidden block rounded-50">
                        <img src="./accetes/team/team-4.jpg" alt="team"
                            class="hover:scale-105 transition-s">
                    </a>
                    <div class="team__title__members__member__title text-center mt-7">
                        <h2 class="cursor-pointer hover:text-orange-600">Selena Macnageds</h2>
                        <span class="text-orange-600 ">
                            <a href="#" class="hover:text-black">Fb</a>
                            <a href="#" class="hover:text-black">Tw</a>
                            <a href="#" class="hover:text-black">Ln</a>
                            <a href="#" class="hover:text-black">In</a>
                        </span>
                    </div>
                </div>
            </section>
            <!-- <span class="corinthia absolute subtitle sm:right-0 md:right-1 lg:right-1/2">Team</span> -->
        </section>
    </section>
</div>`;
  teamEl.insertAdjacentHTML("afterbegin", html);
}
loadTeam();

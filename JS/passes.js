// --- MOBILE NAV TOGGLE ---
function toggleMenu() {
    const mobileNav = document.getElementById('mobileNav');
    if (mobileNav) {
        mobileNav.classList.toggle('active');
    }
}

document.addEventListener('DOMContentLoaded', () => {

    /* =========================================
       BUTTON CLICK ANIMATION & REDIRECT
    ========================================= */

    const buttons = document.querySelectorAll('.buy-now-trigger');

    const passUrls = {
        silver: 'https://docs.google.com/forms/d/e/1FAIpQLSdr5_Dv5oalM_SEtzwzSf9YAkJp-kTYE_XCB3MnidKpABtN8w/viewform',
        gold: 'https://docs.google.com/forms/d/e/1FAIpQLSdo7wy3j0UeFR4JZq4i0_SSe6SPEIK44Z-znO9vlc9j15BzUg/viewform',
        platinum: 'https://forms.gle/xK8bdMQPvaNqxLeQ8'
    };

    buttons.forEach(btn => {

        btn.addEventListener('click', function (e) {

            e.preventDefault();

            const passCard = this.closest('.pass-card');
            let targetUrl = '';

            if (passCard.classList.contains('silver')) targetUrl = passUrls.silver;
            else if (passCard.classList.contains('gold')) targetUrl = passUrls.gold;
            else if (passCard.classList.contains('platinum')) targetUrl = passUrls.platinum;

            const originalText = this.innerText;

            this.innerText = "Processing...";
            this.style.backgroundColor = "#fff";
            this.style.color = "#000";

            if (targetUrl) {

                setTimeout(() => {

                    this.innerText = "Redirecting...";

                    setTimeout(() => {

                        this.innerText = originalText;
                        this.style.backgroundColor = "";
                        this.style.color = "";

                        window.open(targetUrl, "_blank");

                    }, 600);

                }, 800);

            } else {

                console.error('No target URL found for this card');

                this.innerText = "Error!";

                setTimeout(() => {

                    this.innerText = originalText;
                    this.style.backgroundColor = "";
                    this.style.color = "";

                }, 2000);
            }

        });

    });


    /* =========================================
       HAMBURGER MENU
    ========================================= */

    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const menuText = document.querySelector('.menu-text');

    if (hamburger && navMenu) {

        hamburger.addEventListener('click', () => {

            const isActive = navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');

            if (isActive) {

                if (menuText) {
                    menuText.textContent = 'Close';
                    menuText.style.color = "#ffffff";
                }

                document.body.style.overflow = 'hidden';

            } else {

                if (menuText) {
                    menuText.textContent = 'Menu';
                    menuText.style.color = "#ffffff";
                }

                document.body.style.overflow = 'auto';
            }

        });

    }

});
console.log("Contact page loaded");

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const menuText = document.querySelector('.menu-text');

    if (hamburger && navMenu) {
        // Toggle menu when clicking hamburger
        hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            
            const isActive = navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
            
            // Handle the text swap and scroll lock
            if (isActive) {
                if (menuText) {
                    menuText.textContent = 'Close';
                    menuText.style.color = "#ffffff"; 
                }
                document.body.style.overflow = 'hidden'; // Stop background scrolling
            } else {
                if (menuText) {
                    menuText.textContent = 'Menu';
                    menuText.style.color = "#ffffff";
                }
                document.body.style.overflow = 'auto'; // Restore scrolling
            }
        });

        // Close menu if clicking outside of it
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target) && navMenu.classList.contains('active')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                if (menuText) menuText.textContent = 'Menu';
                document.body.style.overflow = 'auto';
            }
        });

        // Close menu when a link inside it is clicked
        const navLinks = document.querySelectorAll('#nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                if (menuText) menuText.textContent = 'Menu';
                document.body.style.overflow = 'auto';
            });
        });
    }
});
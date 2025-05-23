const menuBtnWrapper = document.getElementById('menuBtnWrapper');
const menuBtn = document.getElementById('menuBtn');
const mobileNav = document.getElementById('mobileNav');
let isOpen = false;
let isAnimating = false;

menuBtn.addEventListener('click', () => {
    if (isAnimating) return;  // Blockiere weitere Eingaben während der Animation
    isAnimating = true;

    if (!isOpen) {
        // Sofort Drop-Down starten
        if (window.innerWidth <= 800) {
            menuBtnWrapper.classList.add('active');
            mobileNav.classList.add('active');
        }
        menuBtn.classList.add('move');
        setTimeout(() => {
            menuBtn.classList.add('rotate');
        }, 300);
        setTimeout(() => {
            isAnimating = false;
        }, 600);
    } else {
        // Sofort Drop-Down schließen
        if (window.innerWidth <= 800) {
            menuBtnWrapper.classList.remove('active');
            mobileNav.classList.remove('active');
        }
        menuBtn.classList.remove('rotate');
        setTimeout(() => {
            menuBtn.classList.remove('move');
        }, 300);
        setTimeout(() => {
            isAnimating = false;
        }, 600);
    }
    isOpen = !isOpen;
});
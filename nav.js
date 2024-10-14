// JavaScript for Toggle Menu
const menuToggle = document.querySelector('.navbar__toggle');
const navMenu = document.querySelector('.navbar__menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('navbar__menu--active');
});

// JavaScript for "Go to Top" Button
const goTopBtn = document.getElementById("goTopBtn");

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        goTopBtn.classList.add("show");
    } else {
        goTopBtn.classList.remove("show");
    }
}

goTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

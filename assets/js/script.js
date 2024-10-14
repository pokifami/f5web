// nav -----------------> start
const navMenu = document.querySelector('.nav__menu');
document.querySelector('.nav__bars').addEventListener('click', () => {
    navMenu.classList.toggle('is-active');
});
document.querySelector('.mobile__menu-close-icon').addEventListener('click', () => {
    navMenu.classList.toggle('is-active');
});

const subMenuList1 = document.querySelector('.submenu-list-1');
document.querySelector('.has-angle-down .angle-down-icon').addEventListener('click', () => {
    subMenuList1.classList.toggle('is-active')
});

// nav -----------------> end



// Start -----------------> Select color 
// Get all product color items
const colorItemList = document.querySelectorAll('.product__color-item')
colorItemList.forEach((option) => {
    let colorValue = '';
    option.addEventListener('click', () => {
        // Get product info containner of product
        const productInfo = option.closest('.product__info');

        // Remove 'product__color-item--active' class only from color options within the same product
        const productColorOptions = productInfo.querySelectorAll('.product__color-item');
        productColorOptions.forEach((eachOption) => {
            eachOption.classList.remove('product__color-item--active');
        });

        // Add 'product__color-item--active' class to the clicked color option
        option.classList.add('product__color-item--active');

        // Set color value to product sub title element
        colorValue = option.querySelector('.color-checkmark').getAttribute('data-value');
        productInfo.querySelector('.product__sub-title').innerHTML = colorValue;

    })
})

//  Function set init value to product sub tilte when page is loaded
function setInitValueToProductSubTitle() {
    const activeColorList = document.querySelectorAll('.product__color-item--active')
    activeColorList.forEach((activeColor) => {
        const productInfo = activeColor.closest('.product__info');
        const activeColorValue = activeColor.querySelector('.color-checkmark').getAttribute('data-value');
        productInfo.querySelector('.product__sub-title').innerHTML = activeColorValue;
    })
}

// End -----------------> Select color

//***************************************************************************/

// Start -----------------> Slideshows
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slideshow__slide");
    let dots = document.getElementsByClassName("dots__dot");
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active"); 
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");
}
// End -----------------> Slideshows

//***************************************************************************/

// Start -----------------> Login/Register modal
const modal = document.querySelector('.js-modal');
const navUserIcon = document.querySelector('.user-icon__link');
const closeModalBtns = document.querySelectorAll('.js-modal-close');
const modalContainer = document.querySelector('.js-modal-container');
const loginForm = document.getElementById('form-login');
const registerForm = document.getElementById('form-register');
const swtichToRegisterForm = document.querySelector('#form-login .form__switch-form');
const swtichToLoginForm = document.querySelector('#form-register .form__switch-form');

function openmodal() {
    modal.classList.add('opened');
}

function closeModal() {
    modal.classList.remove('opened');
}

navUserIcon.addEventListener('click', openmodal);

closeModalBtns.forEach(function(closeModalBtn) {
    closeModalBtn.addEventListener('click',closeModal);
})

modal.addEventListener('click', closeModal);

modalContainer.addEventListener('click', function(event) {
    event.stopPropagation();
});


swtichToRegisterForm.addEventListener('click', () => {
    loginForm.style.display = 'none';
    registerForm.style.display = 'block';
});

swtichToLoginForm.addEventListener('click', () => {
    registerForm.style.display = 'none';
    loginForm.style.display = 'block';
});


// End -----------------> Login/Register modal





// Function execute sub function inside when page is loaded
function pageLoad() {
    setInitValueToProductSubTitle();
}
window.onload = pageLoad;




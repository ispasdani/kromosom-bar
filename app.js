// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
let navbar = document.querySelector(".navbar");

// Get the offset position of the navbar
let sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// This function is for the popup image on click event
document.querySelectorAll('.img-gallery').forEach(image => {
    image.onclick = () => {
        document.querySelector('.popup-image').style.display = 'block';
        document.querySelector('.popup-image img').src = image.getAttribute('src');
    }
})

document.querySelector('.popup-image span').onclick = () => {
    document.querySelector('.popup-image').style.display = 'none';
}

// This function is for the HAMBURGER MENU
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const navBtn = document.querySelectorAll(".nav-a");

function mobileMenu() {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
}

hamburger.addEventListener("click", mobileMenu);
navBtn.forEach(n => n.addEventListener("click", closeMenu));


// This function is for the SOCIAL MEDIA BUTTONS 
const fbBtn = document.querySelector('.sm-btns-fb');
const instaBtn = document.querySelector('.sm-btns-inst');

fbBtn.addEventListener('click', function () {
  window.open('https://www.facebook.com/Kromosom66')
})

instaBtn.addEventListener('click', function () {
  window.open('https://www.instagram.com/kromosom66/')
})
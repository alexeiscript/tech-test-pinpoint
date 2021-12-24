// Mobile navigation

// Selection of HTML objects
const burger = document.querySelector('#burger')
const sidemenu = document.querySelector('nav')
const sidemenuLink = document.querySelectorAll('nav ul li a')

// Defining a function
function toggleMenu() {
  burger.classList.toggle('active')
  sidemenu.classList.toggle('active')
}

// Calling the function after click event occurs
sidemenuLink.forEach((link) => {
  link.addEventListener('click', toggleMenu)
})
burger.addEventListener('click', toggleMenu)

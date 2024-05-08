// Toggle Class Active
const navbarLink = document.querySelector('.navbars-link')

// Saat hamburger di klik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarLink.classList.toggle('active')
}

// Saat diklik diluar navbar, navnya ilang
const hamburger = document.querySelector('#hamburger-menu')

document.addEventListener('click', function(event) {
    if(!hamburger.contains(event.target) && !navbarLink.contains(event.target)) {
        navbarLink.classList.remove('active')
    }
})
let nub = document.getElementById("nup")

function tenvybtn() {
    document.getElementById("nup").innerHTML = "I'm Tenvy";

    nub.classList.add('nup-active')
}

const navbar = document.querySelector("navbar");

window.addEventListener('scroll', () => {
    if (window.scrollY >= 5000) {
        nav.classList.add('white-navbar');
    }
})
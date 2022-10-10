let nub = document.getElementById("nup")

function tenvybtn() {
    document.getElementById("nup").innerHTML = "I'm Tenvy";

    nub.classList.add('nup-active')
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-70px";
  }
}

/* Mobile navigation menu */
function openNav() {
    document.getElementById("m-menu").style.width = "100%";
}

function closeNav() {
    document.getElementById("m-menu").style.width = "0%";
}

/* Slider for positions */
var slideIndex = 1;
var pos = document.getElementsByClassName("position");
showSlides(slideIndex);

function plusSlides(n) {
    var newIndex = slideIndex + n;
    var isOutOfRange = newIndex > pos.length || newIndex < 1;
    if (isOutOfRange) return;
    slideIndex = newIndex;
    showSlides(newIndex);
}

function showSlides(n) {
    for (var i = 0; i < pos.length; i++) {
        pos[i].className = pos[i].className.replace(" active", "");
    }
    pos[slideIndex-1].className += " active";
}
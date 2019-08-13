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
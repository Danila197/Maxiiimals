/* Mobile navigation menu */
function openNav() {
    document.getElementById("m-menu").style.width = "100%";
}

function closeNav() {
    document.getElementById("m-menu").style.width = "0%";
}

/* Header slider for personal */
var headSlideIndex = 1;
var per = document.getElementsByClassName("personal");
headShowSlides(headSlideIndex);

function headPlusSlides(n) {
    var headNewIndex = headSlideIndex + n;
    var isOutOfRange = headNewIndex > per.length || headNewIndex < 1;
    if (isOutOfRange) return;
    headSlideIndex = headNewIndex;
    headShowSlides(headNewIndex);
}

function headShowSlides(n) {
    for (var i = 0; i < per.length; i++) {
        per[i].className = per[i].className.replace(" active", "");
    }
    per[headSlideIndex-1].className += " active";
}

/* Services slider for personal */
var servSlideIndex = 1;
var servPer = document.getElementsByClassName("services-personal");
servShowSlides(servSlideIndex);

function servPlusSlides(n) {
    var servNewIndex = servSlideIndex + n;
    var isOutOfRange = servNewIndex > servPer.length || servNewIndex < 1;
    if (isOutOfRange) return;
    servSlideIndex = servNewIndex;
    servShowSlides(servNewIndex);
}

function servShowSlides(n) {
    for (var i = 0; i < servPer.length; i++) {
        servPer[i].className = servPer[i].className.replace(" active", "");
    }
    servPer[servSlideIndex-1].className += " active";
}
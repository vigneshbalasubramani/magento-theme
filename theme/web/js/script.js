window.addEventListener("scroll", function (event) {
    var skin = document.getElementById("nav-skin");
    var scrollPosition = this.scrollY;
    if(scrollPosition >= 0) {
        skin.classList.add("nav-skin");
    }
    else {
        skin.classList.remove("nav-skin");
    }
});

var config = {
    paths: {
        slick:        'js/slick'
    },
    shim: {
        slick: {
            deps: ['jquery']
        }
    }
};
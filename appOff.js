(function(){
    document.querySelector("html").style.filter = "invert(0) hue-rotate(0deg)";

    let media = document.querySelectorAll("img, picture, video");
    
    media.forEach((item) => {
        item.style.filter = "invert(0) hue-rotate(0deg)";
        });
})();
(function(){
    document.querySelector("html").style.filter = "invert(1) hue-rotate(180deg)";

    let media = document.querySelectorAll("img, picture, video");
    
    media.forEach((item) => {
        item.style.filter = "invert(1) hue-rotate(180deg)";
        });
})();
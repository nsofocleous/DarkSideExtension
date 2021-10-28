if(document.querySelector(".Content")){
    const button = document.querySelector(".button");

    let buttonSelected = false;

    button.addEventListener("click", () => {
        if(!buttonSelected){
            buttonSelected = true;
            chrome.tabs.executeScript({
                file: "appOn.js"
            })
            //document.querySelector("html").style.filter = "invert(1) hue-rotate(180deg)";
            //let media = document.querySelectorAll("img, picture, video");
            //media.forEach((item) => {
            //    item.style.filter = "invert(1) hue-rotate(180deg)";
            //});
        }
        else {
            buttonSelected = false;
            chrome.tabs.executeScript({
                file: "appOff.js"
            })
            //document.querySelector("html").style.filter = "invert(0) hue-rotate(0deg)";
        }
    });
};
// let vaderTheme = document.createElement('audio');
// vaderTheme.id       = 'audio-player';
// vaderTheme.controls = 'controls';
// vaderTheme.src      = 'vaderTheme.mp3';
// sound.type     = 'audio/mpeg';
// document.getElementById('').appendChild(sound);










let swapHeading = document.getElementById("mlk-replace-text");
const caretImage = document.getElementById("caret-img");
const caretList = document.getElementById("caret-list");
const mapShowIcon = document.getElementById("map-btn");
const mapElement = document.getElementById("birthplace-iframe");

let caretState = false;
let mapShowState = false;
let headingIndex = 0;

const options = ["WIE WAS", "WAT DEED", "WAAR LEEFDE", "HOE STREED"];

caretImage.addEventListener('click', () => {
    if (caretState === false) {
        caretList.style.display = 'flex';
        caretImage.setAttribute('Src', 'https://img.icons8.com/ios-filled/1600/collapse-arrow.png')
        caretState = true;
    } else {
        caretList.style.display = 'none';
        caretImage.setAttribute('Src', 'https://img.icons8.com/ios-filled/1600/expand-arrow--v1.png');
        caretState = false;
    }
});

mapShowIcon.addEventListener('click', () => {
    if (mapShowState === false) {
        mapElement.style.display = 'flex';
        mapShowState = true;
    } else {
        mapElement.style.display = 'none';
        mapShowState = false;
    }
});

const changeHeadingText = () => {
    swapHeading.innerHTML = options[headingIndex];
    headingIndex = (headingIndex + 1) % options.length;
}

setInterval(changeHeadingText, 3000);

var body = document.getElementById('body');
var pics = document.getElementById('pics');
var pics2 = document.getElementById('pics2');
var darkButton = document.getElementById('darkmode');
var selected = 'Not Available';
var selectedImgText = document.getElementById('selected');
var isDark = false;

var pictures = new Array(
    './images/0001.webp',
    './images/0002.webp',
    './images/0003.webp',
    './images/0004.webp',
    './images/0005.webp',
    './images/0006.webp',
    './images/0007.webp',
    './images/0008.webp',
    './images/0009.webp',
    './images/0010.webp',
    './images/0011.webp',
    './images/0012.webp',
    './images/0013.webp',
    './images/0014.webp',
    './images/0015.webp',
    './images/0016.webp',
    './images/0017.webp',
    './images/0018.webp',
    './images/0019.webp',
    
)

var picsdice = Math.floor(Math.random() * pictures.length)
var picsdice2 = Math.floor(Math.random() * pictures.length)

window.onload = function(){
    pics.src = pictures[picsdice]
    pics2.src = pictures[picsdice2]
}

function buttonAction1() {
    var picsdice = Math.floor(Math.random() * pictures.length)
var picsdice2 = Math.floor(Math.random() * pictures.length)
    pics.src = pictures[picsdice]
    pics2.src = pictures[picsdice2]
    selected = 'Left'
    selectedImgText.innerHTML = 'Last Choice: ' + selected
}

function buttonAction2() {
    var picsdice = Math.floor(Math.random() * pictures.length)
var picsdice2 = Math.floor(Math.random() * pictures.length)
    pics.src = pictures[picsdice]
    pics2.src = pictures[picsdice2]
    selected = 'Right'
    selectedImgText.innerHTML = 'Last Choice: ' + selected
}

darkButton.addEventListener('click', function () {
    isDark = !isDark;
    if (isDark == true) {
        body.style.backgroundColor = '#2c3e50'
        body.style.color = '#fff'
    } else {
        body.style.backgroundColor = '#fff'
        body.style.color = '#000'
    }
})

/* DEPRECATED VERSION RIGHT BEFORE */

// function DarkMode() {
//     body.style.backgroundColor = '#2c3e50'
//     body.style.color = '#fff'
// }

// function WhiteMode () {
//     body.style.backgroundColor = '#fff';
//     body.style.color = '#000'
// }
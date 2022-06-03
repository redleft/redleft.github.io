var header = document.getElementsByTagName('header')[0];
var main = document.getElementsByTagName('main')[0];
var footer = document.getElementsByTagName('footer')[0];

let headerHeight = header.clientHeight;

main.style.paddingTop = headerHeight + "px";

let footerLineHeight = document.getElementById('viri').clientHeight;
document.getElementById('vertical_line').style.height = footerLineHeight + "px";



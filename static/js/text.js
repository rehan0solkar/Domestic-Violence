const words = [
  "You Are Not Alone ",
  "Help Exists ",
  "Speak Without Fear ",
  "Support Is Available "
];

let wordIndex = 0;
let charIndex = 0;
let typing = true;

function typeEffect(){
    const el = document.getElementById("heroText");
    if(!el) return;

    const word = words[wordIndex];

    if(typing){
        charIndex++;
        if(charIndex === word.length){
            typing = false;
            setTimeout(typeEffect, 1600);
            return;
        }
    } else {
        charIndex--;
        if(charIndex === 0){
            typing = true;
            wordIndex = (wordIndex+1)%words.length;
        }
    }

    el.textContent = word.substring(0,charIndex);
    setTimeout(typeEffect, typing?65:35);
}

window.addEventListener("DOMContentLoaded", ()=>{
    setTimeout(typeEffect,600);
});
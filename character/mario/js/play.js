const playLi = document.querySelector('#play_list');
const playItem = document.querySelectorAll('#play_list li');
let preInnerWidth = window.innerWidth;

playItem.forEach((item) => {
    const itemClone = item.cloneNode(true);
    playLi.insertAdjacentElement('beforeend', itemClone);
})

let itemWidth = playItem[0].clientWidth + 20;
let count = 4;
let margin = count * itemWidth;


function slideRight() {
    playLi.style.transition = 'left linear 32000ms';
    playLi.style.left = -margin + 'px';
    
    setTimeout (function(){
        playLi.style.transition = 'left linear 0s';
        playLi.style.left = 0 + 'px';
    }, 32000);
    
}


let slideEvent;

function slideOn() {
    slideEvent = setInterval(() =>{
        slideRight();
    }, 32020);
}


addEventListener('load',slideRight);
addEventListener('load', slideOn);

addEventListener('resize', ()=>{
    const nowInnerWidth = window.innerWidth;
  
    if (nowInnerWidth !== preInnerWidth) {
        preInnerWidth = nowInnerWidth;
        clearInterval(slideEvent);
        
        playLi.style.transition = 'left linear 0s';
        playLi.style.left = 0 + 'px';
        
        itemWidth = playItem[0].clientWidth + 20;
        margin = count * itemWidth;
    
        slideRight();
        slideOn();
    }
})
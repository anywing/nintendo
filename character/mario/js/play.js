const playLi = document.querySelector('#play_list');
const playItem = document.querySelectorAll('#play_list li');


playItem.forEach((item) => {
    const itemClone = item.cloneNode(true);
    playLi.insertAdjacentElement('beforeend', itemClone);
})

let itemWidth = playItem[0].clientWidth + 20;
let count = 4;
let margin = count * itemWidth;

function slideRight() {
    playLi.style.transition = 'left linear 8000ms';
    playLi.style.left = -margin + 'px';
    
    setTimeout (function(){
        playLi.style.transition = 'left linear 0s';
        playLi.style.left = 0 + 'px';
    }, 8000);
    
}


let slideEvent;

function slideOn() {
    slideEvent = setInterval(() =>{
        slideRight();
    }, 8010);
}


addEventListener('load',slideRight);
addEventListener('load', slideOn);

addEventListener('resize', ()=>{
    clearInterval(slideEvent);
    
    playLi.style.transition = 'left linear 0s';
    playLi.style.left = 0 + 'px';
    
    itemWidth = playItem[0].clientWidth + 20;
    margin = count * itemWidth;

    slideRight();
    slideOn();
})
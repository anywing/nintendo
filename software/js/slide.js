const bestLi = document.querySelectorAll('#best-slide li');
const bullets = document.querySelectorAll('#bullets li');

const list = bestLi.length - 1;
let index = 0;

function slideNext(){
    bestLi.forEach(li =>{
        li.classList.remove('on');
    })
    index < list ? index++ : index = 0;;
    bulletSet(index);
    bestLi[index].classList.add('on');
}

function slideNum(event){
    bullets.forEach(function(bullet){
        bullet.classList.remove('on');
    })
    
    event.target.classList.add('on');
    index = Array.from(bullets).indexOf(event.target);
    moveNum(index);
}

function moveNum(index){
    bestLi.forEach(li =>{
        li.classList.remove('on');
    })
    bestLi[index].classList.add('on');
}

function bulletSet(i){
    bullets.forEach(function(bullet){
        bullet.classList.remove('on');
    });
    bullets[i].classList.add('on');
}

bullets.forEach(function(bullet){
    bullet.addEventListener('click', ()=>{
        SlideOff();
        slideNum(event);
        SlideOn();
    })
})

let slideEvent;

function SlideOn() {
    slideEvent = setInterval(slideNext, 4000);
}

function SlideOff() {
    clearInterval(slideEvent);
}

addEventListener('load',SlideOn);
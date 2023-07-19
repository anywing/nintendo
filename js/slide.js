const mainUl = document.querySelector('.main_slide_con');
const mainLi = document.querySelectorAll('.main_slide_con li');
const slideBox = document.querySelector('.slide_view');
const lbt = document.querySelector('.slide_left');
const rbt = document.querySelector('.slide_right');
// 요소 가져오기

const firstChild = mainUl.firstElementChild;
const lastChild = mainUl.lastElementChild;
const firstClone = firstChild.cloneNode(true);
const lastClone = lastChild.cloneNode(true);

mainUl.insertAdjacentElement('beforeend',firstClone);
mainUl.insertAdjacentElement('afterbegin',lastClone);
// 슬라이드 앞뒤에 클론노드 생성


const list = mainLi.length;
let slideWidth = slideBox.clientWidth;
let count = 1;
let marginLeft = slideWidth;
mainUl.style.left = -marginLeft + 'px';
//슬라이드 이미지 길이 설정

addEventListener('resize', ()=>{
    slideWidth = slideBox.clientWidth;
    marginLeft = (count*slideWidth);
    mainUl.style.left = -marginLeft + 'px';
})

function slideLeft() {
    if (count > 1) {
        mainUl.style.transition = 500 + 'ms';
        marginLeft -= slideWidth;
        mainUl.style.left = -marginLeft + 'px';
        count--;
    }
    else if(count == 1){
        mainUl.style.transition = 500 + 'ms';
        mainUl.style.left = 0 + 'px';
        
        setTimeout (function(){
            const last = list;
            marginLeft = last*slideWidth;
            mainUl.style.transition = 0 + 'ms';
            mainUl.style.left = -marginLeft + 'px';
        }, 500);
        
        count = list;
    }
}

function slideRight() {
    if (count < list) {
        mainUl.style.transition = 500 + 'ms';
        count++;
        marginLeft = (count*slideWidth);
        mainUl.style.left = -marginLeft + 'px';
    }
    else if(count == list){
        mainUl.style.transition = 500 + 'ms';
        count++;
        marginLeft = (count*slideWidth);
        mainUl.style.left = -marginLeft + 'px';
        
        setTimeout (function(){
            mainUl.style.transition = 0 + 'ms';
            marginLeft = slideWidth;
            mainUl.style.left = -marginLeft + 'px';
        }, 500);
        
        count = 1;
    }
}

let slideEvent;
let touchX;

function slideOn() {
    slideEvent = setInterval(slideRight, 4000);
}

function slideOff() {
    clearInterval(slideEvent);
}

lbt.addEventListener('click', ()=>{
    slideOff();
    slideLeft();
    slideOn();
});

rbt.addEventListener('click', ()=>{
    slideOff();
    slideRight();
    slideOn();
});

slideBox.addEventListener('touchstart', (e)=>{
    slideOff();
    touchX = e.touches[0].pageX;
})

slideBox.addEventListener('touchend', (e)=>{
    touchX -= e.changedTouches[0].pageX;

    console.log(touchX);
    if(touchX > 0){
        slideRight();
    }
    else if(touchX < 0){
        slideLeft();
    }
    
    slideOn();
})

addEventListener('load',slideOn);
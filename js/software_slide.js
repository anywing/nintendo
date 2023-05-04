// 요소 가져오기
const softUl = document.querySelector('.soft_slide_con');
const softLi = document.querySelectorAll('.soft_slide_con li');
const softSlideBox = document.querySelector('.software_view');

// 슬라이드 앞뒤에 클론노드 생성
const softLastChild = softUl.lastElementChild;
for(let i=0; i<3; i++){
    const softChild = softLi[i];
    const softClone = softChild.cloneNode(true);
    softUl.insertAdjacentElement('beforeend',softClone);
}
const softLastClone = softLastChild.cloneNode(true);
softUl.insertAdjacentElement('afterbegin',softLastClone);

//슬라이드 이미지 길이 설정
const softList = softLi.length;
let softSlideWidth = softLi[0].clientWidth + 10;
let sCount = 1;
let softMargin = softSlideBox.clientWidth * 0.1;
let softMarginLeft = softSlideWidth - softMargin;

function softMarginNum(vw){
    if(vw > 740){
        softMargin = 0;
    }
    else{
        softMargin = softSlideBox.clientWidth * 0.1;
    }
}

//반응형 레이아웃 변경
addEventListener('resize', ()=>{
    softSlideWidth = softLi[0].clientWidth + 10;
    softMarginNum(innerWidth);
    softMarginLeft = (sCount*softSlideWidth) - softMargin;
    softUl.style.left = -softMarginLeft  + 'px';
})

const softEvent = new Event('resize',{bubbles:true, cancelable:true});
dispatchEvent(softEvent);

//한칸씩 움직이는 슬라이드
function softSlideRight() {
    softSlideWidth = softLi[0].clientWidth + 10;
    if (sCount < softList) {
        softUl.style.transition = 500 + 'ms';
        sCount++;
        softMarginLeft = (sCount*softSlideWidth) - softMargin;
        softUl.style.left = -softMarginLeft + 'px';
    }
    else if(sCount == softList){
        softUl.style.transition = 500 + 'ms';
        sCount++;
        softMarginLeft = (sCount*softSlideWidth) - softMargin;
        softUl.style.left = -softMarginLeft + 'px';
        
        setTimeout (function(){
            softUl.style.transition = 0 + 'ms';
            softMarginLeft = softSlideWidth - softMargin;
            softUl.style.left = -softMarginLeft + 'px';
        }, 500);
        
        sCount = 1;
    }
}

addEventListener('load',()=>{
    setInterval(softSlideRight,4000);
})
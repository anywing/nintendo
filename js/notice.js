const noticeUl = document.querySelector('.notice');
const noticeLi = document.querySelectorAll('.notice li');
const noitceBox = document.querySelector('.notice_box');
// 요소 가져오기

const noticeFirstChild = noticeUl.firstElementChild;
const noticeLastChild = noticeUl.lastElementChild;
const noticeFirstClone = noticeFirstChild.cloneNode(true);
const noticeLastClone = noticeLastChild.cloneNode(true);

noticeUl.insertAdjacentElement('beforeend',noticeFirstClone);
noticeUl.insertAdjacentElement('afterbegin',noticeLastClone);
// 슬라이드 앞뒤에 클론노드 생성


const noticeList = noticeLi.length;
let noticeHeight = noticeLi[0].clientHeight;
let noticeCount = 1;
let marginTop = noticeHeight;
noticeUl.style.top = -marginTop + 'px';

function slideTop() {
    if (noticeCount < noticeList) {
        noticeUl.style.transition = 500 + 'ms';
        noticeCount++;
        marginTop = (noticeCount*noticeHeight);
        noticeUl.style.top = -marginTop + 'px';
    }
    else if(noticeCount == noticeList){
        noticeUl.style.transition = 500 + 'ms';
        noticeCount++;
        marginTop = (noticeCount*noticeHeight);
        noticeUl.style.top = -marginTop + 'px';
        
        setTimeout (function(){
            noticeUl.style.transition = 0 + 'ms';
            marginTop = noticeHeight;
            noticeUl.style.top = -marginTop + 'px';
        }, 500);
        
        noticeCount = 1;
    }
}


addEventListener('load',()=>{
    setInterval(slideTop,5000);
})
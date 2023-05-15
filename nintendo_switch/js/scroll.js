const topLeft = document.querySelector('#top_left');
const newSect = document.querySelector('#new');
const newText = document.querySelector('#new_bg>.wrap p:first-child');
const newTexts = document.querySelectorAll('#new_bg>.wrap p');
const newVd = document.querySelector('#new figure');
const newLink = document.querySelector('#new_bg_text');

const displaySect = document.querySelector('#display');
const screenCon = document.querySelector('#big_screen');
const colorCon = document.querySelector('#color');
const screenVd = document.querySelector('#big_screen video');
const screenImg = document.querySelector('#big_screen #screen img');

const standSect = document.querySelector('#stand');
const standBox = document.querySelector('#adjustable')
const standInfo = document.querySelector('#stand-info');
const standImg = document.querySelectorAll('#stand_img img');

const othersSect = document.querySelector('#others');
const othersRight = document.querySelector('#others_right');
const othersRightImg = document.querySelectorAll('#others_right p');
const memory = document.querySelector('#memory');

let viewWidth = innerWidth;
const newTextOffset = newSect.offsetTop + newText.offsetTop;
const newLinkOffset = newText.offsetTop - (newLink.offsetTop - newVd.offsetTop);

function topScroll() {
    if (scrollY > 60 && scrollY < newSect.offsetTop) {
        let moveDown = scrollY - 60;
        topLeft.style.top = moveDown + 'px';
    } else if (scrollY <= 60) {
        topLeft.style.top = 0;
    }
}

function newScroll() {
    if (scrollY > newSect.offsetTop && scrollY < (newSect.offsetTop + newVd.offsetTop - newLinkOffset)) {
        let moveDown = scrollY - newSect.offsetTop;
        newTexts.forEach(text => {
            text.style.top = moveDown + 'px';
        })
    } else if (scrollY <= newTextOffset) {
        newTexts.forEach(text => {
            text.style.top = 0;
        })
    }
}

function scrennScroll() {
    if (scrollY >= (displaySect.offsetTop + screenCon.offsetTop)) {
        screenVd.classList.remove('off');
        setTimeout(() => {
            screenImg.classList.remove('off')
        }, 1000)
    } else if (scrollY < (displaySect.offsetTop + colorCon.offsetTop)) {
        screenImg.classList.add('off');
        setTimeout(() => {
            screenVd.classList.add('off')
        }, 500)
    }
}

let count = 0;
let nowScroll = scrollY;
function standScroll() {
    if (scrollY > standSect.offsetTop && scrollY < standInfo.offsetTop) {
        const newScroll = scrollY;
        let interval = innerHeight / 60;
        if (count <= 59) {
            standImg.forEach(img => {
                img.classList.remove('on');
            })

            if (nowScroll < newScroll  && scrollY > (standSect.offsetTop + (interval * count))) {
                if(count >= 59){
                    count = 58;
                }
                count++;
            } 
            else if(scrollY < (standSect.offsetTop + (interval * count))){
                count--;
                if(count <= 0) {
                    count = 0;
                }
            }

            nowScroll = newScroll;
            standImg[count].classList.add('on');   
        }
    }
    else if(scrollY < standSect.offsetTop){
        standImg.forEach(img => {
            img.classList.remove('on');
        })
        count = 0;
        standImg[count].classList.add('on'); 
    }
}

function othersScroll() {
    if (scrollY > (othersSect.offsetTop - (0.2 * innerHeight)) && scrollY < (othersSect.offsetTop + memory.offsetTop - (0.2 * innerHeight)) ) {
        let moveDown = scrollY - othersSect.offsetTop + (0.2 * innerHeight);
        othersRight.style.top = moveDown + 'px';
        if(othersRightImg[0].classList.contains('off')){
            othersRightImg[0].classList.remove('off'); 
            othersRightImg[2].classList.remove('off'); 
        }
    }
    else if(scrollY >= (othersSect.offsetTop + memory.offsetTop - (0.2 * innerHeight))){
        othersRightImg[0].classList.add('off'); 
        othersRightImg[2].classList.add('off'); 
    }
}

addEventListener('resize', () => {
    viewWidth = innerWidth;
})

addEventListener('scroll', () => {
    scrennScroll();
    standScroll();
    if (viewWidth >= 1024) {
        topScroll();
        newScroll();
        othersScroll();
    }
})
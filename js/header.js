const menu = document.querySelector('.menu_icon');
const menuSpan = document.querySelectorAll('.menu_icon>span');
const gnb = document.querySelector('.gnb_m');
const gnbLi = document.querySelectorAll('.gnb_m>li');
const gnbLiA = document.querySelectorAll('.gnb_m>li>a')
const gnbI = document.querySelectorAll('.gnb_m>li>a>i');
const snb = document.querySelectorAll('.gnb_m .snb');
const gnbLiArr = Array.from(gnbLi);

menu.addEventListener('click', () => {
    if (gnb.clientHeight == 0) {
        gnb.style.height = 255 + "px";
    } else {
        gnb.style.height = 0 + "px";
        gnbLi.forEach((li) => {
            li.style.height = 50 + "px";
            let index = gnbLiArr.indexOf(li);
            gnbI[index].style.color = "silver";
            gnbI[index].classList.remove('fa-circle-up');
            gnbI[index].classList.add('fa-circle-down');
        })
    }
})

gnbLi.forEach((li) => {
    let index = gnbLiArr.indexOf(li);
    gnbLiA[index].addEventListener('click', (e) => {
        if (li.clientHeight == 50) {
            gnbLi.forEach((li) => {
                li.style.height = 50 + "px";
                let index = gnbLiArr.indexOf(li);
                gnbI[index].style.color = "silver";
                gnbI[index].classList.remove('fa-circle-up');
                gnbI[index].classList.add('fa-circle-down');
            })

            let LiHeight = snb[index].clientHeight + 50;
            li.style.height = LiHeight + "px";
            gnb.style.height = 205 + LiHeight + "px";
            gnbI[index].style.color = "#e60613";
            gnbI[index].classList.remove('fa-circle-down');
            gnbI[index].classList.add('fa-circle-up');
        } else {
            li.style.height = 50 + "px";
            gnb.style.height = 255 + "px";
            gnbI[index].style.color = "silver";
            gnbI[index].classList.remove('fa-circle-up');
            gnbI[index].classList.add('fa-circle-down');
        }
        e.preventDefault();
    })
})
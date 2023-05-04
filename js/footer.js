const footerLi = document.querySelectorAll('.footer_nav > li');
const footerLiA = document.querySelectorAll('.footer_nav > li > a')
const footerI = document.querySelectorAll('.footer_nav > li > a > i');
const footerSnb = document.querySelectorAll('.footer_snb');
const footerLiArr = Array.from(footerLi);

let footerWidth = innerWidth;
addEventListener('resize', () => {
    footerWidth = innerWidth;
    if (footerWidth >= 1024) {
        footerLi.forEach((li) => {
            let index = footerLiArr.indexOf(li);
            let LiHeight = footerSnb[index].clientHeight + 50;
            li.style.height = LiHeight + "px";
            footerI[index].style.color = "silver";
            footerI[index].classList.remove('fa-circle-up');
            footerI[index].classList.add('fa-circle-down');
        })
    } else {
        for (let i = 0; i < footerLi.length; i++) {
            footerLi[i].style.height = 50 + "px";
            footerI[i].style.color = "silver";
            footerI[i].classList.remove('fa-circle-up');
            footerI[i].classList.add('fa-circle-down');
        }
    }
})

footerLi.forEach((li) => {
    let index = footerLiArr.indexOf(li);
    footerLiA[index].addEventListener('click', (e) => {
        if (footerWidth < 1024) {
            if (li.clientHeight == 50) {
                footerLi.forEach((li) => {
                    li.style.height = 50 + "px";
                    let index = footerLiArr.indexOf(li);
                    footerI[index].style.color = "silver";
                    footerI[index].classList.remove('fa-circle-up');
                    footerI[index].classList.add('fa-circle-down');
                })

                let LiHeight = footerSnb[index].clientHeight + 50;
                li.style.height = LiHeight + "px";
                footerI[index].style.color = "#e60613";
                footerI[index].classList.remove('fa-circle-down');
                footerI[index].classList.add('fa-circle-up');
            } else {
                li.style.height = 50 + "px";
                footerI[index].style.color = "silver";
                footerI[index].classList.remove('fa-circle-up');
                footerI[index].classList.add('fa-circle-down');
            }
        }
        e.preventDefault();
    })
})

const resizeEvent = new Event('resize',{bubbles:true, cancelable:true});
dispatchEvent(resizeEvent);
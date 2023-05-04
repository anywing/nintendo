import { newsList, listOff } from "./tabs.js";

export const plusBtn = document.querySelector('#plus');
let preInnerWidth = window.innerWidth;


addEventListener('DOMContentLoaded', listView);
addEventListener('resize', () => {
    const nowInnerWidth = window.innerWidth;
  
    if (nowInnerWidth !== preInnerWidth) {
      preInnerWidth = nowInnerWidth;
      listView();
    }
  })

let viewLists = 0;
export let num = 0;

export function listView() {
    listOff();

    if (innerWidth < 740) {
        num = 5;
        listAtSize(num);
    } else if (740 <= innerWidth && innerWidth < 1024) {
        num = 6;
        listAtSize(num);
    } else {
        num = 9;
        listAtSize(num);
    }
}

function listAtSize(num) {
    viewLists = num;
    plusBtn.classList.remove('off');

    for (let i = 0; i < num; i++) {
        newsList[i].classList.remove('off');
    }
}

plusBtn.addEventListener('click', () => {
    for (let i = viewLists; i < (viewLists + num) && i < newsList.length; i++) {
        newsList[i].classList.remove('off');

        if (i == newsList.length - 1) {
            plusBtn.classList.add('off');
        }
    }

    viewLists += num;
})
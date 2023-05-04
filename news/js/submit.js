export const searchText = document.querySelector('#search_bar input');
export const searchBar = document.querySelector('#search_bar form');
export const listHead = document.querySelectorAll('.news_text .head');

import {newsList, tabs, showTabList, tabArr} from "./tabs.js";
import { plusBtn, num } from "./plus.js";

searchBar.addEventListener('submit', (e) => {
    const inputText = searchText.value;
    let index = 0;
    
    newsList.forEach((li) => li.classList.remove('off'))

    tabs.forEach((tab) => {
        if(tab.classList.contains('now_tab')) {
            index =  tabArr.indexOf(tab);
        }
    })

    if(index == 1){ showTabList("news"); }
    else if(index == 2){ showTabList("press"); }
    else if(index == 3){ showTabList("notice"); }
    else if(index == 4){ showTabList("event"); }

    listSearch(inputText);
    plusBtn.classList.add('off');

    e.preventDefault();
})

const listArr = Array.from(newsList);

function listSearch(value) {
     newsList.forEach((li) => {
        const newsIndex = listArr.indexOf(li);

        if(li.style.display !== "none"){
            const listText = listHead[newsIndex].textContent;

            if(listText.includes(value)){
                li.classList.remove('off');
            }
            else{
                li.classList.add('off');
            }
        }
     })

     
}
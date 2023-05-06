export const tabs = document.querySelectorAll('.tab');
export const newsList = document.querySelectorAll('.news_list li');
export const tabArr = Array.from(tabs);
import { plusBtn, listView } from "./plus.js";
import { noList } from "./submit.js";

const urlParam = new URLSearchParams(window.location.search);
const tabNum = urlParam.get('tab');

addEventListener('DOMContentLoaded' , () => {
    if(tabNum == 1){nowTab(tabs[tabNum]); showTabList("news");}
    else if(tabNum == 2){nowTab(tabs[tabNum]); showTabList("press");}
    else if(tabNum == 3){nowTab(tabs[tabNum]); showTabList("notice");}
    else if(tabNum == 4){nowTab(tabs[tabNum]); showTabList("event");}
})

function nowTab(tab) {
    tabs.forEach((tab) => tab.classList.remove('now_tab'));
    tab.classList.add("now_tab");
}

tabs.forEach((tab) => {
    let index = 0;
    
    tab.addEventListener('click', (e)=>{
        noList.classList.remove('on');
        nowTab(tab);
        index =  tabArr.indexOf(tab);

        if(index == 0) {
            newsList.forEach((li) => li.classList.remove('off'));
            plusBtn.classList.remove('off');
            listView();
        }

        if(index == 1){ showTabList("news");}
        if(index == 2){ showTabList("press");}
        if(index == 3){ showTabList("notice");}
        if(index == 4){ showTabList("event");}

        e.preventDefault();
    })
})

export function showTabList (tabName) {
    listOff();
    
    newsList.forEach((li) => {
        if(li.classList.contains(tabName)){
            li.classList.remove('off');
        }
    })
    plusBtn.classList.add('off');
}

export function listOff(){
    newsList.forEach ((li) => li.classList.add('off'));
}
const mario = document.querySelector('.mario>p img');
const marioText = document.querySelector('.mario_text');

addEventListener('DOMContentLoaded', ()=>{
    mario.classList.remove('start');
    setTimeout(()=>{
        marioText.classList.remove('start');
    }, 400)
})
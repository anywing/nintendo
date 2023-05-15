const ques = document.querySelectorAll('.ques');
const quesIcon = document.querySelectorAll('.ques p:last-child i');
const answer = document.querySelectorAll('.answer');

const quesArray = Array.from(ques);

ques.forEach(item => {
    const index = quesArray.indexOf(item);
    item.addEventListener('click', () => {
        quesIcon[index].classList.toggle('bi-plus-circle');
        quesIcon[index].classList.toggle('bi-dash-circle');
        answer[index].classList.toggle('on');
    })
})
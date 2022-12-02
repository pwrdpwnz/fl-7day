const data = JSON.parse(sessionStorage.getItem('data'));

document.querySelector('#out-price').innerHTML = data.outPrice
document.querySelector('#left-currently').innerHTML = data.labelLeft
document.querySelector('#in-price').innerHTML = ` ${data.inPrice}`
document.querySelector('#right-currently').innerHTML = data.labelRight
document.querySelector('#input-in').innerHTML = data.outPrice
document.querySelector('#currently').innerHTML = data.fromCode

document.querySelector('#suggestion-summ-left').innerHTML = `Отдаёте: ${data.outPrice}`
document.querySelector('#right-currently-after').innerHTML = data.fromCode

document.querySelector('#suggestion-summ-right').innerHTML = `Получаете: ${data.inPrice}`
document.querySelector('#left-currently-after').innerHTML = data.toCode

document.querySelector('#bank-card-after').innerHTML = `На счет: ${data.bankCardInput}`



let time = 900;
const countDownElement = document.querySelector('#countdown')

setInterval(updateCountdown, 1000)
let timerId;

const triggerButton = document.getElementById('btn');
triggerButton.addEventListener('click', () => {
    clearInterval(timerId);
    time = 900;

    countDownElement.innerHTML = "";
    timerId = setInterval(updateCountdown, 1000);
})



function updateCountdown() {
    const minutes = Math.floor(time / 30)
    let seconds = time % 30
    seconds = seconds < 10 ? '0' + seconds: seconds
    countDownElement.innerHTML = `${minutes}:${seconds}`
    time--;
}


// the_title_page



const cancelBtn = document.querySelector('.cancel_paybutton')

cancelBtn.addEventListener('click', () => {
    window.location = 'index.html'
})

console.log(cancelBtn);


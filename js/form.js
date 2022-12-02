const data = JSON.parse(sessionStorage.getItem('data'));

document.querySelector('.block_xchdata_line').innerHTML = `Сумма: ${data.outPrice}`
document.querySelector('#in-price-value').innerHTML = `Сумма: ${data.inPrice}`
document.querySelector('#currently-name').innerHTML =  data.labelLeft
document.querySelector('.email-return').innerHTML = data.emailInput
document.querySelector('#ico-left').innerHTML = data.icoLeft
document.querySelector('#ico-right').innerHTML = data.icoRight
document.querySelector('.card-value').innerHTML = `На счёт: ${data.bankCardInput}`
document.querySelector('#in-price-currently').innerHTML = data.labelRight
document.querySelector('#out-price-form').innerHTML = data.labelLeft
document.querySelector('#in-price-form').innerHTML = data.labelRight

const paymentBtn = document.querySelector('#check_rule_step_input')

paymentBtn.addEventListener('click', () => {
    window.location = 'payment-form.html'
})
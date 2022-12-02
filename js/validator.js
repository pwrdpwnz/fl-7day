const btn = document.querySelector('#butt_obmen')
const emailResultInput = document.querySelector('#email-input')
const input1 = document.querySelector('#out-price');
const input2 = document.querySelector('#in-price');
const input3 = document.querySelector('#account3')

function ctrlButton() {
  btn.disabled = this.value.trim().length === 0;
}

input1.addEventListener('input', ctrlButton, false);
input2.addEventListener('input', ctrlButton, false);
input3.addEventListener('input', ctrlButton, false);

ctrlButton.call(input1, input2, input3);






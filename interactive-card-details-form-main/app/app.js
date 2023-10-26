const cardNumber = document.getElementById('card-number');
const cardNumberInput = document.getElementById('card-number-input');

cardNumberInput.addEventListener('input', (event) => {
    let inputValue = event.target.value;
    event.target.value = inputValue.replace(/[^0-9\s]/g, '');
    cardNumber.innerHTML = inputValue;
    if (event.target.value === '') {
        cardNumber.innerHTML = '0000 0000 0000 0000'
    }
})

const cardholderName = document.getElementById('card-name')
const nameInput = document.getElementById('name-input');

nameInput.addEventListener('input', (event) => {
    let inputValue = event.target.value;
    event.target.value = inputValue.replace(/[^a-zA-Z\s]/g, '');
    cardholderName.innerHTML = inputValue;
    if (inputValue === '') {
        cardholderName.innerHTML = 'Jane Applethesenuts'
    }
})
    (/[^0-9]/g, '')


const expiryMM = document.getElementById('card-expiry-mm');
const expiryYY = document.getElementById('card-expiry-yy');
const cardExpiryMonth = document.getElementById('exp-mm')
const cardExpiryYear = document.getElementById('exp-yy')

cardExpiryMonth.addEventListener('input', (event) => {
    expiryMM.innerHTML = event.target.value;
    if (event.target.value === '') {
        expiryMM.innerHTML = 'MM'
    }
})

cardExpiryYear.addEventListener('input', (event) => {
    expiryYY.innerHTML = event.target.value;
    if (event.target.value === '') {
        expiryYY.innerHTML = 'yy'
    }
})
const cardCvv = document.getElementsByClassName('cvv-number')


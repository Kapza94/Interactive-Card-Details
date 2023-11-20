//Displaing errors

function displayErrorMessage(elementId, message) {
    const errElement = document.getElementById(elementId);
    errElement.textContent = message;
    errElement.style.color = 'red';
}
//Clearing errors

function clearErrorMessages() {
    const errIDs = [
        'cvv-err',
        'yy-err',
        'mm-err',
        'name-err',
        'card-num-err'
    ];

    errIDs.forEach((id) => {
        const errElement = document.getElementById(id);
        errElement.textContent = '';
    })


    
    cardCvvInput.style.border = '';
    cardExpiryYear.style.border = '';
    cardExpiryMonth.style.border = '';
    nameInput.style.border = '';
    cardNumberInput.style.border = '';
}
 
 
 
 
 //CARD NUMBER INPUT//
const cardNumber = document.getElementById('card-number');
const cardNumberInput = document.getElementById('card-number-input');

cardNumberInput.addEventListener('input', (event) => {
    const ccNumErr = document.getElementById('card-num-err');
    ccNumErr.innerHTML = '';
    let inputValue = event.target.value;
    event.target.value = inputValue.replace(/[^0-9\s]/g, '',);
    cardNumber.innerHTML = inputValue;
    if (event.target.value === '' || event.target.value.length < 16) {
        cardNumber.innerHTML = '0000 0000 0000 0000';
        displayErrorMessage('card-num-err', 'Card number can not be less than 16 numbers')
        }
})

 //CARD NAME INPUT//
const cardholderName = document.getElementById('card-name')
const nameInput = document.getElementById('name-input');

nameInput.addEventListener('input', (event) => {
    const ccNameErr = document.getElementById('name-err');
    ccNameErr.innerHTML = '';
    let inputValue = event.target.value;
    event.target.value = inputValue.replace(/[^a-zA-Z\s]/g, '');
    cardholderName.innerHTML = inputValue;
    if (inputValue === '' || inputValue.length < 3) {
        cardholderName.innerHTML = 'Jane Appleseed';
        displayErrorMessage('name-err', 'Please write name located on your card')
    }

})

 //CARD EXPIRY INPUT//
const expiryMM = document.getElementById('card-expiry-mm');
const expiryYY = document.getElementById('card-expiry-yy');
const cardExpiryMonth = document.getElementById('exp-mm')
const cardExpiryYear = document.getElementById('exp-yy')

cardExpiryMonth.addEventListener('input', (event) => {
    const ccMmErr = document.getElementById('mm-err');
    ccMmErr.innerHTML = '';
    let inputValue = event.target.value;
    event.target.value = inputValue.replace(/[^0-9]/g, '');
    expiryMM.innerHTML = inputValue;
    if (inputValue === '' || inputValue > 12 ) {
        expiryMM.innerHTML = '00';
        displayErrorMessage('mm-err', 'Choose month from 1-12')

    }
})

cardExpiryYear.addEventListener('input', (event) => {
    const ccYyErr = document.getElementById('yy-err');
    ccYyErr.innerHTML = '';
    let inputValue = event.target.value;
    event.target.value = inputValue.replace(/[^0-9]/g, '');
    expiryYY.innerHTML = inputValue;
    if(inputValue > 29){
        expiryYY.innerHTML = '00';
        displayErrorMessage('yy-err', 'Invalid Card expiry year please contact support');
    } else if(inputValue < 23 && (inputValue.length === 2 || inputValue.length === 1)){
        expiryYY.innerHTML = '00';
        displayErrorMessage('yy-err', 'This is an expired card');
    } else if(inputValue === '') {
        expiryYY.innerHTML = '00';
        displayErrorMessage('yy-err', 'Field can not be blank')
    }
})

 //CARD CVV INPUT//
const cardCvv = document.getElementById('cvv-number')
const cardCvvInput = document.getElementById('cvv-input');

cardCvvInput.addEventListener('input', (event) => {
    const ccCvvErr = document.getElementById('cvv-err');
    ccCvvErr.innerHTML = '';
    let inputValue = event.target.value;
    event.target.value = inputValue.replace(/[^0-9]/g, '');
    cardCvv.innerHTML = inputValue;
    if (inputValue === '') {
        cardCvv.innerHTML = '000';
        displayErrorMessage('cvv-err', 'Can\'t be blank')
    } else if (inputValue.length < 3){
        cardCvv.innerHTML = '000';
        displayErrorMessage('cvv-err', 'Must contain 3 number on the back side of your card');
    }
})


//ERROR MESSAGE BLOCK//
const confirmBtn = document.getElementById('confirm-button');

confirmBtn.addEventListener('click', (event) => {
    event.preventDefault();

    clearErrorMessages();
    
    if (cardNumberInput.value === '') {
        cardNumberInput.style.border = '1px solid red';
        displayErrorMessage('card-num-err', 'Can\'t be blank');
    }

    if (nameInput.value === '' || nameInput.value.length < 3) {
        nameInput.style.border = '1px solid red'
        displayErrorMessage('name-err', 'Can not be less than 3 letters.');
        console.log(nameInput.value.length);
    }
    
    if (cardExpiryYear.value === '') {
        cardExpiryYear.style.border = '1px solid red'
        displayErrorMessage('yy-err', 'Can\'t be blank');
    }
    
    if (cardExpiryMonth.value === '') {
        cardExpiryMonth.style.border = '1px solid red'
        displayErrorMessage('mm-err', 'Can\'t be blank');
    }

    if (cardCvvInput.value === '') {
        cardCvvInput.style.border = '1px solid red'
        displayErrorMessage('cvv-err', 'Can\'t be blank');
    }
    // if(cardCvvInput.value.length < 3){
        //     cardCvvInput.style.border = '1px solid red'
    //     displayErrorMessage('cvv-err', 'Make sure your CVV number has 3 numbers');
    // }


    //Toggle blocks on submission of the 
    const submissionPopUp = document.getElementById('submission-pop-up');
    const form = document.getElementsByClassName('form')[0];
    if(cardCvvInput.value.length > 0 && cardExpiryYear.value.length > 0 && cardExpiryMonth.value.length > 0 && nameInput.value.length > 0 && cardNumberInput.value.length > 0){
        console.log('Show confirmation block');
        submissionPopUp.style.display = 'flex';
        form.style.display = 'none';
    }


});



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

    //Below is the different ways to write the above forEach loop.

    // for(let i = 0;i < errIDs.length;i++){
    //     console.log(errIDs[i]);
    //     const errElement = document.getElementById(errIDs[i])
    // }

    // for(id of errIDs){
    //     const errElement = document.getElementById(errIDs[i])
    // }
    
    cardCvvInput.style.border = '';
    cardExpiryYear.style.border = '';
    cardExpiryMonth.style.border = '';
    nameInput.style.border = '';
    cardNumberInput.style.border = '';
}
 
 
 
 
 
 const cardNumber = document.getElementById('card-number');
const cardNumberInput = document.getElementById('card-number-input');

cardNumberInput.addEventListener('input', (event) => {
    const ccNumErr = document.getElementById('card-num-err');
    ccNumErr.innerHTML = '';
    let inputValue = event.target.value;
    event.target.value = inputValue.replace(/[^0-9\s]/g, '',);
    cardNumber.innerHTML = inputValue;
    if (event.target.value === '') {
        cardNumber.innerHTML = '0000 0000 0000 0000';
        displayErrorMessage('card-num-err', 'Can\'t be blank')
        }
})

const cardholderName = document.getElementById('card-name')
const nameInput = document.getElementById('name-input');

nameInput.addEventListener('input', (event) => {
    const ccNameErr = document.getElementById('name-err');
    ccNameErr.innerHTML = '';
    let inputValue = event.target.value;
    event.target.value = inputValue.replace(/[^a-zA-Z\s]/g, '');
    cardholderName.innerHTML = inputValue;
    if (inputValue === '') {
        cardholderName.innerHTML = 'Jane Applethesenuts'
        displayErrorMessage('name-err', 'Can\'t be blank')
    }

})

const expiryMM = document.getElementById('card-expiry-mm');
const expiryYY = document.getElementById('card-expiry-yy');
const cardExpiryMonth = document.getElementById('exp-mm')
const cardExpiryYear = document.getElementById('exp-yy')

cardExpiryMonth.addEventListener('input', (event) => {
    let inputValue = event.target.value;
    event.target.value = inputValue.replace(/[^0-9]/g, '');
    expiryMM.innerHTML = inputValue;
    if (inputValue === '') {
        expiryMM.innerHTML = '00'
    }
})

cardExpiryYear.addEventListener('input', (event) => {
    let inputValue = event.target.value;
    event.target.value = inputValue.replace(/[^0-9]/g, '');
    expiryYY.innerHTML = inputValue;
    if (inputValue === '') {
        expiryYY.innerHTML = '00'
    }
})


const cardCvv = document.getElementById('cvv-number')
const cardCvvInput = document.getElementById('cvv-input');

cardCvvInput.addEventListener('input', (event) => {
    let inputValue = event.target.value;
    event.target.value = inputValue.replace(/[^0-9]/g, '');
    cardCvv.innerHTML = inputValue;
    if (inputValue === '') {
        expiryYY.innerHTML = 'yy'
    }
})


const confirmBtn = document.getElementById('confirm-button');

confirmBtn.addEventListener('click', (event) => {
    event.preventDefault();

    clearErrorMessages();

    if (cardCvvInput.value === '') {
        cardCvvInput.style.border = '1px solid red'
        displayErrorMessage('cvv-err', 'Can\'t be blank');
    }
    if (cardExpiryYear.value === '') {
        cardExpiryYear.style.border = '1px solid red'
        displayErrorMessage('yy-err', 'Can\'t be blank');
    }
    if (cardExpiryMonth.value === '') {
        cardExpiryMonth.style.border = '1px solid red'
        displayErrorMessage('mm-err', 'Can\'t be blank');
    }
    if (nameInput.value === '') {
        nameInput.style.border = '1px solid red'
        displayErrorMessage('name-err', 'Can\'t be blank');
    }
    if (cardNumberInput.value === '') {
        cardNumberInput.style.border = '1px solid red';
        displayErrorMessage('card-num-err', 'Can\'t be blank');
        //form display block
        //confirm display none
        //for all the above same thing. 
    }

    if(cardCvvInput.value.length > 0 && cardExpiryYear.value.length > 0 && ){
        console.log('Show confirmation block');
    }

    //Form display none if no err
    //Confirmation display block 
});




function generatePin() {
    const pin = Math.round(Math.random() * 10000);
    return pin;
}

//get pin
function getPin() {
    const pin = generatePin();
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    }
    else {
        return getPin();
    }
}


document.getElementById('generate-pin-btn').addEventListener('click', function () {

    const pin = getPin();
    const displayGenerateField = document.getElementById('display-generate-field');
    displayGenerateField.value = pin;





})



document.getElementById('calculator').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const typeNumberField = document.getElementById('type-numbers');
    const previousTypeNumber = typeNumberField.value;

    if (isNaN(number)) {

        if (number === 'C') {
            typeNumberField.value = ''
        }
        else if (number === '<') {
            const digits = previousTypeNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typeNumberField.value = remainingDigits;
        }

        // console.log(number);//c and < show krbe cz bakigula number
    }
    else {
        // const typeNumberField = document.getElementById('type-numbers');
        // const previousTypeNumber = typeNumberField.value;[upore add kore dewa hoise]

        const newTypeNumber = previousTypeNumber + number;//ektat pr r ekta number add string hishebe
        typeNumberField.value = newTypeNumber;  //input field a type no show krbe

    }
})

//verify

document.getElementById('verify-pin').addEventListener('click', function () {
    const displayGenerateField = document.getElementById('display-generate-field');
    const newDisplayField = displayGenerateField.value;


    const typeNumberField = document.getElementById('type-numbers');
    const newTypeNumberField = typeNumberField.value;
    const pinOk = document.getElementById('pin-ok');
    const pinNotOk = document.getElementById('pin-not-ok');

    if (newDisplayField == newTypeNumberField) {
        pinOk.style.display = 'block';
        pinNotOk.style.display = 'none';
    }
    else {
        pinNotOk.style.display = 'block';
        pinOk.style.display = 'none';;
    }



})














































// function getPin() {
//     const pin = generatePin();
//     const pinString = pin + '';
//     if (pinString.length === 4) {
//         return pin;
//     }
//     else {
//         console.log("your pin is not 4", pin);
//         return getPin()
//     }
// }





// function generatePin() {
//     const random = Math.round(Math.random() * 10000);
//     return random;
// }

// document.getElementById('generate-btn').addEventListener('click', function () {
//     const pin = getPin();
//     //display pin

//     const diplayPinField = document.getElementById('display-generate-field');
//     diplayPinField.value = pin;


// })





//Function that inform users on the number of log in attempts that they have left

function showNumberOfLoginAttemptsLeft (name, numberOfAttemptsLeft) {
    const message = 'Hello ' + name + ', You are left with just ' + numberOfAttemptsLeft + ' attempts.'
    return message;
}

console.log(showNumberOfLoginAttemptsLeft('Kehinde', 3))

//Function that coverts temperature from Celcius to Kelvin

function convertCelciusToKelvin (celciusValue) {
   
    //Check if the argument passed into the function is not a data type of number.
    if(typeof(celciusValue) !== 'number') {
       return 'Please enter a valid number'; 
    } else {
        const kelvin = celciusValue + 273;
        const result = kelvin + 'K'; 
        return result;
     }   
}

console.log(convertCelciusToKelvin(100));

//Function that converts naira to dollar and vice-versa

function returnExchangeRates (amount, currency) {
    let result;
    if(currency === 'dollar') {
        const nairaEquivalent = '#' + (450*amount);
        result = amount + ' dollar equals ' + nairaEquivalent;
    }
    if(currency === 'naira') {
        const dollarEquivalent = '$' + (amount/450);
        result = amount + ' naira equals ' + dollarEquivalent; 
    }

    return result;
}

console.log(returnExchangeRates(1000, 'dollar'))
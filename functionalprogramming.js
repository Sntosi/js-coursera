var currencyone=100;
var currencytwo=0;
var exchange=1.2;

function convertcurrency(amount, rate){
    return amount *rate;

}
currencytwo = convertcurrency(currencyone,exchangerate);

console.log(currencytwo);
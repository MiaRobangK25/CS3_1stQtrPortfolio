let pesoPrices = [100, 250, 500, 1000];
let exchangeRate = 56.50;

let dollarPrices = pesoPrices.map(function(pesos) {
    return (pesos / exchangeRate).toFixed(2);
});

console.log("Peso: " + pesoPrices);
console.log("Dollar: $" + dollarPrices);
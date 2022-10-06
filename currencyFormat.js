function createFormatter(separator, symbol, symbolFirst, currencyFormatter) {
    let formatter = function (value) {
        return currencyFormatter(separator, symbol, symbolFirst, value);
    }
    return formatter;
}

function currencyFormatter(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2, 2);
    if (symbolFirst) return symbol + ' ' + result;
    else return result + ' ' + symbol;
}

let dollarFormatter = createFormatter(',', '$', true, currencyFormatter);

console.log(dollarFormatter(5345));


// the above in one row
// (sep, sym, sym1, func) => val => func(sep, sym, sym1, val);


//https://softuni.bg/forum/38184/currency-format-zadacha-ot-advanced-functions-lab
//I have taken the solution from the link above

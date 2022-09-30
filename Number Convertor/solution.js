function solve() {
    let input = document.getElementById('input');
    let result = document.getElementById('result');
    let selectMenuTo = document.getElementById('selectMenuTo');

    let optionBinary = document.createElement('option');
    optionBinary.value = 'binary';
    optionBinary.innerHTML = 'Binary';
    selectMenuTo.appendChild(optionBinary);

    let optionHexadecimal = document.createElement('option');
    optionHexadecimal.value = 'hexadecimal';
    optionHexadecimal.innerHTML = 'Hexadecimal';
    selectMenuTo.appendChild(optionHexadecimal);

    document.querySelector('#container button').addEventListener('click', convert);

    function convert() {
        if (selectMenuTo.value === 'binary') {
            result.value = dec2Bin(input.value);
        } else {
            result.value = decimalToHexString(Number(input.value));
        }
    }
    function dec2Bin(dec) {
        return (dec >>> 0).toString(2);
    }

    function decimalToHexString(number) {
        if (number < 0) {
            number = 0xFFFFFFFF + number + 1;
        }
        return number.toString(16).toUpperCase();
    }
}
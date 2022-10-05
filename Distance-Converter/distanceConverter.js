function attachEventsListeners() {

    let inputField = document.querySelector('#inputDistance');
    let unitFrom = document.querySelector('#inputUnits');
    let outputField = document.querySelector('#outputDistance');
    let unitTo = document.querySelector('#outputUnits');
    let convertButton = document.querySelector('#convert');

    let conversionRatesFromMeter = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254,
    }
    convertButton.addEventListener('click', function () {

        let convertFrom = unitFrom.value;
        let convertTo = unitTo.value;

        let valueInMeters = inputField.value * conversionRatesFromMeter[convertFrom];
        let convertedValue = valueInMeters / conversionRatesFromMeter[convertTo];
        outputField.value = convertedValue;


    })
}
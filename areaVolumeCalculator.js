
function solve(area, vol, input) {
    figures = JSON.parse(input);
    let result = {};
    let arrResult = [];

    figures.forEach(figure => {
        result = {
            area: area.call(figure),
            volume: vol.call(figure)
        }

        arrResult.push(result);
        result = {};
    });

    console.log(arrResult);
}


// solved problem with map()

// function solve(area, vol, input) {
//     figures = JSON.parse(input);

//     let result = figures.map(function (figure) {
//         return {
//             area: area.call(figure),
//             volume: vol.call(figure)
//         }
//     });

//     console.log(result);
// }



function area() {
    return Math.abs(this.x * this.y);
};
function vol() {
    return Math.abs(this.x * this.y * this.z);
};


solve(area, vol, `[
{"x":"10","y":"-22","z":"10"},
{"x":"47","y":"7","z":"-5"},
{"x":"55","y":"8","z":"0"},
{"x":"100","y":"100","z":"100"},
{"x":"55","y":"80","z":"250"}
]`)

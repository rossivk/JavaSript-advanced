function solve(array) {

    let result1 = array.reduce((acc, x) => {
        if (acc.length == 0) {
            acc.push(x)
        } else if (acc.length > 0 && x >= acc[acc.length - 1]) {
            acc.push(x)
        }
        return acc
    }, []);

    return result1

    // let result = [array[0]];

    // for (let i = 1; i < array.length; i++) {
    //     if (array[i] >= result[result.length - 1]) {
    //         result.push(array[i]);
    //     }
    // }
    // return result
}

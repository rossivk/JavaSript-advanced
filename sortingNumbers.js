function solve(array) {
    array.sort((a, b) => a - b);
    let firstHalf = array.splice(0, Math.ceil(array.length / 2));
    let secondHalf = array.splice(0);
    secondHalf.reverse();

    for (let i = 0; i < firstHalf.length; i++) {
        array.push(firstHalf[i]);
        array.push(secondHalf[i]);
    }
    if (firstHalf.length > secondHalf.length) {
        array.splice(array.length - 1)
    }

    console.log(array);
    return array;
}

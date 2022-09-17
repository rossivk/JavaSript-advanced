function townPopulation(array) {
    let result = [];

    array.forEach(line => {
        let lineSplit = line.split(' <-> ');
        let obj = { name: lineSplit[0], population: Number(lineSplit[1]) };
        if (result.length === 0) {
            result.push(obj);
        } else {
            for (let i = 0; i < result.length; i++) {
                if (result[i].name === obj.name) {
                    result[i].population += obj.population;
                    return;
                }
            }
            result.push(obj);
        }
    });

    result.forEach(el => {
        console.log(`${el.name} : ${el.population}`);
    });
}

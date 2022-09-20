function storeCatalogue(array) {
    let result = {}

    array.forEach(line => {
        let [nameProduct, priceProduct] = line.split(' : ');
        if (!result[nameProduct[0]]) {
            result[nameProduct[0]] = {};
        }
        result[nameProduct[0]][nameProduct] = priceProduct;
    });
    const sortedProducts = Object.keys(result)
        .sort()
        .reduce((acc, key) => {
            acc[key] = result[key];
            return acc;
        }, {});

    for (const key in sortedProducts) {
        console.log(key);
        let sortedProducts1;
        for (const key1 in sortedProducts[key]) {

            sortedProducts1 = Object.keys(sortedProducts[key])
                .sort()
                .reduce((acc, key1) => {
                    acc[key1] = sortedProducts[key][key1];
                    return acc;
                }, {});
        }
        for (const key2 in sortedProducts1) {
            console.log(`${key2}: ${sortedProducts1[key2]}`);
        }
    }

}

function lowestPriceInCities(array) {
    let result = {};

    array.forEach(line => {
        let [town, product, price] = line.split(' | ');
        price = Number(price);
        if (!result[product]) {
            result[product] = { town, price };
        } else {
            if (price < (result[product].price)) {
                result[product].town = town;
                result[product].price = price;
            }
        }
    });

    for (const key in result) {
        if (Object.hasOwnProperty.call(result, key)) {
            const el = result[key];
            console.log(`${key} -> ${el.price} (${el.town})`);
        }
    }
}

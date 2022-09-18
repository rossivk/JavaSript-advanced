function heroicInventory(array) {
    let result = [];
    array.forEach(line => {
        let [name, level, items] = line.split(' / ');
        level = Number(level);

        items = items ? items.split(', ') : [];

        let hero = { name, level, items };
        result.push(hero);
    });
    console.log(JSON.stringify(result));
}

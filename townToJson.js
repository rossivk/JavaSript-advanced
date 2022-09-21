function townToJson(array) {
    let locations = [];

    let tableHEading = array.shift().split(' | ');

    let tableHEadingTown = tableHEading[0].split('').slice(2).join('');
    tableHEading[0] = tableHEadingTown;

    let tableHEadingLongitude = tableHEading[2].split('').slice(0, -2).join('');
    tableHEading[2] = tableHEadingLongitude;

    array.forEach(line => {
        let location = {};
        let [town, latitude, longitude] = line.split(' | ');

        let town1 = town.split('').slice(2).join('');
        town = town1;

        latitude = Number(latitude).toFixed(2);

        let longitude1 = longitude.split('').slice(0, -2).join('');
        longitude = longitude1;
        longitude = Number(longitude).toFixed(2);

        location[tableHEading[0]] = town;
        location[tableHEading[1]] = Number(latitude);
        location[tableHEading[2]] = Number(longitude);

        locations.push(location);
    });

    console.log(JSON.stringify(locations));
}

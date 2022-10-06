function filterEmploees(data, criteria) {
  let list = JSON.parse(data);
  let [x, y] = criteria.split('-');
  let i = 0;

  list.forEach(employeeData => {
    let [id, firstName, seconName, email, gender] = Object.values(employeeData);

    for (const [key, value] of Object.entries(employeeData)) {
      if (value == y) {
        console.log(`${i}. ${firstName} ${seconName} - ${email}`);
        i++;
      }
    }
    if (criteria === 'all') {
      console.log(`${i}. ${firstName} ${seconName} - ${email}`);
      i++;
    }
  });
}


filterEmploees(`[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
  'last_name-Johnson')


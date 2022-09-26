function solve() {
  let textToModify = document.getElementById('text').value;
  let convantionText = document.getElementById('naming-convention').value;
  let conventedText = document.getElementById('result');

  if (convantionText === 'Pascal Case') {
    conventedText.innerHTML = pascalCAse(textToModify);
  } else if (convantionText === 'Camel Case') {
    conventedText.innerHTML = camelCAse(textToModify);
  } else {
    conventedText.innerHTML = 'Error!';
  }

  function pascalCAse(x) {
    let result = '';
    let string = x.split(' ');
    string.forEach(el => {
      let lowerCase = el.toLowerCase();
      let firstCapital = lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1);
      result += firstCapital;
    });

    return result;
  }

  function camelCAse(x) {
    let result = '';
    let string = x.split(' ');
    let firstElementLowerCAse = '';

    for (let i = 1; i < string.length; i++) {
      firstElementLowerCAse = string[0].toLowerCase();
      let lowerCase = string[i].toLowerCase();
      let firstCapital = lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1);
      result += firstCapital;
    }
    return firstElementLowerCAse + result;
  }

}
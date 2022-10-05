function solve() {
  let [generate, buy] = document.querySelectorAll('button');
  let [input, output] = document.querySelectorAll('textarea');

  generate.addEventListener('click', () => {
    let products = JSON.parse(input.value);
    products.forEach(product => {
      let { img, name, price, decFactor } = product;
      let htmlString = ` <tr>
      <td><img src="${img}"></td>\n
      <td><p>${name}</p></td>\n
      <td><p>${price}</p></td>\n
      <td><p>${decFactor}</p></td>\n
      <td><input type="checkbox" /></td>\n
  </tr>`;
      document
        .querySelectorAll('tbody')[0]
        .insertAdjacentHTML("beforeend", htmlString);
    });
    input.value = '';
  });

  buy.addEventListener('click', () => {
    let furnitureList = [];
    let total = 0;
    let decFactorTotal = 0;
    let count = 0;

    [...document.querySelectorAll('tbody tr')].forEach(tr => {
      if (tr.querySelectorAll('input')[0].checked) {
        count++;
        furnitureList.push(tr.children[1].textContent);
        total += Number(tr.children[2].textContent);
        decFactorTotal += Number(tr.children[3].textContent);
      }
    });
    output.value = `Bought furniture: ${furnitureList.join(', ')}\nTotal price: ${total.toFixed(2)}\nAverage decoration factor: ${decFactorTotal / count}`;
  });
}




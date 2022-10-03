function solve() {
   let name = document.getElementsByClassName('product-title');
   let money = document.getElementsByClassName('product-line-price');

   let buttonAddProduct = document.getElementsByClassName('product');

   let texteareaText = document.getElementsByTagName('textarea')[0];
   let productsListPrice = {};
   let arrayNameProducts = [];

   let total = 0;


   for (let i = 0; i < buttonAddProduct.length; i++) {

      buttonAddProduct[i].addEventListener('click', addProductToList);
      function addProductToList(e) {
         if (e.target.tagName == 'BUTTON') {

            let nameProduct = name[i].innerHTML;
            let priceProduct = (Number(money[i].innerHTML)).toFixed(2);

            // productsListPrice = { nameProduct, priceProduct };

            if (!arrayNameProducts.includes(nameProduct)) {
               arrayNameProducts.push(nameProduct);
               total += Number(priceProduct);
            } else {
               total += Number(priceProduct);
            }

            texteareaText.innerHTML += `Added ${nameProduct} for ${priceProduct} to the cart.\n`;
            productsListPrice = {};

         };
      }

   }

   document.getElementsByClassName('checkout')[0].addEventListener('click', () => {

      texteareaText.innerHTML = texteareaText.defaultValue + `You bought ${arrayNameProducts.join(', ')} for ${total.toFixed(2)}.`;

      Array.from(document.getElementsByTagName('button')).forEach(button => {
         button.disabled = true;
      });
   })
}
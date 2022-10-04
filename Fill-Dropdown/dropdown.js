function addItem() {
    const newText = document.getElementById('newItemText');
    const newValue = document.getElementById('newItemValue');
    let menu = document.getElementById('menu');


    let option = document.createElement('option');
    menu.appendChild(option);

    option.innerHTML = newText.value;
    option.value = newValue.value;
    document.getElementById("menu").appendChild(option);
    newText.value = "";
    newValue.value = "";

}
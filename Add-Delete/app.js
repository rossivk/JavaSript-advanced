function addItem() {
    let newLiText = document.getElementById('newItemText').value;
    let li = document.createElement('li');
    let deleteLink = document.createElement('a');

    deleteLink.href = '#'
    deleteLink.innerHTML = '[Delete]';
    console.log(deleteLink);
    deleteLink.style.order = '1';

    li.appendChild(deleteLink);
    li.appendChild(document.createTextNode(newLiText));
    document.getElementById('items').appendChild(li);

    document.getElementById('newItemText').value = '';

    deleteLink.addEventListener('click', (e => e.target.parentElement.remove()));

}


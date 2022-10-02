function validate() {
    let input = document.getElementById('email');
    input.addEventListener('change', validateEmail);

    function validateEmail(e) {
        let pattern = /^([a-z]+)@([a-z]+)\.([a-z]+)$/;
        if (pattern.exec(e.target.value)) {
            e.target.removeAttribute('class');
            return;
        }
        e.target.classList.add('error');
    }
}
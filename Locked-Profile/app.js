function lockedProfile() {

    [...document.getElementsByClassName('profile')].forEach(parent => {
        let btn = parent.querySelectorAll('button')[0];

        btn.addEventListener('click', () => {
            let unlock = parent.querySelectorAll('input')[1].checked;
            let hiddenDiv = parent.querySelectorAll('div')[0];

            if (unlock) {
                if (btn.innerHTML == 'Show more') {
                    hiddenDiv.style.display = 'block';
                    btn.innerHTML = 'Hide it';
                }
                else if (btn.innerHTML == 'Hide it') {
                    hiddenDiv.style.display = 'none';
                    btn.innerHTML = 'Show more';

                }
            }
        });

    });


}
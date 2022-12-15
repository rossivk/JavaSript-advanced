function solve() {
    let movieName = document.getElementById('container').children[0];
    let hallName = document.getElementById('container').children[1];
    let ticketPrice = document.getElementById('container').children[2];
    let btnOnScreen = document.getElementById('container').children[3];

    btnOnScreen.addEventListener('click', e => {
        e.preventDefault()

        if (movieName.value == '' || hallName.value == '' || ticketPrice.value == '' || !ticketPrice.value.match(/^[0-9\.]+$/)) {
            return;
        } else {
            let ulMovies = document.getElementById('movies').children[1];

            let liMovies = document.createElement('li');
            let spanMovies = document.createElement('span');
            spanMovies.innerHTML = movieName.value;
            let strongMovies = document.createElement('strong');
            strongMovies.innerHTML = `${hallName.placeholder}: ${hallName.value}`;
            let divMovies = document.createElement('div');
            let divMoviesStrong = document.createElement('strong');

            divMoviesStrong.innerHTML = Number.parseFloat(ticketPrice.value).toFixed(2);
            let divMoviesInput = document.createElement('input');
            divMoviesInput.placeholder = 'Tickets Sold';
            let btnArchive = document.createElement('button');
            btnArchive.innerHTML = 'Archive';

            ulMovies.appendChild(liMovies);

            liMovies.appendChild(spanMovies);
            liMovies.appendChild(strongMovies);
            liMovies.appendChild(divMovies);

            divMovies.appendChild(divMoviesStrong);
            divMovies.appendChild(divMoviesInput);
            divMovies.appendChild(btnArchive);

            movieName.value = '';
            hallName.value = '';
            ticketPrice.value = '';

            btnArchive.addEventListener('click', e => {
                if (divMoviesInput.value == '' || !divMoviesInput.value.match(/^[0-9\.]+$/)) {
                    return;
                } else {
                    let ulArchive = document.getElementById('archive').children[1];
                    ulArchive.appendChild(liMovies);
                    liMovies.removeChild(divMovies);
                    strongMovies.innerHTML = `Total amount: ${Number.parseFloat(divMoviesStrong.innerHTML * divMoviesInput.value).toFixed(2)}`;

                    let btnDelete = document.createElement('button');
                    btnDelete.innerHTML = 'Delete';

                    liMovies.appendChild(btnDelete);

                    btnDelete.addEventListener('click', e => {
                        ulArchive.removeChild(liMovies);
                    })

                    let btnClear = document.getElementById('archive').children[2];
                    btnClear.addEventListener('click', e => {
                        ulArchive.removeChild(liMovies);
                    })
                }

            })
        }
    })

}
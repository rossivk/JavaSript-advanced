function attachGradientEvents() {

    let gradient = document.getElementById('gradient');

    gradient.addEventListener('mousemove', mouseMove);
    gradient.addEventListener('mouseout', () => document.getElementById('result').textContent = '');

    function mouseMove(e) {
        let move = e.offsetX / (e.target.clientWidth - 1);
        move = Math.floor(move * 100);
        document.getElementById('result').textContent = move + '%';
    }
}


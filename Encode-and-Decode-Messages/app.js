function encodeAndDecodeMessages() {
    //divs containing textareas and buttons
    const main = [...document.getElementById('main').children];

    //textareaSender - message to send
    let textareaSender = main[0].children[1];

    //textareaReceiver- message to receive
    let textareaReceiver = main[1].children[1];

    for (let i = 0; i < main.length; i++) {
        //add event listener to the buttons
        main[i].children[2].addEventListener('click', () => {
            //received message is converted to an array of ASCII numbers +1, then converted to string again
            if (main[i].children[2].innerHTML === 'Encode and send it') {
                let codedText = getLetters(getCharCodes(textareaSender.value));

                textareaReceiver.innerHTML = codedText;
                textareaSender.value = '';
            } else if (main[i].children[2].innerHTML === 'Decode and read it') {
                let decodedText = getLetters(getCharCodesReverse(textareaReceiver.innerHTML));

                textareaReceiver.innerHTML = decodedText;
            }
        });
    }

    function getCharCodes(string) {
        let charCodeArr = [];

        for (let i = 0; i < string.length; i++) {
            let code = string.charCodeAt(i);
            code = code + 1;
            charCodeArr.push(code);
        }
        return charCodeArr
    }

    function getCharCodesReverse(string) {
        let charCodeArr = [];

        for (let i = 0; i < string.length; i++) {
            let code = string.charCodeAt(i);
            code = code - 1;
            charCodeArr.push(code);
        }
        return charCodeArr
    }

    function getLetters(array) {
        let string = [];

        for (let i = 0; i < array.length; i++) {
            let letter = String.fromCharCode(array[i]);
            string.push(letter);
        }
        return string.join('');

    }



}

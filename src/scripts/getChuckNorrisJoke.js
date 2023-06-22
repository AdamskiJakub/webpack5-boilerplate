import chuckImage from '../assets/chuck_norris.png';

async function getJoke() {
    try {
        const res = await fetch('https://api.chucknorris.io/jokes/random');
        const data = await res.json();

        updateJoke(data)
    } catch (error) {
        const data = {
            value: `Chuck thrown an error: ${error}`
        };

        updateJoke(data)
    }
}

function updateJoke(data) {
    document.querySelector('.js-joke-box').innerHTML = data.value
}

function bindEvents() {
    const getJokeBtn = document.querySelector('.js-get-joke');

    getJokeBtn.addEventListener('click', getJoke);
}

function setImage() {
    document.querySelector('.js-chuck-image').src = chuckImage
}

export {
    getJoke,
    bindEvents,
    setImage
}
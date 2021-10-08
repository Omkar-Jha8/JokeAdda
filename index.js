// GET https://icanhazdadjoke.com/

const jokes = document.querySelector('h2')
const next = document.querySelector('button')

const setheader = {
    headers: {
        Accept: 'application/json'
    }
}

const generatejoke = () => {
    fetch('https://icanhazdadjoke.com', setheader).then((response) => response.json())
        .then((data) => {
            jokes.innerHTML = data.joke;
        }).catch((err) => {
            jokes.innerHTML = err;

        })
}

next.addEventListener('click', generatejoke)
generatejoke()
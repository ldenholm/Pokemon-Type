//const typeOutput = document.getElementById('displayType');
const typeInput = document.getElementById('getType');
const url = 'https://pokeapi.co/api/v2/pokemon/';

document.getElementById('fetchBtn').addEventListener('click', () => {

    // grab input (search query):
    let pokemonToFind = typeInput.value;

    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            let response = xhr.response;
            document.getElementById('displayType').innerText = response.types[0].type.name;
            // update text in h2 to display pokemon type

        }
    };

    xhr.open('GET', url + pokemonToFind);
    xhr.send();
});
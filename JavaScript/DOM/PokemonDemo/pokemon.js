// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1;

const container = document.querySelector('#container');
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
for(let i = 1; i <= 151; i++){
    const img = document.createElememt('img');
    img.src = `${baseURL}${i}.png`
    container.appendChild(img);
}
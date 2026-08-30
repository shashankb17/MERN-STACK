const btn = document.querySelector('#Hey');
const h1 = document.querySelector('h1');
btn.addEventListener('click', function (){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const colors = `rgb(${r}, ${g}, ${b})`;
    const body = document.querySelector('body');
    body.style.backgroundColor = colors;
    h1.innerText = colors;
});
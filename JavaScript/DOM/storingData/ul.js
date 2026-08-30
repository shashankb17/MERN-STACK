const form = document.querySelector('#back');
const ul = document.querySelector('#list');
form.addEventListener('submit', function(e){
    e.preventDefault();
    const elements = input.value;
    const li= document.createElement('LI');
    li.innerText = elements;
    ul.append(li);
    input.value = "";
});
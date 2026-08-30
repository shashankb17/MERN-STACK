// const allImages = document.getElementsByTagName('img');

// for (let img of allImages) {
//     img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg'
// }


// const squareImages = document.getElementsByClassName('square');

// for (let img of squareImages) {
//     img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';
// }

// const links = document.querySelectorAll('p a');

// for (let link of links) {
//     console.log(link.href)
// }






// const allImages = document.getElementsByTagName('img');
// for (let imag of allImages){
//     console.log(imag.src);
// }

// document.querySelector('a[title = "Plumage"]')
// document.querySelectorAll('p');
// document.querySelectorAll('p a'); //all anchor tags nested inside the paragraph tag
// const newimg = document.querySelector('img');
// newimg.setAttribute('src', 'https://images.unsplash.com/photo-1581061090142-c2cd0ec9f021?w=200');
// newimg.setAttribute('alt', 'chicken');
// const divp = document.querySelector('#container');
// divp.style.textAlign = 'center';
// const imag = document.querySelector('div img');
// imag.style.width = '150px';
// imag.style.borderRadius = '50%';
// const task = document.querySelectorAll('li');
// for(let part of task){
//     task[part].classList.toggle('highlight');
// }




const image = document.createElement('img'); //  creates the image 
image.src = "https://wikiofthrones.com/wp-content/uploads/2025/01/Caraxes.jpg";
document.body.appendChild(image); // adds the image to the body
image.classList.add('square');
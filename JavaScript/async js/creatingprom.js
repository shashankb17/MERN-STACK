const delayChangeColor = (color, delay) => {
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            document.body.style.backgroundColor = color;
            resolve();
        },delay);
    })
}

delayChangeColor('red', 2000)
    .then(() => delayChangeColor('orange', 2000)) 
    .then(() => delayChangeColor('yellow', 2000)) 
    .then(() => delayChangeColor('green', 2000)) 
    .then(() => delayChangeColor('blue', 2000)) 
    .then(() => delayChangeColor('indigo', 2000)) 
    .then(() => delayChangeColor('violet', 2000)) 
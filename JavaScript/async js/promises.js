const fakeRequestPromises = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 4300) {
        reject("Connection Timeout :(");
      } else {
        resolve(`Here is your fake data from ${url}`);
      }
    }, delay);
  });
};

fakeRequestPromises('yelp.com/home/page1')
    .then((data) => {
        console.log("It worked !!!(page(1)")
        console.log(data)
        return fakeRequestPromises('yelp.com/home/page2')
    })
    .then((data) =>{
        console.log("It worked !!!(page(2)")
        console.log(data)
        return fakeRequestPromises('yelp.com/home/page2')
    })
    .then((data) =>{
        console.log("It worked !!!(page(2)")
        console.log(data)
        return fakeRequestPromises('yelp.com/home/page2')
    })
    .catch((err)=>{
        console.log("Oh no Connection timeout")
        console.log(err)
    })

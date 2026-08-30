//Independent API requests

fetch("https://swapi.tech/api/people/1") // returns the promise unlike the XML
 .then((res) => {
    console.log("First Request Resolved", res);
    return res.json(); // which also returns the promise & object data present in it
 })
 .then((data) => {
    console.log(data.result.properties);
    return fetch("https://swapi.tech/api/people/2")
  })
  .then((res) => {
    console.log("Second Request Resolved");
    return res.json();
  })
  .then((data) => {
    console.log(data.result.properties);
  })
 .catch((e) => {
    console.log("Oops!!! Error");
 });





// fetch("https://swapi.tech/api/people/1/")
//   .then((res) => {
//     console.log("RESOLVED!", res);
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data.result.properties);
//   })
//   .catch((e) => {
//     console.log("ERROR!", e);
//   });







// // using async function

// const loadData = async() => {
//     try {
//         const res = await fetch("https://swapi.dev/api/people/1")
//         const data = await res.json();
//         console.log(data);
//         const res2 = await fetch("https://swapi.dev/api/people/2")
//         const data2 = await res2.json();
//         console.log(data2);
//     } catch(e) {
//         console.log("Oops!!! Error", e);
//     }
// };
// loadData();
// axios.get("https://swapi.dev/api/people/1") //No need of extra step of making the res.json()
//  .then((res) => {
//     console.log("Resolved", res);
//  })
//  .catch((e) => {
//     console.log("Error", e);
//  })

// using async function

// const getPersonByID = async (id) => {
//   try {
//     const res = await axios.get(`https://swapi.dev/api/people/${id}`);
//     console.log(res.data);
//   } catch (e) {
//     console.log("Oops!!! Error", e);
//   }
// };
// getPersonByID(5);
// getPersonByID(8);

//Setting Up Headers with Axios
const ul = document.querySelector("#jokes");
const btn = document.querySelector("#btn");
const addNewJoke = async () => {
  const jokeText = await getDadJoke();
  const newLi = document.createElement("LI");
  newLi.append(jokeText);
  ul.append(newLi);
};
const getDadJoke = async () => {
  try {
    const config = { headers: { Accept: "application/json" } };
    const res = await axios.get("https://icanhazdadjoke.com/", config);
    return res.data.joke;
  } catch (e) {
    return "NO JOKES AVAILABE SORRY :(";
  }
};
btn.addEventListener("click", addNewJoke);

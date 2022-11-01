const jokeContainer = document.querySelector(".joke");
const punchlineContainer = document.querySelector(".punchline");
const btn = document.querySelector(".btn");

async function getJokes() {
  try {
    let response = await fetch("https://joke.deno.dev/all");
    let data = await response.json();

    // Get The First Joke
    let randomNumber = Math.floor(Math.random() * data.length);
    let joke = data[randomNumber].setup;
    let punchline = data[randomNumber].punchline;
    jokeContainer.innerHTML = joke;
    punchlineContainer.innerHTML = punchline;

    // Get Random Joke Every Time The Button Clicked
    btn.addEventListener("click", () => {
      let randomNumber = Math.floor(Math.random() * data.length);
      let joke = data[randomNumber].setup;
      let punchline = data[randomNumber].punchline;
      jokeContainer.innerHTML = joke;
      punchlineContainer.innerHTML = punchline;
    });
  } catch (error) {
    console.error(error.message);
  }
}

getJokes();

let btn = document.querySelector('#Btn');
let joke = document.querySelector('#joke');

btn.addEventListener('click', getJokes);

async function getJokes() {
  try{
    joke.textContent = "Loading...";
    let rawdata = await fetch("https://geek-jokes.sameerkumar.website/api?format=json")
    
    if(!rawdata.ok) throw new Error('Not found');
    
    let data = await rawdata.json();
    joke.textContent = data.joke;
      
  }
  catch(err){
    joke.textContent = "Joke Not Found";
  }
}

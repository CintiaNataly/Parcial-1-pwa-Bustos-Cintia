const URL_EPISODES = "https://api.sampleapis.com/simpsons/episodes";


fetch(URL_EPISODES)
    .then(data => data.json())
    .then(result => {
        const results = result.slice(0,99);
        console.log(results);
    })




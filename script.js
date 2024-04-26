const URL_EPISODES = "https://api.sampleapis.com/simpsons/episodes";


fetch(URL_EPISODES)
    .then(datos => datos.json())
    .then(resultado => {
        const results = resultado.results;
        console.log("results", resultado)

    })



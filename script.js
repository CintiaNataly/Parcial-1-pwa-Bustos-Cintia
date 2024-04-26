const URL_EPISODES = "https://api.sampleapis.com/simpsons/episodes";


fetch(URL_EPISODES)
    .then(data => data.json())
    .then(result => {
        const results = result.slice(0, 100);
        console.log(results);

        const listado = document.getElementById('listado_items');

        results.forEach(episode => {
            const div = document.createElement('div');


            // Agregar la clase "col-md-4" al elemento <div>
            div.classList.add('col-md-4');
            div.classList.add('mb-2');

            // Crear el elemento <div> con la clase "card"
            const cardDiv = document.createElement('div');
            cardDiv.classList.add('card');
            cardDiv.style.border = 'none';
            cardDiv.style.minHeight = '400px'; 

            // Crear el elemento <img> con las clases necesarias
            const img = document.createElement('img');
            img.src = episode.thumbnailUrl;
            img.classList.add('card-img-top');
            img.alt = episode.name;

            // Crear el elemento <div> con la clase "card-body"
            const cardBodyDiv = document.createElement('div');
            cardBodyDiv.classList.add('card-body');

            // Crear el elemento <h2> con la clase "card-title"
            const cardBodyTitle = document.createElement('h2');
            cardBodyTitle.classList.add('card-title');
            cardBodyTitle.textContent = `${episode.id} - ${episode.name}`;


            const boton = document.createElement('button');
            boton.type = "button";
            boton.classList.add('btn');
            boton.classList.add('btn-primary');
            boton.setAttribute("data-bs-toggle", "modal");
            boton.setAttribute("data-bs-target", "#exampleModal");
            boton.setAttribute("data-capitulo", `${episode.id}`);
            boton.textContent = "Ver más";


            // Agregar la imagen y el cuerpo de la tarjeta al div de la tarjeta
            cardDiv.appendChild(img);
            cardDiv.appendChild(cardBodyDiv);
            cardBodyDiv.appendChild(cardBodyTitle);
            cardBodyDiv.appendChild(boton);
            // Agregar el div de la tarjeta al elemento <li>
            div.appendChild(cardDiv);

            // Agregar el elemento <div> a la lista
            listado.appendChild(div);


            // Agregar un event listener al botón después de crearlo
            boton.addEventListener('click', function () {
                // Obtén el valor del atributo data-capitulo
                const capitulo = this.getAttribute('data-capitulo');
                console.log('Capítulo:', capitulo);


                //leer detalle
                const URL_CAP = "https://api.sampleapis.com/simpsons/episodes/" + capitulo;

                fetch(URL_CAP)
                    .then(response => response.json())
                    .then(data => {
                        console.log(data);

                        // Obtener los elementos del modal
                        const titleElement = document.getElementById('titulo');
                        const tempElement = document.getElementById('temporada');
                        const capElement = document.getElementById('episodio');
                        const ratingElement = document.getElementById('rating');
                        const contentElement = document.
                        getElementById('descripcion');

                        // Asignar la información de la API a los elementos del modal
                        titleElement.textContent = data.name;
                        tempElement.innerHTML = "<strong>Temporada:</strong> " + data.season;
                        capElement.innerHTML = "<strong>Capitulo:</strong> " + data.episode;
                        ratingElement.innerHTML = "<strong>Rating:</strong> " + data.rating;
                        contentElement.textContent = data.description;


                        // Aquí puedes hacer lo que quieras con los datos, por ejemplo, mostrarlos en la página web.
                    })
                    .catch(error => {
                        console.error('Hubo un problema al obtener los datos:', error);
                    });


            });


        });
    })



// Selecciona todos los botones que tengan el atributo data-capitulo
const buttons = document.querySelectorAll('button[data-capitulo]');

// Itera sobre los botones y agrega un event listener
buttons.forEach(button => {
    button.addEventListener('click', function () {
        // Obtén el valor del atributo data-capitulo
        const capitulo = this.getAttribute('data-capitulo');
        console.log('Capítulo:', capitulo);
    });
});


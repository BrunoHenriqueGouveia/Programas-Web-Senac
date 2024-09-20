
document.addEventListener("DOMContentLoaded", function () {
    const API_KEY = "20dc3bbff4f2f235ada65b315eb3836d";
    const API_URL = "https://api.themoviedb.org/3/discover/movie";

    // Função para obter os filmes por gênero
    function getMoviesByGenre(genreId) {
        const url = `${API_URL}?api_key=${API_KEY}&with_genres=${genreId}`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                displayMovies(data.results);
            })
            .catch(error => console.log(error));
    }

    // Função para exibir os filmes na página
    function displayMovies(movies) {
        const moviesList = document.getElementById("movies-list");
        moviesList.innerHTML = ""; // Limpa o conteúdo anterior

        movies.forEach(movie => {
            const movieDiv = document.createElement("div");
            movieDiv.classList.add("movie");

            const title = document.createElement("h2");
            title.textContent = movie.title;

            const releaseDate = document.createElement("p");
            releaseDate.textContent = `Release Date: ${movie.release_date}`;

            const overview = document.createElement("p");
            overview.textContent = movie.overview;

            const poster = document.createElement("img");
            poster.src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
            poster.alt = movie.title;

            movieDiv.appendChild(poster);
            movieDiv.appendChild(title);
            movieDiv.appendChild(releaseDate);
            movieDiv.appendChild(overview);

            moviesList.appendChild(movieDiv);
        });
    }

    // Atualiza a lista de filmes quando o usuário seleciona um gênero diferente
    const genreSelect = document.getElementById("genre-select");
    genreSelect.addEventListener("change", function () {
        const selectedGenreId = genreSelect.value;
        getMoviesByGenre(selectedGenreId);
    });

    // Inicializa a lista de filmes com o gênero padrão (Ação: id = 28)
    getMoviesByGenre(28);
});
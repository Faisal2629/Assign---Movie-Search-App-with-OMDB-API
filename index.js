let URL =`https://www.omdbapi.com/?i=tt3896198&apikey=473e9cc6`

document.getElementById('search-button').addEventListener('click', async () => {
    const movieTitle = document.getElementById('movie-title').value;
    const apiKey = '473e9cc6'; 

    if (movieTitle.trim() === '') {
        alert('Please enter a movie title.');
        return;
    }

    try {
        const response = await fetch(`https://www.omdbapi.com/?t=${encodeURIComponent(movieTitle)}&apikey=${apiKey}`);
        const data = await response.json();

        if (data.Response === 'False') {
            document.getElementById('movie-info').innerHTML = `<p>${data.Error}</p>`;
        } else {
            displayMovieData(data);
        }
    } catch (error) {
        console.error('Error fetching the movie data:', error);
        document.getElementById('movie-info').innerHTML = '<p>Something went wrong. Please try again later.</p>';
    }
});

function displayMovieData(movie) {
    const movieInfo = document.getElementById('movie-info');
    movieInfo.innerHTML = `
        <div class="movie-card">
            <img src="${movie.Poster}" alt="${movie.Title} Poster">
            <h2>${movie.Title}</h2>
            <p><strong>Year:</strong> ${movie.Year}</p>
            <p><strong>Plot:</strong> ${movie.Plot}</p>
        </div>
    `;
}

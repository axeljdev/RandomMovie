import { useEffect, useState } from "react";
import "/src/App.css"

function Cards({randomNumber}) {

  const apiToken = import.meta.env.VITE_API_TOKEN
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${apiToken}`,
    },
  };

 useEffect(() => {
  setIsLoading(true);
  fetch(`https://api.themoviedb.org/3/movie/${randomNumber}?language=fr-FR`, options)
    .then(response => {
      // if (!response.ok) {
      //   throw new Error('La requête a échoué.');
      // }
      return response.json();
    })
    .then((data) => {
      setIsLoading(false);
      setMovie(data);
    })
    .catch((error) => {
      setIsLoading(false);
      setError(error.message);
    });
}, [randomNumber]);

  return (
    <div>
    {isLoading && <p>Chargement en cours...</p>}
    {error}
    {movie && (
      <article className="container" key={movie.id}>
        <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} />
        <h2>{movie.title}</h2>
      </article>
    )}
  </div>
  );
}

export default Cards;

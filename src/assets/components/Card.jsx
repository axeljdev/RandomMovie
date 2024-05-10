import { useEffect, useState } from "react";
import "/src/App.css"

function Cards({randomNumber}) {

  const apiToken = import.meta.env.VITE_API_TOKEN
  const [movie, setMovie] = useState([])

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${apiToken}`,
    },
  };

  useEffect(()=> {
    
    fetch(`https://api.themoviedb.org/3/movie/${randomNumber}?language=fr-FR`, options)
      .then(response => response.json())
      .then((data) => setMovie(data))
      .catch(err => console.error(err));
  });

  return (
    <article className="container" key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title}/>
            <h2>{movie.title}</h2>
          </article>
  );
}

export default Cards;

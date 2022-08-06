import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/detalle.css";
import flechaiz from "../images/flecha-izquierda.png"
import flechader from "../images/flecha-correcta.png"

const Detalle = () => {
  // toma la ruta URL de detalle y va a buscar unicamente el id de la pelicula seleccionada

  let query = new URLSearchParams(window.location.search);
  let movieID = query.get("movieId");

  const [movieInfo, setMovieInfo] = useState(null);

  useEffect(() => {
    const endPoint = `https://api.themoviedb.org/3/movie/${movieID}?api_key=c14de4255efda3854553730391283561&language=en-US`;
    axios
      .get(endPoint)
      .then((res) => {
        const movieData = res.data;
        setMovieInfo(movieData);
        console.log(movieInfo);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {movieInfo && (
        <>
          <h2 className="tittleDetalle">Titulo: {movieInfo.title} </h2>
          <div className="row">
            <div className="col-4">
              <img
                src={`https://image.tmdb.org/t/p/w500/${movieInfo.poster_path}`}
                className="img-fluid"
                alt="Movie Poster"
              />
            </div>
            <div className="col-8 infoMoviesdetalle">
              <h5>Date: {movieInfo.release_date}</h5>
              <h5>Overview</h5>
              <p>{movieInfo.overview}</p>
              <h5>Rating: {movieInfo.vote_average}</h5>
              <h5 className="genresName">Genres</h5>
              <ul>
                {movieInfo.genres.map((oneGenre) => (
                  <li key={oneGenre.id}> {oneGenre.name}</li>
                ))}
              </ul>
              <Link to={`#`} className="btn btn-primary btnver-pelicula">
                Continuar
              </Link>
            </div>
            <div className="moviesRec contenedormoviesrec">
              <div className="titulo-controles">
                <h3>Peliculas recomendadas</h3>
                </div> 
                <div className="container-carrusel">
                  <button role="button" id="flecha-iz" className="flecha-iz">
                  <img src={flechaiz}/>
                    </button>
                    <div className="container-carousel">
                      <div className="carrousel">
                        
                      </div>
                    </div>
                    <button role="button" id="flecha-der" className="flecha-der">
                  <img src={flechader}/>
                    </button>
                </div>

            </div>

          </div>
        </>
      )}
    </>
  );
};

export default Detalle;

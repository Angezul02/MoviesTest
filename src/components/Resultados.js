import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Resultados = () => {
  // const [keyWordUser, setKeyWordUser] = useState("");
  const [movieResult, setMovieResults] = useState([]);

  // setKeyWordUser(searchMovie);
  let query = new URLSearchParams(window.location.search);
  let searchMovie = query.get("keyword");

  useEffect(() => {
    const endpoint = `
    https://api.themoviedb.org/3/search/movie?api_key=c14de4255efda3854553730391283561&language=en-US&query=${searchMovie}`;
    axios
      .get(endpoint)
      .then((res) => {
        const moviesSearchUser = res.data.results;
        if (moviesSearchUser.length === 0) {
          new Swal({
            title: "No se encontraron resultados a tu busqueda",
            text: "Verifica la busqueda realizada",
            imageUrl: "https://cdn-icons-png.flaticon.com/512/5216/5216761.png",
            imageHeight: 80,
            imageWidth: 80,
            confirmButtonText: "ok",
          });
        }
        setMovieResults(moviesSearchUser);
        // setMovieResults(movieDataSearch)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //funcion que capture el error , setee el valor y pasarlo al useEffect

  //   setSearch(searchMovie);
  return (
    <div className="row">
      {/* el map toma un callback con dos parametros (elemento del Array, indice del elemento dentro del array) */}
      {/* key-prop, cada vez que se itere con un map y cada vez que se genere un elemento nuevo
        es necesario implementar una prop que se llama Key le permite a react entender que es un 
        elemento unico y puede ser modificable */}
      {movieResult.map((oneMovie, idx) => {
        return (
          <div className="col-3" key={idx}>
            <div className="card mt-4">
              {/* el llamado de la imagen se debe realizar asi según la documentación de la API */}
              <img
                src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{oneMovie.title}</h5>
                {/* <p className="card-text">
                  {oneMovie.overview.substring(0, 150)}
                </p> */}
                <Link
                  to={`/detalle?movieId=${oneMovie.id}`}
                  className="btn btn-primary"
                >
                  Más info
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Resultados;

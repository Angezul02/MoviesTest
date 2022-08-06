import React from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/listado.css"

const Listado = () => {
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    const endPoint =
      "https://api.themoviedb.org/3/discover/movie?api_key=c14de4255efda3854553730391283561&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate";
    axios
      .get(endPoint)
      .then((res) => {
        const apiData = res.data.results;
        setMoviesList(apiData);
      })
      .catch((error) => {
        new Swal({
          title: "Se presentó un error",
          text: `${error}`,
          imageUrl:
            "https://cdn-icons.flaticon.com/png/512/2797/premium/2797387.png?token=exp=1658594072~hmac=fb2a0def37bad7e6bb383121fdf919a2",
          imageHeight: 80,
          imageWidth: 80,
          confirmButtonText: "ok",
        });
      });
  }, [setMoviesList]);

  console.log(moviesList);

  return (
    //estructura base card
    <>
      <div className="row container-list">
        {/* el map toma un callback con dos parametros (elemento del Array, indice del elemento dentro del array) */}
        {/* key-prop, cada vez que se itere con un map y cada vez que se genere un elemento nuevo
        es necesario implementar una prop que se llama Key le permite a react entender que es un 
        elemento unico y puede ser modificable */}
        {moviesList.map((oneMovie, idx) => {
          return (
            <div className="col-2 container-cards" key={idx}>
              <div className="card mt-5 card-container" >
                {/* el llamado de la imagen se debe realizar asi según la documentación de la API */}
                <img
                  src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{oneMovie.title}</h5>

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
    </>
  );
};

export default Listado;

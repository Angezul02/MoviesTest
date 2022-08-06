import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Buscador = () => {
  const navigateRoute = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    //se realiza un .trim para eliminar espacios antes y despues de la palabra del buscador
    const searchWord = e.currentTarget.word.value.trim();
    if (searchWord.length === 0) {
      new Swal({
        title: "Campo vacio",
        text: "Debes escribir almenos una palabra para iniciar la busqueda",
        imageUrl: "https://cdn-icons-png.flaticon.com/512/5216/5216761.png",
        imageHeight: 80,
        imageWidth: 80,
        confirmButtonText: "ok",
      });
    } else if (searchWord.length < 4) {
      new Swal({
        title: "No es posible realizar la busqueda",
        text: "Debes escribir almenos 4 caracteres para iniciar la busqueda",
        imageUrl: "https://cdn-icons-png.flaticon.com/512/5216/5216761.png",
        imageHeight: 80,
        imageWidth: 80,
        confirmButtonText: "ok",
      });
    } else {
      //limpiar la barra de busqueda, redireccionar a la vista resultados
      e.currentTarget.word.value = "";
      navigateRoute(`/resultados?keyword=${searchWord}`);
    }
  };
  return (
    <form className="d-flex align-items-center" onSubmit={submitHandler}>
      <label className="form-label mb-0 mx-2">
        <input
          className="form-control"
          type="text"
          name="word"
          placeholder="Search..."
        />
      </label>
      <button className="btn btn-success" type="submit">
        Search
      </button>
    </form>
  );
};

export default Buscador;

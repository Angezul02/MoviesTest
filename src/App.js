//Libraries
import { Routes, Route } from "react-router-dom";
//Components

import Listado from "./components/Listado";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Detalle from "./components/Detalle";
import Resultados from "./components/Resultados";

//style
import "./styles/header.css";
import "./styles/App.css";
import "./styles/bootstrap.min.css";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route exact path="/listado" element={<Listado />} />
          <Route exact path="/detalle" element={<Detalle />} />
          <Route exact path="/resultados" element={<Resultados />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;

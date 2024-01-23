import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

const NavBar = () => {
  return (
    <header className="py-5">
      <div className="container-xl">
        <div className="row justify-content-center justify-content-md-between">
          <div className="col-8 col-md-3">
            <a href="#" className="text-decoration-none logo">
              <strong>E-COMMERCE</strong>
            </a>
          </div>
          <nav className="col-md-6 d-flex flex-column align-items-center mt-5 mt-md-0 flex-md-row justify-content-md-end menu">
            <a
              className="d-block px-2 py-1 text-decoration-none fs-6 fw-bold text-uppercase text-black"
              href="#"
            >
              Inicio
            </a>
            <a
              className="d-block px-2 py-1 text-decoration-none fs-6 fw-bold text-uppercase text-black"
              href="#"
            >
              Nosotros
            </a>
            <a
              className="d-block px-2 py-1 text-decoration-none fs-6 fw-bold text-uppercase text-black"
              href="#"
            >
              Productos
            </a>
            <a
              className="d-block px-2 py-1 text-decoration-none fs-6 fw-bold text-uppercase text-black"
              href="#"
            >
              Blog
            </a>
            <a
              className="d-block px-2 py-1 text-decoration-none fs-6 fw-bold text-uppercase text-black"
              href="#"
            >
              Conctactanos
            </a>
            <CartWidget />
          </nav>
        </div>
        <div className="row mt-5">
          <div className="col-md-6 text-center text-md-start">
            <h1 className="display-6 fw-bold text-primary">
              Escritorio Eléctrico
            </h1>
            <p className="mt-5 fs-5 text-black px-3 productoPrincipal">
              Todos nuestros escritorios de oficina o de Home Office han sido
              diseñados según normas ISO, respetando las principales dimensiones
              sugeridas por la norma. Así mismo nuestros diseños se caracterizan
              por ser exclusivos, elegantes, ligeros visualmente, funcionales ,
              escalables (crecen junto contigo) y de gran robustez estructural.
            </p>
            <p className="text-primary fs-1 fw-back">120$</p>
            <a
              className="btn fs-4 bg-primary text-white py-2 px-5 producto"
              id="btn_prod"
              href="#"
            >
              Ver Producto
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;

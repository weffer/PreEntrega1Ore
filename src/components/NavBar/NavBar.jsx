import React from "react";
import "./NavBar.css";

export function NavBar() {
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
            <button id="btnCarrito" className="border-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-shopping-cart"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M17 17h-11v-14h-2" />
                <path d="M6 5l14 1l-1 7h-13" />
              </svg>
              <span id="cantidadCarrito">0</span>
            </button>
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
              className="btn fs-4 bg-primary text-white py-2 px-5 btn-prod"
              href="#"
            >
              Ver Producto
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

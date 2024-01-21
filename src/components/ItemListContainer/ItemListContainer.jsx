import "./ItemListContainer.css";
import { getImageURL } from "../../utils/image-util";

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="col-md-6 col-lg-4 my-4 row">
      <div className="col-4">
        <img
          className="img-fluid producto"
          src={getImageURL("producto1.webp")}
          alt="producto de escrito quadra"
        />
      </div>
      <div className="col-8 d-flex flex-column">
        <h3 className="text-black fs-5 fw-bold text-uppercase">
          Escrito QUADRA
        </h3>
        <p className="flex-grow-1">{greeting}</p>
        <p className="fs-3 text-black">$150</p>
        <a
          className="d-block bg-primary text-center p-2 text-uppercase text-decoration-none text-white btn-prod"
          href="#"
        >
          Ver Producto
        </a>
      </div>
    </div>
  );
};

export default ItemListContainer;

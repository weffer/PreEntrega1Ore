import { getImageURL } from "../../utils/image-util";

const ItemList = ({product}) => {
  
  return (
    <div className="col-md-6 col-lg-4 my-4 row">            
        <div className="col-4">
            <img
            className="img-fluid producto"
            src={getImageURL(product.imagen)}
            alt="producto de escrito quadra"
            />
        </div>
        <div className="col-8 d-flex flex-column">
            <h3 className="text-black fs-5 fw-bold text-uppercase">
            {product.nombre}
            </h3>
            <p className="flex-grow-1">{product.descripcion}</p>
            <p className="fs-3 text-black">${product.precio}</p>
            <a
            className="d-block bg-primary text-center p-2 text-uppercase text-decoration-none text-white producto"
            href="#"
            >
            Ver Producto
            </a>
        </div>
    </div>
  )
}

export default ItemList

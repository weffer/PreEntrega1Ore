import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";

import { useProducts } from "../../Hooks/useProducts";


const ItemListContainer = () => {

  const { tipo } = useParams();

  const { products } = useProducts({tipo});

  return (
    <main className="container-xl mt-5">
      <hr className="border border-primary border-2 opacity-50" />
      <h2 className="text-center fw-bold">Nuestros Productos</h2>
      <div className="row mt-5">
      {
        products.length > 0 ? (
          products.map( product => {
            return (          
              <ItemList key={product.id} product={product}/>
            )
          })) : 
            (<div className="text-center">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>)
      } 
      </div>
    </main>
  );
};

export default ItemListContainer;
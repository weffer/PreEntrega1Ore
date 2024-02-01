import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";

import { useProducts } from "../Hooks/useProducts";

const ItemListContainer = ({ greeting }) => {

  const { products } = useProducts();

  return (
    <>
    <hr className="border border-primary border-2 opacity-50" />
    <h2 className="text-center fw-bold">{greeting}</h2>
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
    </>
  );
};

export default ItemListContainer;

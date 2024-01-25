import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";

import { useEffect, useState } from "react";

const ItemListContainer = ({ greeting }) => {

  const [products, setProducts] = useState([]);

  useEffect(()=>{
    const fetchProducts = async () => {
      try {
        const rest = await fetch("./data.json");
        const data = await rest.json();
        setProducts(data);              
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducts();
  }, [])

  return (
    <>
    <hr className="border border-primary border-2 opacity-50" />
    <h2 className="text-center fw-bold">{greeting}</h2>
    <div className="row mt-5">

    {
      products.map( product => {
        return (          
          <ItemList key={product.id} product={product}/>
        )
      })
    } 
    </div>
    </>
  );
};

export default ItemListContainer;

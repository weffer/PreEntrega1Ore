import { useState, useEffect } from "react";

export function useProducts (){
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
  
    return { products }
  }
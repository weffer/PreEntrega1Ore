import { useState, useEffect } from "react";

export function useProducts (){
    const [products, setProducts] = useState([]);
  
    useEffect(()=>{
      const fetchProducts = async () => {
        try {
          const resp = await fetch("./data.json");
          if(!resp.ok) 
            throw new Error(`Error de red - Código de estado: ${resp.status}`);
          
          const data = await resp.json();
          setProducts(data);              
        } catch (error) {
          console.error(error);
        }
      };
      fetchProducts();
    }, [])
  
    return { products }
  }
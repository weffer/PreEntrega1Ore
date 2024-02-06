import { useState, useEffect } from "react";

export function useProducts ({tipo}){
    const [products, setProducts] = useState([]);
  
    useEffect(()=>{
      const fetchProducts = async () => {
        try {
          const resp = await fetch("/data.json");
          if(!resp.ok) 
            throw new Error(`Error de red - Código de estado: ${resp.status}`);
          
          const data = await resp.json();         
          
          if (!tipo) {            
            setProducts(data); 
          }
          else
          {          
            const productByType = data.filter(p => p.categoria.toUpperCase() === tipo.toUpperCase());           
            setProducts(productByType);            
          }            
          
        } catch (error) {
          console.error(error);
        }
      };
      fetchProducts();
    }, [tipo])
  
    return { products }
  }
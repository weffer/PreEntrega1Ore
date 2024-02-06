import { useEffect, useState } from "react";


export function useProductDetail({id}) {

  const [detail, setDetail] = useState(null);

  useEffect(()=> {
    const fetchDetailProduct = async () => {
        try {
          const resp = await fetch("/data.json");
          if(!resp.ok) 
            throw new Error(`Error de red - Código de estado: ${resp.status}`);
          
          const data = await resp.json();
          const productById = data.find(p => p.id === Number(id));
          setDetail(productById);
          
          
        } catch (error) {
          console.error(error);
        }
      };
      fetchDetailProduct();
  }, [id])

  return { detail }
}
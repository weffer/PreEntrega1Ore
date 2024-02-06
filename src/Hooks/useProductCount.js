import { useEffect, useState } from "react";

export function useProductCount({product}) {
  
   const [ count, setCount ] = useState(0);

   const handleIncrement = (event)=> {
     event.preventDefault();
     setCount(count + 1);
   }

   const handleDecrement = (event)=> {
     event.preventDefault();
     setCount(count - 1);
   }

   useEffect(()=> {
     if(count < 0){
         setCount(0);
     }
     if(count > 10){
         setCount(10);
     }
   } ,[count])
    

  return {  count, handleIncrement, handleDecrement }
}
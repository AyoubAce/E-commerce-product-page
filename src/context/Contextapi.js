import React, { createContext, useEffect, useState } from 'react'

const CommerceContext= createContext();

function ContextProvider({children}) {
    const [visibleCart, setVisibleCart]= useState(true)
    const [item, setItem]= useState({
        featured:"SNEAKER COMPANY",
        name:"Fall Limited Edition Sneakers",
        description:"These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
        price:250,
        discount:50,
        count:0,
    })
    useEffect(()=>{
      if(JSON.parse(localStorage.getItem("cart"))){
        setItem(JSON.parse(localStorage.getItem("cart")))
      }
    }, [])
  return (
    <CommerceContext.Provider value={{item, setItem, visibleCart, setVisibleCart}}>
        {children}
    </CommerceContext.Provider>
  )
}
export {ContextProvider}
export default CommerceContext
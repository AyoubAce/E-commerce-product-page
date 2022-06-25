import React, { useContext } from "react";
import CommerceContext from "../context/Contextapi";
import thumbnail from "../images/image-product-1-thumbnail.jpg";
import formatter from "./product/formatter";




function CheckoutCard() {
  const { item, setItem, visibleCart } =
    useContext(CommerceContext);

  
  const deleteItem = () => {
    setItem((values) => {
      return { ...values, count: values.count-1 };
    });
    localStorage.setItem("cart",JSON.stringify({...item, count:item.count-1}))
  };

  return (
    <div
      className="checkout-container"
      style={visibleCart ? { display: "none" } : { display: "block" }}
    >
      <div className="checkout-card">
        <h4>Cart</h4>
        {item.count > 0 ? (
          <>
            <div className="product">
              <img className="" src={thumbnail} alt="product" />
              <div>
              {item.name.lenght>30 ?  <p>{item.name.substring(0,30)}...</p> : <p>{item.name}</p> }    
                <p>
                  {formatter.format((item.price * item.discount) / 100)} x{" "}
                  {item.count}{" "}
                  <strong>
                    {formatter.format(
                      (item.price * item.count * item.discount) / 100
                    )}
                  </strong>
                </p>
              </div>

              <svg
                className="icon-delete"
                onClick={deleteItem}
                width="14"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
                  fill="#C3CAD9"
                  fillRule="nonzero"
                />
              </svg>
            </div>
            <button>Checkout</button>
          </>
        ) : (
          <div className="empty-cart"><p >your cart is empty</p></div>
        )}
      </div>
    </div>
  );
}

export default CheckoutCard;

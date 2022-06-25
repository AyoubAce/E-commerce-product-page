import React, { useContext, useState } from "react";
import CommerceContext from "../../context/Contextapi";
import formatter from "./formatter";
import iconPlus from "../../images/icon-plus.svg";
import iconMinus from "../../images/icon-minus.svg";

function ProductDetails() {
  const { item, setItem } = useContext(CommerceContext);
  const [count, setCount] = useState(0);
  const [notification, setNotification]= useState(false)

  const addToCart = () => {
    setItem((values) => {
      return { ...values, count: item.count + count };
    });
    localStorage.setItem(
      "cart",
      JSON.stringify({ ...item, count: item.count + count })
    );
    setNotification(true);
    setTimeout(() => {
      setNotification(false)
    },2000);
  };

  return (
    <div className="product-details">
      <div className="product-description">
        <p className="featured">{item.featured}</p>
        <h1>{item.name}</h1>
        <p className="description">{item.description}</p>
      </div>

      <div className="price">
        <h2>{formatter.format((item.price * item.discount) / 100)}</h2>
        <span>
          <strong>{item.discount}%</strong>
        </span>
        <p>{formatter.format(item.price)}</p>
      </div>
      {/* update items in CART and in Localstorage.. 
      the data to be retrieved even when client refreshes the page */}
      <div className="add-to-cart">
        <div className="count">
          <img
            src={iconMinus}
            alt="minus-icon"
            onClick={() => {
              setCount(() => {
                if (count <= 0) {
                  return 0;
                } else {
                  return count - 1;
                }
              });
            }}
          />
          <p>{count}</p>
          <img
            src={iconPlus}
            alt="plus-icon"
            onClick={() => {
              setCount(count + 1);
            }}
          />
        </div>
        <button onClick={addToCart}>Add to cart</button>
        {notification && <span>{count} items added to cart</span>}
      </div>
    </div>
  );
}

export default ProductDetails;

import ProductDetails from "./ProductDetails";
import ProductGalerie from "./ProductGalerie";


function Product() {
  return (
    <section className="product-container">
      <ProductGalerie />
      <ProductDetails/>
     
    </section>
  );
}

export default Product;

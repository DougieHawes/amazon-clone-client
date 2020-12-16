import "./style.min.css";

import db from "../../db/db";

import { SingleProductPage } from "../utils/pages";

const ProductPage = () => {
  return (
    <div className="product-cards">
      <SingleProductPage
        productId={db[0].productId}
        productImage={db[0].productImage}
        productName={db[0].productName}
        productRating={db[0].productRating}
        productDescription={db[0].productDescription}
        productPrice={db[0].productPrice}
        productQty={db[0].qty}
      />
    </div>
  );
};

export default ProductPage;

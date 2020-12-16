import "./style.min.css";

import db from "../../db/db";

import { ProductCard } from "../utils/cards";

const HomePage = () => {
  return (
    <div className="product-cards">
      {db.map((item) => (
        <ProductCard
          productId={item.productId}
          productImage={item.productImage}
          productName={item.productName}
          productRating={item.productRating}
          productDescription={item.productDescription}
          productPrice={item.productPrice}
        />
      ))}
    </div>
  );
};

export default HomePage;

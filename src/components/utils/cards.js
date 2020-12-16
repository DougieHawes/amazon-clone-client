import "./style.min.css";

import { Link } from "react-router-dom";

export const ProductCard = ({
  productId,
  productImage,
  productName,
  productRating,
  productDescription,
  productPrice,
}) => (
  <div className="product-card" key={productId}>
    <Link to={`/product/${productId}`}>
      <img className="medium" src={productImage} alt="product" />
    </Link>
    <div className="product-card-body">
      <h2 className="product-card-name">{productName}</h2>
      <div className="product-card-rating">{productRating}</div>
      <div className="product-card-description">{productDescription}</div>
    </div>
    <div className="product-card-price">£{productPrice}</div>
  </div>
);

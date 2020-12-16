import "./style.min.css";

import { CartButton } from "./buttons.js";

export const SingleProductPage = ({
  productId,
  productImage,
  productName,
  productRating,
  productDescription,
  productPrice,
  productQty,
}) => {
  const getStock = (qty) => {
    if (qty > 100) {
      return "in stock";
    } else if (qty > 50) {
      return "selling fast";
    } else {
      return `${qty} remaining in stock`;
    }
  };

  return (
    <div className="product-page" key={productId}>
      <div className="product-img-box">
        <img className="medium" src={productImage} alt="product" />
      </div>
      <div className="product-info-box">
        <div className="product-page-body">
          <div className="product-page-body-header">
            <h2 className="product-page-name">{productName}</h2>
            <div className="product-page-rating">{productRating}</div>
          </div>
          <div className="product-page-description">{productDescription}</div>
        </div>
        <div className="product-page-price">£{productPrice}</div>
      </div>
      <div className="product-purchase-box">
        <div className="product-purchase-container">
          <h3 className="product-purchase-stock">{getStock(productQty)}</h3>
          <CartButton />
        </div>
      </div>
    </div>
  );
};

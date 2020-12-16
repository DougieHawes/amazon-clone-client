import "./style.min.css";

import db from "./db/db";

function App() {
  return (
    <div class="grid-container">
      <header class="header">
        <div>
          <h1>Amazon-Clone</h1>
        </div>
        <div class="header-links">
          <a class="header-link" href="cart.html">
            Cart
          </a>
          <a class="header-link" href="signin.html">
            Sign-In
          </a>
        </div>
      </header>
      <main class="main">
        <div class="product-cards">
          {db.map((item) => (
            <div class="product-card" key={item.productId}>
              <img class="medium" src={item.productImage} alt="product" />
              <div class="product-card-body">
                <h2 class="product-card-name">{item.productName}</h2>
                <div class="product-card-rating">{item.productRating}</div>
                <div class="product-card-description">
                  {item.productDescription}
                </div>
              </div>
              <div class="product-card-price">£{item.productPrice}</div>
            </div>
          ))}
        </div>
      </main>
      <footer class="footer">
        <p>All rights reserved</p>
      </footer>
    </div>
  );
}

export default App;

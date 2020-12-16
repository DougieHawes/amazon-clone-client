import "./style.min.css";

import { Route, Link } from "react-router-dom";

import HomePage from "./components/routes/HomePage";
import ProductPage from "./components/routes/ProductPage";

function App() {
  return (
    <div className="grid-container">
      <header className="header">
        <Link to="/">
          <h1>Amazon-Clone</h1>
        </Link>
        <div className="header-links">
          <Link to="/cart">
            <div className="header-link">Cart</div>
          </Link>
          <Link to="/signin">
            <div className="header-link">Sign-In</div>
          </Link>
        </div>
      </header>
      <main className="main">
        <Route exact path="/" component={HomePage} />
        <Route exact path="/product" component={ProductPage} />
      </main>
      <footer className="footer">
        <p>All rights reserved</p>
      </footer>
    </div>
  );
}

export default App;

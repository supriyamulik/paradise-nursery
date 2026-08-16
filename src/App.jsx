import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AboutUs from "./AboutUs";
import CartItem from "./CartItem";
import ProductList from "./ProductList";
import "./App.css";

function Home() {
  return (
    <div className="landing-page">
      <div className="landing-overlay">
        <div className="landing-content">
          <h1>Paradise Nursery</h1>

          <p>
            Welcome to Paradise Nursery, your online destination for beautiful
            houseplants. We make it easy to discover plants that bring
            freshness, beauty, and nature into your home.
          </p>

          <Link to="/plants" className="get-started-btn">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/plants" element={<ProductList />} />

        <Route path="/cart" element={<CartItem />} />

        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
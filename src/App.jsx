import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AboutUs from "./AboutUs";
import "./App.css";

function Home() {
  return (
    <div className="landing-page">
      <div className="landing-overlay">
        <div className="landing-content">
          <h1>Paradise Nursery</h1>

          <p>
            Welcome to Paradise Nursery, your online destination for beautiful
            houseplants. We make it easy to discover plants that bring freshness,
            beauty, and nature into your home.
          </p>

          <Link to="/plants" className="get-started-btn">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}

function Plants() {
  return (
    <div>
      <h1>Plants</h1>
      <p>Our plants will be displayed here.</p>
    </div>
  );
}

function Cart() {
  return (
    <div>
      <h1>Shopping Cart</h1>
      <p>Your cart will be displayed here.</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plants" element={<Plants />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
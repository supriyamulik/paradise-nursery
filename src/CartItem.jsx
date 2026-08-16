import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeItem, updateQuantity } from "./CartSlice";
import "./App.css";

function CartItem() {
    const dispatch = useDispatch();

    const cartItems = useSelector((state) => state.cart.items);

    const totalItems = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    );

    const totalAmount = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    const handleIncrease = (item) => {
        dispatch(
            updateQuantity({
                id: item.id,
                quantity: item.quantity + 1,
            })
        );
    };

    const handleDecrease = (item) => {
        dispatch(
            updateQuantity({
                id: item.id,
                quantity: item.quantity - 1,
            })
        );
    };

    const handleDelete = (id) => {
        dispatch(removeItem(id));
    };

    const handleCheckout = () => {
        alert("Coming Soon!");
    };

    return (
        <div className="cart-page">
            <nav className="navbar">
                <div className="navbar-brand">
                    <Link to="/">Paradise Nursery</Link>
                </div>

                <div className="navbar-links">
                    <Link to="/">Home</Link>
                    <Link to="/plants">Plants</Link>

                    <Link to="/cart" className="cart-link">
                        🛒 Cart
                        <span className="cart-count">{totalItems}</span>
                    </Link>
                </div>
            </nav>

            <header className="cart-header">
                <h1>Shopping Cart</h1>

                <p>
                    You have {totalItems} plant
                    {totalItems !== 1 ? "s" : ""} in your cart.
                </p>
            </header>

            {cartItems.length === 0 ? (
                <div className="empty-cart">
                    <h2>Your cart is empty</h2>

                    <p>
                        Add some beautiful plants to your cart to get started.
                    </p>

                    <Link to="/plants" className="continue-shopping-btn">
                        Continue Shopping
                    </Link>
                </div>
            ) : (
                <main className="cart-container">
                    <section className="cart-items">
                        {cartItems.map((item) => {
                            const itemTotal = item.price * item.quantity;

                            return (
                                <div className="cart-item" key={item.id}>
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="cart-item-image"
                                    />

                                    <div className="cart-item-details">
                                        <h2>{item.name}</h2>

                                        <p className="cart-unit-price">
                                            Unit Price: ₹{item.price}
                                        </p>

                                        <p className="cart-item-total">
                                            Item Total: ₹{itemTotal}
                                        </p>

                                        <div className="quantity-controls">
                                            <button
                                                onClick={() => handleDecrease(item)}
                                                disabled={item.quantity === 1}
                                                className="quantity-btn"
                                            >
                                                −
                                            </button>

                                            <span className="quantity">{item.quantity}</span>

                                            <button
                                                onClick={() => handleIncrease(item)}
                                                className="quantity-btn"
                                            >
                                                +
                                            </button>
                                        </div>

                                        <button
                                            onClick={() => handleDelete(item.id)}
                                            className="delete-btn"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </section>

                    <aside className="cart-summary">
                        <h2>Cart Summary</h2>

                        <div className="summary-row">
                            <span>Total Plants</span>
                            <strong>{totalItems}</strong>
                        </div>

                        <div className="summary-row">
                            <span>Total Amount</span>
                            <strong>₹{totalAmount}</strong>
                        </div>

                        <button onClick={handleCheckout} className="checkout-btn">
                            Checkout
                        </button>

                        <Link to="/plants" className="continue-shopping-btn">
                            Continue Shopping
                        </Link>
                    </aside>
                </main>
            )}
        </div>
    );
}

export default CartItem;
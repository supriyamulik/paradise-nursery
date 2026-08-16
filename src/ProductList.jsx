import { useSelector, useDispatch } from "react-redux";
import { addItem } from "./CartSlice";
import { Link } from "react-router-dom";
import { useState } from "react";

const plants = [
    // Indoor Plants
    {
        id: 1,
        category: "Indoor Plants",
        name: "Snake Plant",
        price: 499,
        image: "/plants/snake-plant.jpg",
    },
    {
        id: 2,
        category: "Indoor Plants",
        name: "Peace Lily",
        price: 599,
        image: "/plants/peace-lily.jpg",
    },
    {
        id: 3,
        category: "Indoor Plants",
        name: "Money Plant",
        price: 299,
        image: "/plants/money-plant.jpg",
    },
    {
        id: 4,
        category: "Indoor Plants",
        name: "Areca Palm",
        price: 699,
        image: "/plants/areca-palm.jpg",
    },
    {
        id: 5,
        category: "Indoor Plants",
        name: "Spider Plant",
        price: 399,
        image: "/plants/spider-plant.jpg",
    },
    {
        id: 6,
        category: "Indoor Plants",
        name: "ZZ Plant",
        price: 649,
        image: "/plants/zz-plant.jpg",
    },

    // Flowering Plants
    {
        id: 7,
        category: "Flowering Plants",
        name: "Rose Plant",
        price: 349,
        image: "/plants/rose-plant.jpg",
    },
    {
        id: 8,
        category: "Flowering Plants",
        name: "Jasmine Plant",
        price: 399,
        image: "/plants/jasmine-plant.jpg",
    },
    {
        id: 9,
        category: "Flowering Plants",
        name: "Hibiscus Plant",
        price: 449,
        image: "/plants/hibiscus-plant.jpg",
    },
    {
        id: 10,
        category: "Flowering Plants",
        name: "Bougainvillea",
        price: 499,
        image: "/plants/bougainvillea.jpg",
    },
    {
        id: 11,
        category: "Flowering Plants",
        name: "Marigold Plant",
        price: 249,
        image: "/plants/marigold-plant.jpg",
    },
    {
        id: 12,
        category: "Flowering Plants",
        name: "Geranium Plant",
        price: 399,
        image: "/plants/geranium-plant.jpg",
    },

    // Succulents
    {
        id: 13,
        category: "Succulents",
        name: "Aloe Vera",
        price: 299,
        image: "/plants/aloe-vera.jpg",
    },
    {
        id: 14,
        category: "Succulents",
        name: "Jade Plant",
        price: 349,
        image: "/plants/jade-plant.jpg",
    },
    {
        id: 15,
        category: "Succulents",
        name: "Echeveria",
        price: 299,
        image: "/plants/echeveria.jpg",
    },
    {
        id: 16,
        category: "Succulents",
        name: "Haworthia",
        price: 279,
        image: "/plants/haworthia.jpg",
    },
    {
        id: 17,
        category: "Succulents",
        name: "String of Pearls",
        price: 449,
        image: "/plants/string-of-pearls.jpg",
    },
    {
        id: 18,
        category: "Succulents",
        name: "Panda Plant",
        price: 329,
        image: "/plants/panda-plant.jpg",
    },
];

function ProductList() {
    const dispatch = useDispatch();

    const cartItems = useSelector((state) => state.cart.items);

    const [addedItems, setAddedItems] = useState([]);

    const cartCount = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    );

    const handleAddToCart = (plant) => {
        dispatch(addItem(plant));

        setAddedItems((previousItems) => [
            ...previousItems,
            plant.id,
        ]);
    };

    const categories = [
        "Indoor Plants",
        "Flowering Plants",
        "Succulents",
    ];

    return (
        <div className="product-page">

            {/* Navbar */}
            <nav className="navbar">
                <div className="navbar-brand">
                    <Link to="/">Paradise Nursery</Link>
                </div>

                <div className="navbar-links">
                    <Link to="/">Home</Link>
                    <Link to="/plants">Plants</Link>

                    <Link to="/cart" className="cart-link">
                        🛒 Cart
                        <span className="cart-count">
                            {cartCount}
                        </span>
                    </Link>
                </div>
            </nav>

            {/* Page Header */}
            <header className="product-header">
                <h1>Our Plants</h1>

                <p>
                    Discover beautiful plants for your home and create
                    your own little paradise.
                </p>
            </header>

            {/* Categories */}
            <main className="product-container">
                {categories.map((category) => (
                    <section
                        className="plant-category"
                        key={category}
                    >
                        <h2>{category}</h2>

                        <div className="plant-grid">
                            {plants
                                .filter(
                                    (plant) => plant.category === category
                                )
                                .map((plant) => {
                                    const isAdded = addedItems.includes(
                                        plant.id
                                    );

                                    return (
                                        <div
                                            className="plant-card"
                                            key={plant.id}
                                        >
                                            <img
                                                src={plant.image}
                                                alt={plant.name}
                                                className="plant-image"
                                            />

                                            <div className="plant-info">
                                                <h3>{plant.name}</h3>

                                                <p className="plant-price">
                                                    ₹{plant.price}
                                                </p>

                                                <button
                                                    onClick={() =>
                                                        handleAddToCart(plant)
                                                    }
                                                    disabled={isAdded}
                                                    className="add-to-cart-btn"
                                                >
                                                    {isAdded
                                                        ? "Added to Cart"
                                                        : "Add to Cart"}
                                                </button>
                                            </div>
                                        </div>
                                    );
                                })}
                        </div>
                    </section>
                ))}
            </main>
        </div>
    );
}

export default ProductList;
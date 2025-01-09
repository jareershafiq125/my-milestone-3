"use client"
import React, { useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
}

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const HamburgerCart: React.FC = () => {
  const [products] = useState<Product[]>([
    { id: 1, name: "Product A", price: 20 },
    { id: 2, name: "Product B", price: 35 },
    { id: 3, name: "Product C", price: 50 },
  ]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const incrementQuantity = (id: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (id: number) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">Hamburger Cart</h1>

      {/* Product List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="p-4 border rounded shadow hover:shadow-lg transition-shadow"
          >
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-gray-600">${product.price.toFixed(2)}</p>
            <button
              onClick={() => addToCart(product)}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Hamburger Button */}
      <button
        onClick={() => setIsCartOpen((prev) => !prev)}
        className="fixed top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg z-10 hover:bg-blue-700"
      >
        {isCartOpen ? "Close Cart" : "Open Cart"}
      </button>

      {/* Hamburger Cart Section */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-100 shadow-lg transform ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 z-20`}
      >
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">Cart</h2>
          {cart.length > 0 ? (
            <div>
              <ul className="space-y-4">
                {cart.map((item) => (
                  <li
                    key={item.id}
                    className="flex justify-between items-center"
                  >
                    <div>
                      <p className="text-lg font-semibold">{item.name}</p>
                      <p className="text-gray-600">
                        ${item.price.toFixed(2)} x {item.quantity}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => decrementQuantity(item.id)}
                        className="bg-gray-300 px-3 py-1 rounded hover:bg-gray-400"
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => incrementQuantity(item.id)}
                        className="bg-gray-300 px-3 py-1 rounded hover:bg-gray-400"
                      >
                        +
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-4 text-lg font-semibold">
                Total: ${calculateTotal().toFixed(2)}
              </div>
            </div>
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default HamburgerCart;

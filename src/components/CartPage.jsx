// CartPage.js

import { useState, useEffect } from 'react';
import { useCartContext } from "../context/CartContext";
import { useNavigate } from 'react-router-dom'; 

const CartPage = () => {
    const { product, removeFromCart } = useCartContext();
    const [total, setTotal] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        calculateTotal();
    }, [product]);

    const calculateTotal = () => {
        const totalAmount = product.reduce((acc, item) => {
            // Remove currency symbol and convert to float
            const price = parseFloat(item.price.replace(/[^\d.-]/g, ''));
            return acc + price;
        }, 0);
        setTotal(totalAmount);
    };

    const handleCheckout = () => {
        navigate('/checkout'); 
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
            {product.length === 0 ? (
                <div className="text-center">
                    <p className="text-lg">Your cart is empty.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-4">
                    {product.map((item, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md p-4">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center space-x-4">
                                    <img src={item.img} alt={item.name} className="w-16 h-16 rounded-lg" />
                                    <h3 className="text-lg font-bold">{item.name}</h3>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <p className="text-gray-600 font-bold">{item.price}</p>
                                    <button onClick={() => removeFromCart(index)} className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">Remove</button>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="bg-white rounded-lg shadow-md p-4">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-bold">Total:</h3>
                            <p className="text-lg font-bold">₹{total.toFixed(2)}</p>
                        </div>
                        <button onClick={handleCheckout} className="w-full px-6 py-3 bg-orange-500 text-white font-bold rounded-full hover:bg-orange-600">Checkout</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartPage;

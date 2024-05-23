import React, { useState } from 'react';

const CheckoutPage = () => {
    const [orderPlaced, setOrderPlaced] = useState(false);

    const handlePlaceOrder = (e) => {
        e.preventDefault();
        setOrderPlaced(true);
        setTimeout(() => setOrderPlaced(false), 3000); // Hide popup after 3 seconds
    };

    return (
        <div className="container mx-auto my-10 p-5 bg-white rounded-lg shadow-md relative">
            <h2 className="text-3xl font-bold mb-5 text-center">Checkout</h2>
            
            <form className="space-y-6" onSubmit={handlePlaceOrder}>
                <div className="flex flex-col space-y-2">
                    <label htmlFor="name" className="font-medium">Name</label>
                    <input 
                        type="text" 
                        id="name" 
                        className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        placeholder="Enter your name"
                        required
                    />
                </div>
                
                <div className="flex flex-col space-y-2">
                    <label htmlFor="email" className="font-medium">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        placeholder="Enter your email"
                        required
                    />
                </div>
                
                <div className="flex flex-col space-y-2">
                    <label htmlFor="address" className="font-medium">Address</label>
                    <input 
                        type="text" 
                        id="address" 
                        className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        placeholder="Enter your address"
                        required
                    />
                </div>
                
                <div className="flex flex-col space-y-2">
                    <label htmlFor="city" className="font-medium">City</label>
                    <input 
                        type="text" 
                        id="city" 
                        className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        placeholder="Enter your city"
                        required
                    />
                </div>
                
                <div className="flex flex-col space-y-2">
                    <label htmlFor="zip" className="font-medium">Zip Code</label>
                    <input 
                        type="text" 
                        id="zip" 
                        className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        placeholder="Enter your zip code"
                        required
                    />
                </div>
                
                <div className="flex justify-center">
                    <button 
                        type="submit" 
                        className="w-full md:w-1/2 px-4 py-2 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600"
                    >
                        Place Order
                    </button>
                </div>
            </form>

            {/* Popup for Order Confirmation */}
            {orderPlaced && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                        <h3 className="text-2xl font-bold mb-4">Your order has been placed!</h3>
                        <button 
                            className="px-4 py-2 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600"
                            onClick={() => setOrderPlaced(false)} // Close the popup
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CheckoutPage;

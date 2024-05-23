import React from 'react';
import { useParams } from 'react-router-dom';
import data from './data';
import { useCartContext } from '../context/CartContext'; 

const ProductPage = () => {
    const { id } = useParams();
    const product = data.find(item => item.id === parseInt(id));
    const { addToCart } = useCartContext(); 

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                    <img src={product.img} alt={product.name} className="w-full rounded-lg shadow-lg mb-4 max-h-96" />
                </div>
                <div>
                    <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
                    <p className="text-lg text-gray-700 mb-4">Price: {product.price}</p>
                    <p className="text-gray-800 mb-6">{product.description}</p>
                    <button
                        className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition duration-300"
                        onClick={() => addToCart(product)} 
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;

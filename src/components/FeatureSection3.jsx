// import React from 'react'
import ProductCart from './ProductCard'
const data = [
    { id: 8,img: "https://barksandwags.in/cdn/shop/files/Front_85723aae-263b-4e88-917e-81860acd1978.png?v=1710505673&width=600" ,name: "Red Polo Dog Tshirt", price: "699/-" },
    { id: 9,img: "https://barksandwags.in/cdn/shop/files/1_jpg.png?v=1708590787&width=600" ,name: "Yellow Dog Sherwani", price: "999/-" },
    { id: 10,img: "https://barksandwags.in/cdn/shop/files/Front_jpg.png" ,name: "Beach Vibe pup wear", price: "699/-" },
    { id: 11,img: "https://barksandwags.in/cdn/shop/files/Front_05876868-f19c-4a76-a5c7-15e6d527decf.jpg?v=1706881328&width=600" ,name: "Pupxedo", price: "1199/-" }
];


const FeatureSection3 = () => {
  return (
    <div className='container pt-16'>
        <div className="lg:flex justify-between items-center">
            <div>
                <h3 className='font-medium text-2xl'>Fashion for Dogs</h3>
                <p className='text-gray-600 mt-2'>
                    Buy trending fashion at the best prices. 
                </p>
            </div> 
            <div className='space-x-4 mt-8 lg:mt-0'>
                <button className='feature_btn'></button>
                <button className='text-gray-600 hover:text-accent'></button>
                <button className='text-gray-600 hover:text-accent'></button>
            </div>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-2">
            <div>
                <img className="w-full h-full object-cover" 
                src="https://images.unsplash.com/photo-1583511655826-05700d52f4d9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGV0JTIwY2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D" 
                alt="banner"/>
            </div>

            {data.map(el => (
                <ProductCart
                    key={el.id}
                    id={el.id}
                    img={el.img}
                    name={el.name}
                    price={el.price}  
                />
            ))}

        </div>
    </div>
  )
}

export default FeatureSection3
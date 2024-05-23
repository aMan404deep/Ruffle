// import React from 'react'
import ProductCart from './ProductCard'

const data = [
    { id: 0,img: "https://www.all4pets.in/wp-content/uploads/2020/06/MR.-PUPPY-WITH-CHICKEN-AND-RICE.jpg" ,name: "MrPuppy Pet Food", price: "499/-" },
    { id: 1,img: "https://headsupfortails.com/cdn/shop/products/Adult-GrainZero-1-2kg-Front.jpg?v=1690200635" ,name: "Signature Grain Dog Food", price: "399/-" },
    { id: 2,img: "https://www.poochles.in/cdn/shop/files/srikanth_14_7cc3e292-c5b3-4547-b1c3-85f2481171e1.png?v=1700482103" ,name: "Fidele Starter Dog Food", price: "359/-" },
    { id: 3,img: "https://www.all4pets.in/wp-content/uploads/2022/01/10.-B-Wild-Grain-Free-Chunkies-Mini-Adult-Duck-with-Pumpkin-and-Zucchini-for-dogs-300x300.jpg" ,name: "Monge Dog Moist Food", price: "699/-" }
];


const FeatureSection = () => {
  return (
    <div className='container pt-16'>
        <div className="lg:flex justify-between items-center">
            <div>
                <h3 className='font-medium text-2xl'>Feed & Treats</h3>
                <p className='text-gray-600 mt-2'>
                    Buy Nutritious Feed and Treats at the best prices. 
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
                src="https://t3.ftcdn.net/jpg/04/19/74/94/360_F_419749404_pBWzoKqN7oIahk9vJ700v0znRX0BCuDs.jpg" 
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

export default FeatureSection
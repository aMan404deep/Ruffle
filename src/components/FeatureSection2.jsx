// import React from 'react'
import ProductCart from './ProductCard'
const data = [
    { id: 4,img: "https://www.jiomart.com/images/product/original/rvscwvfisb/jazzy-hood-natural-rubber-dog-toys-non-toxic-rubber-dumble-toy-for-dogs-ideal-dog-toy-for-all-breeds-and-sizes_pink-pack-of-2-product-images-orvscwvfisb-p598815450-0-202302260811.jpg?im=Resize=(1000,1000)" ,name: "Soft Jaw Dumbell", price: "299/-" },
    { id: 5,img: "https://www.healthfulpets.co.uk/media/catalog/product/cache/b19a5e76f56f3a95f22bbe29e34f76a5/p/i/pink_bone_white_background_edit.jpg" ,name: "Pink Bone Plushy", price: "269/-" },
    { id: 6,img: "https://www.nappets.com/wp-content/uploads/2023/03/TY-109.jpg" ,name: "Rope Toy Pair", price: "459/-" },
    { id: 7,img: "https://www.sodapupireland.ie/wp-content/uploads/2021/10/Copy-of-Copy-of-Copy-of-Add-a-subheading-39.png" ,name: "Rubber Soft Ball", price: "649/-" }
];


const FeatureSection = () => {
  return (
    <div className='container pt-16'>
        <div className="lg:flex justify-between items-center">
            <div>
                <h3 className='font-medium text-2xl'>Toys for Joys</h3>
                <p className='text-gray-600 mt-2'>
                    Buy unique toys at the best prices. 
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
                src="https://media.istockphoto.com/id/167164677/photo/crossbreed-4-years-old-sitting-and-holding-a-bone.jpg?s=612x612&w=0&k=20&c=Fb9GmDDhoXpGpniWnjJdS4yMS87vUGq8Vyvq4q6fGBs=" 
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
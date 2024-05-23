// import React from 'react'

// import { BsArrowRight } from "react-icons/bs"

const Hero = () => {
  return (
    <div className="container">
        <div className="grid xl:grid-cols-3 xl:grid-rows-2 gap-8">
            <div className="xl:col-span-2 xl:row-start-1 xl:row-end-[-1] relative">
                <img className="w-full h-full object-cover rounded-lg " 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHIHQMpFQDCPiXwo_hvA900lmyiVEDsQUiFQKXm1YzuQ&s" alt="hero image" />
              <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-4">
              <p className="text-2xl hidden sm:block">100% Certified</p>
              <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold">Best in the world Dog Treats</h2>
              <p className="text-gray-500 text-xl pt-4 sm:pt-8">Starting At</p>
              <div className="font-medium text-red-600 text-2xl sm:text-4xl pb-4 sm:pb-8">
                399/-
              </div>
              {/* <div className="bg-accentDark hover:bg-accent text-white rounded-full w-fit flex items-center 
              gap-4 px-4 py-2 text-[14px] sm:px-6 sm:py-3 cursor-pointer">
                Shop Now <BsArrowRight/>
              </div> */}
            </div>
            </div>
            <div className="relative">
              <img className="h-full w-full object-cover rounded-lg" 
              src="https://t4.ftcdn.net/jpg/06/85/33/75/360_F_685337523_7dB5bzoyQT0aBgw1P4GV6mG0uHXOoZvA.jpg" 
              alt="hero image 2"/>
              <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold">Fashion for your Best Buddy</h2>
              <p className="text-gray-500 text-xl pt-2 ">Starting At</p>
              <div className="font-medium text-red-600 text-2xl sm:text-4xl pb-3">
                599/-
              </div>
              {/* <div className="bg-accent hover:bg-accentDark text-white rounded-full w-fit flex items-center 
              gap-4 px-4 py-2 text-[14px] sm:px-6 sm:py-3 cursor-pointer">
                Shop Now <BsArrowRight/>
              </div> */}
            </div>
            </div>
            <div className="relative">
              <img className="h-full w-full object-cover rounded-lg" 
              src="https://t3.ftcdn.net/jpg/03/77/13/78/360_F_377137816_SKf2IHcZE4KlSoM7SndAJyIlkmW1iWH1.jpg" 
              alt="hero image 2"/>
              <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold">When Every Time is Play Time</h2>
              {/* <p className="text-2xl hidden sm:block">100% Certified</p> */}
              <p className="text-gray-500 text-xl pt-2 ">Starting At</p>
              <div className="font-medium text-red-600 text-2xl sm:text-4xl pb-3">
                299/-
              </div>
              {/* <div className="bg-accent hover:bg-accentDark text-white rounded-full w-fit flex items-center 
              gap-4 px-4 py-2 text-[14px] sm:px-6 sm:py-3 cursor-pointer">
                Shop Now <BsArrowRight/>
              </div> */}
            </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
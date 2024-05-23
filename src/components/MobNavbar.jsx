// import React from "react";
import PropTypes from 'prop-types';
// import { FaSearch } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
// import { IoIosMenu } from "react-icons/io";
import CartCount from "./CartCount";

const MobNavbar = ({setShowCart}) => {
  return (
    <div className='sticky top-0 bg-white z-10'>
        <div className="container p-8 lg:hidden">
            <div className="flex justify-between items-center">
                {/* <div className="flex itmes-center gap-6">
                    <IoIosMenu size={30}/>
                    <FaSearch size={24} />
                </div> */}
                <h1 className="text-4xl font-extrabold">Ruffle<span className='text-orange-600'>.</span></h1>
                <div className="flex gap-4 text-[30px] ">
                  <FaRegUser  />
                  <div className="relative cursor-pointer " 
                  onClick={() => setShowCart(true)}>
                    <MdOutlineShoppingCart/>
                    <CartCount size="w-[20px] h-[20px]" />
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

MobNavbar.propTypes = {
  setShowCart: PropTypes.func.isRequired
};

export default MobNavbar
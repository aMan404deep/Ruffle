// import React from 'react'
import PropTypes from "prop-types";
import { useCartContext } from "../context/CartContext";
const CartCount = ({number}) => {
  const { product } = useCartContext();
  return (
    <div className={`absolute w-[25px] h-[25px] bg-red-600 text-white text-[14px] ${number} -right-3 -top-1 
    rounded-full grid place-items-center`}>
        {product.length}
    </div>
  )
}

CartCount.propTypes = {
  number: PropTypes.number.isRequired
};

export default CartCount
import PropTypes from 'prop-types';
import { useCartContext } from '../context/CartContext'
import { RxCross1 } from 'react-icons/rx';
import CartProduct from './CartProduct'
import { Link } from 'react-router-dom'
const Cart = ({setShowCart}) => {
    const {product} = useCartContext();
    function filterByName(name) {
        const filter = product.filter(product => product.name !== name);
        console.log(filter);
      }
  return (
    <div className='bg-[#0000007d] w-full h-screen fixed left-0 top-0 z-20' onClick={() => setShowCart(false)}>
        <div className='max-w-[400px] w-full h-full bg-white absolute right-0  top-0 p-6 ' onClick={(e) =>e.stopPropagation()}>
            <RxCross1
            className='absolute right-0 top-0 m-6 text-[24px] cursor-pointer'
            onClick={() => setShowCart(false)}
            />
            <h3 className='pt-6 text-lg font-medium text-gray-600 uppercase'>Your Cart</h3>
            <div className='mt-6'>
                {product?.map((el) => (
                    <CartProduct
                        key={el.name}
                        img={el.img}
                        name={el.name}
                        price={el.price}

                        filterByName={filterByName}
                    />
                ))}
            </div>
                <Link to= "/cart">
                <button className='bg-accent text-white text-center w-full rounded-3xl py-2 my-2 hover:bg-accentDark'>
                View Cart
                </button>
                </Link>
        </div>
    </div>
  )
}

Cart.propTypes = {
    setShowCart: PropTypes.func.isRequired
};

export default Cart
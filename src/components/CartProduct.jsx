import PropTypes from 'prop-types'; 

const CartProduct = ({ img, name, price }) => {
    return (
        <div className='flex justify-between items-center'>
            <div className='flex items-center gap-4'>
                <img className='h-[100px]' src={img} alt={name}/>
                <div>
                    <h3 className='font-medium'>{name}</h3>
                    <p className='text-gray-600'>1 x {price}</p>
                </div>
            </div>
        </div>
    );
};

CartProduct.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    filterByName: PropTypes.function
};

export default CartProduct;

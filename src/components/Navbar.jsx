import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FaSearch } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import CartCount from "./CartCount";
import { Link,useNavigate } from "react-router-dom";
import data from './data'; // assuming data is exported from a file named data.js
// import { Link, useNavigate } from "react-router-dom"; 

const Navbar = ({ setShowCart }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState(data);
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
    setShowPopup(searchTerm.length > 0); 
  };

  useEffect(() => {
    setFilteredItems(
      data.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm]);

  return (
    <div className='sticky top-0 bg-white z-10'>
      <div className="container hidden lg:block">
        <div className="flex justify-between items-center p-8">
        <Link to="/">
            <h1 className="text-4xl font-extrabold  cursor-pointer">Ruffle<span className='text-orange-600'>.</span></h1>
          </Link>
          <div className="searchbar relative w-full max-w-[500px]">
            <input 
              type="text"  
              className="bg-[#f2f3f5] border-none outline-none px-6 py-3 rounded-[30px] w-full" 
              placeholder="Search..."
              value={searchTerm}
              onChange={handleChange} 
            />
            <FaSearch size={20} className="absolute top-0 right-0 mt-4 mr-5 text-gray-500" />
          </div>
          <div className="flex gap-4 ">
            <div className="icon__wrapper cursor-pointer" onClick={() => {
              navigate("/signin")
            }}>
              <FaRegUser  />
            </div>
            <div className="icon__wrapper relative cursor-pointer" onClick={() => setShowCart(true)}>
              <MdOutlineShoppingCart />
              <CartCount number={10}/>
            </div>
          </div>
        </div>
      </div>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
          <div className="bg-white rounded-lg w-11/12 md:w-2/3 lg:w-1/2 p-4 overflow-y-auto max-h-3/4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Search Results</h2>
              <button className="text-gray-500" onClick={() => setShowPopup(false)}>Close</button>
            </div>
            <div className="flex flex-col gap-4">
              {filteredItems.map(item => (
                <Link to={`/description/${item.id}`} key={item.id}> {/* Added: Wrap each product item with Link */}
                  <div className="flex items-center border rounded-lg p-4">
                    <img src={item.img} alt={item.name} className="w-20 h-20 object-cover mr-4"/>
                    <div>
                      <h2 className="text-lg font-medium">{item.name}</h2>
                      <p className="text-gray-600">{item.price}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

Navbar.propTypes = {
  setShowCart: PropTypes.func.isRequired,
};

export default Navbar;

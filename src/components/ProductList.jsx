import { useState } from 'react';
import Navbar from './Navbar';
import data from './data';

const ProductList = () => {
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (searchTerm) => {
    const filteredData = data.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filteredData);
  };

  return (
    <div>
      <Navbar handleSearch={handleSearch} />
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredData.map((product) => (
            <li key={product.id} className="bg-white rounded shadow p-4">
            <img src={product.img} alt={product.name} className="w-full h-auto rounded" />
            <div className="mt-2">{product.name}</div>
            <div className="text-gray-600">{product.price}</div>
            </li>
        ))}
    </ul>

    </div>
  );
};

export default ProductList;

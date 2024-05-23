import PropTypes from "prop-types";


const CategoryCard = ({ img, name, count }) => {
  return (
    <div className="border border-gray-200 hover:border-gray-300 hover:scale-105 transition-transform rounded-lg">
      <div className="flex justify-between items-center p-6">
        <div className="space-y-4">
            <h3 className="font-medium text-xl">{name}</h3>
            <p className="text-gray-500">{count}</p>
        </div>
        <img className="w-[100px]" src={img} alt={name} />
      </div>
    </div>
  );
};

CategoryCard.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    count: PropTypes.string.isRequired
  };

export default CategoryCard

import PropTypes from "prop-types";

const BlogCart = ({ img, title, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block space-y-4">
      <img 
        className="rounded-lg hover:scale-105 transition-transform w-full h-48 object-cover"
        src={img}
        alt={title}
      />
      <h3 className="font-bold text-xl">{title}</h3>
    </a>
  )
}

BlogCart.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default BlogCart;

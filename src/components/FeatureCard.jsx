import PropTypes from "prop-types";

const FeatureCard = ({title,icon}) => {
  return (
    <div className='flex items-center gap-4'>
        <div className='bg-gray-300 w-[50px] h-[50px] text-accentDark text-[24px] grid place-items-center rounded-full'>
            {icon}
        </div>
        <div>
            <h3 className='text-accent font-medium text-xl'>{title}</h3>
            <p className='text-gray-500 text-[14px]'></p>
        </div>
    </div>
  )
}

FeatureCard.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired
  };

export default FeatureCard
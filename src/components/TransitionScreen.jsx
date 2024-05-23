// TransitionScreen.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './TransitionScreen.css'
const TransitionScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 3000); 
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-orange-600">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 animate-pulse">Welcome to Ruffle</h1>
        <p className="text-lg text-gray-100 font-bold">Your one stop place for all your dog needs !!</p>
        <div aria-label="Orange and tan hamster running in a metal wheel" role="img" className="wheel-and-hamster">
	<div className="wheel"></div>
	<div className="hamster">
		<div className="hamster__body">
			<div className="hamster__head">
				<div className="hamster__ear"></div>
				<div className="hamster__eye"></div>
				<div className="hamster__nose"></div>
			</div>
			<div className="hamster__limb hamster__limb--fr"></div>
			<div className="hamster__limb hamster__limb--fl"></div>
			<div className="hamster__limb hamster__limb--br"></div>
			<div className="hamster__limb hamster__limb--bl"></div>
			<div className="hamster__tail"></div>
		</div>
	</div>
	<div className="spoke"></div>
</div>
      </div>
    </div>
  );
};

export default TransitionScreen;

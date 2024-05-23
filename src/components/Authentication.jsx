import { useState } from "react";
import Login from "./Login";
import Register from "./Register";

function Authentication() {
  const [inOrOut, setInOrOut] = useState(1);
  const [outlineDown, setOutlineDown] = useState(0);

  const LoginHandling = () => {
    setInOrOut(1);
    setOutlineDown(0);
  };

  const SignupHandling = () => {
    setInOrOut(0);
    setOutlineDown(87);
  };

  return (
    <div
      className="flex justify-center items-center h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('https://images.playground.com/1662f893e1e042459f2e31956935d502.jpeg')" }}
    >
      <div className="w-96 p-8 bg-white bg-opacity-0 backdrop-blur-md rounded-lg shadow-md">
        <div className="relative flex justify-between mb-8">
          <div
            className="absolute top-0 left-0 w-1/2 h-1 bg-orange-500 transition-transform"
            style={{ transform: `translateX(${outlineDown * 1.83}px)` }}
          ></div>
          <button
            type="button"
            className={`w-1/2 py-2 ${inOrOut ? "text-orange-500" : "text-gray-500"}`}
            onClick={LoginHandling}
          >
            <strong>Log in</strong>
          </button>
          <button
            type="button"
            className={`w-1/2 py-2 ${inOrOut ? "text-gray-500" : "text-orange-500"}`}
            onClick={SignupHandling}
          >
            <strong>Sign up</strong>
          </button>
        </div>
        <div>
          {inOrOut ? <Login form={50} /> : <Register form={50} />}
        </div>
      </div>
    </div>
  );
}

export default Authentication;

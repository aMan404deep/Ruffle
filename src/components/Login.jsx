import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Login({ form }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });

  const validate = () => {
    let valid = true;
    let errors = {};

    if (!email) {
      errors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
      valid = false;
    }

    if (!password) {
      errors.password = "Password is required";
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const sendHome = (e) => {
    e.preventDefault();
    if (validate()) {
      navigate("/");
    }
  };

  return (
    <form style={{ left: form + "px" }} className="space-y-4" onSubmit={sendHome}>
      <div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white bg-opacity-70 backdrop-blur-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
          placeholder="Email"
          required
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>
      <div>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white bg-opacity-70 backdrop-blur-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
          placeholder="Enter Password"
          required
        />
        {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
      </div>
      <div className="flex items-center space-x-2">
        <input type="checkbox" className="h-4 w-4" id="remember" />
        <label htmlFor="remember">
          <span>Remember Password</span>
        </label>
      </div>
      <button
        type="submit"
        className="w-full px-4 py-2 text-white bg-orange-500 rounded-lg hover:bg-orange-600 transition-colors duration-300"
      >
        <strong>Log in</strong>
      </button>
    </form>
  );
}

export default Login;

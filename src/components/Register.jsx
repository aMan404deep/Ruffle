import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register({ form }) {
  const navigate = useNavigate();
  const [userId, setUserId] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agree, setAgree] = useState(false);
  const [errors, setErrors] = useState({ userId: '', email: '', password: '', agree: '' });

  const validate = () => {
    let valid = true;
    let errors = {};

    if (!userId) {
      errors.userId = 'User Id is required';
      valid = false;
    }

    if (!email) {
      errors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
      valid = false;
    }

    if (!password) {
      errors.password = 'Password is required';
      valid = false;
    }

    if (!agree) {
      errors.agree = 'You must agree to the terms & conditions';
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const sendHome = (e) => {
    e.preventDefault();
    if (validate()) {
      navigate('/');
    }
  };

  return (
    <form style={{ left: form + 'px' }} className="space-y-4">
      <div>
        <input
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white bg-opacity-70 backdrop-blur-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
          placeholder="User Id"
          required
        />
        {errors.userId && <p className="text-red-500 text-sm">{errors.userId}</p>}
      </div>
      <div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white bg-opacity-70 backdrop-blur-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
          placeholder="Email Id"
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
        <input
          type="checkbox"
          checked={agree}
          onChange={() => setAgree(!agree)}
          className="h-4 w-4"
        />
        <span className="text-sm">I agree to the terms & conditions</span>
      </div>
      {errors.agree && <p className="text-red-500 text-sm">{errors.agree}</p>}
      <button
        type="submit"
        onClick={sendHome}
        className="w-full px-4 py-2 text-white bg-orange-500 rounded-lg hover:bg-orange-600 transition-colors duration-300"
      >
        <strong>Sign Up</strong>
      </button>
    </form>
  );
}

export default Register;

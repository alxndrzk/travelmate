// eslint-disable-next-line

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory
import { loginUser } from '../Utils/Api'; // Adjust the path as needed
import { jwtDecode } from 'jwt-decode'; // Import jwtDecode correctly
import '../Styles/index.css';

const images = require.context('../Assets', true, /\.png$/);

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Use useNavigate

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser({ email, password });
      console.log('User logged in successfully:', response);
      
      const token = response.token;
      localStorage.setItem('token', token);

      const decodedToken = jwtDecode(token);
      const user = {
        userId: decodedToken.userId,
        email: decodedToken.email,
        name: decodedToken.name, // Ensure the name is part of the token payload
      };
      
      localStorage.setItem('user', JSON.stringify(user));

      // Redirect to /home
      navigate('/beranda');
    } catch (error) {
      console.error('Login error:', error);
      setError('Failed to log in. Please check your credentials and try again.');
    }
  };

  const gambarLogin = images('./gambarLogin.png');

  return (
    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm">
        <img src={gambarLogin} alt="image" />
      </div>
      <div className="md:w-1/3 max-w-sm">
        <div className="text-center md:text-center">
          <label className="text-4xl font-bold font-poppins primary-color mr-1">Masuk</label>
        </div>
        <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300"></div>
        <form onSubmit={handleLogin}>
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
            type="password"
            placeholder="Kata Sandi"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
          <div className="text-center md:text-center">
            <button className="mt-2 bg-primary-color hover:bg-gray-500 px-5 py-3 text-white uppercase rounded text-xs tracking-wider font-bold font-poppins" type="submit">Masuk</button>
          </div>
        </form>
        <div className="mt-4 text-sm font-poppins text-center md:center" style={{ color: '#ACB1B7' }}>
          Belum punya akun? <a className="primary-color font-bold font-poppins hover:underline hover:underline-offset-4" href="/">Daftar sekarang</a>
        </div>
      </div>
    </section>
  );
};

export default Login;

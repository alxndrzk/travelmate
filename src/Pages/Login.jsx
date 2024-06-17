import React, { useState } from 'react';
import { loginUser } from '../Utils/Api'; // Adjust the path as needed
import '../Styles/index.css';

const images = require.context('../Assets', true, /\.png$/);

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser({ email, password });
      console.log('User logged in successfully:', response);
      // Save the token in local storage or state management
      localStorage.setItem('token', response.token);
      // Redirect to the dashboard or another page if needed
    } catch (error) {
      console.error('Login error:', error);
      // Display error message to the user if needed
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
        <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
        </div>
        <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded" type="email" placeholder="Email" />
        <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="password" placeholder="Kata Sandi" />
        <div className="mt-4 flex justify-between font-semibold text-sm">
          <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
          </label>
        </div>
        <div className="text-center md:text-center">
          <button className="mt-2 bg-primary-color hover:bg-gray-500 px-5 py-3 text-white uppercase rounded text-xs tracking-wider font-bold font-poppins" type="submit">Masuk</button>
        </div>
        <div className="mt-4 text-sm font-poppins text-center md:center"
        style={{color: '#ACB1B7'}}>
          Belum punya akun? <a className="primary-color font-bold font-poppins hover:underline hover:underline-offset-4" href="/">Daftar sekarang</a>
        </div>
      </div>
    </section>
  );
};

export default Login;

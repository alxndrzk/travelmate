// eslint-disable-next-line

import React, { useState } from 'react';
import { registerUser } from '../Utils/Api'; // Adjust the path as needed
import '../Styles/index.css';

const images = require.context('../Assets', true, /\.png$/);

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await registerUser({ name, email, password });
      console.log('User registered successfully:', response);
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  const gambarDaftarAkun = images('./gambarDaftarAkun.png');

  return (
    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm">
        <div className="text-center md:text-center">
          <label className="text-4xl font-bold font-poppins primary-color mr-1">Daftar Akun</label>
        </div>
        <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
        </div>
        <form onSubmit={handleRegister}>
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
            type="text"
            placeholder="Nama"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
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
          <div className="text-center md:text-center">
            <button className="mt-2 bg-primary-color hover:bg-gray-500 px-5 py-3 text-white uppercase rounded text-xs tracking-wider font-bold font-poppins" type="submit">Daftar</button>
          </div>
        </form>
        <div className="mt-4 text-sm font-poppins text-center md:center" style={{ color: '#ACB1B7' }}>
          Sudah punya akun? <a className="primary-color font-bold font-poppins hover:underline hover:underline-offset-4" href="/login">Masuk sekarang</a>
        </div>
      </div>
      <div className="md:w-1/3 max-w-sm">
        <img src={gambarDaftarAkun} alt="image" />
      </div>
    </section>
  );
};

export default Register;

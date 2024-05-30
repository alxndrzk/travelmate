import React from 'react'
import '../Styles/index.css';

const images = require.context('../Assets', true, /\.png$/);

const Login = () => {

  const email = images('./email.png');
  const password = images('./password.png');
  const person = images('./person.png');

  return (
    <div className='container'>
      <div className="header">
        <div className="text">Daftar Akun</div>
        <div className="underline"></div>
      </div>
      <div className="inputs-person">
        <div className="input-person">
          <img src={person} alt="person" />
          <input type="text" />
        </div>
      </div>
      <div className="inputs-email">
        <div className="input-email">
          <img src={email} alt="email" />
          <input type='email' />
        </div>
      </div>
      <div className="inputs-password">
        <div className="input password">
          <img src={password} alt="passwowrd" />
          <input type="password" />
        </div>
      </div>
      <div className="submit-container">
        <div className="submit">Daftar</div>
      </div>
    </div>
  )
}

export default Login
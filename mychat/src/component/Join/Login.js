import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

let user;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send user data to the server for login authentication
    axios.post('http://localhost:1200/login', { email, password })
      .then(result => {
        console.log(result);
        if (result.data === 'success') {
          navigate('/chat');
        }
        else
          alert(result.data);
      })
      .catch(err => {
        console.log(err);
      });
  };


  return (
    <div className="mx-5 my-20 p-5">
      <form className="p-10 bg-slate-200 flex flex-col" action="" onSubmit={handleSubmit}>
        <input
          className="m-2 p-2 rounded-md"
          type="text"
          name="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="m-2 p-2 rounded-md"
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="m-2 p-2 rounded-md bg-yellow-400" type="submit">
          Log in
        </button>
        <p className='m-2 p-2 text-center'>Don't have an account ? </p>
        <Link className='text-center m-2 p-2 rounded-md bg-yellow-400' to="/register">Register</Link>
      </form>
    </div>
  );
};

export { user };
export default Login;

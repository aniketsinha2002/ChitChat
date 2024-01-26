import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { httpAdapter } from 'stream-http';

let user;

// Create an instance of axios with the http adapter
const axiosInstance = axios.create({
  adapter: httpAdapter,
});

const sendUser = () => {
    user = document.getElementById("regInput").value;
    document.getElementById("regInput").value = "";
  }

const Signup = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
      const [password, setPassword] = useState();

   const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await axiosInstance.post('http://localhost:1200/register', { name, email, password });
      console.log(result.data);
    } catch (error) {
      console.error("Axios error:", error);
    }
  };

  return (
    <div className='mx-5  my-20 p-5'>
      <form className="p-10 bg-slate-200 flex flex-col" action="" onSubmit={handleSubmit}>
        <input className='m-2 p-2 rounded-md' type="text" name="name" placeholder="name" id="regInput" onChange={(e) => setName(e.target.value)} />
        <input className='m-2 p-2 rounded-md' type="text" name="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
        <input className='m-2 p-2 rounded-md' type="password" name="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
        <Link to="/chat" onClick={sendUser}><button className='m-2 p-2 rounded-md bg-yellow-400' type="submit" onClick={(e) => !name ? e.preventDefault() : sendUser}>Register Me</button></Link>
        <Link to="/login"><button className='m-2 p-2 rounded-md bg-yellow-400' type="submit">Login</button></Link>
      </form>      
    </div>
  );
};

export { user };
export default Signup;

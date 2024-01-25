import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
// import "../../App.css";
import { httpAdapter } from 'stream-http';

let user;

// Create an instance of axios with the http adapter
const axiosInstance = axios.create({
  adapter: httpAdapter,
});

const sendUser = (e) => {
    user = document.getElementById("regInput").value;
    document.getElementById("regInput").value = "";
    
  }

const Signup = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
      const [password, setPassword] = useState();
      const [showGoToChat, setShowGoToChat] = useState(false);

   const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await axiosInstance.post('http://localhost:1200/register', { name, email, password });
      console.log(result.data);
    } catch (error) {
      console.error("Axios error:", error);
    }
    setShowGoToChat(true);
  };

  return (
    <div className=''>
      <form className="flex flex-col" action="" onSubmit={handleSubmit}>
        <input className='m-2 p-2 rounded-md' type="text" name="name" placeholder="name" id="regInput" onChange={(e) => setName(e.target.value)} />
        <input className='m-2 p-2 rounded-md' type="text" name="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
        <input className='m-2 p-2 rounded-md' type="password" name="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
        <button className='m-2 p-2 rounded-md bg-yellow-400' type="submit" onClick={(e)=>!name ? e.preventDefault():sendUser}>Register</button>
        
        {showGoToChat && <Link to="/chat" onClick={(e)=>!name ? e.preventDefault():null}><button className='m-2 p-2 rounded-md bg-yellow-400 '>Join Chat</button></Link>}
        
    </form>
    </div>
  );
};

export { user };
export default Signup;

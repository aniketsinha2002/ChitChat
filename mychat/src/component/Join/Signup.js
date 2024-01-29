import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

let user;

const sendUser = () => {
    user = document.getElementById("regInput").value;
    document.getElementById("regInput").value = "";
};

const Signup = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        axios.post('http://localhost:1200/register', { name, email, password })
            .then(result => {
                console.log(result);
                navigate('/chat');
                !name ? e.preventDefault() : sendUser();
            })
            .catch(err => {
                console.log(err);
            });
    };

    return (
        <div className='mx-5  my-20 p-5'>
            <form className="p-10 bg-slate-200 flex flex-col" action="" onSubmit={handleSubmit}>
                <input className='m-2 p-2 rounded-md' type="text" name="name" placeholder="name" id="regInput" onChange={(e) => setName(e.target.value)} />
                <input className='m-2 p-2 rounded-md' type="text" name="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
                <input className='m-2 p-2 rounded-md' type="password" name="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
                <button className='m-2 p-2 rounded-md bg-yellow-400' type="submit">Register Me</button>
                <p className='m-2 p-2 text-center'>Already have an account ? </p>
                <Link className='text-center  m-2 p-2 rounded-md bg-yellow-400' to="/login" type="submit">Login</Link>
            </form>
        </div>
    );
};

export { user };
export default Signup;

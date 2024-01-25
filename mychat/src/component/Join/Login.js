// import React, { useState } from 'react';
// import { Link } from "react-router-dom";
// import axios from 'axios';
// import "../../App.css";
// import { httpAdapter } from 'stream-http';
// // import { useNavigate } from 'react-router-dom';

// // Create an instance of axios with the http adapter
// const axiosInstance = axios.create({
//   adapter: httpAdapter,
// });

// const Login = () => {
//     // const [name, setName] = useState();
//     const [email, setEmail] = useState();
//     const [password, setPassword] = useState();
//     const [showGoToChat, setShowGoToChat] = useState(false);
//     // const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const result = await axiosInstance.post('http://localhost:1200/login', {email, password });
//       console.log(result.data);
//     } catch (error) {
//       console.error("Axios error:", error);
//     }
//     setShowGoToChat(true);
//   };

//   return (
//      <div>
//       <form action="" onSubmit={handleSubmit}>
//         <input type="text" name="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
//         <input type="password" name="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
//         <button type="submit" onClick={sendUser}>Register</button>
        
//         {showGoToChat && <h1>Now go to chat</h1>}
//         <Link to="/chat" onClick={(e)=>!name ? e.preventDefault():null}><button>Go to Chat</button></Link>
        
//     </form>
//     </div>
//   )
// }

// export default Login
// import React, { useState } from 'react'
import "../../App.css";
// import { Link } from "react-router-dom";
import Signup from "./Signup";
const Join = () => {
  // const [name, setname] = useState();
  return (
    <div className="JoinPage bg-white">
      <div className="m-2 p-2 JoinContainer bg-slate-50 border-slate-300 rounded-md">
        <h1 className="text-zinc-950 text-center text-xl my-2">CHIT CHAT!</h1>
        {/* <input onChange={(e) => { setname(e.target.value) }} type="text" placeholder='name' id='joinInput' />
        <input type="text" placeholder="email" name="email" id="" />
        <input type="text" placeholder="password" name="password" id="" />
        <Link onClick={(e)=>!name ? e.preventDefault():null} to="/Chat"><button onClick={sendUser}>Login</button></Link> */}
        <Signup/>
      </div>
    </div>
  )
}

export default Join
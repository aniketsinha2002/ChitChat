import React, { useState } from 'react'
import "../../App.css";
import { Link } from "react-router-dom";

let user;

const Join = () => {

  const [name, setname] = useState();

  const sendUser = () => {
    user = document.getElementById("joinInput").value;
    document.getElementById("joinInput").value = "";
  }
  return (
    <div className="JoinPage">
      <div className="JoinContainer">
        <h1>My Chat</h1>
        <input onChange={(e) => {
          setname(e.target.value)
        }} type="text" placeholder='name' id='joinInput' />
        <Link onClick={(e)=>!name ? e.preventDefault():null} to="/Chat"><button onClick={sendUser}>Login</button></Link>
      </div>
    </div>
  )
}

export { user };
export default Join
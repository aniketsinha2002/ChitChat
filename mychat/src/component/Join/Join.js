//THIS IS THE HOME PAGE THE LANDING PAGE

import { Link } from "react-router-dom";

const Join = () => {
  return (
    <div className="JoinPage bg-white">
      <h1>HOME PAGE - LANDING PAGE</h1>
      <Link to="/register"><button type="button" className="bg-yellow-400 rounded lg p-5">Register Yourself</button></Link>
      
    </div>
  )
}

export default Join
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Join from "./component/Join/Join";
import Chat from "./component/Chat/Chat";
import Signup from "./component/Join/Signup";
import Login from "./component/Join/Login";
import Room from "./component/Room/Room";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Join />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/room/:roomId" element={<Room/>}/>
        </Routes>
      </Router>
    </div>
  );
}
export default App;
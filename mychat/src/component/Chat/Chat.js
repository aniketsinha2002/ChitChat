import React, { useEffect, useState } from 'react'
import { user } from '../Join/Join';
import socketIO from "socket.io-client";
import "../../App.css"
import Message from '../Message/Message';
import ReactScrollToBottom from 'react-scroll-to-bottom';

let socket;
const ENDPOINT = 'http://localhost:4500/';

const Chat = () => {

    const [id, setid] = useState("");
    const [messages, setMessages] = useState([]);

    const send = () => {
        const message = document.getElementById('chatInput').value;
        socket.emit('message', { message,id});
        document.getElementById('chatInput').value = "";
    }

    useEffect(() => {
      
      socket = socketIO(ENDPOINT, { transports: ['websocket'] })
      
      
      socket.on('connect', () => {
        console.log("connected");
        setid(socket.id);
      })
        
      //emit-> sending date to server side
      socket.emit('joined',{user})
      
        
      socket.on('welcome', (data) => {
          setMessages([...messages,data]);
          console.log(data.user, data.message);
      })
        
        socket.on('userJoined', (data) => {
          setMessages([...messages,data]);
          console.log(data.user, data.message);
       })
        
      socket.on('leave', (data) => {
          setMessages([...messages,data]);
          console.log(data.user, data.message);
        })
        
      return () => {
          socket.emit('disconnnect');
          socket.off();
      }
    }, [])


     useEffect(() => {
        socket.on('sendMessage', (data) => {
            setMessages([...messages, data]);
            console.log(data.user, data.message, data.id);
        })
        return () => {
            socket.off();
        }
    }, [messages])
    

  return (
      <div className="chatPage">
          <div className="chatContainer">
              <div className="header"></div>
              <ReactScrollToBottom className="chatBox">
                  {messages.map((item, i) => <Message user={item.id===id?'':item.user} message={item.message} classs={item.id===id?'right':'left'} />)}
              </ReactScrollToBottom>
              <div className="inputBox">
                  <input onKeyPress={(e)=>e.key==='Enter'? send():null} type="text" name="" id="chatInput" />
                  <button onClick={send} className="sendBtn">Send</button>
              </div>
          </div>
      </div>
  )
}

export default Chat
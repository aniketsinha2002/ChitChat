import React, { useEffect, useState } from 'react'
import { user } from '../Join/Signup';
import socketIO from "socket.io-client";
import "../../App.css"
import Message from '../Message/Message';
import ReactScrollToBottom from 'react-scroll-to-bottom';
import { useNavigate } from 'react-router-dom';

let socket;
const ENDPOINT = 'http://localhost:1200/';

const Chat = () => {

    const [id, setid] = useState("");
    const [messages, setMessages] = useState([]);
    const [imgs, setImgs] = useState([]);
    const [roomId, setRoomId] = useState();
    const navigate = useNavigate();
    
    const handleJoin = () => {
        navigate(`/room/${roomId}`)
    }

const send = () => {
    const messageInput = document.getElementById('chatInput');
    // const fileInput = document.getElementById('fileInput');

   
        // Handle image sending
        // const reader = new FileReader();
        // const file = fileInput.files[0];
        
        // reader.readAsDataURL(file);
        // reader.onloadend = () => {
        //     const imageData = reader.result;
        //     socket.emit('file', { imageData, id });
        //     fileInput.value = '';
        // };
   
  
        // Handle text sending
        const message = messageInput.value;
        socket.emit('message', { message, id });

        messageInput.value = '';
};



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


    // useEffect(() => {
    //      socket.on('file', ({imageData}) => {
    //      setImgs([...imgs, imageData]);
    //     });


    //     return () => {
    //         socket.off();
    //     }
    // }, [imgs])
    

  return (
      <div className="chatPage">
          <div className="chatContainer">
              <div className="header">
                  <div>
                      <input type="text" placeholder='enter room id' id='roomId' value={roomId} onChange={(e)=>setRoomId(e.target.value)}/>
                      <button onClick={handleJoin}>Join Video Call</button>
                  </div>
              </div>
              <ReactScrollToBottom className="chatBox">
                  {messages.map((item, i) => <Message user={item.id===id?'':item.user} message={item.message} classs={item.id===id?'right':'left'} imageData={item.imageData}/>)}
              </ReactScrollToBottom>
              <div className="inputBox">
                  <input onKeyPress={(e)=>e.key==='Enter'? send():null} type="text" name="" id="chatInput" />
                  <button onClick={send} className="sendBtn">Send</button>
                  <input type="file" accept='image/*' name="" id="fileInput" />
              </div>
          </div>
      </div>
  )
}

export default Chat
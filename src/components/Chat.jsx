import React, { useContext } from "react";
import Cam from "../img/cam.png";
import Add from "../img/add.png";
import More from "../img/more.png";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";


const Chat = () => {
  const {data} = useContext(ChatContext);
  console.log("data.qclick:"+ data.qclick)
  for (var i in data){
    console.log(data[i])
  }

  return (
    <div className="chat">
      <div className="chatInfo">
        <div className="chatbar">
          <img className="chatinfoimg" src={data.user?.photoURL} alt="" />
          <span>{data.user?.displayName}</span>
        </div>

        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      
      <Messages />
      <Input/> 
    
    </div>
  );
};

export default Chat;

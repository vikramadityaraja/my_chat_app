import React, {useContext} from "react";
import Navbar from "./Navbar"
import Search from "./Search"
import Chats from "./Chats"
import { ChatContext } from "../context/ChatContext";

const Sidebar = () => {
  const {data} = useContext(ChatContext);
  console.log("qclick:"+ data.qclick)
  return (
    <div className="sidebar">
     {/* <div className={`${data.qclick? "flexone": "click"}`}> */}
        <Navbar />
        <Search/>
        <Chats/>
      </div>
    /*</div>*/
  );
};

export default Sidebar;

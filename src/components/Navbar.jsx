import React, { useContext } from 'react'
import {signOut} from "firebase/auth"
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'


const Navbar = () => {
  const currentUser = useContext(AuthContext);
  

  return (
    <div className='navbar'>
      
        {/* <span className="logo">The_Gang_Chat</span> */}
      
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        {/* {data.qclick && (<span>{currentUser.displayName}</span>)} */}
        <button onClick={()=>signOut(auth)}>logout</button>
      </div>
    </div>
  )
}
export default Navbar

import React, { useContext, useState } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  setDoc,
  doc,
  updateDoc,
  serverTimestamp,
  getDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import { BsSearch } from 'react-icons/bs';
import {AiFillCloseCircle} from 'react-icons/ai'

const Search = () => {
  
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  
  
  const [err, setErr] = useState(false);

  console.log("search err",err);
  console.log("search user",user);
  
  const  currentUser  = useContext(AuthContext);
 
  const statuschange = () =>
  {
    setUsername("");
    setUser(null)
  }
  const handleSearch = async () => {
    
    console.log("step 1");
    const q = query(
      collection(db, "users"),
      where("displayName", "==", username)
    );

    try {
      console.log("step 2 try");
      const querySnapshot = await getDocs(q);
      console.log("querysnapshot:", querySnapshot);
      console.log("step 2 1 try");
      querySnapshot.forEach((doc) => {
        console.log("before doc");
        console.log("doc data:", doc); 
        setUser(doc.data());
      });
    } catch (err) {
      setUsername('');
      console.log("error");
      setErr(true);
    }
  };

  const handleKey = () => {handleSearch()};

  const handleSelect = async () => {
    //check whether the group(chats in firestore) exists, if not create
    const combinedId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;
    try {
      const res = await getDoc(doc(db, "chats", combinedId));

      if (!res.exists()) {
        //create a chat in chats collection
        await setDoc(doc(db, "chats", combinedId), { messages: [] });

        //create user chats
        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
    } catch (err) {}

  
  setUsername("")
  };
  return (
    <div className="search">
      <div className="searchForm">
        <input
          type="text"
          placeholder="Find an user"
          
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        {user?<AiFillCloseCircle onClick={statuschange} className='imgone'/>:<BsSearch className="imgone" onClick={handleKey} />}
      </div>
      {err && <span>User not found!</span>}
      {user && username?(
        <div className="userChat" onClick={handleSelect}>
          
          <img src={user?.photoURL} alt="sidebarpic" />
          <div className="userChatInfo">
            <span>{user?.displayName}</span>
          </div>
        </div>
      ):""}
    </div>
  );
};

export default Search;

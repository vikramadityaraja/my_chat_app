import {
  createContext,
  useContext,
  useReducer,
} from "react";

import { AuthContext } from "./AuthContext";

export const ChatContext = createContext();

export const ChatContextProvider = ({ children }) => {
  const currentUser = useContext(AuthContext);
  const INITIAL_STATE = {
    chatId: "null",
    user: {},
    qclick: "",
  };

  const chatReducer = (state, action) => {
    switch (action.type) {
      case "CHANGE_USER":
        return {
          user: action.payload.u,
          qclick: action.payload.clicked,
          chatId:
            currentUser.uid > action.payload.u.uid
              ? currentUser.uid + action.payload.u.uid
              : action.payload.u.uid + currentUser.uid,
        };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE);

  return (
    <ChatContext.Provider value={{ data:state, dispatch }}>
      {children}
    </ChatContext.Provider>
  );
};

export default ChatContextProvider;

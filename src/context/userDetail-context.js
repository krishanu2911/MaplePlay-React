import { createContext, useContext, useReducer, useState } from "react";
import { userDetailReducer } from "../reducer/userDetailReducer";

const UserDetailContext = createContext();
const UserDetailContextProvider = ({ children }) => {
  const [ modalDisplay , setModalDisplay ] = useState(false);
  const [playListModalData ,setPlayListModalData ] = useState({})
  const [userDetailState, userDetailDispatch] = useReducer(userDetailReducer, {
    playlist: [],
    likedlist:[],
    watchlaterlist:[],
    historylist:[]
  });
  return (
    <UserDetailContext.Provider value={{ userDetailState, userDetailDispatch, modalDisplay, setModalDisplay , playListModalData ,setPlayListModalData }}>
      {children}
    </UserDetailContext.Provider>
  );
};
const useUserDetail = () => useContext(UserDetailContext);
export { UserDetailContextProvider, useUserDetail };

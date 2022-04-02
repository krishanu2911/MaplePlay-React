import { createContext, useContext, useReducer, useState } from "react";
import { userDetailReducer } from "../reducer/userDetailReducer";

const UserDetailContext = createContext();
const UserDetailContextProvider = ({ children }) => {
  const [ modalDisplay , setModalDisplay ] = useState(false);
  const [userDetailState, userDetailDispatch] = useReducer(userDetailReducer, {
    // setPlayListModal:
    playlist: [],
  });
  return (
    <UserDetailContext.Provider value={{ userDetailState, userDetailDispatch, modalDisplay, setModalDisplay }}>
      {children}
    </UserDetailContext.Provider>
  );
};
const useUserDetail = () => useContext(UserDetailContext);
export { UserDetailContextProvider, useUserDetail };

import React,{useReducer,useContext, useState } from "react";
import { useStateValue } from '../StateProvider/StateProvider'
const UserContext=React.createContext();
//  const initialstate = {
//   username: "",
//   inCart:false,
// };


// export const reducer = (state, action) => {
//   switch (action.type) {
//     case "SET_USER":
//       return {
//         username: action.username1
//       };
//     case "SET_INCART":
//       return {
//         inCart:action.inCart
//       }
//     default:
//       return state;
//   }
// };

export function UnameProvider({children}){
  const[state,dispatch]=useStateValue();
  const[userName,setUserName]=useState()
 function getItem(id){
  return state.basket.find(item => item.id===id)?true:false;
}
function getCount(id){
  return state.basket.reduce((count,item) => item.id===id?count+1:count,0)
}
function setUsername(username){
  setUserName(username)
}

  return (
    <UserContext.Provider value={{getItem,setUsername,userName,getCount}}>
      {children}
    </UserContext.Provider>
  )
}
export const useUserStateValue = () => useContext(UserContext);
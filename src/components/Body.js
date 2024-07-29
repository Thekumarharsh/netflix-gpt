import {createBrowserRouter} from "react-router-dom";
import Browse from './Browse'
import Login from './Login'
import {RouterProvider} from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { auth } from '../utils/firebase';
const Body = () => {
  const dispatch=useDispatch();
    const appRouter= createBrowserRouter([
        {
            path: "/",
            element: <Login />,
           // key: 'login',
        },
        {
            path: "/browse",
            element: <Browse />,
            // key: 'browse',
        },
    ]);

    useEffect(()=>{
      onAuthStateChanged(auth,(user)=>{
        if(user){
          const{uid,email,displayName}=user;
          dispatch(addUser({uid: uid,email: email,displayName: displayName}));
        }
        else {
          dispatch(removeUser());
        }
      });
    },[]);

  return (
    <div>
        <RouterProvider router={appRouter}/>
        
    </div>
  )
}

export default Body
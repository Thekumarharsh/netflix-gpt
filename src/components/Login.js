import React from 'react'
import Header from './Header'
import { useState } from 'react';
const Login = () => {
    const [isSignInForm, setisSignInForm] = useState(true);
    const toggleSignInForm=() => {
        setisSignInForm(!isSignInForm);
    }
  return (
    <div>
     <Header />
       <div className="absolute">
        <img  
        src="https://assets.nflxext.com/ffe/siteui/vlv3/21a8ba09-4a61-44f8-8e2e-70e949c00c6f/6678e2ea-85e8-4db2-b440-c36547313109/IN-en-20240722-POP_SIGNUP_TWO_WEEKS-perspective_WEB_3457a8b1-284d-4bb5-979e-2a2e9bb342b3_large.jpg"
        alt='logo'
        />
    </div>
     <form className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full md:w-3/12 p-10 bg-black bg-opacity-80 text-white rounded-lg">
     <h1 className='font-bold text-3xl py-2 mx-2'>{isSignInForm?"Sign In":"Sign Up"}</h1>
        {!isSignInForm &&      <input type="Text̥" placeholder="User Name" className='rounded-lg p-3 m-2 my-1 w-full bg-neutral-950'/>}
        <input type="text" placeholder="Email" className='rounded-lg p-3 m-2 w-full bg-neutral-950'/>
        <input type="password" placeholder="Password" className='rounded-lg p-3 m-2 my-1 w-full bg-neutral-950'/>
        <button className='p-2 m-2 my-4 bg-red-600 w-full rounded-lg'>{isSignInForm?"Sign In":"Sign Up"}</button>
        <p className=' py-0 mx-3 cursor-pointer' onClick={toggleSignInForm} >
        {isSignInForm?"New to Netflix? Sign Up Now":"Already Signed Up? Sign In Now"}
            
            </p>
     </form>
    </div>
  );
};

export default Login
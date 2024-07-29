import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase.js';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store)=>store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  return (
    <div className='flex justify-between items-center absolute top-0 left-0 px-6 py-4 w-full bg-gradient-to-b from-black z-10'>
      <img 
        alt="Netflix Logo" 
        className="h-18 w-60 mx-10" 
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" 
      />
    { user && (  <div className='flex items-center space-x-4'>
        <img 
          className='w-10 h-10 rounded-lg' 
          alt="user icon" 
          src="https://occ-0-3646-3647.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABe3AS8xWNNmm8HlokLrmgIPqxgDohbraAUmm3dQrgmRf7U13AMm-4aXXkLFYD4lyDg6bNvqt_2Lc8cdtEM9Y2n3TDYTrXqQ.png?r=b39" 
        />
        <button onClick={handleSignOut} className='font-bold text-white'>
          Sign Out
        </button>
      </div>)}
    </div>
  );
};

export default Header;

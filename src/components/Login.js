import React, { useRef, useState } from 'react';
import Header from './Header';
import { auth } from '../utils/firebase';  // Ensure you have correctly initialized Firebase in this file
import checkValidateData from '../utils/validate.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword ,updateProfile} from 'firebase/auth'; // Import signInWithEmailAndPassword if needed
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const [isSignInForm, setisSignInForm] = useState(true);
    const [ErrorMessage, setErrorMessage] = useState(null);
    const navigate=useNavigate();
    const toggleSignInForm = () => {
        setisSignInForm(!isSignInForm);
    }

    const handleButtonClick = async (e) => {
        e.preventDefault();
        // Validate the form data
        const message = checkValidateData(email.current.value, password.current.value);
        setErrorMessage(message);
        if (message) return;

        if (!isSignInForm) {
            // Sign up
            try {
                const userCredential = await createUserWithEmailAndPassword(auth, email.current.value, password.current.value);
                const user = userCredential.user;
                updateProfile(user, {
                  displayName: "name.current.value", photoURL: "https://example.com/jane-q-user/profile.jpg"
                }).then(() => {
                  // Profile updated!
                  // ...
                  navigate("/browse");
                }).catch((error) => {
                  // An error occurred
                  // ...
                  setErrorMessage(error.message);
                });
                console.log('User signed up:', user);
                
            } catch (error) {
                setErrorMessage(error.message);
                console.error('Sign-up error:', error);
            }
            //sign in
        } 
        ̥else {
            // Sign in
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log('User signed in:', user);
                    navigate("/browse");
                })
                .catch((error) => {
                    setErrorMessage(error.message);
                    console.error('Sign-in error:', error);
                });
        }
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
            <form className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full md:w-3/12 p-10 bg-black bg-opacity-80 text-white rounded-lg z-10">
                <h1 className='font-bold text-3xl py-2 mx-2'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && <input type="text" placeholder="User Name" className='rounded-lg p-3 m-2 my-1 w-full bg-neutral-950' ref={name} />}
                <input
                    ref={email} type="text" placeholder="Email" className='rounded-lg p-3 m-2 w-full bg-neutral-950' />
                <input
                    ref={password} type="password" placeholder="Password" className='rounded-lg p-3 m-2 my-1 w-full bg-neutral-950' />
                <p className='font-bold py-4 mx-3 text-red-600'>{ErrorMessage}</p>
                <button className='p-2 m-2 my-4 bg-red-600 w-full rounded-lg' onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className='py-0 mx-3 cursor-pointer' onClick={toggleSignInForm}>
                    {isSignInForm ? "New to Netflix? Sign Up Now" : "Already Signed Up? Sign In Now"}
                </p>
            </form>
        </div>
    );
};

export default Login;

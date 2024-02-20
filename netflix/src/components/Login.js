import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkvalidData } from "../utils/Validate";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/Firebase";

const Login = () => {
  const [isSignin, setIsSignin] = useState(true);
  const [errormessage, setErrormessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  function handleButtonClick() {
    console.log(email.current.value);
    console.log(password.current.value);
    let message = checkvalidData(email.current.value, password.current.value);
    console.log(message);
    setErrormessage(message);
    if (message) return;
    if (!isSignin) {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrormessage(errorCode + "-" + errorMessage);
        }); //
    } else {
    }
  }
  const toggleSignupForm = () => {
    setIsSignin(!isSignin);
  };
  return (
    <div>
      <Header></Header>
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo-url"
        ></img>
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignin ? "sign in" : "sign up"}
        </h1>
        {!isSignin && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address or Phone Number"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <p className="text-red-500 ">{errormessage}</p>
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignin ? "sign in" : "sign up"}
        </button>
        <p className="py-4 underline" onClick={toggleSignupForm}>
          {isSignin
            ? "New to Netflix ? Sign up now."
            : "already Registered Sign in now."}
        </p>
      </form>
    </div>
  );
};

export default Login;

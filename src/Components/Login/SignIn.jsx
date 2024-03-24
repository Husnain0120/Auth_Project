import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {app} from '../../FireBace'
import { getAuth,signInWithEmailAndPassword,signInWithPopup,GoogleAuthProvider } from 'firebase/auth'
import './Sign1.css'
function SignIn() {
  const [email,setEmail]=useState("")
  const [password, setPassword]=useState('')
  const [showPassword,setShowPassword]=useState(false)
  const [lodder,setLodder]=useState(false)
const Navigate= useNavigate()

  const handleSubmitLogin=(e)=>{
    e.preventDefault();
    setLodder(true);
      const Auth = getAuth(app)
      signInWithEmailAndPassword(Auth,email,password)
      .then(res=>{
        console.log(res.user);
        Navigate('/home')
      }).catch(err=>{
        console.log(err);
      }).finally(() => {
        setLoading(false); // Set loading to false when signup process completes
    });
  }
  // with google
  const handlewithGoogle=(e)=>{
    e.preventDefault()
    setLodder(true)
    const Auth =getAuth(app)
    const Provider = new GoogleAuthProvider()
    signInWithPopup(Auth,Provider)
    .then(()=>{
      Navigate('/home')
    }).catch(err=>{
      console.log(err);
    }).finally(()=>[
      setLodder(false)
    ])
  }

  const handlepasswordtoggle=()=>{
    setShowPassword(prve=>!prve)
  }
  return (
    <>
     {lodder && ( // Render loader if loading is true
                <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
                 
                    <div class="loader">
  <svg height="0" width="0" viewBox="0 0 64 64" class="absolute">
    <defs class="s-xJBuHA073rTt" xmlns="http://www.w3.org/2000/svg">
      <linearGradient class="s-xJBuHA073rTt" gradientUnits="userSpaceOnUse" y2="2" x2="0" y1="62" x1="0" id="b">
        <stop class="s-xJBuHA073rTt" stop-color="#973BED"></stop>
        <stop class="s-xJBuHA073rTt" stop-color="#007CFF" offset="1"></stop>
      </linearGradient>
      <linearGradient class="s-xJBuHA073rTt" gradientUnits="userSpaceOnUse" y2="0" x2="0" y1="64" x1="0" id="c">
        <stop class="s-xJBuHA073rTt" stop-color="#FFC800"></stop>
        <stop class="s-xJBuHA073rTt" stop-color="#F0F" offset="1"></stop>
        <animateTransform repeatCount="indefinite" keySplines=".42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1" keyTimes="0; 0.125; 0.25; 0.375; 0.5; 0.625; 0.75; 0.875; 1" dur="8s" values="0 32 32;-270 32 32;-270 32 32;-540 32 32;-540 32 32;-810 32 32;-810 32 32;-1080 32 32;-1080 32 32" type="rotate" attributeName="gradientTransform"></animateTransform>
      </linearGradient>
      <linearGradient class="s-xJBuHA073rTt" gradientUnits="userSpaceOnUse" y2="2" x2="0" y1="62" x1="0" id="d">
        <stop class="s-xJBuHA073rTt" stop-color="#00E0ED"></stop>
        <stop class="s-xJBuHA073rTt" stop-color="#00DA72" offset="1"></stop>
      </linearGradient>
    </defs>
  </svg>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64" height="64" width="64" class="inline-block">
    <path stroke-linejoin="round" stroke-linecap="round" stroke-width="8" stroke="url(#b)" d="M 54.722656,3.9726563 A 2.0002,2.0002 0 0 0 54.941406,4 h 5.007813 C 58.955121,17.046124 49.099667,27.677057 36.121094,29.580078 a 2.0002,2.0002 0 0 0 -1.708985,1.978516 V 60 H 29.587891 V 31.558594 A 2.0002,2.0002 0 0 0 27.878906,29.580078 C 14.900333,27.677057 5.0448787,17.046124 4.0507812,4 H 9.28125 c 1.231666,11.63657 10.984383,20.554048 22.6875,20.734375 a 2.0002,2.0002 0 0 0 0.02344,0 c 11.806958,0.04283 21.70649,-9.003371 22.730469,-20.7617187 z" class="dash" id="y" pathLength="360"></path>
  </svg>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none"  viewBox="0 0 64 64" height="64" width="64" class="inline-block">
    <path stroke-linejoin="round" stroke-linecap="round" stroke-width="10" stroke="url(#c)" d="M 32 32
        m 0 -27
        a 27 27 0 1 1 0 54
        a 27 27 0 1 1 0 -54" class="spin" id="o" pathLength="360"></path>
  </svg>
  <div class="w-2"></div>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64" height="64" width="64" class="inline-block">
    <path stroke-linejoin="round" stroke-linecap="round" stroke-width="8" stroke="url(#d)" d="M 4,4 h 4.6230469 v 25.919922 c -0.00276,11.916203 9.8364941,21.550422 21.7500001,21.296875 11.616666,-0.240651 21.014356,-9.63894 21.253906,-21.25586 a 2.0002,2.0002 0 0 0 0,-0.04102 V 4 H 56.25 v 25.919922 c 0,14.33873 -11.581192,25.919922 -25.919922,25.919922 a 2.0002,2.0002 0 0 0 -0.0293,0 C 15.812309,56.052941 3.998433,44.409961 4,29.919922 Z" class="dash" id="u" pathLength="360"></path>
  </svg>
</div>

                  
  </div>
            )}
    {/*
      This example requires updating your template:

      ```
      <html class="h-full bg-white">
      <body class="h-full">
      ```
    */}
    <div className="flex  min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src='https://cdn-icons-png.freepik.com/256/7786/7786991.png?uid=R98459826&ga=GA1.2.1114926933.1708955695&'
          alt="Your Company"
        />
        <h2 className="mt-10 text-center  text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Welcome back 
        </h2>
        <p className=" text-sm text-center  font-bold leading-9 tracking-tight text-gray-900">
          If you have no account <span><Link to="/" className=" font-mono text-blue-700 hover:underline">Signup</Link></span> 
        </p>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmitLogin} >
          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
                autoComplete="email"
                required
                className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
             <button onClick={handlepasswordtoggle} type='button'>
              {!showPassword?"Show":"Hide"}
             </button>
            </div>
            <div className="mt-2">
              <input
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              type={showPassword?"text":"password"}
                autoComplete="current-password"
                required
                className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full bg-teal-700 justify-center  rounded-3xl my-2 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Log in
            </button>
          </div>
        </form>

       {/* google with login */}
       <div class="google-login-button" onClick={handlewithGoogle}>
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" x="0px" y="0px" class="google-icon" viewBox="0 0 48 48" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
            <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
            <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
            <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
          </svg>
          <span>Log in with Google</span>
        </div>
      </div>
    </div>
  </>
  )
}

export default SignIn

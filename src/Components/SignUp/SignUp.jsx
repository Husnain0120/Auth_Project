import React, { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { app } from '../../FireBace';
import { Link, useNavigate } from 'react-router-dom';

function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false); // State to track password visibility
    const [loading, setLoading] = useState(false); // State to track loading status
    const Navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();
        setLoading(true); // Set loading to true when signup process starts
        const Auth = getAuth(app);
        createUserWithEmailAndPassword(Auth, email, password)
            .then(res => {
                console.log(res);
                Navigate('/home');
            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => {
                setLoading(false); // Set loading to false when signup process completes
            });
    };

    // Function to toggle password visibility
    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };

    return (
        <>
            {loading && ( // Render loader if loading is true
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
            <div className="flex  min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-10 w-auto"
                        src='https://cdn-icons-png.freepik.com/256/7786/7786991.png?uid=R98459826&ga=GA1.2.1114926933.1708955695&'
                        alt="Your Company"
                    />
                    <h2 className="mt-10 text-center  text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Welcome ...
                    </h2>
                    <p className=" text-center text-sm  font-bold">
                        If you have already account <span><Link to="/login" className=' text-blue-800 font-bold hover:underline' >Log in</Link></span> 
                    </p>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={handleSignup}>
                        <div>
                            <label className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    type='email'
                                    placeholder='abc@gamil.com'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
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
                                {/* Button to toggle password visibility */}
                                <button
                                    type="button"
                                    onClick={togglePasswordVisibility}
                                    className="focus:outline-none text-sm font-semibold text-gray-600"
                                >
                                    {showPassword ? 'Hide' : 'Show'}
                                </button>
                            </div>
                            <div className="mt-2">
                                <input
                                    value={password}
                                    placeholder='Password ....'
                                    autoComplete="current-password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    type={showPassword ? 'text' : 'password'} // Dynamically change input type
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
                                Sign up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default SignUp;

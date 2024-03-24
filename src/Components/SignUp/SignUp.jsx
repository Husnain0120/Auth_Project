import React, { useState } from 'react'

function SignUp() {
    const [email,setEmail]= useState('')
    const [password,setPassword]= useState(null)
  return (
    <>
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
          Welcome ...
        </h2>
        <p className=" text-center ">
          If you have already account <span><a href="#" className=' text-blue-800 font-bold hover:underline' >Log in</a></span> 
        </p>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" >
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
          
            </div>
            <div className="mt-2">
              <input
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
              Sign up
            </button>
          </div>
        </form>

       

      </div>
    </div>
  </>
  )
}

export default SignUp

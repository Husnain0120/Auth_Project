import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, Route, createBrowserRouter,createRoutesFromElements} from   'react-router-dom'
import './index.css'
import SignUp from './Components/SignUp/SignUp.jsx'
import SignIn from './Components/Login/SignIn.jsx'
import App from './App'
const router = createBrowserRouter(
  createRoutesFromElements(
   <Route>
   <Route path='/' element={<SignUp/>}/>
   <Route path='/login' element={<SignIn/>}/>
   <Route path='/home' element={<App/>} />
   </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

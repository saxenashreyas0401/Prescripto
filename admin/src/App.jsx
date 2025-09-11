import React, { useContext } from 'react'
import Login from './pages/Login'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { AdminContext } from './context/AdminContext';
const App = () => {
  const {aToken} = useContext(AdminContext)
  console.log(aToken)
  return aToken ? (
    <div>
      <ToastContainer/>
    </div>
  )
  : (
    <>
      <Login/>
      <ToastContainer/>
    </>
  )
}

export default App
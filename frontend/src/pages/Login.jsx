import React, { useState } from 'react'

const Login = () => {
  const [state, setState] = useState('Sign Up')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const onSubmitHandler = async(event) => {
    event.preventDefault()
  }

  let check_state = state === 'Sign Up' ? true : false
  return (
    <form className='min-h-[80vh] flex items-center'>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
        <p className='text-2xl font-semibold'>{check_state ? 'Create Account' : 'Login'}</p>
        <p>Please {check_state ? 'sign up':'login'} to book an appointment</p>
          {
            check_state &&
            <div className='w-full'> 
            <p>Full Name</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' value={name} onChange={(e)=>{setName(e.target.name)}} type="text" placeholder='Enter your full name' required />
           </div>
          }
        <div className='w-full'>
          <p>Email</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' value={email} onChange={(e)=>{setName(e.target.name)}} type="email" placeholder='Enter your email' required />
        </div>
        <div className='w-full'>
          <p>Password</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' value={password} onChange={(e)=>{setName(e.target.name)}} type="password" placeholder='Enter your password' required />
        </div>
        <button className='bg-primary text-white w-full py-2 rounded-md text-base' onClick={onSubmitHandler}>{check_state ? 'Create Account' : 'Login'}</button>
        {
          check_state ? <p>Already have an account? <span onClick={()=>setState('Login')} className='text-primary underline cursor-pointer'>Login here</span></p> :
          <p>Dont have an account? <span onClick={()=>setState('Sign Up')} className='text-primary underline cursor-pointer'>Sign up here</span></p>
        }
      </div>
    </form>
  )
}

export default Login
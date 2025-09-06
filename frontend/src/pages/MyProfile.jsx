import React, { useState } from 'react'
import { assets } from '../assets/assets'

const MyProfile = () => {

  const [userData, setUserData] = useState({
    name: 'John Doe',
    image: assets.profile_pic,
    email: 'richardjameswap@gmail.com',
    phone: '+91 9876543210',
    address: {
      line1: '123, Main Street',
      line2: 'Circle, church-road, london',
    },
    gender: 'Male', 
    dob: '1990-01-01',
    bloodGroup: 'O+',
    allergies: 'None',
  })
  const [editMode, setEditMode] = useState(false)
  return (
    <div className='max-w-lg flex flex-col gap-2 text-sm'>
      <img className='w-36 rounded' src={userData.image} alt="" />
      {editMode ? (
        <input
          className='bg-gray-100 text-3xl font-medium max-w-60 mt-4'
          type="text"
          value={userData.name}
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      ) : (
        <p className='font-medium text-3xl text-neutral-800 mt-4'>{userData.name}</p>
      )}
      <hr className='bg-zinc-400 h-[1px] border-none' />
      <div>
        <p className='text-neutral-500 underline mt-3'>CONTACT INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
          <p className='font-medium'>Email id:</p>
          <p className='text-blue-500'>{userData.email}</p>
          <p className='font-medium'>Phone:</p>
          {editMode ? (
            <input className='bg-gray-100 max-w-52'
              type="text"
              value={userData.phone}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, phone: e.target.value }))
              }
            />
          ) : (
            <p className='text-blue-400'>{userData.phone}</p>
          )}
          <p className='font-medium'>Address:</p>
          {
            editMode ? 
            <p>
            <input className='bg-gray-100' type="text" onChange={(e)=>setUserData((prev)=>({...prev, address:{...prev.address, line1:e.target.value }}))} value={userData.address.line1} />
            <br />
            <input className='bg-gray-100' type="text" onChange={(e)=>setUserData((prev)=>({...prev, address:{...prev.address, line2:e.target.value }}))} value={userData.address.line2} />
            </p>
            : (<p className='text-gray-500'>
              {userData.address.line1}, <br />
              {userData.address.line2}
            </p>)
          }
        </div>
      </div>
      <div>
        <p className='text-neutral-500 underline mt-3'>BASIC INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
          <p className='font-medium'>Gender:</p>
          {
            editMode?
            <select className='max-w-20 bg-gray-100' onChange={(e)=>setUserData((prev)=>({...prev, gender:e.target.value}))} value={userData.gender}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
            </select>
            :<p className='text-gray-400'>{userData.gender}</p>
          }
          <p className='font-medium'>Date of Birth:</p>
          {
            editMode?
            <input className='max-w-28 bg-gray-100' type="date" onChange={(e)=>setUserData((prev)=>({...prev, dob:e.target.value}))} value={userData.dob} /> : 
            <p className='text-gray-400'>{userData.dob}</p> 
          }
          <p className='font-medium'>Blood Group:</p>
          {
            editMode?
            <select className='max-w-20 bg-gray-100' onChange={(e)=>setUserData((prev)=>({...prev, bloodGroup:e.target.value}))} value={userData.bloodGroup}>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>
            : <p className='text-gray-400'>{userData.bloodGroup}</p>
          }
          <p className='font-medium'>Allergies:</p>
          {editMode ? (
            <input
              type="text"
              className='bg-gray-100'
              value={userData.allergies}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, allergies: e.target.value }))
              }
            />
          ) : (
            <p className='text-gray-400'>{userData.allergies}</p>
          )}
        </div>
      </div>
      <div className='mt-10'>
        {
          editMode ? 
          <button className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all' onClick={()=>setEditMode(false)}>Save Information</button> :
          <button className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all' onClick={()=>setEditMode(true)}>Edit</button>
        }
      </div>
    </div>
  );
}

export default MyProfile
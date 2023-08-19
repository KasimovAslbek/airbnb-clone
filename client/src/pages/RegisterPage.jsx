import React from 'react'
import {Link} from 'react-router-dom'

export default function RegisterPage() {
  return (
<div className='mt-4 grow flex items-center justify-around'>
    <div className='mb-64'>
        <h2 className='text-4xl text-center mb-4'>Register</h2>
        <form className='max-w-md mx-auto '>
            <input type="text" placeholder='username' name="" id="" />
            <input type="email" placeholder='your@email.com' name="" id="" />
            <input type="password" name="" id="" placeholder='password' />
            <button className='primary'>Register</button>
            <div className='text-center py-2 text-gray-500'>Already a member ? <Link to={"/login"} className='underline text-blue-700'>Login</Link></div>
        </form> 
    </div>

</div>
  )
}

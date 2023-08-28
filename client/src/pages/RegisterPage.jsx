import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";


export default function RegisterPage() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    async function registerUser(ev){
        ev.preventDefault();
        try {
            await axios.post('/register', {
            name,
            email,
            password,
            });
            alert("Registration successful. Now you can log in")
        } catch (e) {
            alert("Registration failed. Please try again later")
        }
        

    }

  return (
<div className='mt-4 grow flex items-center justify-around'>
    <div className='mb-64'>
        <h2 className='text-4xl text-center mb-4'>Register</h2>
        <form className='max-w-md mx-auto ' onSubmit={registerUser}>
            <input type="text" placeholder='user name' name="" id="userName" 
                value={name} onChange={ev => setName(ev.target.value)}/>
            <input type="email" placeholder='your@email.com' name="" id="userEmail"            
                value={email} onChange={ev =>setEmail(ev.target.value)}/>
            <input type="password" name=""  placeholder='password' id="userPassword"             
                value={password} onChange={ev =>setPassword(ev.target.value)}/>
            <button className='primary' >Register</button>
            <div className='text-center py-2 text-gray-500'>Already a member ? <Link to={"/login"} className='underline text-blue-700'>Login</Link></div>
        </form> 
    </div>

</div>
  )
}

// {name: "John Dou", email: "DU334@mail.ru", password: "987654321"}
// email
// : 
// "DU334@mail.ru"
// name
// : 
// "John Dou"
// password
// : 
// "987654321"
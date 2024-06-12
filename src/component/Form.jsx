import React, { useState } from 'react'

function Form() {
  const[form,setForm]=useState({
    username:"",
    email:"",
    password:"",
    confirm_pass:""
  })
  const handleInput =(event)=>{
    event.preventDefault();
    const name= event.target.name;
    const value=event.target.value;

    setForm((prev)=>{
      return{...prev,[name]: value}
    })
  }
  return (
    <div className='main-A'>
    <div className='main-img'>
      <img src='./mainimg.PNG' width={1260} height={800}/>
      <div className='img-content'>
        <h5>Welcome to Vacation Rental</h5>
        <h1 className='h1'>Rent an</h1>
        <h1 className='h1'>appartment for</h1>
        <h1 className='h1'>your vacation</h1>
      </div>
    </div>

    <div className='form-body'>
      <div className='container'>
      <h2 className='form-name'>Register</h2>
      </div>
      <div className='main-form'>
        <form>

          <div className='form-in'>
          <input type='text'
           name='username'
           placeholder="username"
           id='username'
            autoComplete='off' 
            className='form-box'
            value={form.username}
            onChange={handleInput}/>
          </div>

          <div className='form-in'>
          <input type='text'
           name='email'
           placeholder="email"
           id='email'
            autoComplete='off' 
            className='form-box'
            value={form.email}
            onChange={handleInput}/>
          </div>

          <div className='form-in'>
          <input type='password'
           name='password'
           placeholder="password"
           id='password'
            autoComplete='off' 
            className='form-box'
            value={form.password}
            onChange={handleInput}/>
          </div>

          <div className='form-in'>
          <input type='password'
           name='confirm_pass'
           placeholder="confirm_pass"
           id='confirm_pass'
            autoComplete='off' 
            className='form-box'
            value={form.confirm_pass}
            onChange={handleInput}/>
          </div>

        <div>
          <button className='form-btn'>Create Account</button>
        </div>
        <div className='p'>
          <p>my user name is {form.username} email is {form.email} password is {form.password} confirm password is {form.confirm_pass}</p>
        </div>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Form

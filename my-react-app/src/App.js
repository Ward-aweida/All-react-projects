import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import "https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js";

function App() {
   let [FirstName, setFirstName] = useState(null);
  const [LastName, setLastName] = useState(null);
  const [Email, setEmail] = useState(null);
  const [Password, setPassword] = useState(null);
  const [PasswordConfirmation, setPasswordConfirmation] = useState(null);

 
  
  
  return (
     
      <form  >
      <div class="col-auto">
      <label >First Name
        <input    class="form-control"type="text"  onChange ={val =>{
          setFirstName(val.target.value);
          //FirstName=(val.target.value);

          console.log("firstName: ",FirstName);
          }} required/> 
      </label>
      </div>
       <div class="col-auto">
      <label  >Last Name 
        <input  class="form-control" type="text"  onChange ={ val =>setLastName(val.target.value)} required/>
      </label>
      </div>
      <div class="col-auto"> 
      <label >Email
        <input   class="form-control" type="email"  onChange ={val =>setEmail(val.target.value)} required/>
      </label>
      </div>
      <div class="col-auto">
      <label >Password
        <input   class="form-control"  id ="passwod" type="password"  onChange ={val => setPassword(val.target.value)}required />
        <span id='message'></span>
      </label>
      </div>
      <div class="col-auto" >
       <label >Password confirmation
        <input   class="form-control" id ="passwod"type="password"   onChange ={val => setPasswordConfirmation(val.target.value) }  required />
        <span id='message'></span>
      </label>

      </div>
      

<h3>FirstName:{FirstName}</h3>
<h3>LastName:{LastName}</h3>
<h3>Email:{Email}</h3>
<h3>Password:{Password}</h3>
<h3>PasswordConfirmation:{PasswordConfirmation}</h3>

 <input  type="submit" />
 </form>
 
  );
 
 
}


export default App;

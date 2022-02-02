import React, { useState } from "react";
import { Router ,useNavigate } from '@reach/router';

    
const Survey = (props) => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  
 const sendSurvey = (e) => {
    e.preventDefault();
    useNavigate(-1);
  }  

    
  return (
    <form onSubmit={ sendSurvey }>
      <label>Your Name:</label>
      <input type="text" onChange={ (e) => setName(e.target.value) } value={ name } />
      <label>Your Comment:</label>
      <textarea onChange={ (e) => setComment(e.target.value) } value={ comment }></textarea>
      <input type="submit" value="Submit Survey" />
    </form>
  );
}

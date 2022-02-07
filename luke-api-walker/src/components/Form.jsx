import React, { useState } from "react";


const Form = ({ handleClick }) => {
  const [choice, setChoice] = useState("");
  const [id, setId] = useState(0);

  const handleSelect = (e) => {
    setChoice(e.target.value);
  };

  const handleNumber = (e) => {
    setId(e.target.value);
  };

  return (
    <div>
      <form onSubmit={(e) => {e.preventDefault(); handleClick(choice, id); }}>
        <label for="standard-select">Search for: </label>
        <br/>
        <div class="select">
          <select name="select" id="standard-select" onChange={handleSelect} required>
          <option value=""></option>
            <option value="planets">Planets</option>
            <option value="people">People</option>
          </select>
        </div>

      <br/>
        <label>ID: </label>
        <input  name="id"  type="number" value={id}onChange={handleNumber} required  />
        <input  type="submit" onClick={() => { console.log("------ on click: ", choice, id);}}
        />
      </form>
    </div>
  );
};

export default Form;
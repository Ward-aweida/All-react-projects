import { useEffect, useState } from "react";



const DataAdd = (props) => {
  const [data, setData] = useState([]);


  useEffect(() => {
    fetch(`https://api.github.com/users`)
      .then((respon) => { return respon.json();})
      .then(setData)
      .catch(e=>console.log(e));
  },[]);


    return data? (
      <div>
        <ul>
          {data.map((user) => (
            <li key={user.id}> {user.login} </li>
          ))}
        </ul>
        <button onClick={()=> setData([])}> RemoveData</button>
      </div>

    )
    
          
          : (

            <div>
        
              <h1>There are no users founded</h1>
        
            </div>
        
          );
  }

export default DataAdd;
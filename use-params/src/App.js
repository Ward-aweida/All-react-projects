import React from "react";
import { useParams } from "react-router";
import {
  BrowserRouter,
  Link,
  Routes,
  Route
} from "react-router-dom";

const Location = (props) => {
  const { city } = useParams();
    
  return (
    <h1>Welcome to { city }!</h1>
  );
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <p>
        <Link to="/location/seattle">Seattle</Link>
         | 
        <Link to="/location/chicago">Chicago</Link>
         | 
        <Link to="/location/burbank">Burbank</Link>
      </p>
      <Routes>
        <Route path="/location/:city" element={<Location />}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

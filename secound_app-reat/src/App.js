import logo from './logo.svg';
import './App.css';

function App() {
 const myelement = (
  <ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Cherries</li>
  </ul>
);
const myelement1= <input type="text" />;

const x = 9;
let text = "Goodbye";
if (x < 10) {
  text = "Hello";
}

const myelement3 = <h1>{text}</h1>;
  
  return (
   <div>
     {myelement}
     {myelement1}
     {myelement3}
    </div>
  );
}

export default App;

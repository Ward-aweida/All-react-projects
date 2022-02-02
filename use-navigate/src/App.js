import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import Survey from './Survey';
function App() {
  return (
    <div className="App">
    <Router>


    <Survey />
    </Router>
    </div>
  );
}

export default App;

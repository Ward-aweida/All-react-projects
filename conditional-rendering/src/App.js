import logo from './logo.svg';
import './App.css';
import  UseForm from './UseForm'
import  MovieForm from './MovieForm'
import useReducer from './useReducer'
function App() {
  return (
    <div className="App">
    <UseForm />
    <br/> <br/><br/><br/>
    <MovieForm />
    <br/> <br/><br/><br/>
    <useReducer ></useReducer>      
    </div>
  );
}

export default App;

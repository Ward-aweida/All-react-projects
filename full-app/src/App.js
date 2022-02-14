
import './App.css';
import Cheeked from './Cheecked';
import Message from './Messge';
import Referance from './Referance';
import TreesContext from './TreesContext';
// import DataAd from './setDataAd';
import UseReducer from './UseReducer';
import UsingEffect from './UsingEffect';


function App() {

  return (
    <div className="App">
      < UsingEffect />
      <UseReducer />
      <Cheeked />
      <Message />
      {/* <DataAd /> */}
      <Referance />
      <TreesContext />

    </div>
  );

}

export default App;

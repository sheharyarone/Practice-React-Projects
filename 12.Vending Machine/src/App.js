import Chips from './Chips';
import VendingMachine from './VendingMachine';
import Sardines from './Sardines'
import Soda from './Soda';

import './App.css';
import { Route,Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/f" element={ <Chips/> }/>
      </Routes>
    </div>
  );
}

export default App;

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
      <Route path="/" element={ <VendingMachine/> }/>
      <Route path="/chips" element={ <Chips/> }/>
      <Route path="/soda" element={ <Soda/> }/>
      <Route path="/Sardines" element={ <Sardines/> }/>
      </Routes>

    </div>
  );
}

export default App;

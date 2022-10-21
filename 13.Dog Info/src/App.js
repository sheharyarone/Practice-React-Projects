import './App.css';
import Navbar from './Navbar';
import DogList from './DogList';
import DogInfo from './DogInfo';
import Home from './Home';
import { Route, Switch } from 'react-router-dom';
function App() {

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </div>
  );
}

export default App;

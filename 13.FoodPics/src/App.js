import Food from './Food';
import './App.css';
import { Route,Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/:name'  render={(routeProps)=><Food {...routeProps}/>} />
      </Switch>
    </div>
  );
}

export default App;

import Food from './Food';
import FoodSearch from './FoodSearch';
import './App.css';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <Switch>
        <Route exact path='/' render={() => <FoodSearch />} />
        <Route exact path='/food/:name' render={(routeProps) => <Food {...routeProps} />} />

        <Route render={() => <h1>
          404 PAGE NOT FOUND
        </h1>} />
      </Switch>
    </div>
  );
}

export default App;

import Food from './Food';
import './App.css';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' render={() => <h1>
          HOME PAGE
        </h1>} />
        <Route exact path='/:name' render={(routeProps) => <Food {...routeProps} />} />

        <Route render={() => <h1>
          404 PAGE NOT FOUND
        </h1>} />
      </Switch>
    </div>
  );
}

export default App;

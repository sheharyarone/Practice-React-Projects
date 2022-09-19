import './App.css';
import Lottery from './Lottery';
function App() {
  return (
    <div className="App">
      <Lottery />
      <Lottery  maxNum={4} title='Mini Daily' numBalls={4}/>


    </div>
  );
}

export default App;

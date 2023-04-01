import './App.css';
import './components/button/index'
import Button from './components/button/index';

function App() {
  return (
    <div className="App">
        <Button text={"contained"} type={"contained"} size={"normal"}/>
        <Button text={"outlined"} type={"outlined"} size={"big"}/>
        <Button text={"none"} type={"none"} size={"small"}/>
    </div>
  );
}

export default App;

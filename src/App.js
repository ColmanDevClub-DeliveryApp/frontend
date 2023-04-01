import './App.css';
import './components/button/index'
import Button from './components/button/index';

function App() {
  return (
    <div className="App">
        <Button text={"contained"} type={"contained"} size={"small"} fullWidth/>
        <Button text={"contained"} type={"contained"} size={"small"}/>
        <Button text={"contained"} type={"contained"} size={"normal"}/>
        <Button text={"contained"} type={"contained"} size={"big"}/>
        <Button text={"outlined"} type={"outlined"} size={"small"}/>
        <Button text={"outlined"} type={"outlined"} size={"normal"}/>
        <Button text={"outlined"} type={"outlined"} size={"big"}/>
        <Button text={"none"} type={"none"} size={"small"}/>
        <Button text={"none"} type={"none"} size={"normal"}/>
        <Button text={"none"} type={"none"} size={"big"}/>
    </div>
  );
}

export default App;

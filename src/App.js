import './App.css';
// import PlayGround from './PlayGround';
import {Route, Routes} from "react-router-dom"
import Button from "./components/button"


function App() {

  return (
    <div className="App">
      {/* <PlayGround /> */}
      <Routes>
        <Route path='/' element={<Button text="root"/>}/>
        <Route path='/test' element={<Button text="test" />}/>
      </Routes>

    </div>
  );
}

export default App;

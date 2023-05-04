import './App.css';
import { Link, Route, Routes } from "react-router-dom";
import RestaurantPage from './pages/RestaurantPage';
import HomePage from './pages/HomePage'
import PlayGround from './PlayGround';
import Navbar from './components/Navbar';

function App() {

  return (
    <div className="App">
        <Navbar />

        <div style={{'flex': '1'}}>
          <Routes>
            <Route path='/' element={HomePage} />
            <Route path='/restaurants/:restaurant_name' element={RestaurantPage} />
          </Routes>
        </div>
    </div>
  );
}

export default App;

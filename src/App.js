import './App.css';
import './components/button/index'
import ResturauntInformation from './components/resturauntInformation/index';

function App() {

  const openingTimes = [
    { day: ' :א-ה ', hours: ' 9:00-23:00' },
    { day: ' :שישי', hours: ' 9:00-14:00' },
    { day: ' :שבת', hours: ' 20:00-23:00' },
  ];

  return (
    <div className="App">
      <ResturauntInformation address="האשל 12 ראשון לציון" phone="054-123-1231" openingTimes={openingTimes}/>
    </div>
  );
}

export default App;

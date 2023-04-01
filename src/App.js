import './App.css';
import './components/button/index'
import PaymentInfo from './components/payment/index'

function App() {
  return (
    <div className="App">
      <PaymentInfo orderPrice='342' deliveryPrice='12' totalPrice='354'/>
    </div>
  );
}

export default App;

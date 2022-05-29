// import logo from './logo.svg';
import './App.css';
// import payment from './components/Payment';
import Payment from "./components/Payment";
import payment from './data/payment.json';

function App() {
  return (
    <div className="App">

      <Payment payment={payment}></Payment>
    </div>
  );
}

export default App;

import './App.css';
import Filters from './components/Filters';
import Navbar from './components/Navbar';
import Offers from './components/Offers';
import Restaurants from './components/Restaurants';
import userInfo from "./data/userInfo.json";
import offers from "./data/offers.json";
import restraurant from "./data/restraurant.json";

function App() {
  return (
    <div>
      <Navbar {...userInfo.location} />
      <Offers offers={offers}/>
      <section className="near-you"></section>
      <Filters />
      <Restaurants restraurant={restraurant}/>
    </div>
  );
}

export default App;

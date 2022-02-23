import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Coin from "./components/coinItem/Coin";

function App() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then((res) => {
      setCoins(res.data);
    })
    .catch((error) => console.log(error))
  }, [])


  return (
    <div>
      <div className="header">
        <h1 className="brand"><i className="fas fa-moon" />CoinMoon</h1>
        <form>
          <input className="inputField" type="text" placeholder="Search a Coin" onChange="" />
        </form>
      </div>
      <Coin />
    </div>
  )
}

export default App;

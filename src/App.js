import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Coin from "./components/coinItem/Coin";

function App() {
  return (
    <div>
      <div className="header">
        <h1 className="brand"><i className="fas fa-moon" />CoinMoon</h1>
        <form>
          <input className="inputField" type="text" placeholder="Search a Coin" onChange="" />
        </form>
      </div>
    </div>
  )
}

export default App;

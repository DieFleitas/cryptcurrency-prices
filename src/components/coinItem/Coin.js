import React from "react";
import "./Coin.css";

const Coin = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
}) => {
  return ( 
    <div className="cryptoCoin">
      <img src={image} alt={name} className="CoinLogo" />
      <div className="coinNameWrap">
        <h1 className="coinName">{name}</h1>
        <p className="coinSymbol">{symbol}</p>
      </div>
      <p className="coinPrice">{price}</p>
      <p className="coinMarketcap">
        Market Cap: {marketcap}
      </p>
      <p className="coinVolume">
        Volume (24H): $ {volume}
      </p>
    </div>
   );
};

export default Coin;

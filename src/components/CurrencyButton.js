import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const currencies = [
  { name: "Pound", symbol: "£" },
  { name: "Dollar", symbol: "$" },
  { name: "Euro", symbol: "€" },
  { name: "Ruppee", symbol: "₽" },
];

const CurrencyButton = () => {
  const { dispatch } = useContext(AppContext);
  const changeCurrency = (event) => {
    alert("Change currency " + event.target.value);
    dispatch({ type: "CHANGE_CURRENCY", payload: event.target.value });
  };
  return (
    <select onChange={changeCurrency}>
      {currencies.map((currency) => (
        <option value={currency.symbol}>
          {currency.symbol} {currency.name}
        </option>
      ))}
    </select>
  );
};
export default CurrencyButton;

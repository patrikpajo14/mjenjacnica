import React, { useState } from "react";
import TableRow from "./TableRow";

const Table = ({ items }) => {
  const [number, setNumber] = useState(0);
  const [rate, setRate] = useState(0);

  function initialize() {
    var currency = document.getElementById("currencyList").value;
    var selectedNum = items.find((item) => item.valuta === currency);
    setRate(parseFloat(selectedNum.srednji_tecaj));
    setNumber(parseFloat(document.getElementById("number").value));
  }

  return (
    <>
      <button onClick={initialize}>Pretvori</button>
      <table>
        <thead>
          <tr>
            <th>Broj tečajnice</th>
            <th>Datum primjene</th>
            <th>Država</th>
            <th>Država ISO</th>
            <th>Šifra valute</th>
            <th>Valuta</th>
            <th>Jedinica</th>
            <th>Kupovni tečaj</th>
            <th>Srednji tečaj</th>
            <th>Prodajni tečaj</th>
            <th>Coversion</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => {
            return (
              <TableRow
                id={item.sifra_value}
                item={item}
                number={number}
                rate={rate}
              />
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Table;

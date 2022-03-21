import React, { useState } from "react";

const TableRow = ({ id, item, number, rate }) => {
  function conversion(a, b, c) {
    return (b / c) * a;
  }
  return (
    <tr key={id}>
      <td>{item.broj_tecajnice}</td>
      <td>{item.datum_primjene}</td>
      <td>{item.drzava}</td>
      <td>{item.drzava_iso}</td>
      <td>{item.sifra_valute}</td>
      <td>{item.valuta}</td>
      <td>{item.jedinica}</td>
      <td>{item.kupovni_tecaj}</td>
      <td>{item.srednji_tecaj}</td>
      <td>{item.prodajni_tecaj}</td>
      <td id="conversion">
        {conversion(number, rate, parseFloat(item.srednji_tecaj))}
      </td>
    </tr>
  );
};

export default TableRow;

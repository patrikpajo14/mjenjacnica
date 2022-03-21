import Table from "./Table";

const Form = ({ items }) => {
  return (
    <>
      <form>
        <input type="number" id="number" placeholder="unesite vrijednost" />
        <select name="currency" id="currencyList">
          {items.map((item) => {
            return (
              <option key={item.sifra_valute} value={item.valuta}>
                {item.valuta}
              </option>
            );
          })}
        </select>
        <br />
      </form>
      <Table items={items} />
    </>
  );
};

export default Form;

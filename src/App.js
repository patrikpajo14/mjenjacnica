import { useEffect, useState } from "react";
import Data from "./exchangerates.json";
import Form from "./Form";
import Table from "./Table";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(Data);
  }, []);

  return (
    <div className="App">
      <h1>Mjenjačnica</h1>
      <Form items={items} />
    </div>
  );
}

export default App;

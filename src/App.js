import { useState } from "react";
import Input from "./components/Input";
import Output from "./components/Output";

function App() {
  // State
  const [value, setValue] = useState(0);

  return (
    <div className="App">
      <h1>Kalkulacka</h1>
      <Input setValue={setValue} />
      <Output value={value} />
    </div>
  );
}

export default App;

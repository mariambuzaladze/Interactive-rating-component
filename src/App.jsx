import { useState } from "react";
import "./App.css";
import Rating from "./components/Rating/Rating";
import Thanks from "./components/Thanks/Thanks";

function App() {
  const [submit, setSubmit] = useState(false);
  const [rate, setRate] = useState(null);

  return (
    <>
      {submit ? (
        <Thanks rate={rate} />
      ) : (
        <Rating setSubmit={setSubmit} rate={rate} setRate={setRate} />
      )}
    </>
  );
}
export default App;

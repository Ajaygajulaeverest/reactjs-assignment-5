import "./App.css";
import { useState, useMemo } from "react";

export default function Calculatefibanoci() {
  const [number, setNumber] = useState(0);
  const fibanocci = useMemo(() => fibbanocci(number), [number]);
  const onChange = (event) => {
    setNumber(Number(event.target.value));
  };
  const onClick = () => setNumber(0);
  return (
    <div className="fibanocinumber">
      <div className="fib">Fibbanoci of</div>
      <input type="fibnumber" value={number} onChange={onChange} />
      number is =    {fibanocci}
      <button onClick={onClick}>Reset</button>
    </div>
  );
}

function fibbanocci(n) {
  return n <= 0 ? 1 : fibbanocci(n - 1) + fibbanocci(n - 2);
}

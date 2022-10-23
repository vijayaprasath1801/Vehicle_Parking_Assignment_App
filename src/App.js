import "./styles.css";
import Home from "./component/Home";
import Parking from "./component/Parking";
import { useState } from "react";

export default function App() {
  const [results, setResults] = useState([]);
  function info(newData) {
    setResults((prev) => {
      return [...prev, newData];
    });
  }

  return (
    <div className="App">
      <div className="grid-con">
        <Home onAdd={info} />
        {results.map((result) => {
          return (
            <Parking
              driverName={result.driverName}
              vehicleNum={result.vehicleNum}
              time={result.checkedIn}
            />
          );
        })}
      </div>
    </div>
  );
}

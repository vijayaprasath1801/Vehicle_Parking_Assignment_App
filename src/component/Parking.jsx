import { useState } from "react";
import "./parking.styles.css";

function Parking(props) {
  const [time, setTime] = useState("");
  function checkOut() {
    var today = new Date(),
      timing =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    setTime(timing);
  }
  return (
    <div className="park-con">
      <div className="park">
        <h3>Driver Name : {props.vehicleNum} </h3>
        <h3> vehicleNumber : {props.driverName}</h3>
        <h3>Checked In :{props.time}</h3>
        <h3>checkedOut :{time} </h3>
        <button type="button" className="btn" onClick={checkOut}>
          Check_Out
        </button>
      </div>
    </div>
  );
}

export default Parking;

import "./Home.styles.css";
import { useState } from "react";

function Home(props) {
  const [formData, setFormData] = useState({
    vehicleNum: "",
    driverName: "",
    checkedIn: ""
  });
  const [count, setCount] = useState(0);
  const [submitted, setSubmiited] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    var today = new Date(),
      time =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    setFormData({ ...formData, [name]: value, checkedIn: time });
  }
  function submitHandler(e) {
    e.preventDefault();
    if (submitted && formData.driverName !== "") {
      setCount(count + 1);
    }
    props.onAdd(formData);
    setFormData({ vehicleNum: "", driverName: "" });
  }
  function handleClick() {
    setSubmiited(true);
  }
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <h1>Parking App</h1>
        <h2>Fill the below fields to park</h2>
        <div className="fields">
          <label>Registration_Number</label>
          <input
            type="text"
            name="vehicleNum"
            value={formData.vehicleNum}
            onChange={handleChange}
            required
          ></input>
          <label>Driver_Name</label>
          <input
            type="text"
            name="driverName"
            value={formData.driverName}
            onChange={handleChange}
            required
          ></input>
          <button type="submit" className="btn" onClick={handleClick}>
            Submit
          </button>
        </div>
      </form>
      <h2 className="totes">Total Vehicle in Parking Lot : {count}</h2>
    </div>
  );
}
export default Home;

import React, { useState } from "react";
import Header from "../assets/components/header";
import Footer from "../assets/components/footer.jsx";
import "./info.css";

function Info() {
  const [userDetails, setUserDetails] = useState({
    name: "",
    age: "",
    working_hours: "",
    gender: "",
    sleeping_hours: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User details received:", userDetails);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  return (
    <div className="wrapper">
      <Header />
      <div className="user-info">
        <div className="info-text">
          <p>Before proceeding to the Planner, we require some information:</p>
        </div>
        <form onSubmit={handleSubmit} className="form-container">
          <div className="name-input">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={userDetails.name}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="column-inputs">
            <div className="input-row">
              <input
                type="number"
                id="age"
                name="age"
                placeholder="Age"
                value={userDetails.age}
                onChange={handleInputChange}
                className="input-field"
                required
              />
              <select
                id="gender"
                name="gender"
                value={userDetails.gender}
                onChange={handleInputChange}
                className="input-field"
              >
                <option value="gender">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="input-row">
              <input
                type="number"
                id="working_hours"
                name="working_hours"
                placeholder="Working Hours"
                value={userDetails.working_hours}
                onChange={handleInputChange}
                className="input-field"
              />
              <input
                type="number"
                id="sleeping_hours"
                name="sleeping_hours"
                placeholder="Sleeping Hours"
                value={userDetails.sleeping_hours}
                onChange={handleInputChange}
                className="input-field"
              />
            </div>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Info;

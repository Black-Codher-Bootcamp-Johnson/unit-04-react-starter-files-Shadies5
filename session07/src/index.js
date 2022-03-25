import "../src/style.css";
import React, { useState } from "react";
import ReactDOM from "react-dom";

const LogForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [location, setLocation] = useState("");
  const [hasSubmitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }
  return (
    <>
      <div>
        <h1>Your Details</h1>
        <h2>Please fill in the form details</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <label>
              Name:
              <input
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setSubmitted(false);
                }}
              />
            </label>
            <br />
            <label>
              Age:
              <input
                type="number"
                value={age}
                onChange={(e) => {
                  setAge(e.target.value);
                  setSubmitted(false);
                }}
              />
            </label>
            <br />
            <label>
              Location:
              <input
                type="text"
                value={location}
                onChange={(e) => {
                  setLocation(e.target.value);
                  setSubmitted(false);
                }}
              />
            </label>
            <br />
          </div>
          <input type="submit" value="Submit" className= "submit" />
        </form>
        <div className= "result">
          <h2>Results</h2>
          Name: {name}
          <br />
          Age: {age}
          <br />
          Location: {location}
          <br />
      

        </div>
        {hasSubmitted && <p>Thank you for submitting the form</p>}
      </div>
    </>
  );
};

ReactDOM.render(<LogForm />, document.getElementById("root"));
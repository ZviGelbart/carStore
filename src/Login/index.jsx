import axios from "axios";
import { useState } from "react";
import "./login.css";

export default function login() {
  const [fData, setFData] = useState();

  const handleInput = (e) => {
    setFData({ ...fData, [e.target.name]: e.target.value });
  };

  const send = (e) => {
    e.preventDefault();
    axios
      .post("https://jbh-mockserver.onrender.com/user", fData)
      .then((res) => console.log(res));
  };

  return (
    <div>
      <div>
        <input
          type="text"
          onChange={handleInput}
          name="firstName"
          id="firstName"
          placeholder="Enter Your First Name"
        ></input>
      </div>

      <div>
        <input
          type="text"
          onChange={handleInput}
          name="lastName"
          id="lastName"
          placeholder="Enter Your Last Name"
        ></input>
      </div>
      
      <div>
        <input
          type="email"
          onChange={handleInput}
          name="email"
          id="email"
          placeholder="Enter Your email"
        ></input>

        <div>
          <input
            type="text"
            onChange={handleInput}
            name="dateOfBirth"
            id="dateOfBirth"
            placeholder="Enter Your birth-day"
          ></input>
        </div>
        <br />
      </div>
      <button onClick={send}>SEND</button>
    </div>
  );
}

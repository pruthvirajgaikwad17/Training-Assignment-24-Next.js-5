import React, { useState } from "react";
import styles from "../styles/Content.module.css";

const RegisterUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const registerUser = async () => {
    console.log("Adding user Data");
    const response = await fetch("/api/registerUserApi", {
      method: "POST",
      body: JSON.stringify({ name, email }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
  };

  return (
    <div className={styles.userContent}>
      <h2>REGISTER USER</h2>
      <input
        type="text"
        placeholder="Enter Name"
        name="username"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Enter email"
        name="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <br />
      <button onClick={registerUser}>Register</button>
    </div>
  );
};

export default RegisterUser;

import NavBar from "./NavBar";
import React, { useState } from "react";

function SignUp({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }

  return (
    <>

  
    <div className="body-form">
    <div className="container">
      <div className="title">SignUp</div>
      <form name="myForm" className="form" onSubmit={handleSubmit}>
      <div className="user-details">
        <div className="input-box">
          <label htmlFor="username">Username</label>
          <input
          type="text"
          id="username"
          autocomplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}></input><br></br>

          <label htmlFor="password">Password</label>
           <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
        />
          <label htmlFor="password">Password Confirmation</label>
          <input
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password"
        />
         <button type="submit">Sign Up</button>
        </div>
      </div>
      </form>
    </div>

    </div>
   
    </>
   
  );
}

export default SignUp;

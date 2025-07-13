import React, { useState } from "react";

const LoginRegister = () => {
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const register = async () => {
    try {
      const res = await fetch("http://localhost:3004/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: "Shivani",
          lastName: "Cheela",
          email: regEmail,
          password: regPassword,
          picturePath: "",
          location: "",
          occupation: ""
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        alert("Registration failed: " + data.message);
      } else {
        alert("✅ Registration successful");
      }
    } catch (err) {
      alert("Registration Error: " + err.message);
    }
  };

  const login = async () => {
    try {
      const res = await fetch("http://localhost:3004/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: loginEmail,
          password: loginPassword,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        alert("Login failed: " + data.message);
      } else {
        alert("✅ Login successful");
        console.log(data.user);
      }
    } catch (err) {
      alert("Login Error: " + err.message);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Register</h2>
      <input
        type="email"
        placeholder="Email"
        value={regEmail}
        onChange={(e) => setRegEmail(e.target.value)}
      /><br />
      <input
        type="password"
        placeholder="Password"
        value={regPassword}
        onChange={(e) => setRegPassword(e.target.value)}
      /><br />
      <button onClick={register}>Register</button>

      <hr />

      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={loginEmail}
        onChange={(e) => setLoginEmail(e.target.value)}
      /><br />
      <input
        type="password"
        placeholder="Password"
        value={loginPassword}
        onChange={(e) => setLoginPassword(e.target.value)}
      /><br />
      <button onClick={login}>Login</button>
    </div>
  );
};

export default LoginRegister;
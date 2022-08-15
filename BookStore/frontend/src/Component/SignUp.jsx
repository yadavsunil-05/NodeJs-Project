import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user")
    if (auth) {
      navigate("/")
    }
  })

  async function handleSubmit(e) {
    e.preventDefault();
    const result = await fetch("http://localhost:5000/register", {
      method: "Post",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const output = await result.json();
    localStorage.setItem("user", JSON.stringify(output));
    navigate("/");
  }


  return (
    <div className="signup-banner">
      <div className="form-box">
        <div className="form">
          <form className="register-form" onSubmit={handleSubmit}>
            <h2 style={{ color: "white" }}> Register</h2>
            <input
              type="text"
              placeholder="Enter Name..."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter Email.."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Enter Password.."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button>SIGN UP</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

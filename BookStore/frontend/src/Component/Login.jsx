import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (email != "" && password != "") {
      const result = await fetch("http://localhost:5000/login", {
        method: "Post",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const output = await result.json();
      if (output.name) {
        localStorage.setItem("user", JSON.stringify(output));
        navigate("/");
        toast.success("Succefully Logged In!!!");
      } else {
        toast.error("No User Found!!!");
      }
    } else {
      toast.error("Please Enter all the Details");
    }
  };

  return (
    <div className="signup-banner">
      <div className="form-box">
        <div className="form">
          <form className="register-form" onSubmit={handleLogin}>
            <h2 style={{ color: "white", marginBottom: "18px" }}>
              {" "}
              USER LOGIN
            </h2>
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
            <button>LOG IN</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

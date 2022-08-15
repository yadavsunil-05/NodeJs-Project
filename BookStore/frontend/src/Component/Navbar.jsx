import "./Navbar.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {
  const [show, setShow] = useState(false)
  const auth = localStorage.getItem("user");

  useEffect(() => {
    auth ? setShow(true) : setShow(false)
  }, [auth])

  return (
    <div>
      <div className="nav-container">
        <div className="logo">BookStore</div>
        <div className="nav-link-container">
          <div className="nav-link">
            <li>
              <Link to="/" className="nav-link-tag">
                Books
              </Link>
            </li>
            <li>
              <Link to="/add" className="nav-link-tag">
                Add Book
              </Link>
            </li>
            <li>
              <Link to="/update" className="nav-link-tag">
                Update Book
              </Link>
            </li>
            <li>
              <Link to="/profile" className="nav-link-tag">
                Profile
              </Link>
            </li>
            <li>
              {show ? (
                <Link to="/logout" className="nav-link-tag">
                  Logout
                </Link>
              ) : (
                <Link to="/signup" className="nav-link-tag">
                  SignUp
                </Link>
              )}
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

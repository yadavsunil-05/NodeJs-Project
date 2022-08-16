import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from "../assets/logo.png"

function Navbar() {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate()

  const handleLogout = () => {
    toast.error("User Logged Out!!!")
    localStorage.clear();
    navigate("/signup")
  }


  return (
    <div>
      <div className="nav-container">
        <div className="logo">
          <img src={logo} alt="logo" />
          <span> BookStore</span>
        </div>
        <div className="nav-link-container">
          {
            auth ?
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
                  <Link to="/signup" className="nav-btn nav-btn-link" onClick={handleLogout}>
                    Logout
                  </Link>
                </li>
                <span className="user-logo">{JSON.parse(auth).name.toUpperCase().charAt(0)}</span>
              </div> :
              <div className="sign-btn-container">
                <Link to="/signup" className="nav-btn nav-btn-link-1">
                  SignUp
                </Link>
                <Link to="/login" className="nav-btn nav-btn-link-2">
                  LogIn
                </Link>
              </div>
          }
        </div>
      </div >
      <ToastContainer />
    </div >
  );
}

export default Navbar;

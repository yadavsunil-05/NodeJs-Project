import Navbar from "./Component/Navbar"
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Banner from "./Component/Banner";
import Footer from "./Component/Footer";
import SignUp from "./Component/SignUp";
import PrivateComponent from "./Component/PrivateComponent"
import Login from "./Component/Login";
import AddProduct from "./Component/AddProduct";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route element={<PrivateComponent />}>
            <Route path="/" element={<Banner />} />
            <Route path="/add" element={<AddProduct />} />
            <Route path="/update" element={<h1>Add Books to the Page</h1>} />
            <Route path="/logout" element={<h1>Add Books to the Page</h1>} />
            <Route path="/profile" element={<h1>Add Books to the Page</h1>} />
          </Route>

          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;

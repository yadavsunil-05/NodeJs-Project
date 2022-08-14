import "./Navbar.css"

function Navbar() {
  return (
    <div className="nav-container">
      <div className="logo">
        BookStore
      </div>
      <div className="nav-link-container">
        <div className="nav-link">
          <li>Home</li>
          <li>Books</li>
          <li>Price</li>
          <li>Contact</li>
        </div>
      </div>
    </div>
  )
}

export default Navbar
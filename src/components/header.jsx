function Button() {
  return (
    <button className="click-btn">
      View All
    </button>
  )
}

function Header() {
    return (
    <div className="header-container">
      <div className="header">
        
        <ul className="nav-list">
          <li><a href="#" className="nav-link">All</a></li>
          <li><a href="#" className="nav-link">Drinks</a></li>
          <li><a href="#" className="nav-link">Pizza</a></li>
          <li><a href="#" className="nav-link">Salad</a></li>
          <li><a href="#" className="nav-link">Spicy</a></li>
          <li><a href="#" className="nav-link">Sweets</a></li>
        </ul>
      </div>
      <div>
         <button className="click-btn">  View All </button>
      </div>
    </div>
  )
}

export default Header;
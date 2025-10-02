import './Navbar1.css';

const Navbar1 = () => {
  return (
    <nav className="navbar1">
      <div className="navbar1-container">
        <div className="navbar1-left">
          <div className="logo">
            <span className="flipkart-text">Flipkart</span>
            <span className="explore-text">Explore <span className="plus">Plus</span></span>
          </div>
          <div className="search-container">
            <input 
              type="text" 
              placeholder="Search for products, brands and more"
              className="search-input"
            />
            <button className="search-btn">🔍</button>
          </div>
        </div>
        <div className="navbar1-right">
          <button className="login-btn">Login</button>
          <div className="nav-item">Become a Seller</div>
          <div className="nav-item dropdown">
            More ▼
          </div>
          <div className="nav-item cart">
            🛒 Cart
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar1;
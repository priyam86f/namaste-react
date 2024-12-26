import { LOGO_URL } from "../utils/constants";
const Header = () => {
    return (
      <div id="header">
          <div className="logo-container">
        <img className="logo"src=  {LOGO_URL}/>
       
        </div>
  
        <div >
          <ul className="nav-items">
              <li>Outlets</li>
              <li>Contact Us</li>
              <li>Order</li>
              <li>About Us</li>
          </ul>
        </div>
        
      </div>
    );
  };

  export default Header
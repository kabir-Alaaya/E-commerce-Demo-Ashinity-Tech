import { AiOutlineSearch } from "react-icons/ai";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="header">
      <div className="logo">
        <h2>E-commerce</h2>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/cloth">Cloth</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
        </ul>
      </nav>
      <div className="search-box">
        <input type="text" value="" placeholder="search"></input>
        <button>
          <AiOutlineSearch />
        </button>
      </div>
      <div className="user">
        <div className="login">
          <FiLogIn />
        </div>
        <div className="btn">
          <button>Login</button>
        </div>
      </div>
    </div>
  );
}

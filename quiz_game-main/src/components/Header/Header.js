import { Link } from "react-router-dom";
import "./Header.css";

/**
 Displays application title.
**/
const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="title">
        Quiz Game
      </Link>
    </div>
  );
};

export default Header;

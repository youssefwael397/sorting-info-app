import { Link } from "react-router-dom";
import classes from "./Nav.module.css";

function Nav() {
  return (
    <div className={classes.container}>
      <ul>
        <li>
          <Link to="/"  style={{textDecoration: 'inherit' ,color:"inherit" }}>Home</Link>
        </li>
        <li>
          <Link to="/Admin"  style={{ textDecoration: 'inherit' , color:"inherit"}}>Admin</Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;

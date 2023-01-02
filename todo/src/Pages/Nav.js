import style from "./StyleSheets/Navbar.module.css";
import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <>
      <div className={style.container}>
        <ul>
          <li>
            <Link to="/" className={style.link}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/AddTask" className={style.link}>
              Add Task
            </Link>
          </li>
          <li>
            <Link to="/Account" className={style.link}>
              Account
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Nav;

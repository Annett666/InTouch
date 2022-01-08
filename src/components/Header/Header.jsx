import l from "./Header.module.css";
import logo from "../../assets/images/InTouchLogo.png";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={l.header}>
      <img src={logo} alt={"logo"} />
      <div className={l.loginBlock}>
        {props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;

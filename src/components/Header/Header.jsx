import l from "./Header.module.css";
import logo from "../../assets/images/InTouchLogo.png";

const Header = () => {
  return (
    <header className={l.header}>
      <img src={logo} alt={"logo"} />
    </header>
  );
};

export default Header;

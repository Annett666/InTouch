import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";
import FriendsSection from "../FriendsSection/FriendsSection";

const Navbar = (props) => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/profile" activeClassName={s.activeLink}>
          Profile
        </NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <NavLink to="/dialogs" activeClassName={s.activeLink}>
          Messages
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/news" activeClassName={s.activeLink}>
          News
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/music" activeClassName={s.activeLink}>
          Music
        </NavLink>
      </div>
      <div className={`${s.item} ${s.itemSettings}`}>
        <NavLink to="/settings" activeClassName={s.activeLink}>
          Settings
        </NavLink>
      </div>
      <div className={`${s.item} ${s.itemFriends}`}>
        <NavLink to="/users" activeClassName={s.activeLink}>
          Users
        </NavLink>
        {/* <div>
          <FriendsSection friends={props.state.friends} />
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;

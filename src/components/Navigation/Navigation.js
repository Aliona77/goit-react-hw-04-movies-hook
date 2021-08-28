import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
import routes from "../../routes";

const Navigation = () => (
  <nav>
    <NavLink
      exact
      to={routes.home}
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Home
    </NavLink>

    <NavLink
      to={routes.moviesPage}
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Movies
    </NavLink>
  </nav>
);
export default Navigation;

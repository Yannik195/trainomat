import logo from "../../../assets/logo.svg";
import styles from "./AppBar.module.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import useIsMobile from "../../../Hooks/useIsMobile.jsx";

export default function AppBar() {
  const isMobile = useIsMobile();

  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        <div className={styles.logo_container}>
          <div className={styles.logo}>
            <img className={styles.logo_svg} src={logo} alt="Logo" />
            <div className={styles.vertical_line}></div>
            <span className={styles.logo_text}>TRAINOMAT</span>
          </div>
          <span className={styles.slogan}>
            Ein Projekt des Kompetenzzentrum für digitale Barrierefreiheit
          </span>
        </div>
        {isMobile ? (
          <FontAwesomeIcon icon={faBars} className={styles.burger_menu} />
        ) : (
          <nav>
            <ol>
              <li>
                <NavLink
                  to={"/"}
                  className={({ isActive, isPending }) =>
                    isActive ? styles.active : styles.link
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/about"}
                  className={({ isActive, isPending }) =>
                    isActive ? styles.active : styles.link
                  }
                >
                  About
                </NavLink>
              </li>
            </ol>
          </nav>
        )}
      </div>
    </header>
  );
}

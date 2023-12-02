import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <h1>Income Expense App</h1>
      <ul className={styles.nav}>
        <li>
          <NavLink to="/">Income</NavLink>
        </li>
        <li>
          <NavLink to="/expense">Expense</NavLink>
        </li>
        <li>
          <NavLink to="/savings">Savings</NavLink>
        </li>
      </ul>
    </div>
  );
}

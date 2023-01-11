import React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className={styles.mainnav}>
      <ul>
        <li>
          <Link href="/">Offer Store</Link>
        </li>
        <li>
          <Link href="/RegisterUser">Register User</Link>
        </li>
        <li>
          <Link href="/ShowUsers">Show User</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

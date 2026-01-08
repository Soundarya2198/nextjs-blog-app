"use client";

import Link from "next/link";
import styles from "./Header.module.css";
import { logout } from "../actions/auth";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.link}>
          Home
        </Link>
        <Link href="/" className={styles.link}>
          Blog
        </Link>
        <Link href="/create" className={styles.link}>
          Create Post
        </Link>
        <form action={logout}>
          <button className={styles.logout} type="submit">
            Logout
          </button>
        </form>
      </nav>
    </header>
  );
}

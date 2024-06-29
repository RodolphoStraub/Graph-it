import Image from "next/image";
import Link from "next/link";

import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <>
      <div className={styles.bar}>
        <ul className={styles.barinter}>
          <Image
            className={styles.logo}
            src="/logo.png"
            width={130}
            height={50}
            alt="logo"
          ></Image>
          <li>
            <Link className={styles.bartext} href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={styles.bartext} href="/about">
              Quem somos
            </Link>
          </li>
          <li>
            <Link className={styles.bartext} href="/Unities">
              Unidades
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

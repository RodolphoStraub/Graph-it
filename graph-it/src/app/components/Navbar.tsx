import Image from "next/image";
import Link from "next/link";

import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <>
      <div className={styles.bar}>
        <ul className={styles.barinter}>
          <Link href="/">
          <Image
          className={styles.logo}
          src="/logo.png"
          width={130}
          height={50}
          alt="logo"
        ></Image>
          </Link>
          <li>
            <Link className={styles.bartext} href="/about">
              Quem somos
            </Link>
          </li>
          <li>
            <Link className={styles.bartext} href="/#Cursos">
              Cursos
            </Link>
          </li>
          <li>
            <Link className={styles.bartext} href="#Footer">
              Contato
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

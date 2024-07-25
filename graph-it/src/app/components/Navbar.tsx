"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import { useState } from "react";

import styles from "./Navbar.module.css";
import { image } from "@nextui-org/react";

export default function Navbar() {
  const [isClick, setisClick] = useState(false);

  const toggleNavbar = () => {
    setisClick(!isClick);
  };

  return (
    <>
      <div className={styles.bar}>
        <div className={styles.barinter}>
          <Link href="/">
            <Image
              className={styles.logo}
              src="/logo.png"
              width={130}
              height={50}
              alt="logo"
            ></Image>
          </Link>
          <div className={styles.navbar}>
            <div className={styles.navbar_inter}>
              <Link className={styles.link} href="/Quem-Somos">Quem somos</Link>
              <Link className={styles.link} href="/#Cursos">Cursos</Link>
              <Link className={styles.link} href="#Footer">Contato</Link>
            </div>
          </div>
          <button className={styles.open_nav} onClick={toggleNavbar}>
            {isClick ? <h1>x</h1> : <h1>-</h1>}
          </button>
        </div>
        {isClick && (
          <div className={styles.hidden_nav}>
            <ul className={styles.barinter}>
              <li>
                <Link className={styles.bartext} href="/Quem-Somos">
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
        )}
      </div>
    </>
  );
}

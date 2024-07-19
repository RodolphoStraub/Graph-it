import Link from "next/link";

import styles from "./Welcome.module.css";

export default function Welcome() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>
            <spam className={styles.title_color}>B</spam>EM-
          </h1>
          <h1>
            <spam className={styles.title_color}>V</spam>INDO
          </h1>
        </div>
        <h2 className={styles.sub_title}>
          ao mais completo curso de artes visuais
        </h2>
        <Link href="/Quem-Somos">
          <button className={styles.button}>CONHEÇA A GENTE</button>
        </Link>
      </div>
    </>
  );
}

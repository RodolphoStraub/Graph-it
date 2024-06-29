import Link from "next/link";

import styles from "./Welcome.module.css";

export default function Welcome() {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>
          <spam className={styles.title_color}>B</spam>EM-
          <spam className={styles.title_color}>V</spam>INDO
        </h1>
        <h2 className={styles.sub_title}>
          ao mais completo curso de artes visuais
        </h2>
        <Link href="About">
          <button className={styles.button}>CONHEÇA A GENTE</button>
        </Link>
      </div>
    </>
  );
}

import styles from "./Banner.module.css";
import Curso from "./Curso";


export default function Page() {
  return (
    <>
      <div className={styles.all}></div>
      <Curso/>
    </>
  );
}

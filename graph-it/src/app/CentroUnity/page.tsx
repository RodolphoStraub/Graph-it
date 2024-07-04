import styles from "./Banner.module.css";
import Desenho from "./Desenho";

export default function Page() {
  return (
    <>
      <div className={styles.all}></div>
      <Desenho/>
    </>
  );
}

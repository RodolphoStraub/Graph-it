import styles from "./Banner.module.css";
import Computacao from "./Computacao";
import Desenho from "./Desenho";
import KnowUs from "./KnowUs";

export default function Page() {
  return (
    <>
      <div className={styles.all}></div>
      <KnowUs/>
      <Desenho/>
      <Computacao/>
    </>
  );
}

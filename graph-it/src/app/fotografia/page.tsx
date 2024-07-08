import styles from "./Banner.module.css";
import Curso from "./Curso";
import EmblaCarousel from "./EmblaCarousel";
import Ementa from "./Ementa";

export default function Page() {
  return (
    <>
      <div className={styles.all}></div>
      <Curso />
      <Ementa/>
      <EmblaCarousel />
    </>
  );
}

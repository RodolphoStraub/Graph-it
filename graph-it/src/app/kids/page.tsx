import styles from "./Banner.module.css";
import Curso from "./Curso";
import Material from "./Material"
import EmblaCarousel from "./EmblaCarousel";
import Ementa from "./Ementa";
import Vantagem from "./Vantagem";

export default function Page() {
  return (
    <>
      <div className={styles.all}></div>
      <Curso />
      <Material/>
      <Ementa/>
      <EmblaCarousel />
      <Vantagem/>
    </>
  );
}

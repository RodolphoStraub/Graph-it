import Welcome from "./components/Welcome";
import Numbers from "./components/Numbers";
import Place from "./components/Place";
import EmblaCarousel from "./components/EmblaCarousel";
import Cursos from "./components/Cursos";
import Desenho from "./components/Desenho";
import Computacao from "./components/Computacao";

import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <div id="/" className={styles.all}></div>
      <Welcome />
      <Cursos />
      <Desenho />
      <Computacao />
      <Numbers />
      <Place />
      <EmblaCarousel />
    </>
  );
}

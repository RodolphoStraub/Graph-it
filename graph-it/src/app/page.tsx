import Chooseunit from "./components/Chooseunit";
import Welcome from "./components/Welcome";
import Numbers from "./components/Numbers";
import Place from "./components/Place";
import EmblaCarousel from "./components/EmblaCarousel";

import styles from "./page.module.css";


export default function Home() {
  return (
    <>
      <div id="/" className={styles.all}>
      </div>
      <Welcome/>
      <Chooseunit/>
      <Numbers/>
      <Place/>
      <EmblaCarousel />
    </>
  );
}

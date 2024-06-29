

import Chooseunit from "./components/Chooseunit";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import Numbers from "./components/Numbers";
import Place from "./components/Place";
import EmblaCarousel from "./components/EmblaCarousel";


import styles from "./page.module.css";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
    <Navbar/>
      <div className={styles.all}>
      </div>
      <Welcome/>
      <Chooseunit/>
      <Numbers/>
      <Place/>
      <EmblaCarousel />
      <Footer/>
    </>
  );
}

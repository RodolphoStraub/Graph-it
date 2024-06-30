

import Chooseunit from "./components/Chooseunit";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import Numbers from "./components/Numbers";
import Place from "./components/Place";
import EmblaCarousel from "./components/EmblaCarousel";
import Footer from "./components/Footer";


import styles from "./page.module.css";


export default function Home() {
  return (
    <>
    <Navbar/>
      <div id="Home" className={styles.all}>
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

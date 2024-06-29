

import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
    <Navbar/>
      <div className={styles.all}>
      </div>
      <Welcome/>
    </>
  );
}

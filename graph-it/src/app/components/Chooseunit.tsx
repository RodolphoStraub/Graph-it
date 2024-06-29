import Link from "next/link";
import styles from "./Chooseunity.module.css";

export default function Chooseunit() {
  return (
    <>
      <div className={styles.unitall}>
        <h1 className={styles.unity_title}>
          Escolha a unidade mais perto de você!
        </h1>
        <div className={styles.bg_all}>
          <div>
            <Link className={styles.bg_centro} href="/CentroUnity">
              <h1>UNIDADE PETRÓPOLIS</h1>
              <h2>CENTRO</h2>
              <img className={styles.location} src="location_icon_fill.svg" />
            </Link>
          </div>
          <div>
            <Link className={styles.bg_itaipava} href="/ItaipavaUnity">
              <h1>UNIDADE PETRÓPOLIS</h1>
              <h2>ITAIPAVA</h2>
              <img className={styles.location} src="location_icon_fill.svg" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

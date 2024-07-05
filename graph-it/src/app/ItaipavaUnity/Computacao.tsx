import styles from "./Computacao.module.css";
import Link from "next/link";

export default function Computacao() {
  return (
    <div className={styles.all}>
      <div className={styles.sub_all}>
        <div className={styles.context}>
          <img src="/logo_computacao_grafica.png" alt="logo desenho" />
          <p>
            Aprender a desenhar é uma habilidade técnica que desbloqueia um
            mundo de possibilidades criativas e expressivas. É um processo que
            envolve compreender os princípios fundamentais da composição,
            proporção, perspectiva, luz e sombra, entre outros elementos. Além
            disso, o desenho oferece benefícios cognitivos, como o aprimoramento
            da observação, concentração, coordenação motora e resolução de
            problemas visuais.
          </p>
          <Link href="/computacaograficaitaipava">
            <button className={styles.button}>clique e saiba mais</button>
          </Link>
        </div>
      <div>
          <img
            className={styles.pic}
            src="/img_computacao.png"
            alt="menina desenhando"
          />
        </div>
      </div>
    </div>
  );
}
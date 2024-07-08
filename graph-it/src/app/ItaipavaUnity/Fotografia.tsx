import styles from "./Fotografia.module.css";
import Link from "next/link";

export default function Fotografia() {
  return (
    <div className={styles.all}>
      <div className={styles.sub_all}>
        <div>
          <img
            className={styles.pic}
            src="/img_fotografia.png"
            alt="menina desenhando"
          />
        </div>
        <div className={styles.context}>
          <img src="/logo_fotografia.png" alt="logo desenho" />
          <p>
            Nosso curso oferece uma combinação única de teoria e prática, onde
            você aprenderá as técnicas fundamentais da fotografia digital e as
            habilidades necessárias para capturar momentos incríveis. Desde os
            princípios básicos, como exposição, composição e foco, até técnicas
            avançadas de iluminação, tratamento de imagem e edição, forneceremos
            todo o conhecimento necessário para criar imagens deslumbrantes.
          </p>
          <Link href="/fotografia">
            <button className={styles.button}>clique e saiba mais</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

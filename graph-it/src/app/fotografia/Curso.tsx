import styles from "./Curso.module.css";

export default function Curso() {
  return (
    <div className={styles.all}>
      <div className={styles.container}>
          <h1 className={styles.title}>Fotografia Digital</h1>
        <div className={styles.text_container}>
          <div className={styles.context}>
            <h2>Expressão Artística</h2>
            <p>
              A fotografia é uma forma poderosa de expressão artística. Através
              dela, você pode capturar momentos, emoções e histórias de maneira
              única. É uma maneira de mostrar o mundo através dos seus olhos e
              criatividade.
            </p>
          </div>
          <div className={styles.context}>
            <h2>Compreensão Visual</h2>
            <p>
              A prática da fotografia digital pode melhorar sua compreensão da
              composição visual, cores, luz e sombras. Isso pode aprimorar sua
              apreciação estética em outras áreas da vida.
            </p>
          </div>
          <div className={styles.context}>
            <h2>Aprendizado Técnico</h2>
            <p>
              A fotografia digital envolve a compreensão de conceitos técnicos,
              como exposição, composição, foco, entre outros. Isso pode
              estimular o pensamento crítico e a resolução de problemas.
            </p>
          </div>
          <div className={styles.context}>
            <h2>Câmeras x Celulares</h2>
            <p>
              Ambos os meios têm seu lugar na fotografia, e a escolha entre eles
              depende das suas preferências pessoais, necessidades e objetivos
              fotográficos. Muitos fotógrafos optam por usar ambos, aproveitando
              as vantagens de cada um em diferentes situações.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

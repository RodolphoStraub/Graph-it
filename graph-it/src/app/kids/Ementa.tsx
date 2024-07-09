import styles from "./Ementa.module.css";

export default function Ementa() {
  return (
    <div className={styles.all}>
      <div className={styles.title}>
        <h1>Ementa</h1>
      </div>
      <div className={styles.container}>
        <div className={styles.teste}>
          <div className={styles.sub_container1}>
            <h2>
              <i className={styles.arrow}></i>
            </h2>
            <h1>História e Evolução da Fotografia</h1>
            <p>
              Breve história da Fotografia, com orientação sobre a evolução da
              fotografia até a era digital.
              <br /> Além de explicação sobre equipamentos, tipos de câmera e
              lentes.
            </p>
          </div>
          <div className={styles.sub_container2}>
            <h2>
              <i className={styles.arrow}></i>
            </h2>
            <h1>
              Obturador/
              <br />
              Diafragma e ISO
            </h1>
            <p>
              Técnica básica sobre como funciona a câmera fotográfica moderna,
              obturador, diafragma e ISO, através de exemplos práticos e análise
              de imagens.
            </p>
          </div>
          <div className={styles.sub_container3}>
            <h2>
              <i className={styles.arrow}></i>
            </h2>
            <h1>Fotometria, Histograma e Histograma Externo</h1>
            <p>
              Nessa parte do curso o aluno irá ver as técnicas básicas sobre
              Fotometria, histograma e histograma RGB. Além de teoria das cores
              e balanço de branco. Assim como a resolução, Megapixels e Formatos
              de arquivo.
            </p>
          </div>
        </div>
        <div className={styles.teste2}>
          <div className={styles.sub_container4}>
            <h2>
              <i className={styles.arrow}></i>
            </h2>
            <h1>Interpretanto a Luz, Características e Efeitos</h1>
            <p>
              Iluminação básica: Controlando e modificando a luz natural
              <br />
              Iluminação básica: Utilizando o flash como fonte de luz adicional
            </p>
          </div>
          <div className={styles.sub_container5}>
            <h2>
              <i className={styles.arrow}></i>
            </h2>
            <h1>Aulas Práticas</h1>
            <p>
              O curso é composto por 2 aulas práticas, sendo uma em ambiente
              externo e outra em ambiente interno.
              <br /> Nas aulas práticas o curso tem o objetivo de mostrar como
              trabalhar com a variação de iluminação e velocidade. Dando a
              oportunidade para o aluno aplicar toda a teoria da sala de aula.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

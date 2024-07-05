import styles from "./KnowUs.module.css";

export default function KnowUs() {
  return (
    <div className={styles.all}>
      <h1 className={styles.title}>
        Conheça nossos <spam className={styles.title_color}>cursos</spam>
      </h1>
      <h2 className={styles.sub_title}>
        E descubra um mundo de possibilidades!
      </h2>
    </div>
  );
}

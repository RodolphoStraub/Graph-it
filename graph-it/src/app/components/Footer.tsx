import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.main_container}>
      <div className={styles.sub_container}>
        <div className={styles.title}>
          <img src="/icon_logo2.png" alt="logo" />
        </div>
        <div className={styles.unities}>
          <div className={styles.unity_decor1}>
            <h2>CENTRO - PETRÓPOLIS - RJ</h2>
            <h3>
              Ed. Marchese - Rua do Imperador, nº 772 slj 21 e 23, CEP 25620-001
            </h3>
            <div className={styles.sub_unity}>
              <div className={styles.inter_unity}>
                <img src="/phone_icon.svg" alt="icon telefone" />
                <h3>(24)2231-5610</h3>
              </div>
              <div className={styles.inter_unity}>
                <img src="/whatsapp_icon.svg" alt="icon telefone" />
                <h3>(24)99220-2214</h3>
              </div>
            </div>
          </div>
          <div className={styles.unity_decor2}>
            <h2>ITAIPAVA - PETRÓPOLIS - RJ</h2>
            <h3>
              Ed. Marchese - Rua do Imperador, nº 772 slj 21 e 23, CEP 25620-001
            </h3>
            <div className={styles.sub_unity}>
              <div className={styles.inter_unity}>
                <img src="/phone_icon.svg" alt="icon telefone" />
                <h3>(24)2231-5610</h3>
              </div>
              <div className={styles.inter_unity}>
                <img src="/whatsapp_icon.svg" alt="icon telefone" />
                <h3>(24)99220-2214</h3>
              </div>
            </div>
          </div>
        </div>
        <h2 className={styles.about_price}>
          CADA UNIDADE TEM A SUA PRÓPRIA TABELA DE PREÇO E OPÇÕES DE CURSOS.
        </h2>
        <div className={styles.icons}>
            
        </div>
      </div>
    </div>
  );
}

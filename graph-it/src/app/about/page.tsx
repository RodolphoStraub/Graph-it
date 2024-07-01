import Text from "./Text";

import styles from './Banner.module.css'
import EmblaCarousel from "./EmblaCarousel";

export default function Page() {
  return (
    <>
    <div className={styles.all}></div>
      <Text/>
      <EmblaCarousel/>
    </>
  );
}

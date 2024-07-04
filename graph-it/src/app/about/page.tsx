import Text from "./Text";

import styles from './Banner.module.css'
import EmblaCarousel from "./EmblaCarousel";
import Evolution from "./Evolution";

export default function Page() {
  return (
    <>
    <div className={styles.all}></div>
      <Text/>
      <EmblaCarousel/>
      <Evolution/>
    </>
  );
}

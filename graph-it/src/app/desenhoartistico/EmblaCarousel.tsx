"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import styles from "./EmblaCarousel.module.css";

export default function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);
  return (
    <div className={styles.all}>
      <div className={styles.sub_all}>
        <h1 className={styles.title}>Galeria</h1>
        <div className={styles.embla} ref={emblaRef}>
          <div className={styles.embla__container}>
            <div className={styles.embla__slide}>
              <img className={styles.card} src="/desenho1.jpg" alt="desenho1" />
              <img className={styles.card} src="/desenho2.jpg" alt="desenho2" />
              <img className={styles.card} src="/desenho3.jpg" alt="desenho3" />
              <img className={styles.card} src="/desenho4.jpg" alt="desenho4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

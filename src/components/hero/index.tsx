import Image from "next/image";
import styles from "./styles.module.scss";
import { ReactElement } from "react";

interface HeroProps {
  heading: string;
  buttonUrl: string;
  buttonTitle: string;
  bannerUrl: string;
  icon: ReactElement;
}

export function Hero({
  heading,
  buttonUrl,
  buttonTitle,
  bannerUrl,
  icon,
}: HeroProps) {
  return (
    <main className={styles.main}>
      <div className={styles.containerHero}>
        <h1 className={styles.title}>{heading}</h1>
        <a target="_blank" href={buttonUrl} className={styles.link}>
          {icon}
          {buttonTitle}
        </a>
      </div>
      <div className={styles.contentBanner}>
        <Image
          className={styles.banner}
          alt={heading}
          src={bannerUrl}
          priority={true}
          fill={true}
          sizes="(max-widith: 480px) 100vw, (max-width:1024px) 75vw, 50vw"
        />
      </div>
    </main>
  );
}

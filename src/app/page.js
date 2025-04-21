import Image from "next/image";
import styles from "./page.module.css";
import ImageSlider from "../components/ImageSlider";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
      <ImageSlider  />
      </main>
      <footer className={styles.footer}>
        <a
          href="https://www.facebook.com/myova.am?mibextid=wwXIfr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/images/facebook-icon.png"
            alt="File icon"
            width={30}
            height={30}
          />
        </a>
        <a
          href="https://www.instagram.com/myova.am/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/images/instagram-icon.png"
            alt="Window icon"
            width={30}
            height={30}
          />
        </a>
        <a
          href="https://web.telegram.org/k/#7356054638"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/images/telegram-icon.png"
            alt="Globe icon"
            width={30}
            height={30}
          />
        </a>
      </footer>
    </div>
  );
}

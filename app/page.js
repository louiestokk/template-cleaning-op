import Image from "next/image";
import styles from "./page.module.css";
import HeaderComp from "../components/HeaderComp";
import HeroComp from "@/components/HeroComp";
export default function Home() {
  return (
    <div className={styles.page}>
    <header className={styles.header}>
<HeaderComp />
    </header>
      <main className={styles.main}>
    <HeroComp />
      </main>
      <footer className={styles.footer}>
      
      </footer>
    </div>
  );
}

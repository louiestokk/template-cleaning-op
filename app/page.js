import Image from "next/image";
import styles from "./page.module.css";
import HeaderComp from "../components/HeaderComp";
import HeroComp from "../components/HeroComp";
import HogerSection from "../components/HogerSection";
import LeftSection from "../components/LeftSection";
import TjansterCarousal from "../components/TjansterCarousal";
import AccordionComp from "../components/AccordionComp";
export default function Home() {
  return (
    <div className={styles.page}>
    <header className={styles.header}>
<HeaderComp />
    </header>
      <main className={styles.main}>
    <HeroComp />
    <div style={{height:'30px'}}></div>
    <HogerSection/>
    <div style={{height:'50px'}}></div>
    <TjansterCarousal />
    <div style={{height:'70px'}}></div>
    <LeftSection />
    <AccordionComp />
      </main>
      <footer className={styles.footer}>
      
      </footer>
    </div>
  );
}

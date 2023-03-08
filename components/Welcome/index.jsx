import styles from "../../styles/welcome.module.css";
import {RxDoubleArrowDown} from "react-icons/rx"
import { useRouter } from 'next/router'

export const Welcome = () => {
  const scrollTop = () => {
    const height = screen.height;
    window.scrollTo({ top: height, behavior: "smooth" });
  };
  const router = useRouter();
  const goToInstall = () => {
    router.push('/install')
  }


  return (
    <section className={styles.welcome_container}>
      <div className={styles.logo} >
        <img src="./images/logo_white.png" alt="Logo Historicas"/>
      </div>
      <h1>"No somos histéricas, somos históricas"</h1>
      <div>
        <p className={styles.install}>Instala esta app y recibe cada día una notificación sobre una mujer histórica 🔔</p>
        <br />
        <p className={styles.ux_install} onClick={goToInstall}>¿Cómo instalar Históricas?</p>
      </div>
      <span className={styles.ux}>👉🏾Para una mejor experiencia usa tu móvil 👈🏾</span>
      <div className={styles.btn} onClick={scrollTop}>
        <RxDoubleArrowDown />
        <p>La Histórica del Día</p>
        <RxDoubleArrowDown />
      </div>
    </section>
  );
};

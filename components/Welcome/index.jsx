import styles from "../../styles/welcome.module.css";
import {RxDoubleArrowDown} from "react-icons/rx"

export const Welcome = () => {
  const scrollTop = () => {
    const height = screen.height;
    window.scrollTo({ top: height, behavior: "smooth" });
  };

  return (
    <section className={styles.welcome_container}>
      <div className={styles.logo} >
        <img src="./images/logo_white.png" alt="Logo Historicas"/>
      </div>
      <h1>"No somos histéricas, somos históricas"</h1>
      <p className={styles.install}>Instala esta app y recibe cada día una notificación sobre una mujer histórica 🔔</p>
      <span>📲</span>
      <p>Tap en el icono de Compartir sitio web y en ‘Añadir a Inicio’</p>
      <p className={styles.ux}>👉🏾Para una mejor experiencia usa tu móvil 👈🏾</p>
      <div className={styles.btn} onClick={scrollTop}>
        <RxDoubleArrowDown />
        <p>La Histórica del Día</p>
        <RxDoubleArrowDown />
      </div>
    </section>
  );
};

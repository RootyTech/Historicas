import Image from 'next/image'
import Logo from '../../assets/Rooty.png';
import Top from '../../assets/top.png';
import styles from '../../styles/footer.module.css'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
        <a href="#top">
            <Image
                src={Top}
                alt="To top"
                width={40}
                height={40}
            />
        </a>
        <span>
            Con esta app no se quiere incomodar a ninguna de las mujeres aquí compartidas. 
            Solo es una iniciativa para darle visibilidad a su rol en la sociedad 😊
        </span>
        <h3>Hecho con 💜</h3>
        
        <Image
            src={Logo}
            alt="Rooty logo"
            width={40}
            height={40}
        />
    </footer>
  );
}
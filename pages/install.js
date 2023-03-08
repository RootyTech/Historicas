import stylesInstall from "../styles/install.module.css";
import styles from '../styles/form.module.css'
import { useRouter } from 'next/router'
import { Footer } from "@/components/Footer";
import Head from 'next/head'
import {BsAndroid, BsApple} from 'react-icons/bs'
export default function Install() {
  const router = useRouter();
  const goToInstall = () => {
    router.push('/install')
  }
  const goToHome = () => {
    router.push('/')
  }

  return (
    <>
        <Head>
            <title>Históricas | Instalación</title>
            <meta name="description" content="Compártele al mundo esa mujer que inspira y lucha con nosotras día a día" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            {/* <link rel="icon" href="/favicon.ico" /> */}
        </Head>
        <main className={stylesInstall.container}>
            <div className={styles.logo}>
                <img src='./images/logo_black.png' alt='Logo historicas' onClick={goToHome}/>
            </div>
            <h1>Guia de instalación</h1>
            
            <p><BsAndroid /> Android</p>
            <video src="./images/TutorialAndroid.mp4" autoPlay loop width="250" playsinline>Video Tutorial Android</video>
            
            <p><BsApple />IOS</p>
            <video src="./images/TutorialiOS.mp4" autoPlay loop width="250" playsinline>Video Tutorial IOS</video>
        </main>
        <Footer />
    </>
  );
};
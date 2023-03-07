import styles from "../../styles/historica.module.css";
import html2canvas from 'html2canvas';
import Link from 'next/link'
import { 
    FaTwitter, FaYoutube, FaFacebook, FaGoodreads, FaGithub, 
    FaBehance, FaDribbble, FaTiktok, FaTwitch, FaLinkedin, FaSpotify, FaLink
} from "react-icons/fa";
import {AiFillInstagram} from "react-icons/ai"
import Image from "next/image";
import { useEffect, useState } from "react";
export const Historica = ({data}) => {
    const {
        photo,
        fullname,
        country,
        description,
        networkOne,
        networkOneLink,
        networkTwo,
        networkTwoLink,
        networkThree,
        networkThreeLink,
        networkFour,
        networkFourLink,
        networkFive,
        networkFiveLink,
    } = data;
    const socialMedia = [
        {[networkOne]: networkOneLink},
        {[networkTwo]: networkTwoLink},
        {[networkThree]: networkThreeLink},
        {[networkFour]: networkFourLink},
        {[networkFive]: networkFiveLink},
    ]
    const [image, setImage] = useState({width:0, height:0});

    const share = async (event) => {
        let elementHTML = document.getElementById('capture')
        const canvasStory = await html2canvas(elementHTML, {
          letterRendering: 1,
          allowTaint: true,
          useCORS: true,
        });

        // document.body.appendChild(canvasStory);

        const dataUrl = canvasStory.toDataURL();
        const blob = await (await fetch(dataUrl)).blob();

        const filesArray = [
          new File(
            [blob],
            'historica.png',
            {
              type: blob.type,
              lastModified: new Date().getTime()
            }
          )
        ];

        const shareData = {
          files: filesArray,
          url: 'http://localhost:3000'
        };

        navigator.share(shareData);
    }

    const download = async (event) => {
    }

    const calPhoto = (url) => {
        let img = document.createElement("img");
        img.src = url;
        setImage({width: img.naturalWidth, height:img.naturalHeight})
    }
    const background = {
        backgroundImage: `url('${photo}')`,
        backgroundColor: "#B4FFD4",
        width:"100%",
        height:"100%",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
    }
    return (
        <section className={styles.container}>
            {console.log(socialMedia)}
            <section id='capture'>
                <div className={styles.historica_data_header}>
                    <div style={background}></div>
                    {/* <img src={photo} alt="Historica image" /> */}

                    <section>
                        <h1>{fullname}</h1>
                        <span>
                            <img src={`https://flagcdn.com/w80/${country.toLocaleLowerCase()}.png`} alt="country flag" />
                            {" "+country}</span>
                    </section>
                </div>
                <p className={styles.histoica_data_description}>{description}</p>
                <section className={styles.historica_social_media}>
                    {
                        socialMedia.map((net, ind)=>(
                            Object.keys(net)[0] !== "undefined" &&
                            <a key={ind} href={Object.values(net)[0]}>
                                {
                                    Object.keys(net)[0] === "Instagram" ? <AiFillInstagram/> :
                                    Object.keys(net)[0] === "Twitter" ? <FaTwitter/> :
                                    Object.keys(net)[0] === "Twitch" ? <FaTwitch/> :
                                    Object.keys(net)[0] === "YouTube" ? <FaYoutube/> :
                                    Object.keys(net)[0] === "Dribbble" ? <FaDribbble/> :
                                    Object.keys(net)[0] === "Facebook" ? <FaFacebook/> :
                                    Object.keys(net)[0] === "Spotify" ? <FaSpotify/> :
                                    Object.keys(net)[0] === "LinkedIn" ? <FaLinkedin/> :
                                    Object.keys(net)[0] === "Behancee" ? <FaBehance/> :
                                    Object.keys(net)[0] === "TikTok" ? <FaTiktok/> :
                                    Object.keys(net)[0] === "Goodreads" ? <FaGoodreads/> :
                                    Object.keys(net)[0] === "GitHub" ? <FaGithub/> : <FaLink/>
                                }
                            </a>
                        ))
                    }
                </section>
            </section>
            <section className={styles.share_historica}>
                <p>Enseñale a todxs en internet <span>La Histórica del día</span></p>
                <button onClick={(event) => share(event)} className={styles.button}>Icon Compatir</button>
                <button id="download" onClick={(event) => download(event)} className={styles.button}>Icon Descargar</button>
            </section>
            <section className={styles.add_historica}>
                <p>¿Conoces a más mujeres históricas? </p>
                <div>
                <Link href="/form">
                    Icon Añadir
                </Link>
                </div>
            </section>
        </section>
    );
};

import { useState } from 'react'
import Image from 'next/image'
import Head from 'next/head'
import { FaLink } from "react-icons/fa";
import { Footer } from '@/components/Footer';
import Star from '../assets/star.png';
import { useRouter } from 'next/router'
import styles from '../styles/form.module.css'
import { Codes } from '../libs/CodeFlags';
import { NetworkList, IconNetwork } from '../libs/Networks';
import { fetchData } from '@/libs/FethData';
import { Toaster, toast } from 'react-hot-toast';

export default function Home() {
    let links = ['One', 'Two', 'Three', 'Four', 'Five'];
    
    const [country, setCountry] = useState();
    const [network, setNetwork] = useState(['','','','','']);
    const [urlMsj, setUrlMsj] = useState('');

    const handlerChangeIcon = (value, index) => {
        setNetwork(prevState => {

            let AuxArray = [...prevState];

            let FavIcon = value !== "Other" ? NetworkList.filter((item) => item.name === value) : [{name: "Other"}];

            AuxArray[index] = FavIcon[0].name; 
            return AuxArray
        });
    }
    
    const sendDataForm = (e) => {
        e.preventDefault();
        const data = {
          fullname: e.target.fullname.value,
          description: e.target.description.value,
          country: e.target.country.value,
          photo: e.target.photo.value,
          networkOne: e.target.networkOne.value,
          networkOneLink: e.target.networkOneLink.value,
          networkTwo: e.target.networkTwo.value,
          networkTwoLink: e.target.networkTwoLink.value,
          networkThree: e.target.networkThree.value,
          networkThreeLink: e.target.networkThreeLink.value,
          networkFour: e.target.networkFour.value,
          networkFourLink: e.target.networkFourLink.value,
          networkFive: e.target.networkFive.value,
          networkFiveLink: e.target.networkFiveLink.value,
        }
        /**Validaciones */
        const urlPattern = /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
        let fields = [];
        if (!data.photo.match(urlPattern) && data.photo.length > 0) {
          fields.push("photo")
        } 
        if (!data.networkOneLink.match(urlPattern) && data.networkOneLink.length > 0) {
          fields.push("networkOneLink")
        } 
        if (!data.networkTwoLink.match(urlPattern) && data.networkTwoLink.length > 0) {
          fields.push("networkTwoLink")
        } 
        if (!data.networkThreeLink.match(urlPattern) && data.networkThreeLink.length > 0) {
          fields.push("networkThreeLink")
        } 
        if (!data.networkFourLink.match(urlPattern) && data.networkFourLink.length > 0) {
          fields.push("networkFourLink")
        }
        if (!data.networkFiveLink.match(urlPattern) && data.networkFiveLink.length > 0) {
          fields.push("networkFiveLink")
        }
        setUrlMsj(fields);
        !fields.length && FetchDataAirtable(data);
        document.getElementById('form_send').reset();
        // !fields.length && console.log("data a enviar", data);
        /**aqui se mira si el fields tiene algo y si tiene no se hace el post, de lo contrario si xd */
    }

  const FetchDataAirtable = async (data) => {

      let FinalFormatData = {
          ...data,
          country: Codes.filter((item) => item.code === data.country )[0].name,
          networkOne: data.networkOneLink === '' ? null : data.networkOne,
          networkTwo: data.networkTwoLink === '' ? null : data.networkTwo,
          networkThree: data.networkThreeLink === '' ? null : data.networkThree,
          networkFour: data.networkFourLink === '' ? null : data.networkFour,
          networkFive: data.networkFiveLink === '' ? null : data.networkFive,
      }

      const result = fetchData("https://api.airtable.com/v0/app6QkHya20rCFqu4/tbl6L53IbxznTdJxS", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${process.env.NEXT_PUBLIC_AIRTABLE_TOKEN}`
          },
          body: JSON.stringify({
              "records": [
                  {
                      "fields": {
                          ...FinalFormatData,
                      }
                  }
              ]
          })
      })

      console.log("HISTÓRICA AGREGADA CON ÉXITO");
      toast.success('HISTÓRICA AGREGADA CON ÉXITO');
  }

  const router = useRouter();
  const goToHome = () => {
    router.push('/')
  }

  return (
    <>
      <Head>
        <title>Históricas | Formulario</title>
        <meta name="description" content="Compártele al mundo esa mujer que inspira y lucha con nosotras día a día" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main id='top' className={styles.containerForm}>
        <div className={styles.logo}>
          <img src='./images/logo_black.png' alt='Logo historicas' onClick={goToHome}/>
        </div>
        {/* <h1 className={styles.title}>Históricas</h1> */}
        {/* /**Logo**/}
        <p>Compartele al mundo esa mujer que inspira y lucha con nosotras día a día para que en la historia estemos todxs 💟🌈</p>
        <form className={styles.form} id="form_send" onSubmit={(event) => sendDataForm(event)}>
          <label htmlFor="fullname">Nombre*</label>
          <input id='fullname' name="fullname" type="text" required />
          
          <label htmlFor="country">País*</label>
          <div className={styles.country}>
          {
            country &&
                <img
                    src={`https://flagcdn.com/w20/${country.toLocaleLowerCase()}.png`}
                    width="20"
                    height="18"
                    alt={country} />
          }
          <select onChange={(noc) => { setCountry(noc.target.value) }} name="country">
            {
                Codes.map((item, index) => {
                    return (
                        <option key={item.name} value={item.code}>
                            {item.name}
                        </option>
                    )
                })
            }
          </select>
          </div>
          
          <label htmlFor="description">Descripción*</label>
          <input id='description' name="description" type="text" required minLength="20" maxLength="200"/>
          
          <label htmlFor="photo">Foto (URL pública de la foto)</label>
          <input id='photo' name="photo" type="text"/>
          {
            urlMsj.includes("photo") ?
            <span>👀 La dirección de la imagen tiene un error</span>
            : ""
          }
          <label htmlFor="">Redes sociales</label>
          <section className={styles.social_media}>
                {
                    links.map((linkumber, indexLink) => (
                        <section key={`network__container__${linkumber}`}>
                            <div>
                                <div id='network__name'>
                                    { network[indexLink] != '' ? <IconNetwork PropsName={network[indexLink]} /> : <FaLink />}
                                    <select onChange={(event) => handlerChangeIcon(event.target.value, indexLink)} key={`Link-${linkumber}`} name={`network${linkumber}`}>
                                        <option value="Other">Other</option>
                                        {
                                            NetworkList.map((item) => {
                                                return (
                                                    <option key={`${item.name}-link-${linkumber}`} value={item.name}>{item.name}</option>
                                                )
                                            })
                                        }
                                    </select>    
                                </div>
                                <div id='network__link'>
                                <input placeholder='http://' id='name' name={`network${linkumber}Link`} type="text" key={`network${linkumber}Link`} />
                                </div>
                            </div>
                            {
                            urlMsj.includes(`network${linkumber}Link`) ?
                            <span>👀Tienes un error en este enlace</span>
                            : ""
                            }
                        </section>
                    ))
                }
          </section>     
          <button className={styles.btn}> 
              <Image src={Star}
              alt="Rooty logo"
              width={12}
              height={12}>
            </Image> 
            Guardar
          </button>
        </form>
        <Toaster position="bottom-center" reverseOrder={false} />
      </main>
      <Footer />
    </>
  )
}

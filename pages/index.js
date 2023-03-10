import Head from 'next/head'
import { useEffect, useState } from 'react'
import { fetchData } from '../libs/FethData';
import { Codes } from '../libs/CodeFlags';
import { Footer } from "@/components/Footer";
import { Historica } from "@/components/Historica";
import { Welcome } from "@/components/Welcome";
import { GetHistorica, SeenHistorica } from '../libs/GetHistoricaData';
import { generateRandomNumber } from '@/libs/RandomNumber';

import { Firebase } from '../libs/Firebase';

export default function Home() {
  const [historica, setHistorica] = useState();

  useEffect(() => {

    if(navigator.userAgent.includes("Instagram")){
        const redirect = document.createElement('a');
        redirect.href = "https://historicas.vercel.app";
        redirect.target = "_blank";
        redirect.click();
    }

    const FirebaseTest = async () => {

      let resultFirebase = Firebase();
  
      if (!resultFirebase) {
        let error = JSON.stringify(resultFirebase);
        const result = await fetchData("https://api.airtable.com/v0/app6QkHya20rCFqu4/tbltkSvoT8vWtYaEO", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
                  "Authorization": `Bearer ${process.env.NEXT_PUBLIC_AIRTABLE_TOKEN}`
              },
              body: JSON.stringify({
                  "records": [
                      {
                          "fields": {
                              Notes: error,
                          }
                      }
                  ]
              })
          })
      }
    }
    FirebaseTest();

    const AirtableData = async () => {
      const validateToday = await fetchData(`https://api.airtable.com/v0/app6QkHya20rCFqu4/tblVznChX1OvuPF89`, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.NEXT_PUBLIC_AIRTABLE_TOKEN}`
        }
      });

      let dateToday = validateToday.records.filter((item) => item.fields.Date === new Date().toJSON().slice(0,10));

      if (dateToday.length == 0) {

            let oldRadom = validateToday.records.map((item) => item.fields.IdHistorica )

            let lastHistorica = await fetchData('https://api.airtable.com/v0/app6QkHya20rCFqu4/tbl6L53IbxznTdJxS?maxRecords=1&sort%5B0%5D%5Bdirection%5D=desc&sort%5B0%5D%5Bfield%5D=id', {
              headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${process.env.NEXT_PUBLIC_AIRTABLE_TOKEN}`
              }
            })

            let limit = lastHistorica.records[0].fields.id;

            let IdRandom = generateRandomNumber(1, limit);
            while (oldRadom.includes(IdRandom)) {
              IdRandom = generateRandomNumber(1, limit);
            }

            const result = await fetchData("https://api.airtable.com/v0/app6QkHya20rCFqu4/tblVznChX1OvuPF89", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${process.env.NEXT_PUBLIC_AIRTABLE_TOKEN}`
            },
            body: JSON.stringify({
                "records": [
                    {
                        "fields": {
                            IdHistorica: IdRandom,
                            Date: new Date().toJSON().slice(0,10)
                        }
                    }
                ]
            })
        })

        GetHistorica(result.records[0].fields.IdHistorica, setHistorica);

      } else {
        GetHistorica(dateToday[0].fields.IdHistorica, setHistorica);
      }

    }
    AirtableData();

    return () => { }

  }, []);

  return (
    <>
      <Head>
        <title>Históricas {historica && `| ${historica.fields.fullname}`}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Welcome />
      {historica ? <Historica data={historica.fields}/> :<p>Cargando...</p>}
      <Footer />
    </>
  );
};


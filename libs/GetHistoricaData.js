import { fetchData } from './FethData';
import { Codes } from './CodeFlags';

export const GetHistorica = async (Id, setHistorica) => {
  const dataResponse = await fetchData(`https://api.airtable.com/v0/app6QkHya20rCFqu4/tbl6L53IbxznTdJxS?filterByFormula=id=${Id}`, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.NEXT_PUBLIC_AIRTABLE_TOKEN}`
    }
  });

  const Today = dataResponse.records[0];
  let flag = Codes.filter((item) => item.name === Today.fields.country)[0].code
  Today.fields.code = flag;
  SeenHistorica(Today.id)
  setHistorica(Today);
}

export const SeenHistorica = async (IdRecord) => {
  const dataResponse = await fetchData(`https://api.airtable.com/v0/app6QkHya20rCFqu4/tbl6L53IbxznTdJxS/${IdRecord}`, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.NEXT_PUBLIC_AIRTABLE_TOKEN}`
    },
    method: "PATCH",
    body: JSON.stringify({
      "fields": {
        "stateSeen": true
      }
    })
  });
}
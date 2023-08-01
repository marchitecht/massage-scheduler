import { google } from "googleapis";
import keys from "../../secrets.json";

export default function handler(req, res) {
  try {
    const client = new google.auth.JWT(
      keys.client_email,
      null,
      keys.private_key,
      ["https://www.googleapis.com/auth/spreadsheets"]
    );

    client.authorize(async function (err, tokens) {
      if (err) {
        return res.status(400).send(JSON.stringify({ error: true }));
      }

      const gsapi = google.sheets({ version: "v4", auth: client });

      //CUSTOMIZATION FROM HERE
      const opt = {
        spreadsheetId: process.env.SPREADSHEET_ID,
        range: "services!A:E",
      };

      let data = await gsapi.spreadsheets.values.get(opt);
      // console.log(data, 'sheets');
      const services = data.data.values
        .map(([id, title, description, minutes, price]) => ({
          id: Number(id),
          title,
          description,
          minutes: Number(minutes),
          price: Number(price),
        }))
        .slice(1);
      // console.log(services);



      return res.status(200).send(JSON.stringify(services));
    });
  } catch (e) {
    return res
      .status(400)
      .send(JSON.stringify({ error: true, message: e.message }));
  }
}

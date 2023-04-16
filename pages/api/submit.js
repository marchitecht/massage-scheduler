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
        range: "meetings!A:F",
      };

      let data = await gsapi.spreadsheets.values.append({
        client,
        spreadsheetId: opt.spreadsheetId,
        range: opt.range,
        valueInputOption: "USER_ENTERED",
        // resource: {
        //     ['23', "asfds",'1asdasd23' ]
        // },
      });

      res.send('All good')
    });
  } catch (e) {
   console.log(e);
  }
}

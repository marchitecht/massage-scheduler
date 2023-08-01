import { google } from "googleapis";
import keys from "../../secrets.json";
export async function handler({ query }) {
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
      const gsapi = google.sheets({ version: "v4", auth });
      const { id } = query;
      const range = `Sheet1!A${id}:C${id}`;

      const response = await sheets.spreadsheets.values.get({
        spreadsheetId: process.env.SPREADSHEET_ID,
        range,
      });
      console.log(response.data, "===response");

      const [title, content] = response.data.values[0];
    });
  } catch (error) {}
}
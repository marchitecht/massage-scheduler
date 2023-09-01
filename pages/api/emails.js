import { google } from "googleapis";
import keys from "../../secrets.json";

const handler = async (req, res) => {
  const { email } =
  req.body.form;
  console.log(req.body.form);
  try {
    const client = new google.auth.JWT(
      keys.client_email,
      null,
      keys.private_key,
      ["https://www.googleapis.com/auth/spreadsheets"]
    );
    const sheets = google.sheets({ version: "v4", auth: client });

    const requestOptions = {
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: "emails!A:G",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[email]],
      },
    };

    const response = await sheets.spreadsheets.values.append(requestOptions);
    console.log(response, '====');
    return res.status(200).json({ data: response.config.data.values[0] });
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export default handler;

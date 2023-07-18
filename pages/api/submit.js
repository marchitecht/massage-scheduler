import { google } from "googleapis";
import keys from "../../secrets.json";

const handler = async (req, res) => {
  const { id, startDateTime, endDateTime, service, name, tel, email } =
  req.body.form;
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
      range: "meetings!A:G",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[id, startDateTime, endDateTime, service, name, tel, email]],
      },
    };

    const response = await sheets.spreadsheets.values.append(requestOptions);
    return res.status(200).json({ data: response.config.data.values[0] });
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export default handler;

// import { google } from "googleapis";
// import keys from "../../secrets.json";

// export default function handler(req, res) {
//   try {
//     const client = new google.auth.JWT(
//       keys.client_email,
//       null,
//       keys.private_key,
//       ["https://www.googleapis.com/auth/spreadsheets"]
//     );

//     client.authorize(async function (err, tokens) {
//       if (err) {
//         return res.status(400).send(JSON.stringify({ error: true }));
//       }

//       const gsapi = google.sheets({ version: "v4", auth: client });

//       //CUSTOMIZATION FROM HERE
//       const opt = {
//         spreadsheetId: process.env.SPREADSHEET_ID,
//         range: "meetings!A:F",
//       };

//       let data = await gsapi.spreadsheets.values.append({
//         client,
//         spreadsheetId: opt.spreadsheetId,
//         range: opt.range,
//         valueInputOption: "USER_ENTERED",
//         // resource: {
//         //     ['23', "asfds",'1asdasd23' ]
//         // },
//       });

//       res.send('All good')
//     });
//   } catch (e) {
//    console.log(e);
//   }
// }

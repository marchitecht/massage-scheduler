import { google } from "googleapis";

export async function getServerSideProps({ query }) {
  const auth = await google.auth.getClient({
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  const sheets = google.sheets({ version: "v4", auth });
  const { id } = query;
  const range = `Sheet1!A${id}:C${id}`;
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SPREADSHEET_ID,
    range,
  });
  const [title, content] = response.data.values[0];
  return {
    props: {
      title,
      content,
    },
  };
}
export default function Post({ title, content }) {
  console.log(content);
  return (
    <article>
      <h1>{title}</h1>
      <div>{content}</div>
    </article>
  );
}

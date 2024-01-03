import { google } from "googleapis";
import keys from "../../secrets.json";

export default function handler(req, res) {
  try {
    const client = new google.auth.JWT(
      "marat-musin@massage-373112.iam.gserviceaccount.com",
      null,
      "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDc9R6eMBBRGahg\nMXDNaRUiZkHVQFr65hE3NH0yeIDqxOuIjGiCPxeF0fyZKLFyAaNQfBSjyHskVycO\n4uaiCir9XMC971HFF/kN9uHqVFCRQFzov2YayPthwXcCFcKwvjYUihgGfaMlWS5G\ncVyDMafD1WlJGCUyMMs5cHel2+R35MiWP4xkkkJdddrVgTebJUfItF6hyg1I2Tjw\nTm6KvFUgsoRMOieI3bpX42F2n22Nmca9MwJSL41G06t9Z2JyOKG+xTReoetvnDei\n57daSSEvNebtRce0yuInlqpMc8fQevGd6SDaIcrGLGW24NANpJB97PbXHPOvr8zM\nx+/IZxyPAgMBAAECggEAWs3tgEr2Wa32sVmAJxp5UgK+KVpiSVwFVS+gB/7X1COL\nPDmftW8iRp+OdI7xpY2gxTHI9aotWTjr10VOTOdq1Wap2ySf8SSx+JguLbPqzFas\nGAaYeoeAL6NnOhchRKtW5EgAKaK2SmIFD3QE9fGRJXzt4NkoaCD/U6KxuRrOIKrE\nMZstyRdGa8C7nSseE1UHynG42b0YS62DBUdHVoGEosV3S+cB3oWcEGsEj2TY0SLC\nm9/6ZSJOlDyZmVZQ4/XeVZ8dxQm4d/3SSXvn3lP+gG0VccPxWeK/gBItN+wCAatk\ny/dJzcSmdPYAWy1DvuLbLg85SAlmYxjfgxc23X9HGQKBgQD7OiFRvjofySLjWFOa\nB+SU1iRBBAMArlDuOIo/IVqr/h5DqX993eEKEYtYRsxcAgHNpN7+zZlSORGQlVlm\nb6lxKIpXd5WynW0BEmdlq0jy2acvdlepul2UeFgxnjswVCXCZswWqykQU2z711B+\n8K2xDAlXvKrjLR1gdNIgZupH7QKBgQDhJ8UnRDHCHLhpLhbNEViQqIEMH2OgOqDK\nDymgfthlirJYSk9kB1y9wLE9vIYuFtPxY8/VbUE16AV6hL8ZhUZ7k8Eb1/fRu1dL\nGh0hXfsWgEIY+A/0O81ILs4b95kY7cMuoc6YvW3iuZM7IptJU7oRevjfIIDZsIk3\nbeGo5cSu6wKBgFh+QHBXzoeVxQlJ+qDeOOFIkRqpvBkITg+rsN7N8+9zott4oCUI\n/BUc2vWscp3SQypZ8gbVCzXQTmSchxIzMP9gJWLsB7oUA+qFvhAtBpQsoNxyFiz+\nLap3vbE0qGq8qVRR+3/cqKlMia4oSP197+DWeZADMDq3kIqCe+XX+px9AoGACwHq\nvZSz6g2FZn7+VmA2uDvEs1cFg9vZ6Ib9Pf91jOFO/soDP5ysiApXn/ELjk1HZ1G9\n421H9t61Bdxfi1vcqkX69uWEFBjYl69bJTp3AA6dLKNUBFi4HINNSEi+j11wYWM/\num/oY2E3NXjnppoVSq18ZUwtgHcE/lS854j0KKkCgYEA0MFWmo+B6cOzGhSWbBvA\nD9fpfFfPwelHzKUM/bzTAlB+02Rzp0WXz8v5PU5LRmyLjsFT8b/6wh7WVUhtyp39\n3difSjfMPIISHRJ9J9Rz2d/vOFpNFW/ezNSdo+tdrcLr7SjU4G5BF9wzaAxElgqi\nxZN/qcvHKd0X7PKri25iUwA=\n-----END PRIVATE KEY-----\n",
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
      const services = data.data.values
        .map(([id, title, description, minutes, price]) => ({
          id: Number(id),
          title,
          description,
          minutes: Number(minutes),
          price: Number(price),
        }))
        .slice(1);

      return res.status(200).send(JSON.stringify(services));
    });
  } catch (e) {
    return res
      .status(400)
      .send(JSON.stringify({ error: true, message: e.message }));
  }
}

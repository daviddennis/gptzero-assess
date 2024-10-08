const WebSocket = require("ws");

async function getRichieRichResponse(prompt) {

  return new Promise((resolve, reject) => {
    const ws = new WebSocket("ws://localhost:8082/v1/stream");

    let response = "";

    ws.on("open", () => {
      ws.send(prompt);
    });

    ws.on("message", (data) => {
      response += data.toString();
    });

    ws.on("close", () => {
      resolve(response);
    });

    ws.on("error", (err) => {
      reject(err);
    });

  });

}

module.exports = {
  getRichieRichResponse,
};

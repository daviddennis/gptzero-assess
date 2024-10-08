const http = require("http");
const WebSocket = require("ws");
const url = require("url");

const {
  getModelResponseGenerator,
} = require("./services/llmModel");

const server = http.createServer();
const wsServer = new WebSocket.Server({ noServer: true });
const PORT = 8082;

wsServer.on("connection", async (ws) => {
  ws.on("message", async (prompt) => {
    const modelOutputGenerator = getModelResponseGenerator(prompt);
    let result = await modelOutputGenerator.next();
    while (!result.done) {
      ws.send(result.value);
      result = await modelOutputGenerator.next();
    }
    ws.close();
  });
});

server.on("upgrade", (request, socket, head) => {
  const pathname = url.parse(request.url).pathname;

  if (pathname === "/v1/stream") {
    wsServer.handleUpgrade(request, socket, head, (ws) => {
      wsServer.emit("connection", ws, request);
    });
  } else {
    socket.destroy();
  }
});

server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

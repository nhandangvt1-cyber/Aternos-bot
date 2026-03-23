const net = require("net");

const host = "Factory-Esl4.aternos.me";
const port = 41622;

function pingServer() {
    const client = new net.Socket();

    client.connect(port, host, () => {
        console.log("Server online!");
        client.destroy();
    });

    client.on("error", () => {
        console.log("Ping lỗi!");
    });
}

pingServer();

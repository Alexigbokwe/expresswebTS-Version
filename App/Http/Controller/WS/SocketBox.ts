import ServiceProvider from "Elucidate/Support/ServiceProvider";
import socketOptions from "Config/socket";
import http from "http";

class SocketBox extends ServiceProvider {
  io: any;
  constructor() {
    super();
    let appinstance = this.app.use("appInstance");
    let httpServer = http.createServer(appinstance);
    this.io = require("socket.io")(httpServer, socketOptions);
  }
}

export default SocketBox;

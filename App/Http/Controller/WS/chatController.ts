"use strict";
import WsBaseController from "Elucidate/Socket/Base";

class ChatController extends WsBaseController {
  protected socket: any;
  constructor(socket: any) {
    super(socket);
    this.socket = socket;
  }

  onMessage = (data: any)=> {
    // same as: socket.on('message')
    this.socket.emit("message", data);
    console.log(data);
  }

  onClose =() =>{
    // same as: socket.on('close')
  }

  onError =() =>{
    // same as: socket.on('error')
  }
}

export default ChatController;

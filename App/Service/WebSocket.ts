class WebSocket {
  protected io: any;

  server(ioServer: any) {
    this.io = ioServer;
  }

  emit(listener: string, handler: any) {
    this.io.emit(listener, handler);
  }
}

export default new WebSocket();

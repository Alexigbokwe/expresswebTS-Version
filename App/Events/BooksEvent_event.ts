"use strict";
import Emitter from "Elucidate/Emitter";
import BookListener from "App/Listeners/Book_listener"

class BooksEvent {
  params: any;
  /**
   * Create a new event instance.
   * @param {*} params
   */
  constructor(params: any) {
    this.params = params;
    this.listenOn();
    Emitter.emitEvent("BookEvent")
  }

  /**
   * Get the listener to listen to the event.
   */
  public async listenOn() {
    new BookListener("BookEvent", this.params);
  }
}

export default BooksEvent;

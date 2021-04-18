"use strict";
import Emitter from "Elucidate/Emitter";

class Book {
  /**
   * Handle the event.
   * @param {*} eventName
   * @param {*} params
   */
  constructor(eventName: string, params: any) {
    Emitter.bind(eventName, () => {
      console.log(params);
    });
  }
}

export default Book;

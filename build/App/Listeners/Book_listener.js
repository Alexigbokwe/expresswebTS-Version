"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Emitter_1 = tslib_1.__importDefault(require("Elucidate/Emitter"));
class Book {
    /**
     * Handle the event.
     * @param {*} eventName
     * @param {*} params
     */
    constructor(eventName, params) {
        Emitter_1.default.bind(eventName, () => {
            //Do something
        });
    }
}
exports.default = Book;

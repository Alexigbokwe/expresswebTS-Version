"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Emitter_1 = tslib_1.__importDefault(require("Elucidate/Emitter"));
const Book_listener_1 = tslib_1.__importDefault(require("App/Listeners/Book_listener"));
class BooksEvent {
    /**
     * Create a new event instance.
     * @param {*} params
     */
    constructor(params) {
        this.params = params;
        this.listenOn();
        Emitter_1.default.emitEvent("BookEvent");
    }
    /**
     * Get the listener to listen to the event.
     */
    listenOn() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            new Book_listener_1.default("BookEvent", this.params);
        });
    }
}
exports.default = BooksEvent;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Emitter_1 = tslib_1.__importDefault(require("Elucidate/Emitter"));
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
            console.log(this.params);
        });
    }
}
exports.default = BooksEvent;

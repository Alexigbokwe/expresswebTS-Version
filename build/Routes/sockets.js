"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const WS_1 = tslib_1.__importDefault(require("Elucidate/Socket/WS"));
/*
|--------------------------------------------------------------------------
| socket.io
|--------------------------------------------------------------------------
|
| This file is used to register socket.io channels and start the Ws server.
|
*/
exports.default = () => {
    WS_1.default.channel("notification", "chatController");
};

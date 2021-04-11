"use strict";
/*
|---------------------------------------------------------------
| Http Server
|---------------------------------------------------------------
| This file bootstraps ExpressWebJs to start the Http server.
| Application Host, Port and Transfer Protocols are configured
| in the .env file. You are free to configure them.
|
*/
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const app_1 = tslib_1.__importDefault(require("expresswebcorets/lib/app"));
exports.default = app_1.default.start();

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const manager_1 = tslib_1.__importDefault(require("Elucidate/Route/manager"));
/*
    |--------------------------------------------------------------------------
    | Api route
    |--------------------------------------------------------------------------
    |
    | Here is where you can register your application routes. These
    | routes are loaded by the RouteProvider. Now create something great!
    |
*/
manager_1.default.get("/", (req, res) => {
    res.status(200).send("Welcome to ExpressWebJs Typescript Version");
});
//--------------------------------------------------------------------------
exports.default = manager_1.default.exec;

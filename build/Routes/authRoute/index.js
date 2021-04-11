"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const manager_1 = tslib_1.__importDefault(require("Elucidate/Route/manager"));
/*
    |--------------------------------------------------------------------------
    | Authentication Route File
    |--------------------------------------------------------------------------
    |
    | This route handles both login and registration.
    |
    */
manager_1.default.post("/register", "Auth/RegisterController@register");
manager_1.default.post("/login", "Auth/LoginController@login");
module.exports = manager_1.default.exec;

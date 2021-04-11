"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const ENV_1 = tslib_1.__importDefault(require("Elucidate/ENV"));
exports.default = {
    /*
    |--------------------------------------------------------------------------
    | Authenticator
    |--------------------------------------------------------------------------
    |
    | ExpressWebJs does not support session state, incoming requests that
    | you wish to authenticate must be authenticated via a stateless mechanism such as API tokens.
    |
    */
    authenticator: "jwt",
    /*
    |--------------------------------------------------------------------------
    | Jwt
    |--------------------------------------------------------------------------
    |
    | The jwt authenticator works by passing a jwt token on each HTTP request
    | via HTTP `Authorization` header.
    |
    */
    jwt: {
        model: "User_model",
        driver: "jwt",
        uid: "email",
        password: "password",
        secret: ENV_1.default('APP_KEY'),
        options: {
            expiresIn: 86400, //default is 86400 (24 hrs)
        },
    },
};

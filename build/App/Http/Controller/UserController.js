"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const ResponseType_1 = tslib_1.__importDefault(require("Elucidate/HttpContext/ResponseType"));
class UserController {
    constructor(Authenticator) {
        this.Auth = Authenticator;
    }
    index(req, res, next) {
        try {
            ResponseType_1.default.OK(res, 'Alex');
        }
        catch (error) {
            return next(error);
        }
    }
}
exports.default = UserController;

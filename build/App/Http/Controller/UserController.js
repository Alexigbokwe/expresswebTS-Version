"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const ResponseType_1 = tslib_1.__importDefault(require("Elucidate/HttpContext/ResponseType"));
const UserModel_1 = tslib_1.__importDefault(require("App/Model/UserModel"));
class UserController {
    constructor(Authenticator) {
        this.Auth = Authenticator;
    }
    index(req, res, next) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                yield UserModel_1.default.query().then(users => {
                    ResponseType_1.default.OK(res, users);
                }).catch(err => {
                    ResponseType_1.default.NOTFOUND(res, err);
                });
            }
            catch (error) {
                return next(error);
            }
        });
    }
}
exports.default = UserController;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const ResponseType_1 = tslib_1.__importDefault(require("Elucidate/HttpContext/ResponseType"));
const User_model_1 = tslib_1.__importDefault(require("App/Model/User_model"));
class UserController {
    index(req, res, next) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                yield User_model_1.default.query().then(users => {
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

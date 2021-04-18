"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const ResponseType_1 = tslib_1.__importDefault(require("Elucidate/HttpContext/ResponseType"));
const ServiceProvider_1 = tslib_1.__importDefault(require("Elucidate/Support/ServiceProvider"));
class AuthMiddleware extends ServiceProvider_1.default {
    handle(req, res, next) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let Auth = this.app.use("Authenticator");
            let result = yield Auth.processAuthMW(req.headers["authorization"]);
            if (result.type == "error") {
                return ResponseType_1.default.UNAUTHORIZED(res, { auth: false, message: result.msg, payload: result.payload });
            }
            req.user = result.payload;
            yield next();
        });
    }
}
exports.default = AuthMiddleware;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const ResponseType_1 = tslib_1.__importDefault(require("Elucidate/HttpContext/ResponseType"));
class AuthMiddleware {
    constructor(Authenticator) {
        this.handle = (req, res, next) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            let result = yield this.Auth.processAuthMW(req.headers["authorization"]);
            if (result.type == "error") {
                return ResponseType_1.default.UNAUTHORIZED(res, { auth: false, message: result.msg, payload: result.payload });
            }
            req.user = result.payload;
            yield next();
        });
        this.Auth = Authenticator;
    }
}
exports.default = AuthMiddleware;

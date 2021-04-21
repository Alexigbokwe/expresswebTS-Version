"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const ResponseType_1 = tslib_1.__importDefault(require("Elucidate/HttpContext/ResponseType"));
const SocketBox_1 = tslib_1.__importDefault(require("App/Http/Controller/WS/SocketBox"));
class UserController {
    constructor() {
        this.checkSocket = (req, res, next) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                new SocketBox_1.default().io.emit("room", "notification");
                new SocketBox_1.default().io.emit("message", "Data to emit");
                ResponseType_1.default.OK(res, 'testing');
            }
            catch (error) {
                return next(error);
            }
        });
    }
    index(req, res, next) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                //
            }
            catch (error) {
                return next(error);
            }
        });
    }
}
exports.default = UserController;

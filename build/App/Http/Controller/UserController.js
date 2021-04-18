"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const ResponseType_1 = tslib_1.__importDefault(require("Elucidate/HttpContext/ResponseType"));
const BooksEvent_event_1 = tslib_1.__importDefault(require("App/Events/BooksEvent_event"));
const User_model_1 = tslib_1.__importDefault(require("App/Model/User_model"));
class UserController {
    index(req, res, next) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                yield new BooksEvent_event_1.default("Testing event");
                let users = yield User_model_1.default.query();
                return ResponseType_1.default.OK(res, users);
            }
            catch (error) {
                return next(error);
            }
        });
    }
}
exports.default = UserController;

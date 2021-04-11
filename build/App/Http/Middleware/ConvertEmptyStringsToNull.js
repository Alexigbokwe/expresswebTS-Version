"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
class ConvertEmptyStringsToNull {
    handle(req, _res, next) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (Object.keys(req.body).length) {
                req.body = Object.assign(Object.keys(req.body).map((key) => ({
                    [key]: req.body[key] !== "" ? req.body[key] : null,
                })));
            }
            yield next();
        });
    }
}
module.exports = ConvertEmptyStringsToNull;

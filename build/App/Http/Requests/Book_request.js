"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const FormRequest_1 = tslib_1.__importDefault(require("Elucidate/Validator/FormRequest"));
class Book {
    /**
     * Handle the request validation.
     * @param {*} data | e.g request body
     */
    validate(data) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield FormRequest_1.default.make(data, {
                name: "required",
                category: "required"
            });
        });
    }
}
exports.default = new Book();

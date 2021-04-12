"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Model_1 = tslib_1.__importDefault(require("Elucidate/Database/Model"));
class User extends Model_1.default {
}
User.tableName = 'users';
exports.default = User;

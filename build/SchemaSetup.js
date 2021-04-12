"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const ENV_1 = tslib_1.__importDefault(require("expresswebcorets/lib/ENV"));
//@ts-ignore
const database_1 = tslib_1.__importDefault(require("./Config/database"));
class migration {
    constructor() {
        if (ENV_1.default('DB_CONNECTION') != "mongoose") {
            return database_1.default[ENV_1.default('DB_CONNECTION')];
        }
    }
}
exports.default = new migration();

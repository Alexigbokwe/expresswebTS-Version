"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const maker_console_ts_1 = tslib_1.__importDefault(require("maker-console-ts"));
class Testing extends maker_console_ts_1.default {
    constructor() {
        super();
        //The name or signature of the console command.
        this.signature = "";
        /**
         * The name and mode of the console command argument.
         * name is the name of the argument while mode can be REQUIRED or OPTIONAL
         * Example [{name: "Debug", mode: "REQUIRED"},{name: "Task", mode: "REQUIRED"}]
         */
        this.arguments = [];
        /**
         * The console command description.
         * @var string
         */
        this.description = "";
        super.checkCommandName(this.signature);
    }
    /**
     * Execute the console command.
     *
     * @return mixed
     */
    fire() {
        //
    }
}
exports.default = Testing;

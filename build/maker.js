"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Command_1 = tslib_1.__importDefault(require("Command"));
const Kernel_1 = tslib_1.__importDefault(require("App/Console/Kernel"));
const maker_consoleTs_1 = tslib_1.__importDefault(require("maker-consoleTs"));
/*
|--------------------------------------------------------------------------
| Run The Maker Application
|--------------------------------------------------------------------------
|
| When we run the console application, the current CLI command will be
| executed in this console and the response sent back to a terminal
|
*/
maker_consoleTs_1.default.run(Command_1.default, Kernel_1.default);

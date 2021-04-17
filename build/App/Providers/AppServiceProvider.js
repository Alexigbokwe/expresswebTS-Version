"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const ServiceProvider_1 = tslib_1.__importDefault(require("Elucidate/Support/ServiceProvider"));
const Authenticator_1 = tslib_1.__importDefault(require("Elucidate/Auth/Authenticator"));
class AppServiceProvicer extends ServiceProvider_1.default {
    /**
     * Register any application services.
     * @return void
     */
    register() {
        this.app.singleton("Authenticator", Authenticator_1.default, "class");
    }
    /**
     * Bootstrap any application services.
     * @return void
     */
    boot() {
        //
    }
}
exports.default = AppServiceProvicer;

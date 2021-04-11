"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const ServiceProvider_1 = tslib_1.__importDefault(require("Elucidate/Support/ServiceProvider"));
class RouteServiceProvider extends ServiceProvider_1.default {
    /**
     * Define your route prefix binding and control route request limit.
     * Default base route prefix is 'api'
     */
    boot() {
        this.Route = this.app.use("RouteConfigServiceProvider");
        this.Route.routePrefix("api");
        return this.configureRateLimiting();
    }
    /**
     * Configure the rate limiters for the application.
     */
    configureRateLimiting() {
        return this.Route.for("/api/")
            .perMinute(270)
            .errorMessage()
            .httpStatusCode(429)
            .save();
    }
}
exports.default = RouteServiceProvider;

import ServiceProvider from "Elucidate/Support/ServiceProvider";
declare class RouteServiceProvider extends ServiceProvider {
    Route: any;
    /**
     * Define your route prefix binding and control route request limit.
     * Default base route prefix is 'api'
     */
    boot(): any;
    /**
     * Configure the rate limiters for the application.
     */
    configureRateLimiting(): any;
}
export default RouteServiceProvider;

import ServiceProvider from "Elucidate/Support/ServiceProvider";

class RouteServiceProvider extends ServiceProvider {
  Route: any;
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

export default RouteServiceProvider;

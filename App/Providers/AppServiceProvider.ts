import ServiceProvider from "Elucidate/Support/ServiceProvider";
import Authenticator from "Elucidate/Auth/Authenticator";

class AppServiceProvicer extends ServiceProvider {
  /**
   * Bootstrap any application services.
   *
   * @return void
   */
  public boot() {
    //Authenticator
  }

  /**
   * Register any application services.
   *
   * @return void
   */
  public register() {
    this.app.singleton("Authenticator", Authenticator, "class");
  }
}

export default AppServiceProvicer;
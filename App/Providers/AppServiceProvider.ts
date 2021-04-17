import ServiceProvider from "Elucidate/Support/ServiceProvider";
import Authenticator from "Elucidate/Auth/Authenticator";

class AppServiceProvicer extends ServiceProvider {
  /**
   * Register any application services.
   * @return void
   */
   public register() {
    this.app.singleton("Authenticator", Authenticator, "class");
   }
  
  /**
   * Bootstrap any application services.
   * @return void
   */
  public boot() {
    //
  }
}

export default AppServiceProvicer;
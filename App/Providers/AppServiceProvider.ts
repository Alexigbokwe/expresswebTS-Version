import ServiceProvider from "Elucidate/Support/ServiceProvider";
import Authenticator from "Elucidate/Auth/Authenticator";
import UserService from "App/Service/User/UserService";

class AppServiceProvicer extends ServiceProvider {
  /**
   * Register any application services.
   * @return void
   */
  public register() {
    this.app.singleton("Authenticator", Authenticator, "class");
    this.app.singleton("UserService", UserService, "class");
  }

  /**
   * Bootstrap any application services.
   * @return void
   */
  public async boot() {
    // let u = await this.app.use("UserService");
    // let f = await u.getAllUsers();
    // console.log(f);
  }
}

export default AppServiceProvicer;

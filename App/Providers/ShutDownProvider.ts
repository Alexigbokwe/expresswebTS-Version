"use strict";
import ServiceProvider from "Elucidate/Support/ServiceProvider";

class ShutDownProvider extends ServiceProvider {
  /**
   * Bootstrap any application services.
   * @return void
   */
  boot() {
    let application = this.app.use("ApplicationInstance");
    process.on("SIGINT", () => {
      console.log("\n[server] Shutting down...");
      application.close();
      process.exit();
    });

    process.on("SIGTERM", () => {
      console.log("\n[server] Shutting down...");
      application.close();
      process.exit();
    });

    process.on("uncaughtException", () => {
      console.log("\n[server] Shutting down...");
      application.close();
      process.exit();
    });
  }
}

export default ShutDownProvider;

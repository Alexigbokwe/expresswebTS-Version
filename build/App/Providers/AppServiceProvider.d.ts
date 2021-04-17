import ServiceProvider from "Elucidate/Support/ServiceProvider";
declare class AppServiceProvicer extends ServiceProvider {
    /**
     * Register any application services.
     * @return void
     */
    register(): void;
    /**
     * Bootstrap any application services.
     * @return void
     */
    boot(): void;
}
export default AppServiceProvicer;

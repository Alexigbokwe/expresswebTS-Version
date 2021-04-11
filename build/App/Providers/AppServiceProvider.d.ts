import ServiceProvider from "Elucidate/Support/ServiceProvider";
declare class AppServiceProvicer extends ServiceProvider {
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    boot(): void;
    /**
     * Register any application services.
     *
     * @return void
     */
    register(): void;
}
export default AppServiceProvicer;

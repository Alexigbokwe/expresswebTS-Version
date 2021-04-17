declare class Kernel {
    /**
     * The Maker commands provided by your application.
     * @var array
     */
    static commands(): never[];
    /**
     * Define the application's schedule command.
     * @return void
     */
    static schedule(): void;
}

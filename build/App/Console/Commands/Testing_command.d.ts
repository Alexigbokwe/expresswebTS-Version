import Command from "maker-console-ts";
declare class Testing extends Command {
    signature: string;
    arguments: any[];
    description: string;
    constructor();
    /**
     * Execute the console command.
     *
     * @return mixed
     */
    fire(): void;
}
export default Testing;

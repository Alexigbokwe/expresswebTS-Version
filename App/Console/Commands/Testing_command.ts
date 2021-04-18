"use strict";
import Command from "maker-console-ts";

class Testing extends Command {
  signature: string;
  arguments: any[];
  description: string;
  constructor() {
    super();
    //The name or signature of the console command.
    this.signature = "";

    /**
     * The name and mode of the console command argument.
     * name is the name of the argument while mode can be REQUIRED or OPTIONAL
     * Example [{name: "Debug", mode: "REQUIRED"},{name: "Task", mode: "REQUIRED"}]
     */
    this.arguments = [];

    /**
     * The console command description.
     * @var string
     */
    this.description = "";

    super.checkCommandName(this.signature);
  }

  /**
   * Execute the console command.
   *
   * @return mixed
   */
  fire() {
    //
  }
}

export default Testing;

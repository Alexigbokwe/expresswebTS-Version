"use strict";
import scheduler from "expressweb-scheduler-ts";

class Kernel {
  /**
   * The Maker commands provided by your application.
   * @var array
   */
  static commands() {
    return [
      "App/Console/Commands/Testing_command.ts"
    ];
  }

  /**
   * Define the application's schedule command.
   * @return void
   */
  static schedule():any {
    return scheduler.command("Testing").everySecond().run();
  }
}

export default Kernel
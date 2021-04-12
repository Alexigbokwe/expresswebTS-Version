"use strict";
import env from "expresswebcorets/lib/ENV";
//@ts-ignore
import config from "./Config/database";

class migration {
  constructor() {
    if (env('DB_CONNECTION') != "mongoose") {
      return config[env('DB_CONNECTION')];
    }
  }
}
export default new migration();

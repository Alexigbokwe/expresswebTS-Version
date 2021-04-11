"use strict";
require("dotenv").config();
let config = require("./Config/database");
class migration {
  constructor() {
    if (process.env.DB_CONNECTION != "mongoose")
      return config[process.env.DB_CONNECTION];
  }
}
export default new migration();

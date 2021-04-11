"use strict";
import appShutDown from "Elucidate/App/shutdown";
import { Request, Response, NextFunction } from "Elucidate/HttpContext";

class CheckForMaintenanceMode {
  public async handle(req: Request, res: Response, next: NextFunction) {
    let mode = appShutDown.isDownForMaintenance();
    if (mode.status) {
      if (appShutDown.inEndpointsArray(req.url, mode.endPoints) == false) {
        return res.status(503).json({ message: mode.message });
      }
    }
    await next();
  }
}

module.exports = CheckForMaintenanceMode;

"use strict";
import appShutDown from "Elucidate/App/shutdown";
import { Request, Response, NextFunction } from "Elucidate/HttpContext";
import { MiddlewareHandler } from "Elucidate/MiddlewareHandler";

class CheckForMaintenanceMode extends MiddlewareHandler {
  override async preHandle(req: Request, res: Response): Promise<boolean> {
    let mode = appShutDown.isDownForMaintenance();
    if (mode.status) {
      if (appShutDown.inEndpointsArray(mode.endPoints, req.url) == false) {
        res.send({ data: { message: mode.message }, status: false }, 503);
      }
      return false;
    }
    return true;
  }
}

export default CheckForMaintenanceMode;

import { Request, Response, NextFunction } from "Elucidate/HttpContext";
declare class CheckForMaintenanceMode {
    handle(req: Request, res: Response, next: NextFunction): Promise<any>;
}
export default CheckForMaintenanceMode;

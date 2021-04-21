import { Request, Response, NextFunction } from "Elucidate/HttpContext";
declare class UserController {
    index(req: Request, res: Response, next: NextFunction): Promise<any>;
    checkSocket: (req: any, res: any, next: any) => Promise<any>;
}
export default UserController;

import { Request, Response, NextFunction } from "Elucidate/HttpContext";
declare class UserController {
    index(req: Request, res: Response, next: NextFunction): Promise<any>;
}
export default UserController;

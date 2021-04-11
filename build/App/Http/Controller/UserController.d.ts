import { Request, Response, NextFunction } from "Elucidate/HttpContext";
import Authenticator from "Elucidate/Auth/Authenticator";
declare class UserController {
    Auth: Authenticator;
    constructor(Authenticator: Authenticator);
    index(req: Request, res: Response, next: NextFunction): any;
}
export default UserController;

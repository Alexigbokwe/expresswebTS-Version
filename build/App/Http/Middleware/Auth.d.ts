import { Request, Response, NextFunction } from "Elucidate/HttpContext";
import ServiceProvider from "Elucidate/Support/ServiceProvider";
declare class AuthMiddleware extends ServiceProvider {
    handle(req: Request, res: Response, next: NextFunction): Promise<any>;
}
export default AuthMiddleware;

import { Request, Response, NextFunction } from "Elucidate/HttpContext";
declare class ConvertEmptyStringsToNull {
    handle(req: Request, _res: Response, next: NextFunction): Promise<void>;
}
export default ConvertEmptyStringsToNull;

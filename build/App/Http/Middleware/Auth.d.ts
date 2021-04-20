import Authenticator from "Elucidate/Auth/Authenticator";
declare class AuthMiddleware {
    Auth: Authenticator;
    constructor(Authenticator: Authenticator);
    handle: (req: any, res: any, next: any) => Promise<any>;
}
export default AuthMiddleware;

import Authenticator from "Elucidate/Auth/Authenticator";
declare class LoginController {
    protected Auth: Authenticator;
    constructor(Authenticator: Authenticator);
    login: (req: any, res: any) => Promise<any>;
    /**
     * Process incoming login data.
     * @param {object} data
     * @param {Response} res
     * @return User
     */
    private processLogin;
    /**
     * Get a validator for an incoming login request.
     * @param {object} record
     * @return Validator
     */
    private validator;
}
export default LoginController;

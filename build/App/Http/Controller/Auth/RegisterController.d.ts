declare class RegisterController {
    Auth: any;
    constructor(Auth: any);
    register: (req: any, res: any) => Promise<any>;
    /**
     * Get a validator for an incoming registration request.
     * @param {object} record
     * @return Validator
     */
    private validator;
    /**
     * Create a new user instance after a valid registration.
     * @param {object} data
     * @param {Response} res
     * @return User
     */
    private create;
}
export default RegisterController;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Hash_1 = tslib_1.__importDefault(require("Elucidate/Hashing/Hash"));
const FormRequest_1 = tslib_1.__importDefault(require("Elucidate/Validator/FormRequest"));
class RegisterController {
    constructor(Auth) {
        /*
          |--------------------------------------------------------------------------
          | Register Controller
          |--------------------------------------------------------------------------
          |
          | This controller handles the registration of new users as well as their
          | validation and creation of their token.
          |
          */
        this.register = (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            let validation = yield this.validator(req.body);
            if (validation.success) {
                return yield this.create(req.body, res);
            }
            else {
                return res.status(404).json(validation);
            }
        });
        /**
         * Create a new user instance after a valid registration.
         * @param {object} data
         * @param {Response} res
         * @return User
         */
        this.create = (data, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            data["password"] = yield Hash_1.default.make(data["password"]);
            return yield this.Auth.createUser(data)
                .then((user) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                let token = yield this.Auth.generateToken(user);
                return res.status(200).send({ auth: true, token: token });
            }))
                .catch((error) => {
                return res.status(500).send({
                    auth: false,
                    msg: error.msg,
                    error: error.payload,
                });
            });
        });
        this.Auth = Auth;
    }
    /**
     * Get a validator for an incoming registration request.
     * @param {object} record
     * @return Validator
     */
    validator(record) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield FormRequest_1.default.make(record, {
                first_name: "required|string|max:255",
                last_name: "required|string|max:255",
                email: "required|string|email|max:255",
                password: "required|string|min:8",
            });
        });
    }
}
exports.default = RegisterController;

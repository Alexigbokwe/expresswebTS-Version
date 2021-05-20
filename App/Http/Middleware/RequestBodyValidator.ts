"use strict";
import FormRequest from "Elucidate/Validator/FormRequest";
import { Request, Response, NextFunction } from "Elucidate/HttpContext";

class RequestBodyValidator {
  async handle(req: Request, res: Response, next: NextFunction) {
    req.validate = (data: object, rules: object) => {
      return FormRequest.make(data, rules);
    };

    await next();
  }
}

export default RequestBodyValidator;

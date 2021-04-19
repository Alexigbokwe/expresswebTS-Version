"use strict";
import FormRequest from "Elucidate/Validator/FormRequest";
import { Request, Response, NextFunction } from "Elucidate/HttpContext";

class RequestBodyValidator {
  async handle(req: Request, res: Response, next: NextFunction) {
    req.validation = FormRequest;

    await next();
  }
}

export default RequestBodyValidator;

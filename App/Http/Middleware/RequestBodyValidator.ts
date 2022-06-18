"use strict";
import { Request, Response, NextFunction } from "Elucidate/HttpContext";
import { MiddlewareHandler } from "Elucidate/MiddlewareHandler";
import FormRequest from "expresswebcorets/lib/Validator/FormRequest";

class RequestBodyValidator extends MiddlewareHandler {
  override async preHandle(req: Request, res: Response): Promise<boolean> {
    req.validate = <T>(data: T, rules: Validator.Rules) => {
      return FormRequest.make<T>(data, rules);
    };

    return true;
  }
}

export default RequestBodyValidator;

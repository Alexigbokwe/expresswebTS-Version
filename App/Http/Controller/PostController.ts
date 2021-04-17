"use strict";
import { Request, Response, NextFunction } from "Elucidate/HttpContext";
import HttpResponse from "Elucidate/HttpContext/ResponseType";

class PostController {
  /**
   * Display a listing of the resource.
   */
  index = async (req: Request, res: Response, next: NextFunction) => {
    try {
      //
    } catch (error) {
      return next(error);
    }
  };

  /**
   * Show the form for creating a new resource.
   *
   * @return Response
   */
  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      //
    } catch (error) {
      return next(error);
    }
  };

  /**
   * Store a newly created resource in storage.
   * @param  Request
   * @return Response
   */
  store = async (req: Request, res: Response, next: NextFunction) => {
    try {
      //
    } catch (error) {
      return next(error);
    }
  };

  /**
   * Display the specified resource.
   * @param  Request
   * @return Response
   */
  show = async (req: Request, res: Response, next: NextFunction) => {
    try {
      //
    } catch (error) {
      return next(error);
    }
  };

  /**
   * Show the form for editing the specified resource.
   * @param  Request
   * @return Response
   */
  edit = async (req: Request, res: Response, next: NextFunction) => {
    try {
      //
    } catch (error) {
      return next(error);
    }
  };

  /**
   * Update the specified resource in storage.
   * @param  Request
   * @return Response
   */
  update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      //
    } catch (error) {
      return next(error);
    }
  };

  /**
   * Remove the specified resource from storage.
   *
   * @param Request
   * @return Response
   */
  destroy = async (req: Request, res: Response, next: NextFunction) => {
    try {
      //
    } catch (error) {
      return next(error);
    }
  };
}

export default PostController;

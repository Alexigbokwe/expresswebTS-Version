import { Route } from "Elucidate/Route/RouteManager";

import { Request, Response } from "Elucidate/HttpContext";
/*
    |--------------------------------------------------------------------------
    | Api route   
    |--------------------------------------------------------------------------
    |
    | Here is where you can register your application routes. These
    | routes are loaded by the RouteProvider. Now create something great!
    |
*/

Route.get("/", (req: Request, res: Response) => {
  res.status(200).send("Welcome to ExpressWebJs Version 4");
});

//--------------------------------------------------------------------------
export default Route.exec;

import Route from "Elucidate/Route/manager";
import { Request, Response, NextFunction } from "Elucidate/HttpContext";
import Log from "Elucidate/Log";
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
  try {
    res.status(200).sended("Welcome to ExpressWebJs Typescript Version");
  } catch (error) {
    Log.error("Routes", "Route Loggin", {
      name: "Alex",
      phone: "0909090707070",
    });
  }
});

//--------------------------------------------------------------------------
export default Route.exec;

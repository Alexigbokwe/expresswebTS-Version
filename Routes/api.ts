import Route from "Elucidate/Route/manager";
import { Request, Response, NextFunction } from "Elucidate/HttpContext";
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
  res.status(200).send("Welcome to ExpressWebJs Typescript Version");
});

Route.get("/users", "UserController@index");

Route.get("/users/:id", "UserController@show");

Route.patch("/users", "UserController@update");

Route.patch("/users/many", "UserController@updateManyUsers");

//--------------------------------------------------------------------------
export default Route.exec;

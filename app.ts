/*
|---------------------------------------------------------------
| Http Server
|---------------------------------------------------------------
| This file bootstraps ExpressWebJs to start the Http server.
| Application Host, Port and Transfer Protocols are configured
| in the .env file. You are free to configure them. 
|
*/
import { startApplication, ORM } from "expresswebcorets";

startApplication({ orm: ORM.Objection });

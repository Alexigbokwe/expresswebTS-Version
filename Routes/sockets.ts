"use strict";
import Ws from "Elucidate/Socket/WS";
/*
|--------------------------------------------------------------------------
| socket.io
|--------------------------------------------------------------------------
|
| This file is used to register socket.io channels and start the Ws server.
|
*/

export default () => {
  
  Ws.channel("notification", "chatController");
};

import commands from "Command";
import kernel from "App/Console/Kernel";
import maker from "maker-consoleTs";

/*
|--------------------------------------------------------------------------
| Run The Maker Application
|--------------------------------------------------------------------------
|
| When we run the console application, the current CLI command will be
| executed in this console and the response sent back to a terminal
|
*/

maker.run(commands, kernel);
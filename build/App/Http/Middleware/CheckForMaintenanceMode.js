"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const shutdown_1 = tslib_1.__importDefault(require("Elucidate/App/shutdown"));
class CheckForMaintenanceMode {
    handle(req, res, next) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let mode = shutdown_1.default.isDownForMaintenance();
            if (mode.status) {
                if (shutdown_1.default.inEndpointsArray(req.url, mode.endPoints) == false) {
                    return res.status(503).json({ message: mode.message });
                }
            }
            yield next();
        });
    }
}
module.exports = CheckForMaintenanceMode;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const ResponseType_1 = tslib_1.__importDefault(require("Elucidate/HttpContext/ResponseType"));
const Book_request_1 = tslib_1.__importDefault(require("App/Http/Requests/Book_request"));
class PostController {
    constructor() {
        /**
         * Display a listing of the resource.
         */
        this.index = (req, res, next) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                let validate = yield Book_request_1.default.validate(req.body);
                if (!validate.success) {
                    ResponseType_1.default.BAD_REQUEST(res, validate);
                }
                return ResponseType_1.default.OK(res, validate);
            }
            catch (error) {
                return next(error);
            }
        });
        /**
         * Show the form for creating a new resource.
         * @return Response
         */
        this.create = (req, res, next) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                //
            }
            catch (error) {
                return next(error);
            }
        });
        /**
         * Store a newly created resource in storage.
         * @param  Request
         * @return Response
         */
        this.store = (req, res, next) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                //
            }
            catch (error) {
                return next(error);
            }
        });
        /**
         * Display the specified resource.
         * @param  Request
         * @return Response
         */
        this.show = (req, res, next) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                //
            }
            catch (error) {
                return next(error);
            }
        });
        /**
         * Show the form for editing the specified resource.
         * @param  Request
         * @return Response
         */
        this.edit = (req, res, next) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                //
            }
            catch (error) {
                return next(error);
            }
        });
        /**
         * Update the specified resource in storage.
         * @param  Request
         * @return Response
         */
        this.update = (req, res, next) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                //
            }
            catch (error) {
                return next(error);
            }
        });
        /**
         * Remove the specified resource from storage.
         *
         * @param Request
         * @return Response
         */
        this.destroy = (req, res, next) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                //
            }
            catch (error) {
                return next(error);
            }
        });
    }
}
exports.default = PostController;

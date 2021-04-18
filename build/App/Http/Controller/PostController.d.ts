declare class PostController {
    /**
     * Display a listing of the resource.
     */
    index: (req: any, res: any, next: any) => Promise<any>;
    /**
     * Show the form for creating a new resource.
     * @return Response
     */
    create: (req: any, res: any, next: any) => Promise<any>;
    /**
     * Store a newly created resource in storage.
     * @param  Request
     * @return Response
     */
    store: (req: any, res: any, next: any) => Promise<any>;
    /**
     * Display the specified resource.
     * @param  Request
     * @return Response
     */
    show: (req: any, res: any, next: any) => Promise<any>;
    /**
     * Show the form for editing the specified resource.
     * @param  Request
     * @return Response
     */
    edit: (req: any, res: any, next: any) => Promise<any>;
    /**
     * Update the specified resource in storage.
     * @param  Request
     * @return Response
     */
    update: (req: any, res: any, next: any) => Promise<any>;
    /**
     * Remove the specified resource from storage.
     *
     * @param Request
     * @return Response
     */
    destroy: (req: any, res: any, next: any) => Promise<any>;
}
export default PostController;

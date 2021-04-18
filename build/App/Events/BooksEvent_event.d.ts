declare class BooksEvent {
    params: any;
    /**
     * Create a new event instance.
     * @param {*} params
     */
    constructor(params: any);
    /**
     * Get the listener to listen to the event.
     */
    listenOn(): Promise<void>;
}
export default BooksEvent;

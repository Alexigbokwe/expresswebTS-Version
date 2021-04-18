declare class Book {
    /**
     * Handle the request validation.
     * @param {*} data | e.g request body
     */
    validate<T>(data: T): Promise<any>;
}
declare const _default: Book;
export default _default;

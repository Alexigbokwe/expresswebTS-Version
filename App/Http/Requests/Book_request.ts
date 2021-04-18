"use strict";
    import FormRequest from "Elucidate/Validator/FormRequest";

    class Book {
      /**
       * Handle the request validation.
       * @param {*} data | e.g request body
       */
      async validate<T>(data: T) {
        return await FormRequest.make(data, {
          name: "required",
          category: "required"
        });
      }
    }

    export default new Book();
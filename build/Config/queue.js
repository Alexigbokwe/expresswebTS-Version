"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const ENV_1 = tslib_1.__importDefault(require("expresswebcorets/lib/ENV"));
exports.default = {
    /*
      |--------------------------------------------------------------------------
      | Default Queue Connection Name
      |--------------------------------------------------------------------------
      |
      | ExpressWebJs queue API supports an assortment of back-ends via a single
      | API, giving you convenient access to each back-end using the same
      | syntax for every one. Here you may define a default connection.
      |
      | `run npm install amqplib` to get started
      */
    default: ENV_1.default("QUEUE_CONNECTION", null),
    /*
      |--------------------------------------------------------------------------
      | Queue Connections
      |--------------------------------------------------------------------------
      |
      | Here you may configure the connection information for rabbitmq server that
      | is used by your application. A default configuration has been added.
      | ExpressWebJs currently supports rabbitmq for now.
      |
      | Driver: "rabbitmq"
      |
      */
    connections: {
        rabbitmq: {
            driver: "rabbitmq",
            connection: "default",
            queue: ENV_1.default("RABBITMQ_QUEUE", "default"),
            retry_after: 90,
            block_for: null,
            host: ENV_1.default("RABBITMQ_HOST"),
            port: ENV_1.default("RABBIT_PORT"),
        },
    },
};

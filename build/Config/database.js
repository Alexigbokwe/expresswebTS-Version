"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const ENV_1 = tslib_1.__importDefault(require("expresswebcorets/lib/ENV"));
const path_1 = tslib_1.__importDefault(require("path"));
exports.default = {
    /*
    |--------------------------------------------------------------------------
    | MySQL Database
    |--------------------------------------------------------------------------
    |
    | Here we define connection settings for MySQL database.
    |
    | npm i --save mysql mysql2
    |
    */
    mysql: {
        client: "mysql",
        connection: {
            host: ENV_1.default("DB_HOST"),
            port: ENV_1.default("DB_PORT"),
            user: ENV_1.default("DB_USER"),
            password: ENV_1.default("DB_PASSWORD"),
            database: ENV_1.default("DB_DATABASE"),
        },
        migrations: {
            directory: path_1.default.join(__dirname, '../Database/Migrations/'),
            tableName: "migrations",
            stub: path_1.default.join(__dirname, '../Database/Migrations/migrationLayout.stub'),
            extension: 'js'
        },
        seeds: {
            directory: path_1.default.join(__dirname, '../Database/Seeds/'),
        },
    },
    /*
    |--------------------------------------------------------------------------
    | PostgreSQL Database
    |--------------------------------------------------------------------------
    |
    | Here we define connection settings for PostgreSQL database.
    |
    | npm i --save pg
    |
    | npm install --save pg pg-hstore
    |
    */
    pg: {
        client: "pg",
        connection: {
            host: ENV_1.default("DB_HOST"),
            port: ENV_1.default("DB_PORT"),
            user: ENV_1.default("DB_USER"),
            password: ENV_1.default("DB_PASSWORD"),
            database: ENV_1.default("DB_DATABASE"),
        },
        migrations: {
            directory: path_1.default.join(__dirname, '../Database/Migrations/'),
            tableName: "migrations",
            stub: path_1.default.join(__dirname, '../Database/Migrations/migrationLayout.stub'),
            extension: 'js'
        },
        seeds: {
            directory: path_1.default.join(__dirname, '../Database/Seeds/'),
        },
    },
    /*
    |--------------------------------------------------------------------------
    | MongoDB Database
    |--------------------------------------------------------------------------
    |
    | Here we define connection settings for MongoDB database.
    |
    | npm i --save mongoose
    |
    */
    mongoose: {
        client: "mongoose",
        host: ENV_1.default("DB_HOST"),
        port: ENV_1.default("DB_PORT"),
        user: ENV_1.default("DB_USER"),
        password: ENV_1.default("DB_PASSWORD"),
        database: ENV_1.default("DB_DATABASE"),
        useCreateIndex: ENV_1.default("DB_USECREATEINDEX"),
        useNewUrlParser: ENV_1.default("DB_USENEWURLPARSER"),
        useUnifiedTopology: ENV_1.default("DB_USEUNIFIEDTOPOLOGY"),
        connection: {
            connection_link: `mongodb://${ENV_1.default("DB_USER")}:${ENV_1.default("DB_PASSWORD")}@${ENV_1.default("DB_HOST")}:${ENV_1.default("DB_PORT")}/${ENV_1.default("DB_DATABASE")}`,
        },
    },
    /*
    |--------------------------------------------------------------------------
    | Default Connection
    |--------------------------------------------------------------------------
    |
    | Connection defines the default connection settings to be used while
    | interacting with databases.
    | list of connections : mysql, mongoose
    |
    */
    Default_connection: ENV_1.default("DB_CONNECTION"),
};

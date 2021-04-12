"use strict";
import env from "expresswebcorets/lib/ENV";
import path from "path";
export default {
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
      host: env("DB_HOST"),
      port: env("DB_PORT"),
      user: env("DB_USER"),
      password: env("DB_PASSWORD"),
      database: env("DB_DATABASE"),
    },
    migrations: {
      directory: path.join(__dirname, '../Database/Migrations/'),
      tableName: "migrations",
      stub:  path.join(__dirname, '../Database/Migrations/migrationLayout.stub'),
      extension: 'js'
    },
    seeds: {
      directory:  path.join(__dirname, '../Database/Seeds/'),
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
      host: env("DB_HOST"),
      port: env("DB_PORT"),
      user: env("DB_USER"),
      password: env("DB_PASSWORD"),
      database: env("DB_DATABASE"),
    },
    migrations: {
      directory: path.join(__dirname, '../Database/Migrations/'),
      tableName: "migrations",
      stub:  path.join(__dirname, '../Database/Migrations/migrationLayout.stub'),
      extension: 'js'
    },
    seeds: {
      directory:  path.join(__dirname, '../Database/Seeds/'),
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
    host: env("DB_HOST"),
    port: env("DB_PORT"),
    user: env("DB_USER"),
    password: env("DB_PASSWORD"),
    database: env("DB_DATABASE"),
    useCreateIndex: env("DB_USECREATEINDEX"),
    useNewUrlParser: env("DB_USENEWURLPARSER"),
    useUnifiedTopology: env("DB_USEUNIFIEDTOPOLOGY"),
    connection: {
      connection_link: `mongodb://${env("DB_USER")}:${env("DB_PASSWORD")}@${env(
        "DB_HOST",
      )}:${env("DB_PORT")}/${env("DB_DATABASE")}`,
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
  Default_connection: env("DB_CONNECTION"),
};

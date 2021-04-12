declare const _default: {
    mysql: {
        client: string;
        connection: {
            host: any;
            port: any;
            user: any;
            password: any;
            database: any;
        };
        migrations: {
            directory: string;
            tableName: string;
            stub: string;
            extension: string;
        };
        seeds: {
            directory: string;
        };
    };
    pg: {
        client: string;
        connection: {
            host: any;
            port: any;
            user: any;
            password: any;
            database: any;
        };
        migrations: {
            directory: string;
            tableName: string;
            stub: string;
            extension: string;
        };
        seeds: {
            directory: string;
        };
    };
    mongoose: {
        client: string;
        host: any;
        port: any;
        user: any;
        password: any;
        database: any;
        useCreateIndex: any;
        useNewUrlParser: any;
        useUnifiedTopology: any;
        connection: {
            connection_link: string;
        };
    };
    Default_connection: any;
};
export default _default;

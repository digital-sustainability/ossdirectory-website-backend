// https://codingsans.com/blog/node-config-best-practices

import * as dotenv from 'dotenv';
dotenv.config();


const env = process.env.NODE_ENV || 'development';

export class Config {

    constructor(
        public neo4j : {
            host : string,
            user : string,
            password : string,
        },

        public app : {
            port : any,
        },

        public minio: {
            host : string,
            bucket : string,
            key : string,
            secret: string,
        }) {}
}

const development = new Config(
    { //neo4j
        host: process.env.NEO4J_HOST || 'bolt://neo4j.digisus.ch:7687',
        user: process.env.NEO4J_USER || 'neo4j',
        password : process.env.NEO4J_PASSWORD,
    },

    { //app
        port: process.env.PORT || 3000,
    },

    { //minio
        host: "minio.digisus.ch" || process.env.MINIO_HOST,
        bucket: "oss-directory" || process.env.MINIO_BUCKET,
        key: process.env.MINIO_KEY,
        secret: process.env.MINIO_SECRET,

    },
);

const production = new Config(

    { //neo4j
        host: process.env.NEO4J_HOST || 'bolt://neo4j.digisus.ch:7687',
        user: process.env.NEO4J_USER || 'neo4j',
        password : process.env.NEO4J_PASSWORD,
    },

    { //app
        port: process.env.PORT || 5000,
    },

    { //minio
        host: "minio.digisus.ch" || process.env.MINIO_HOST,
        bucket: "oss-directory" || process.env.MINIO_BUCKET,
        key: process.env.MINIO_KEY,
        secret: process.env.MINIO_SECRET,

    },

);

const conf = {
    development,
    production,
};

export const config: Config = conf[env];

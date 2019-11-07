import { Injectable } from '@nestjs/common';
import * as minio from 'minio';
import { config } from '../config/config';

@Injectable()
export class UploadService {

    private client: minio.Client;

    constructor() {
        this.client = new minio.Client({
            endPoint: config.minio.host,
            port: config.minio.port,
            useSSL: true,
            accessKey: config.minio.key,
            secretKey: config.minio.secret,
        });
    }

    public uploadFile(fileBuffer: Buffer, name) {
        return new Promise((resolve, reject) => {
            this.client.putObject(config.minio.bucket, name, fileBuffer, (err, etag) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(etag);
                }
            });
        });
    }
}

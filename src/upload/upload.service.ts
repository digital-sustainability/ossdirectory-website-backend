import { Injectable } from '@nestjs/common';
import * as minio from 'minio';

@Injectable()
export class UploadService {

    private client: minio.Client;

    constructor() {
        this.client = new minio.Client({
            endPoint: 'play.min.io',
            port: 9000,
            useSSL: true,
            accessKey: 'Q3AM3UQ867SPQQA43P2F',
            secretKey: 'zuf+tfteSlswRu7BJ86wekitnifILbZam1KYY3TG'
        });
    }

    public uploadFile(fileBuffer: Buffer) {

        this.client.putObject('', '', fileBuffer, (err, etag) => {

        });
    }
}

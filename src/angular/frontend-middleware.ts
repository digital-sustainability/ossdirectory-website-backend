import { NestMiddleware, Injectable } from "@nestjs/common";
import * as path from "path";
import { Request, Response } from 'express';

/**
 * https://medium.com/@bo.vandersteene/use-nest-as-your-server-side-application-with-an-angular-frontend-540b0365bfa3
 */

const resolvePath = (file: string) => path.resolve(`./assets/${file}`);

const allowedExt = [
    '.js',
    '.ico',
    '.css',
    '.png',
    '.jpg',
    '.woff2',
    '.woff',
    '.ttf',
    '.svg',
  ];

@Injectable()
export class FrontendMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: Function) {

        const { baseUrl } = req;
        const { url } = req;
        if (baseUrl.indexOf('graphql') === 1 || baseUrl.indexOf('rss-feed') === 1 || baseUrl.indexOf('upload') === 1) {
          // it starts with /api --> continue with execution
          next();
        } else if (allowedExt.filter(ext => baseUrl.indexOf(ext) > 0).length > 0) {
            // it has a file extension --> resolve the file
            res.sendFile(resolvePath(baseUrl));
        } else {
          // in all other cases, redirect to the index.html!
          res.sendFile(resolvePath('index.html'));
        }
    }
}

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as helmet from 'helmet';
import * as csurf from 'csurf';
import * as rateLimit from 'express-rate-limit';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.use(helmet()); // https://github.com/helmetjs/helmet#how-it-works

    app.enableCors();

    app.use(cookieParser());

    // app.use(csurf({ cookie: true }));

    // app.use(
    //     rateLimit({
    //         windowMs: 60 * 1000, // one minute
    //         max: 100, // limit each IP to 10 requests per windoMs
    //     }),
    // );

    await app.listen(3000);
}
bootstrap();

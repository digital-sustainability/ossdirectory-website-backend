import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AngularController } from './angular.controller';
import { FrontendMiddleware } from "./frontend-middleware";

@Module({
  controllers: [AngularController],
})
export class AngularModule implements NestModule {

    configure(consumer: MiddlewareConsumer) {
        consumer
          .apply(FrontendMiddleware)
          .forRoutes({
            path: '/**', // For all routes
            method: RequestMethod.ALL, // For all methods
          });
      }
}

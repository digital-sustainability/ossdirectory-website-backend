import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GqlModule } from './gql/gql.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AngularModule } from './angular/angular.module';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [
      GqlModule,
      AuthModule,
      UsersModule,
      AngularModule,
      ConfigModule,
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

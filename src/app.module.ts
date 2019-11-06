import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GqlModule } from './gql/gql.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AngularModule } from './angular/angular.module';
import { ConfigModule } from './config/config.module';
import { Neo4jService } from './neo4j/neo4j.service';
import { Neo4jModule } from './neo4j/neo4j.module';

@Module({
  imports: [
      GqlModule,
      AuthModule,
      UsersModule,
      AngularModule,
      ConfigModule,
      Neo4jModule,
    ],
  controllers: [AppController],
  providers: [AppService, Neo4jService],
})
export class AppModule {}

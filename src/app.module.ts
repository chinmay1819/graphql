import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { BookModule } from './book/book.module';
import {join} from 'path';


@Module({
  imports: [
    GraphQLModule.forRoot({
    driver:ApolloDriver,
    playground:true,
    // typePaths:['./**/*.graphql']                               only used when we use query first approach 
    autoSchemaFile:join(process.cwd(),"src/schema.graphql"),
    definitions:{
      path:join(process.cwd(),"src/graphql.ts")
    }
  }), BookModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { LessonModule } from './lesson/lesson.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lesson } from './lesson/lesson.entity';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { User } from './user/entity/user.entity';



@Module({
  imports: [GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile:true
    }), LessonModule,
    TypeOrmModule.forRoot({
      type:'mongodb',
      url:'mongodb://localhost/school',
      synchronize:true,
      useUnifiedTopology:true,
      entities:[
        Lesson,
        User
      ]
    }),
    UserModule,
    AuthModule,
    
  ]
})
export class AppModule {}

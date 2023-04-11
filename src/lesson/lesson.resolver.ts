import { Resolver,Query, Mutation, Args, Int } from "@nestjs/graphql";
import { LessonType } from "./lesson.type";
import { LessonService } from "./lesson.service";
import { CreateLessonInput } from "./lesson.input";
import { UpdateLessonInput } from "./lesson.update";
import { UseGuards, UseInterceptors } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Resolver(of=>LessonType)
export class LessonResolver{
    constructor(
        private lessonService:LessonService
    ){}
    
    @Query(returns => LessonType)
    
    lesson(
        @Args('id') id:string
    ){
        return this.lessonService.getLesson(id);
    }

    @Query(returns=>[LessonType])
    @UseGuards(JwtAuthGuard)
    lessons(){
        return this.lessonService.getAllLessons();
    }


    @Mutation(returns => LessonType)
    @UseGuards(JwtAuthGuard)
    createLesson(
       @Args('createLessonInput') createLessonInput:CreateLessonInput
    ){
        return this.lessonService.createLesson(createLessonInput)
    }

    @Mutation(returns=>String)
    @UseGuards(JwtAuthGuard)
    deleteLesson(
        @Args('id') id:string
    ):Promise<string>{
        return this.lessonService.deleteLesson(id)
    }

    @Mutation(returns=>LessonType)
    @UseGuards(JwtAuthGuard)
    updateLesson(
        @Args('updateLessonInput') updateLessonInput:UpdateLessonInput 
    ){
        return this.lessonService.updateLesson(updateLessonInput);
    }

}
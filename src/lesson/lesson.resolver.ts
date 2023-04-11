import { Resolver,Query, Mutation, Args, Int } from "@nestjs/graphql";
import { LessonType } from "./lesson.type";
import { LessonService } from "./lesson.service";
import { CreateLessonInput } from "./lesson.input";
import { UpdateLessonInput } from "./lesson.update";


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
    lessons(){
        return this.lessonService.getAllLessons();
    }
    @Mutation(returns => LessonType)
    createLesson(
       @Args('createLessonInput') createLessonInput:CreateLessonInput
    ){
        return this.lessonService.createLesson(createLessonInput)
    }

    @Mutation(returns=>String)
    deleteLesson(
        @Args('id') id:string
    ):Promise<string>{
        return this.lessonService.deleteLesson(id)
    }

    @Mutation(returns=>LessonType)
    updateLesson(
        @Args('updateLessonInput') updateLessonInput:UpdateLessonInput 
    ){
        return this.lessonService.updateLesson(updateLessonInput);
    }

}
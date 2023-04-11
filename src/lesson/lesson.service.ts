import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Lesson } from './lesson.entity';
import { Any, Repository, TreeRepositoryUtils } from 'typeorm';
import {v4 as uuid} from 'uuid';
import { CreateLessonInput } from './lesson.input';
import { UpdateLessonInput } from './lesson.update';

@Injectable()
export class LessonService {
    constructor(
        @InjectRepository(Lesson) private lessonRepository:Repository<Lesson>

    ){}

    async getLesson(id:string):Promise<Lesson>{
        return this.lessonRepository.findOneBy({id})
    }
    async createLesson(createLessonInput:CreateLessonInput): Promise<Lesson>{
        const {name,startDate,endDate}=createLessonInput;
        const lesson=this.lessonRepository.create({
            id:uuid(),
            name,
            startDate,
            endDate
        })

        return this.lessonRepository.save(lesson);
    }
    async getAllLessons():Promise<Lesson[]>{
        
        return this.lessonRepository.find();
        
    }
  
    async deleteLesson(id:string):Promise<string>{
       const result= await this.lessonRepository.delete({id});
        
        return 'Deleted successfully...';
    }

    async updateLesson(updateLessonInput:UpdateLessonInput):Promise<Lesson>{
        const {id,name,startDate,endDate}=updateLessonInput;
        const lesson=await this.lessonRepository.findOneBy({id});
        lesson.name=name;
        lesson.startDate=startDate;
        lesson.endDate=endDate;
        await this.lessonRepository.save(lesson);
        return lesson;
    }
}

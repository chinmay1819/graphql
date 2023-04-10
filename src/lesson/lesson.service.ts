import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Lesson } from './lesson.entity';
import { Any, Repository } from 'typeorm';
import {v4 as uuid} from 'uuid';
import { ID } from '@nestjs/graphql';
import { CreateLessonInput } from './lesson.input';

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

}

import { Injectable } from '@nestjs/common';
import {Pet} from './pets.entity'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createPetInput } from './dto/create.pet.input';
import { ID } from '@nestjs/graphql';

@Injectable()
export class PetsService {
    constructor(@InjectRepository(Pet) private petsRepository:Repository<Pet>){

    }

    createPet(createPetInput:createPetInput): Promise<Pet>{
        const newPet=this.petsRepository.create(createPetInput);
        return this.petsRepository.save(newPet)
    }
    async findAll():Promise<Pet[]>{
        
        return this.petsRepository.find(); //SELECT * Pet 
    }
    // findOne(id: Number):Promise<Pet>{
    //     return this.petsRepository.findOneByOrFail(id);
    // }
}

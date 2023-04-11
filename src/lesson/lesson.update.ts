import { Field, InputType } from "@nestjs/graphql";
import { IsDateString } from "class-validator";

@InputType()
export class UpdateLessonInput{
    
    @Field()
    id:string;

    @Field()
    name:string;

    @IsDateString()
    @Field()
    startDate:string;

    @IsDateString()
    @Field()
    endDate:string;
}
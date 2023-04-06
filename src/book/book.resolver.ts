import {Query, Resolver } from "@nestjs/graphql";
import { Book } from "./book.schema";
import {Book as BookModel} from '../graphql'
@Resolver((of)=>Book)
export class BookResolver{
 
    @Query((returns)=>[Book],{name:'books'})
    getAllBooks(){
        let arr:BookModel[]=[ 
            {id:1,title:'Clean Code',price:600},
            {id:2,title:'Cracking Coding Interview',price:1000},
            {id:3,title:'Linux in a Nutshell',price:300}
        ]

        return arr;
    }
}
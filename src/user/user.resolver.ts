import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { UserService } from "./user.service";

@Resolver(of=>String)
export class userResolver{
    constructor (private userService:UserService){}

    @Mutation(returns => String)
    createUser(
        @Args({name:"email",type:()=>String}) email:string,
        @Args({name:"password",type:()=>String})password:string
    ):string{
        return "Sign up Successfull !"
    }
}

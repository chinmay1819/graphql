import { UseGuards } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { AuthGuard } from './auth/auth.guard';

@Resolver(of => String)

export class AppResolver {

    @Query(returns => String)
    index(): string {
        return "NestJs Graphql Server";
    }



    @Query(returns => String)
    @UseGuards(AuthGuard)
    login(
        @Args({ name: "email", type: () => String }) email: string,
        @Args({ name: "password", type: () => String }) password: string
    ): string {
        return "User Authenticated Successfully !";
    }
}
import { Injectable, ExecutionContext } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { GqlExecutionContext } from "@nestjs/graphql";

@Injectable()
export class LoginGuard extends AuthGuard('local') {
    async canActivate(context: ExecutionContext) {
        const result = (await super.canActivate(context)) as boolean;
        const http = context.switchToHttp();
        const request = this.getRequest(context);
        await super.logIn(request);
        return result;
    }

    getRequest(context: ExecutionContext) {
        const ctx = GqlExecutionContext.create(context);
        const args = ctx.getArgs();
        const request = ctx.getContext().req;
        request.body = { ...request.body, ...args };

        return ctx.getContext().req;
      }
}

import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Response } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const apiKey = request.header('x-api-key');
    console.log(`API Key from request: ${ apiKey}`);
    console.log(`Expected API Key: ${process.env.SECRET_KEY}`);

    if (apiKey !== process.env.SECRET_KEY) {
      return false;
    }
    return true;
  }
}

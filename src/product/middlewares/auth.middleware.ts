/*
https://docs.nestjs.com/middleware#middleware
*/

import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {

    const secretKey = req.headers['secret_key'];

    if (secretKey === process.env.SECRET_KEY) {



      // User Authencticated
      next();
    }
    else {
      // User Not Authenciated
      throw new HttpException('Secret Key not valid or provided', HttpStatus.BAD_REQUEST);

    }




  }
}

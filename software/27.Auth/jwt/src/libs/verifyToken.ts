import { Request, Response, NextFunction } from 'express'

import { Itoken } from '../models/User';

import jwt from 'jsonwebtoken'


export const tokenValidation = (request: Request, response: Response, next: NextFunction) => {

    const token = request.header('auth-token');
    if (!token) 
        return response.status(401).json('access denied');
    const tokenChecker = jwt.verify(token, process.env.TOKEN || 'tokentest') as Itoken;
    console.log(tokenChecker);
    next();
}; 
import { Request, Response } from "express";
import User, { userDto } from '../models/User'
import jwt from 'jsonwebtoken';

//check class in ts
//check microservice db
//app evenementiel

export const signup = async (request: Request, response: Response) => {
    const user: userDto = new User({
        username: request.body.username,
        email: request.body.email,
        password: request.body.password
    });
    user.password = await user.encryptPassword(user.password);
    const saveUser: userDto = await user.save();
    const token: string = jwt.sign({ _id: saveUser._id }, process.env.TOKEN || 'tokentest') //return only the jwt remove password
    response.header('auth-token', token).json(saveUser);
};

export const signin = async (request: Request, response: Response) => {
    const user = await User.findOne({ email: request.body.email });
    if (!user) 
        return response.status(400).json('incorrect email');

    const checkPass: boolean = await user.decryptPassword(request.body.password);
    if (!checkPass) 
        return response.status(400).json('incorrect password');

    const token: string = jwt.sign({ _id: user._id }, process.env.TOKEN || 'tokentest', {
        expiresIn: 60 * 60 * 24
    });

    response.header('auth-token', token).json(user);
};

export const profile = (request: Request, response: Response) => {
    response.send('profile');
};

//postman variables -> check swaggerUI
//grpc GOland
//clear code
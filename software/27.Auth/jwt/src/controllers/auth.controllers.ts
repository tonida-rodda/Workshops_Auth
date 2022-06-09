import express from 'express';
import jwt from 'jsonwebtoken';
import User, { userDto } from '../models/User';

//check class in ts
//check microservice db
//app evenementiel

export const signup = async (request: express.Request, response: express.Response) => {
    const username: string | undefined = request.body.username
    const email: string | undefined = request.body.email
    const password: string | undefined = request.body.password

    if (username === undefined || email === undefined || password === undefined) {
        response.status(400).json({ msg: "Bad parameters"} )
    }

    const user: userDto = new User({
        username: username,
        email: email,
        password: password
    });
    user.password = await user.encryptPassword(user.password);
    const saveUser: userDto = await user.save();
    const token: string = jwt.sign({ _id: saveUser._id }, process.env.TOKEN || 'tokentest') //return only the jwt remove password
    response.header('auth-token', token).json(saveUser);
};

export const signin = async (request: express.Request, response: express.Response) => {
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

export const profile = (request: express.Request, response: express.Response) => {
    response.send('profile');
};

//postman variables -> check swaggerUI
//grpc GOland
//clear code

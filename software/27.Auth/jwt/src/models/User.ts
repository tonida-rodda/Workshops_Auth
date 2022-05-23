import { Schema, model, Document } from 'mongoose';
import bcrypt from 'bcryptjs'

export interface Itoken {
    _id: string;
    iat: number;
    exp: number;
}

export interface userDto extends Document {
    username: string,
    email: string,
    password: string,
    encryptPassword(password: string): Promise<string>,
    decryptPassword(password: string): Promise<boolean>
}

const userSchema = new Schema<userDto>({
    username: {
        type: String,
        required: true,
        min: 4,
        lowercase: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,

    }
});

userSchema.methods.encryptPassword = async (password: string): Promise<string> => { // check schema
    const encrypted = await bcrypt.genSalt(10);
    return bcrypt.hash(password, encrypted);
}

userSchema.methods.decryptPassword = async function (password: string): Promise<boolean> {
    return await bcrypt.compare(password, this.password);
}

export default model('user', userSchema);
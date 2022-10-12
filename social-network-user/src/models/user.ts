import { Schema, model } from 'mongoose';

import IUser from 'entities/user';

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const User = model('users', userSchema);

export default User;

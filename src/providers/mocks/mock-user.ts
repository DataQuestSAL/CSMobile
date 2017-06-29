import { User } from './../../models/user.model';
import * as faker from 'faker'

export const MockUser: User = new User({_USER_NAME: faker.name , _PASSWORD: "", _Is_Authentic: true});
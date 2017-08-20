import { User } from './../../models/user.model';
import * as faker from 'faker'

export const MockUser: User = new User({USER_NAME: faker.name.firstName() , PASSWORD: "", Is_Authentic: true, SESSION_ID: "123456"});
import { Role } from "./role.model";
import { Town } from "./town.model";

export interface User {
    id: number;
    username: string;
    email: string;
    firstname: string;
    lastname?: string;
    phoneNumber?: string;
    password: string;
    actived: boolean;
    town: Town; 
    roles: Role[]; 
  }
  
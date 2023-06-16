import { User } from "./user.model";

export interface Role {
    id: number;
    role: string;
    discription: string;
    checked: boolean;
    users: User[];
  }
  
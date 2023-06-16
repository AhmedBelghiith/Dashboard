import { User } from "./user.model";

export interface Association {
  id: number;
  name: string;
  phoneNumber: string;
  createdDate: Date;
  adress: string;
  email: string;
  user: User;
}

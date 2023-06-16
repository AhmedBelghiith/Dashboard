import { License } from "./license.model";
import { Responsibility } from "./responsability.model";

export interface MemberLicence {
  id: number;
  firstname: string;
  lastname: string;
  phoneNumber: string;
  cinNumber: string;
  responsibility: Responsibility;
  license: License;
}

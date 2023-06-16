import { Association } from "./association.model";
import { DocumentsLicence } from "./documentLicense.model";
import { MemberLicence } from "./memberLicence.model";
import { RequestType } from "./requestType.model";
import { Status } from "./status.model";

export interface License {
    id: number;
    association: Association;
    status: Status;
    requestType: RequestType;
    createdDate: Date;
    expiredDate: Date;
    comment: string;
    menbersLicence: MemberLicence[];
    documentsLicence: DocumentsLicence[];
  }
  
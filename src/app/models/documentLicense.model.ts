import { License } from "./license.model";
import { TypeDoc } from "./typeDoc.model";

export interface DocumentsLicence {
  id: number;
  license: License;
  name: string;
  path: string;
  typeDoc: TypeDoc;
}

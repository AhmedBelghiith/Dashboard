import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class LicenseService {
  private apiUrl = "http://localhost:8282/license";

  constructor(private http: HttpClient) {}

  addLicense(licenseRequest: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, licenseRequest);
  }

  getLicenseById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  updateLicense(licenseRequestUpdate: any): Observable<any> {
    return this.http.put<any>(this.apiUrl, licenseRequestUpdate);
  }

  changeStateLicense(stateLicenseRequest: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/state`, stateLicenseRequest);
  }

  filterLicenses(
    roleId: number | null,
    page: number = 0,
    size: number = 10
  ): Observable<any> {
    const params: any = {
      roleId: roleId ? roleId.toString() : null,
      page: page.toString(),
      size: size.toString(),
    };
    return this.http.get<any>(this.apiUrl, { params });
  }

  getLicensePdf(licenseId: number): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/licensepdf`, {
      params: { licenseId: licenseId.toString() },
      responseType: "blob",
    });
  }

  multicriteriaFilterLicenses(
    assoName: string | null,
    userId: number | null,
    townId: number | null,
    statusId: number | null,
    createdDate: string | null,
    expiredDate: string | null,
    page: number = 0,
    size: number = 10
  ): Observable<any> {
    const params: any = {
      assoName: assoName ? assoName : null,
      userId: userId ? userId.toString() : null,
      townId: townId ? townId.toString() : null,
      statusId: statusId ? statusId.toString() : null,
      createdDate: createdDate ? createdDate : null,
      expiredDate: expiredDate ? expiredDate : null,
      page: page.toString(),
      size: size.toString(),
    };
    return this.http.get<any>(`${this.apiUrl}/filter`, { params });
  }
}

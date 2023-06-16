import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DocumentLicenceService {
  private apiUrl = "http://localhost:8282/document";

  constructor(private http: HttpClient) {}

  addDocLicence(
    file: File,
    licenceId: number,
    name: string,
    typeDocId: number
  ): Observable<any> {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("licenceId", licenceId.toString());
    formData.append("name", name);
    formData.append("typeDocId", typeDocId.toString());

    return this.http.post<any>(this.apiUrl, formData);
  }

  deleteDocLicence(licenceId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${licenceId}`);
  }

  getListFiles(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/files`);
  }

  getFile(filename: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/files/${filename}`, {
      responseType: "blob" as "json",
    });
  }

  getLicencesFiles(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/licencefiles`);
  }

  getLicenceFile(filename: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/licencefiles/${filename}`, {
      responseType: "blob" as "json",
    });
  }
}

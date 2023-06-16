import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { UpdateAssociation } from "app/models/updateAssociation.model";

@Injectable({
  providedIn: "root",
})
export class AssociationService {
  private apiUrl = "http://localhost:8282";

  constructor(private http: HttpClient) {}

  addAssociation(association: UpdateAssociation): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/association`, association);
  }

  filterAssociations(
    name?: string,
    userId?: number,
    createdDate?: string,
    page = 0,
    size = 10
  ): Observable<any> {
    let params = new HttpParams();
    if (name) {
      params = params.set("name", name);
    }
    if (userId) {
      params = params.set("userId", String(userId));
    }
    if (createdDate) {
      params = params.set("createdDate", createdDate);
    }
    params = params.set("page", String(page));
    params = params.set("size", String(size));

    return this.http.get<any>(`${this.apiUrl}/association`, { params });
  }

  updateAssociation(association: UpdateAssociation): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/association`, association);
  }

  deleteAssociation(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/association/${id}`);
  }

  getAssociationById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/association/${id}`);
  }
}

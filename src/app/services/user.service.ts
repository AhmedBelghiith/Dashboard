import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private apiUrl = "http://localhost:8282/user";

  constructor(private http: HttpClient) {}

  addUser(userRequest: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, userRequest);
  }

  getUserById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  updateUsers(userRequest: any): Observable<any> {
    return this.http.put<any>(this.apiUrl, userRequest);
  }

  activateUser(id: number): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/activate/${id}`, {});
  }

  desactivateUser(id: number): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/desactivate/${id}`, {});
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/delete/${id}`);
  }

  updatePassword(updatePasswordRequest: any): Observable<any> {
    return this.http.put<any>(
      `${this.apiUrl}/updatePassword/${updatePasswordRequest.id}`,
      updatePasswordRequest
    );
  }

  filterUsers(
    username?: string,
    userId?: number,
    page = 0,
    size = 5
  ): Observable<any> {
    let params = new HttpParams();
    if (username) {
      params = params.set("username", username);
    }
    if (userId) {
      params = params.set("userId", String(userId));
    }
    params = params.set("page", String(page));
    params = params.set("size", String(size));

    return this.http.get<any>(`${this.apiUrl}/filter`, { params });
  }
}

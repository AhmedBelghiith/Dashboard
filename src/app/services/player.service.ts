import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class PlayerService {
  private apiUrl = "http://localhost:8282/player";

  constructor(private http: HttpClient) {}

  addPlayer(playerRequest: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, playerRequest);
  }

  filterPlayer(userId: string | null): Observable<any> {
    const params: any = {
      userId: userId ? userId : null,
    };
    return this.http.get<any>(this.apiUrl, { params });
  }

  deletePlayer(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  deleteAllPlayer(): Observable<any> {
    return this.http.delete<any>(this.apiUrl);
  }
}

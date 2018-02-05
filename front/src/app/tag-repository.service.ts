import { Injectable } from "@angular/core";
import { Tag } from "./app.component";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { environment } from "../environments/environment";

@Injectable()
export class TagRepositoryService {
  private baseUrl: string = environment.api + "/api/tags";

  constructor(private http: HttpClient) {}

  get(id: string): Observable<Tag> {
    return this.http.get<Tag>(this.baseUrl + "/" + id);
  }

  getCollection(): Observable<Tag[]> {
    return this.http.get<Tag[]>(this.baseUrl);
  }

  put(id: string, tag: Tag): Observable<Tag> {
    return this.http.put<Tag>(this.baseUrl + "/" + id, tag);
  }
}

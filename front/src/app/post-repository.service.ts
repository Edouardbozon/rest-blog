import { Post } from "./app.component";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { environment } from "../environments/environment";

@Injectable()
export class PostRepositoryService {
  private baseUrl: string = environment.api + "/api/posts";

  constructor(private http: HttpClient) {}

  get(id: string): Observable<Post> {
    return this.http.get<Post>(this.baseUrl + "/" + id);
  }

  getCollection(): Observable<Post[]> {
    return this.http.get<Post[]>(this.baseUrl);
  }

  put(id: string, post: Post): Observable<Post> {
    return this.http.put<Post>(this.baseUrl + "/" + id, post);
  }
}

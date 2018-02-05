import { Component, ViewEncapsulation } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment";

export interface HalCollection<T> {
  _links: {
    item: { href: string }[];
  };
  _embedded: {
    item: T & { _links: { self: { href: string } } }[];
  };
  itemsPerPage: number;
  totaItem: number;
}

export interface Post {
  title: string;
  subtitle: string;
  content: string;
  author: string;
  createdAt: Date;
  updatedAt: Date;
  tags: Tag[];
}

export interface Tag {
  name: string;
}

@Component({
  selector: "eb-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  // postCollection: Array<Post>;
  // tagCollection: Array<Tag>;
  // draft: Post = {
  //   title: "",
  //   subtitle: "",
  //   content: "",
  //   author: "me",
  //   tags: [],
  //   updatedAt: new Date(),
  //   createdAt: new Date(),
  // };
  // constructor(private http: HttpClient) {
  //   // this.fetch();
  // }
  // create() {
  //   this.draft.updatedAt = new Date();
  //   this.http
  //     .post<Post>(environment.api + "/api/posts", this.draft)
  //     .subscribe(response => {
  //       this.draft = {
  //         title: "",
  //         subtitle: "",
  //         content: "",
  //         author: "me",
  //         tags: [],
  //         updatedAt: new Date(),
  //         createdAt: new Date(),
  //       };
  //       this.fetch();
  //     });
  // }
  // fetch() {
  //   this.http
  //     .get<Array<Post>>(environment.api + "/api/posts")
  //     .subscribe(postCollection => {
  //       this.postCollection = postCollection;
  //     });
  //   this.http
  //     .get<Array<Tag>>(environment.api + "/api/tags")
  //     .subscribe(tagCollection => {
  //       this.tagCollection = tagCollection;
  //     });
  // }
  // hasTag(givenTag: Tag, post: Post): boolean {
  //   return post.tags.some(tag => givenTag.name === tag.name);
  // }
  // toggleTag(givenTag: Tag, post: Post): void {
  //   if (this.hasTag(givenTag, post)) {
  //     post.tags.splice(
  //       post.tags.findIndex(tag => tag.name === givenTag.name),
  //       1,
  //     );
  //   } else {
  //     post.tags.push({ ...givenTag });
  //   }
  // }
}

import { Post } from "../app.component";
import { Component, OnInit } from "@angular/core";
import { PostRepositoryService } from "../post-repository.service";

@Component({
  selector: "eb-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  posts: Post[];

  constructor(private postRepository: PostRepositoryService) {}

  ngOnInit() {
    this.postRepository.getCollection().subscribe(posts => {
      console.log("ooo");
      this.posts = posts;
    });
  }
}

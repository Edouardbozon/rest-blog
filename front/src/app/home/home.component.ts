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
  maxContentLength = 55;

  constructor(private postRepository: PostRepositoryService) {}

  ngOnInit() {
    this.postRepository.getCollection().subscribe(posts => {
      this.posts = posts;
    });
  }
}

import { Post, Tag } from "../app.component";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { PostRepositoryService } from "../post-repository.service";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Subscription";
import { TagRepositoryService } from "../tag-repository.service";

@Component({
  selector: "eb-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.scss"],
})
export class PostComponent implements OnInit, OnDestroy {
  sub: Subscription;
  id: string;
  post: Post;

  draft: Post = {
    title: "",
    subtitle: "",
    content: "",
    author: "me",
    tags: [],
    updatedAt: new Date(),
    createdAt: new Date(),
  };

  tags: Tag[];

  constructor(
    private postRepository: PostRepositoryService,
    private tagRepository: TagRepositoryService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params["id"];
      this.postRepository.get(this.id).subscribe(post => {
        this.post = post;
      });
      this.tagRepository.getCollection().subscribe(tags => {
        this.tags = tags;
      });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

import { Component, OnInit, OnDestroy } from "@angular/core";
import { Post, Tag } from "../app.component";
import { Subscription } from "rxjs/Subscription";
import { PostRepositoryService } from "../post-repository.service";
import { TagRepositoryService } from "../tag-repository.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "eb-post-edit",
  templateUrl: "./post-edit.component.html",
  styleUrls: ["./post-edit.component.scss"],
})
export class PostEditComponent implements OnInit, OnDestroy {
  draft: Post;
  sub: Subscription;
  id: string;
  post: Post;
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
        this.draft = post;
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

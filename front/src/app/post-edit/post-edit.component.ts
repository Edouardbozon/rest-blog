import { Component, OnInit, OnDestroy, ViewChild } from "@angular/core";
import { Post, Tag } from "../app.component";
import { Subscription } from "rxjs/Subscription";
import { PostRepositoryService } from "../post-repository.service";
import { TagRepositoryService } from "../tag-repository.service";
import { ActivatedRoute } from "@angular/router";
import { FormGroupDirective } from "@angular/forms";

@Component({
  selector: "eb-post-edit",
  templateUrl: "./post-edit.component.html",
  styleUrls: ["./post-edit.component.scss"],
})
export class PostEditComponent implements OnInit, OnDestroy {
  // edit form
  @ViewChild("form") form: FormGroupDirective;

  sub: Subscription;
  id: string;

  // in memory post modification
  draft: Post;

  post: Post;
  tags: Tag[];

  get valid(): boolean {
    return this.form.valid;
  }

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

  edit(event: Event) {
    event.preventDefault();

    if (!this.valid) {
      return;
    }

    this.postRepository.put(this.id, this.draft).subscribe(post => {
      this.post = post;
      this.draft = post;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

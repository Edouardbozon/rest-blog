import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http"; // replaces previous Http service
import { FormsModule } from "@angular/forms";
import { MarkdownToHtmlModule } from "markdown-to-html-pipe";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { PostComponent } from "./post/post.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

import { TagRepositoryService } from "./tag-repository.service";
import { PostRepositoryService } from "./post-repository.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    MarkdownToHtmlModule,
  ],
  providers: [TagRepositoryService, PostRepositoryService],
  bootstrap: [AppComponent],
})
export class AppModule {}

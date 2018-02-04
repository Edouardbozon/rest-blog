import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http"; // replaces previous Http service
import { FormsModule } from "@angular/forms";
import { MarkdownToHtmlModule } from "markdown-to-html-pipe";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    MarkdownToHtmlModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

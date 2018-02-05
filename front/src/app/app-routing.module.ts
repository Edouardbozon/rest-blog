import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { HomeComponent } from "./home/home.component";
import { PostComponent } from "./post/post.component";

const routes: Routes = [
  { path: "posts/:id", component: PostComponent },
  {
    path: "posts",
    component: HomeComponent,
  },
  {
    path: "",
    redirectTo: "/posts",
    pathMatch: "full",
  },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

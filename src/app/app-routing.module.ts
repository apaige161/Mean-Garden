//manage angular routes

/**
 * 
 * Lazy load: login, signup
 * 
 */

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./auth/auth.guard";
import { Main2Component } from "./main2/main2.component";
import { PostCreateComponent } from "./posts/post-create/post-create.component";
import { PostListComponent } from "./posts/post-list/post-list.component";
import { GardensComponent } from './gardens/gardens.component';

const routes: Routes = [

    //root page
    { path: '', component: PostListComponent },

    //create component
    //send user to login page is not logged in
    { path: 'create', component: PostCreateComponent, canActivate: [AuthGuard] },

    //edit component
    //send user to login page is not logged in
    { path: 'edit/:postId', component: PostCreateComponent,canActivate: [AuthGuard] },

    //these routes will use lazy loading
    //merge child routes from auth-routing.module back to the root
    //load children describes a path to where to load children from
    { path: "auth", loadChildren: () => import('./auth/auth.module').then(module => module.AuthModule) },

    //create new garden
    { path: "createGarden", component: Main2Component },

    //user gardens
    { path: "gardens", component: GardensComponent },
    
]

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule],
 providers: [AuthGuard],
})

export class AppRoutingModule {}
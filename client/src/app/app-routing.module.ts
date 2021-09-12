import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { ProfileComponent } from "./profile/profile.component";
import { AuthGuard } from "./auth.guard";
import { CategoriesComponent } from "./categories/categories.component";
import { EmailsComponent } from "./emails/emails.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "profile", component: ProfileComponent, canActivate: [AuthGuard] },
  { path: "categories", component: CategoriesComponent, canActivate: [AuthGuard] },
  { path: "email", component: EmailsComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

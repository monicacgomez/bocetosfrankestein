import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home-component/home-component";
import { LoginComponent } from "./components/login-component/login-component";
import { CreateComponent } from "./components/create-component/create-component";
import { DetailsComponent } from "./components/details-component/details-component";
import { UpdateComponent } from "./components/update-component/update-component";
import { SubordinadosComponent } from "./components/subordinados-component/subordinados-component";
import { InformesPdfComponent } from "./components/informes-pdf-component/informes-pdf-component";
import { AuthGuard } from "./guards/auth.guard";

const routes: Routes = [

    {
        path: "login",
        component: LoginComponent
    },

    {
        path: "",
        component: HomeComponent,
        canActivate: [AuthGuard]
    },

    {
        path: "create",
        component: CreateComponent,
        canActivate: [AuthGuard]
    },

    {
        path: "details/:id",
        component: DetailsComponent,
        canActivate: [AuthGuard]
    },

    {
        path: "update/:id",
        component: UpdateComponent,
        canActivate: [AuthGuard]
    },

    {
        path: "subordinados",
        component: SubordinadosComponent,
        canActivate: [AuthGuard]
    },

    {
        path: "informes",
        component: InformesPdfComponent,
        canActivate: [AuthGuard]
    },

    {
        path: "**",
        redirectTo: ""
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}

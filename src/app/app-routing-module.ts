import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home-component/home-component";
import { EquipoComponent } from "./components/equipo-component/equipo-component";
import { JugadoresComponent } from "./components/jugadores-component/jugadores-component";
import { JugadorDetallesComponent } from "./components/jugador-detalles-component/jugador-detalles-component";
import { ApuestasComponent } from "./components/apuestas-component/apuestas-component";
import { InsertarApuestaComponent } from "./components/insertar-apuesta-component/insertar-apuesta-component";

const routes: Routes = [

    { path: "", component: HomeComponent },
    { path: "equipo/:id", component: EquipoComponent },
    { path: "jugadores/:id", component: JugadoresComponent },
    { path: "jugador/:id", component: JugadorDetallesComponent },
    { path: "apuestas", component: ApuestasComponent },
    { path: "insertar", component: InsertarApuestaComponent } 
];

@NgModule({
  // Configuramos las rutas de la aplicación con RouterModule.forRoot(routes) y exportamos RouterModule para que pueda ser utilizado en otros módulos.
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}

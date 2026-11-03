import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';

import { HomeComponent } from './components/home-component/home-component';
import { EquipoComponent } from './components/equipo-component/equipo-component';
import { JugadoresComponent } from './components/jugadores-component/jugadores-component';
import { JugadorDetallesComponent } from './components/jugador-detalles-component/jugador-detalles-component';
import { ApuestasComponent } from './components/apuestas-component/apuestas-component';
import { InsertarApuestaComponent } from './components/insertar-apuesta-component/insertar-apuesta-component';
import { BuscadorComponent } from './components/buscador-component/buscador-component';

import { provideHttpClient } from '@angular/common/http';
import { ServicePorra } from './services/service.porra';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    App,
    HomeComponent,
    EquipoComponent,
    JugadoresComponent,
    JugadorDetallesComponent,
    ApuestasComponent,
    InsertarApuestaComponent,
    BuscadorComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],

  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
    ServicePorra
  ],

  bootstrap: [App],
})
export class AppModule {}
import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { provideHttpClient, withInterceptors } from '@angular/common/http';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';

import { HomeComponent } from './components/home-component/home-component';
import { LoginComponent } from './components/login-component/login-component';
import { CreateComponent } from './components/create-component/create-component';
import { DetailsComponent } from './components/details-component/details-component';
import { UpdateComponent } from './components/update-component/update-component';
import { SubordinadosComponent } from './components/subordinados-component/subordinados-component';
import { InformesPdfComponent } from './components/informes-pdf-component/informes-pdf-component';

import { AuthGuard } from './guards/auth.guard';

import { authTokenInterceptor } from './interceptors/auth.token.interceptor';
import { errorInterceptor } from './interceptors/error.interceptor';

import { ServiceDepartamentos } from './services/service.departamentos';
import { ServiceEmpleados } from './services/service.empleados';

import { provideToastService } from 'ngx-yet-another-toast-library';

@NgModule({

    declarations: [
        App,
        HomeComponent,
        LoginComponent,
        CreateComponent,
        DetailsComponent,
        UpdateComponent,
        SubordinadosComponent,
        InformesPdfComponent
    ],

    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        CommonModule
    ],

    providers: [

        provideBrowserGlobalErrorListeners(),

        provideHttpClient(
            withInterceptors([
                authTokenInterceptor,
                errorInterceptor
            ])
        ),

        provideToastService(),

        ServiceDepartamentos,
        ServiceEmpleados,

        AuthGuard

    ],

    bootstrap: [App]

})
export class AppModule {}
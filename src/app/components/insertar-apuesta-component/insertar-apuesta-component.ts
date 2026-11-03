import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Apuesta } from "../../models/apuesta";
import { ServicePorra } from "../../services/service.porra";

@Component({
    selector: "app-insertar-apuesta-component",
    standalone: false,
    templateUrl: "./insertar-apuesta-component.html"
})

export class InsertarApuestaComponent {
    public usuario: string = "";
    public resultado: string = "";
    public fecha: string = "";

    constructor(
        private _service: ServicePorra,
        private _router: Router
    ) {}

    async insertarApuesta(): Promise<void> {
        // Creamos el objeto Apuesta.
        let apuesta = new Apuesta(
            0,
            this.usuario,
            this.resultado,
            this.fecha
        );

        // Enviamos la apuesta a la API.
        await this._service.insertApuestaAsync(apuesta);

        // Volvemos al listado de apuestas.
        this._router.navigate(["/apuestas"]);
    }
}


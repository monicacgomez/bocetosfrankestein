import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Jugador } from "../../models/jugador";
import { ServicePorra } from "../../services/service.porra";

@Component({
    selector: "app-jugador-detalles-component",
    standalone: false,
    templateUrl: "./jugador-detalles-component.html",
    styleUrl: "./jugador-detalles-component.css"
})

export class JugadorDetallesComponent implements OnInit {

    public jugador?: Jugador;
    public error: string = "";

    constructor(
        private _route: ActivatedRoute,
        private _service: ServicePorra,
        private _cdr: ChangeDetectorRef
    ) {}

    ngOnInit(): void {
        this._route.params.subscribe(async params => {
            const id = Number(params["id"]);
            if (!id || isNaN(id)) {
                this.error = "Identificador de jugador no válido.";
                return;
            }
            try {
                this.jugador = await this._service.getJugadorAsync(id);
            } catch (error) {
                console.error("Error al recuperar el jugador:", error);
                this.error = "No se han podido recuperar los datos del jugador.";
            }
            this._cdr.detectChanges();
        });
    }
}

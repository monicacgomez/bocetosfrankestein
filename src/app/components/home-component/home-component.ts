import { Component, OnInit, ChangeDetectorRef } from "@angular/core";

import { Equipo } from "../../models/equipo";
import { ServicePorra } from "../../services/service.porra";

@Component({
    selector: "app-home-component",
    standalone: false,
    templateUrl: "./home-component.html"
})

export class HomeComponent implements OnInit {

    public equipos!: Array<Equipo>;

    // Valores que recibimos del buscador.
    public nombre?: string;
    public idEquipo?: number;

    constructor(
        private _service: ServicePorra,
        private _cdr: ChangeDetectorRef
    ) {}

    async ngOnInit(): Promise<void> {

        // Recuperamos los equipos de la API.
        this.equipos = await this._service.getEquiposAsync();

        this._cdr.detectChanges();
    }
}
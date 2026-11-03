import { Component, OnInit, Output, EventEmitter, ChangeDetectorRef } from "@angular/core";

import { Equipo } from "../../models/equipo";
import { ServicePorra } from "../../services/service.porra";

@Component({
    selector: "app-buscador-component",
    standalone: false,
    templateUrl: "./buscador-component.html"
})
export class BuscadorComponent implements OnInit {

    public equipos!: Array<Equipo>;
    public nombre!: string;
    public idEquipo!: number;

    @Output() buscarNombre = new EventEmitter<string>();
    @Output() buscarEquipo = new EventEmitter<number>();

    constructor(
        private _service: ServicePorra,
        private _cdr: ChangeDetectorRef
    ) {}

    async ngOnInit(): Promise<void> {
        this.equipos = await this._service.getEquiposAsync();
        this._cdr.detectChanges();
    }
    seleccionarEquipo(): void {
        this.buscarEquipo.emit(this.idEquipo);
    }
    buscarPorNombre(): void {
        this.buscarNombre.emit(this.nombre);
    }
}

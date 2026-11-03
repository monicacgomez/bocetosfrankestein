import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Equipo } from "../../models/equipo";
import { ServicePorra } from "../../services/service.porra";

@Component({
    selector: "app-equipo-component",
    standalone: false,
    templateUrl: "./equipo-component.html"
})

export class EquipoComponent implements OnInit {
    public equipo?: Equipo;

    constructor(
        private _route: ActivatedRoute,
        private _service: ServicePorra,
        private _router: Router,
        private _cdr: ChangeDetectorRef
    ) {}

    ngOnInit(): void {
        this._route.params.subscribe(async params => {
            let id = parseInt(params["id"]);
            try {
                this.equipo = await this._service.getEquipoAsync(id);
            } catch (error) {
                console.error("Error al recuperar el equipo:", error);
                this.equipo = undefined;
            }
            this._cdr.detectChanges();
        });
    }

    verJugadores(): void {
        if (this.equipo) {
            this._router.navigate([
                "/jugadores",
                this.equipo.idEquipo
            ]);
        }
    }
}


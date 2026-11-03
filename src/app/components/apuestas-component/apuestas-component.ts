import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { Router } from "@angular/router";
import { Apuesta } from "../../models/apuesta";
import { ServicePorra } from "../../services/service.porra";

@Component({
    selector: "app-apuestas-component",
    standalone: false,
    templateUrl: "./apuestas-component.html"
})

export class ApuestasComponent implements OnInit {
    public apuestas!: Array<Apuesta>;
    constructor(
        private _service: ServicePorra,
        private _router: Router,
        private _cdr: ChangeDetectorRef
    ) {}

    async ngOnInit(): Promise<void> {

        // Recuperamos todas las apuestas.
        this.apuestas = await this._service.getApuestasAsync();
        this._cdr.detectChanges();
    }

    // Eliminar una apuesta por su ID.
    async eliminarApuesta(id: number): Promise<void> {
        await this._service.deleteApuestaAsync(id);

        // Volvemos a recuperar el listado actualizado.
        this.apuestas = await this._service.getApuestasAsync();
        this._cdr.detectChanges();
    }

    // Navegar al formulario de inserción.
    insertarApuesta(): void {
        this._router.navigate(["/insertar"]);
    }
}

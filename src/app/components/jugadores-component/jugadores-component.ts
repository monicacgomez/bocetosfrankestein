import { Component, OnInit, Input, OnChanges, SimpleChanges } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Jugador } from "../../models/jugador";
import { ServicePorra } from "../../services/service.porra";

@Component({
    selector: "app-jugadores-component",
    standalone: false,
    templateUrl: "./jugadores-component.html"
})
export class JugadoresComponent implements OnInit, OnChanges {
    @Input() public nombre?: string;
    @Input() public idEquipo?: number;

    public jugadores: Array<Jugador> = [];
    private idRuta?: number;

    constructor(
        private _service: ServicePorra,
        private _route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this._route.params.subscribe(params => {
            const id = Number(params["id"]);
            this.idRuta = id > 0 ? id : undefined;
            this.cargarJugadores();
        });
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes["nombre"] || changes["idEquipo"]) {
            this.cargarJugadores();
        }
    }

    async cargarJugadores(): Promise<void> {
        try {
            const id = this.idRuta ?? this.idEquipo;
            if (id) {

                this.jugadores =
                    await this._service.getJugadoresEquipoAsync(id);
            } else if (this.nombre) {

                this.jugadores =
                    await this._service.findJugadoresAsync(this.nombre);
            } else {

                this.jugadores =
                    await this._service.getJugadoresAsync();
            }

        } catch (error) {
            console.error("Error al cargar jugadores:", error);
            this.jugadores = [];

        }
    }

    async mostrarTodos(): Promise<void> {
        this.idRuta = undefined;
        this.idEquipo = undefined;
        this.nombre = undefined;

        try {
            this.jugadores =
                await this._service.getJugadoresAsync();

        } catch (error) {
            console.error("Error al recuperar todos los jugadores:", error);
            this.jugadores = [];

        }
    }
}



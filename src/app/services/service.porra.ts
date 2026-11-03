import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { firstValueFrom } from "rxjs";
import { Equipo } from "../models/equipo";
import { Jugador } from "../models/jugador";
import { Apuesta } from "../models/apuesta";

@Injectable({
    providedIn: "root"
})

export class ServicePorra {
    private urlApi: string = "https://apiejemplos.azurewebsites.net";
    constructor(private _http: HttpClient) {}

    // ==========================================
    // EQUIPOS
    // ==========================================

    // GET: Recuperar todos los equipos.
    getEquiposAsync(): Promise<Array<Equipo>> {
        let url = this.urlApi + "/api/Equipos";
        return firstValueFrom(
            this._http.get<Array<Equipo>>(url)
        );
    }

    // GET: Recuperar un equipo por su ID.
    getEquipoAsync(id: number): Promise<Equipo> {
        let url = this.urlApi + "/api/Equipos/" + id;
        return firstValueFrom(
            this._http.get<Equipo>(url)
        );
    }

    // POST: Insertar un equipo.
    insertEquipoAsync(equipo: Equipo): Promise<any> {
        let url = this.urlApi + "/api/Equipos";
        return firstValueFrom(
            this._http.post<any>(url, equipo)
        );
    }


    // ==========================================
    // JUGADORES
    // ==========================================

    // GET: Recuperar todos los jugadores.
    getJugadoresAsync(): Promise<Array<Jugador>> {
        let url = this.urlApi + "/api/Jugadores";
        return firstValueFrom(
            this._http.get<Array<Jugador>>(url)
        );
    }

    // GET: Recuperar un jugador por su ID.
    getJugadorAsync(id: number): Promise<Jugador> {
        let url = this.urlApi + "/api/Jugadores/" + id;
        return firstValueFrom(
            this._http.get<Jugador>(url)
        );
    }

    // GET: Recuperar jugadores de un equipo.
    getJugadoresEquipoAsync(idEquipo: number): Promise<Array<Jugador>> {
        let url = this.urlApi + "/api/Jugadores/JugadoresEquipos/" + idEquipo;
        return firstValueFrom(
            this._http.get<Array<Jugador>>(url)
        );
    }

    // GET: Buscar jugadores por nombre.
    findJugadoresAsync(nombre: string): Promise<Array<Jugador>> {
        let url = this.urlApi + "/api/Jugadores/FindJugadores/" + nombre;
        return firstValueFrom(
            this._http.get<Array<Jugador>>(url)
        );
    }

    // POST: Insertar un jugador.
    insertJugadorAsync(jugador: Jugador): Promise<any> {
        let url = this.urlApi + "/api/Jugadores";
        return firstValueFrom(
            this._http.post<any>(url, jugador)
        );
    }

    // DELETE: Eliminar un jugador por su ID.
    deleteJugadorAsync(id: number): Promise<void> {
        let url = this.urlApi + "/api/Jugadores/" + id;
        return firstValueFrom(
            this._http.delete<void>(url)
        );
    }

    // DELETE: Eliminar un jugador de un equipo.
    deleteJugadorEquipoAsync(idJugador: number, idEquipo: number): Promise<void> {
        let url = this.urlApi + "/api/Jugadores/FindJugadores/"
            + idJugador + "/" + idEquipo;
        return firstValueFrom(
            this._http.delete<void>(url)
        );
    }


    // ==========================================
    // APUESTAS
    // ==========================================

    // GET: Recuperar todas las apuestas.
    getApuestasAsync(): Promise<Array<Apuesta>> {
        let url = this.urlApi + "/api/Apuestas";
        return firstValueFrom(
            this._http.get<Array<Apuesta>>(url)
        );
    }

    // POST: Insertar una apuesta.
    insertApuestaAsync(apuesta: Apuesta): Promise<any> {
        let url = this.urlApi + "/api/Apuestas";
        return firstValueFrom(
            this._http.post<any>(url, apuesta)
        );
    }

    // DELETE: Eliminar una apuesta por su ID.
    deleteApuestaAsync(id: number): Promise<any> {
        let url = this.urlApi + "/api/Apuestas/" + id;
        return firstValueFrom(
            this._http.delete<any>(url)
        );
    }

}

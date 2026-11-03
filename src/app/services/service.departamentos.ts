import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Departamento } from "../models/departamento";
import { environment } from "../environments/environment";

import { firstValueFrom } from "rxjs";

@Injectable()
export class ServiceDepartamentos {

    url = environment.apiDepartamentos;
    constructor(private _http: HttpClient) {}

    // READ: recuperar todos los departamentos
    async getDepartamentosAsync(): Promise<Departamento[]> {
        let request = "api/Departamentos";
        return firstValueFrom(
            this._http.get<Departamento[]>(this.url + request)
        );
    }

    // CREATE: insertar departamento
    async createDepartamento(departamento: Departamento): Promise<any> {
        let json = JSON.stringify(departamento);
        let header = new HttpHeaders()
            .set("content-type", "application/json");
        let request = "api/Departamentos";
        return firstValueFrom(
            this._http.post(
                this.url + request,
                json,
                { headers: header }
            )
        );
    }

    // READ: buscar departamento por ID
    async findDepartamentosAsync(numero: number): Promise<Departamento> {
        let request = "api/Departamentos/" + numero;
        return firstValueFrom(
            this._http.get<Departamento>(this.url + request)
        );
    }

    // UPDATE: modificar departamento
    async updateDepartamentosAsync(departamento: Departamento): Promise<any> {
        let json = JSON.stringify(departamento);
        let header = new HttpHeaders()
            .set("content-type", "application/json");
        let request = "api/Departamentos";
        return firstValueFrom(
            this._http.put(
                this.url + request,
                json,
                { headers: header }
            )
        );
    }

    // DELETE: eliminar departamento por ID
    async deleteDepartamentosAsync(numero: number): Promise<any> {
        let request = "api/Departamentos/" + numero;
        return firstValueFrom(
            this._http.delete(this.url + request)
        );
    }
}
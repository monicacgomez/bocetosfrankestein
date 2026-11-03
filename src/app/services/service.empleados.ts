import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Empleado } from "../models/empleado";
import { environment } from "../environments/environment";
import { firstValueFrom } from "rxjs";
import { Login } from "../models/login";
import { HttpContext } from "@angular/common/http";
import { SKIP_TOKEN } from "../utils/token.context";

@Injectable()
export class ServiceEmpleados {
    constructor(private _http: HttpClient) {}

    url: string | undefined;
    async logInEmpleadoAsync(user: Login): Promise<any> {

    let request = "auth/login";
    let json = JSON.stringify(user);

    let header = new HttpHeaders()
        .set("content-type", "application/json");

    let context = new HttpContext()
        .set(SKIP_TOKEN, true);

    return firstValueFrom(
        this._http.post(
            this.url + request,
            json,
            {
                headers: header,
                context: context
            }
        )
    );
}

async getPerfilEmpleadoAsync(): Promise<Empleado> {

    let request = "api/empleados/perfilempleado";

    return firstValueFrom(
        this._http.get<Empleado>(this.url + request)
    );
}

async getSubordinadosAsync(): Promise<Empleado[]> {

    let request = "api/empleados/subordinados";

    return firstValueFrom(
        this._http.get<Empleado[]>(this.url + request)
    );
}
}
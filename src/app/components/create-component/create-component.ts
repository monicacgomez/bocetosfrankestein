import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { ServiceDepartamentos } from '../../services/service.departamentos';
import { Departamento } from '../../models/departamento';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-component',
  standalone: false,
  templateUrl: './create-component.html',
  styleUrl: './create-component.css'
})
export class CreateComponent {

  public mensaje!: string;

  @ViewChild("cajaid") cajaId!: ElementRef;
  @ViewChild("cajanombre") cajaNombre!: ElementRef;
  @ViewChild("cajalocalidad") cajaLocalidad!: ElementRef;

  constructor(
    private _service: ServiceDepartamentos,
    private _cdr: ChangeDetectorRef,
    private _router: Router
  ) {}

  async insertDepartamento(): Promise<void> {
    try {
      let id = Number(this.cajaId.nativeElement.value);
      let nombre = this.cajaNombre.nativeElement.value;
      let localidad = this.cajaLocalidad.nativeElement.value;

      let dept: Departamento = new Departamento(id, nombre, localidad);

      await this._service.createDepartamento(dept);

      this._router.navigate(['/']);

    } catch (error) {
      this.mensaje = 'Error al crear el departamento';
      this._cdr.detectChanges();
    }
  }
}
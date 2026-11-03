import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Departamento } from '../../models/departamento';
import { ServiceDepartamentos } from '../../services/service.departamentos';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-component',
  standalone: false,
  templateUrl: './update-component.html',
  styleUrl: './update-component.css'
})
export class UpdateComponent implements OnInit {

  public departamento!: Departamento;
  public mensaje!: string;

  @ViewChild("cajaid") cajaId!: ElementRef;
  @ViewChild("cajanombre") cajaNombre!: ElementRef;
  @ViewChild("cajalocalidad") cajaLocalidad!: ElementRef;

  constructor(
    private _cdr: ChangeDetectorRef,
    private _service: ServiceDepartamentos,
    private _activeRoute: ActivatedRoute,
    private _router: Router
  ) {}

  async ngOnInit(): Promise<void> {

    let id = Number(this._activeRoute.snapshot.params['id']);

    try {

      this.departamento = await this._service.findDepartamentosAsync(id);

      this._cdr.detectChanges();

    } catch (error) {
      this.mensaje = 'Error al cargar el departamento';
      this._cdr.detectChanges();
    }
  }

  async updateDepartamento(): Promise<void> {

    try {

      let id = Number(this.cajaId.nativeElement.value);
      let nombre = this.cajaNombre.nativeElement.value;
      let localidad = this.cajaLocalidad.nativeElement.value;

      let dept = new Departamento(id, nombre, localidad);

      await this._service.updateDepartamentosAsync(dept);

      this._router.navigate(['/details', dept.numero]);

    } catch (error) {
      this.mensaje = 'Error al modificar el departamento';
      this._cdr.detectChanges();
    }
  }
}
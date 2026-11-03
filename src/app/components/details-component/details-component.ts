import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Departamento } from '../../models/departamento';
import { ServiceDepartamentos } from '../../services/service.departamentos';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details-component',
  standalone: false,
  templateUrl: './details-component.html',
  styleUrl: './details-component.css'
})
export class DetailsComponent implements OnInit {

  public departamento!: Departamento;
  public mensaje!: string;

  constructor(
    private _activeRoute: ActivatedRoute,
    private _service: ServiceDepartamentos,
    private _cdr: ChangeDetectorRef,
    private _router: Router
  ) {}

  async ngOnInit(): Promise<void> {

    let id = Number(this._activeRoute.snapshot.params['id']);

    try {
      this.departamento = await this._service.findDepartamentosAsync(id);
      this._cdr.detectChanges();

    } catch (error) {
      this.mensaje = 'Error al buscar el departamento';
      this._cdr.detectChanges();
    }
  }

  modificarDepartamento(): void {
    this._router.navigate(['/update', this.departamento.numero]);
  }

  async eliminarDepartamento(): Promise<void> {

    try {
      await this._service.deleteDepartamentosAsync(this.departamento.numero);

      this._router.navigate(['/']);

    } catch (error) {
      this.mensaje = 'Error al eliminar el departamento';
      this._cdr.detectChanges();
    }
  }
}
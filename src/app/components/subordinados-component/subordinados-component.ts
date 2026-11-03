import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ServiceEmpleados } from '../../services/service.empleados';
import { Empleado } from '../../models/empleado';

@Component({
  selector: 'app-subordinados-component',
  standalone: false,
  templateUrl: './subordinados-component.html',
  styleUrl: './subordinados-component.css'
})
export class SubordinadosComponent implements OnInit {

  public empleados!: Array<Empleado>;

  constructor(
    private _cdr: ChangeDetectorRef,
    private _service: ServiceEmpleados
  ) {}

  async ngOnInit(): Promise<void> {

    try {

      this.empleados = await this._service.getSubordinadosAsync();

      this._cdr.detectChanges();

    } catch (error) {
      console.log('Error al obtener los subordinados');
    }
  }
}
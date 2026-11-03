import { ChangeDetectorRef, Component, ElementRef, ViewChild, inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceEmpleados } from '../../services/service.empleados';
import { Login } from '../../models/login';
import { ServiceAuthEmpleados } from '../../services/service.auth.empleados';

@Component({
  selector: 'app-login-component',
  standalone: false,
  templateUrl: './login-component.html',
  styleUrl: './login-component.css'
})
export class LoginComponent {

  private _serviceAuth: ServiceAuthEmpleados = inject(ServiceAuthEmpleados);

  @ViewChild("cajauser") cajaUser!: ElementRef;
  @ViewChild("cajapassword") cajaPassword!: ElementRef;

  public mensaje!: string;

  constructor(
    private _cdr: ChangeDetectorRef,
    private _service: ServiceEmpleados,
    private _activeRoute: ActivatedRoute,
    private _router: Router
  ) {}

  async logInEmpleado(): Promise<void> {

    try {

      let userName = this.cajaUser.nativeElement.value;
      let password = this.cajaPassword.nativeElement.value;

      let login = new Login(userName, password);

      let response = await this._service.logInEmpleadoAsync(login);

      await this._serviceAuth.logInEmpleadoAsync(response.response);

      let returnUrl = this._activeRoute.snapshot.queryParams['returnUrl'] || '/';

      this._router.navigateByUrl(returnUrl);

    } catch (error) {

      this.mensaje = 'Usuario o contraseña incorrectos';
      this._cdr.detectChanges();

    }
  }
}
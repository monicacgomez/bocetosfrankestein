import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { ToastService } from 'ngx-yet-another-toast-library';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {

  const toastService: ToastService = inject(ToastService);

  return next(req).pipe(

    catchError((error: HttpErrorResponse) => {

      toastService.error(error.message);

      console.log("Tipo de error: " + error.status);
      console.log("Mensaje de error: " + error.message);

      return throwError(() => error);

    })

  );
};
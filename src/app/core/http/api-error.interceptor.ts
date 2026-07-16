import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

import { AppHttpError } from './api-error.models';

export const apiErrorInterceptor: HttpInterceptorFn = (req, next) =>
  next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      const mapped: AppHttpError = {
        status: error.status,
        message: error.error?.message || error.statusText || 'Request failed',
      };

      return throwError(() => mapped);
    }),
  );
